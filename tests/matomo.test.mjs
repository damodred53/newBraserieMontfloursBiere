import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/Services/matomo.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source.replaceAll('import.meta.env', 'environment'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

function setup(overrides = {}) {
  const storage = new Map();
  const scripts = [];
  const window = { location: { origin: 'https://site.test', pathname: '/presentation' } };
  const context = {
    exports: {}, URL, Date,
    environment: { PROD: true, VITE_MATOMO_URL: 'https://stats.test/', VITE_MATOMO_SITE_ID: '2', ...overrides },
    window,
    document: {
      referrer: 'https://source.test/article?private=value#secret',
      createElement: () => ({}),
      head: { appendChild: script => scripts.push(script) },
    },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
    },
  };
  vm.runInNewContext(compiled, context);
  return { api: context.exports, context, storage, scripts, window };
}

test('disabled for development, missing configuration and invalid URL/site', () => {
  for (const config of [
    { PROD: false }, { VITE_MATOMO_URL: '' }, { VITE_MATOMO_SITE_ID: '' },
    { VITE_MATOMO_URL: 'http://stats.test' }, { VITE_MATOMO_URL: 'https://stats.test/?secret=value' },
    { VITE_MATOMO_SITE_ID: 'invalid' },
  ]) {
    const { api, scripts, window } = setup(config);
    assert.equal(api.matomoEnabled, false);
    api.setTrackingConsent(true);
    api.trackPage('initial');
    assert.equal(scripts.length, 0);
    assert.equal(window._paq, undefined);
  }
});

test('no tracker before acceptance or after decline', () => {
  const { api, scripts, window } = setup();
  api.trackPage('initial');
  api.setTrackingConsent(false);
  api.trackPage('next');
  assert.equal(scripts.length, 0);
  assert.equal(window._paq, undefined);
});

test('acceptance tracks each navigation once and strips private URL details', () => {
  const { api, scripts, window } = setup();
  api.setTrackingConsent(true);
  api.setTrackingConsent(true);
  api.trackPage('initial');
  api.trackPage('initial');
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].src, 'https://stats.test/matomo.js');
  assert.equal(window._paq.filter(command => command[0] === 'setConsentGiven').length, 1);
  assert.equal(window._paq.filter(command => command[0] === 'trackPageView').length, 1);
  assert.equal(window._paq.find(command => command[0] === 'setReferrerUrl')[1], 'https://source.test/article');
  assert.equal(window._paq.find(command => command[0] === 'setCustomUrl')[1], 'https://site.test/presentation');
  assert.ok(window._paq.some(command => command[0] === 'disableCookies'));
  assert.ok(window._paq.some(command => command[0] === 'requireConsent'));
  window.location.pathname = '/history';
  api.trackPage('next');
  assert.equal(window._paq.filter(command => command[0] === 'trackPageView').length, 2);
});

test('withdrawal stops future pageviews; renewed consent reuses one script', () => {
  const { api, scripts, window } = setup();
  api.setTrackingConsent(true);
  api.trackPage('initial');
  api.setTrackingConsent(false);
  api.trackPage('next');
  assert.equal(window._paq.filter(command => command[0] === 'trackPageView').length, 1);
  assert.ok(window._paq.some(command => command[0] === 'forgetConsentGiven'));
  api.setTrackingConsent(true);
  api.trackPage('next');
  assert.equal(scripts.length, 1);
  assert.equal(window._paq.filter(command => command[0] === 'trackPageView').length, 2);
});

test('consent is remembered, expires, and fails safely when storage is unavailable', () => {
  const { api, storage, context } = setup();
  assert.equal(api.readConsent(), null);
  api.saveConsent(true);
  assert.equal(api.readConsent(), true);
  api.saveConsent(false);
  assert.equal(api.readConsent(), false);
  storage.set('bam-matomo-consent-v1', JSON.stringify({ accepted: true, expires: 0 }));
  assert.equal(api.readConsent(), null);
  storage.set('bam-matomo-consent-v1', 'broken');
  assert.equal(api.readConsent(), null);
  context.localStorage.getItem = () => { throw Error('Storage unavailable'); };
  context.localStorage.setItem = () => { throw Error('Storage unavailable'); };
  assert.equal(api.readConsent(), null);
  assert.doesNotThrow(() => api.saveConsent(true));
});