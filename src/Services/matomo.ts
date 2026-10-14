type MatomoCommand = [string, ...unknown[]];

declare global {
  interface Window {
    _paq?: MatomoCommand[];
  }
}

const consentKey = 'bam-matomo-consent-v1';
const consentLifetime = 180 * 24 * 60 * 60 * 1000;
const configuredUrl = import.meta.env.VITE_MATOMO_URL?.trim();
const siteId = import.meta.env.VITE_MATOMO_SITE_ID?.trim();

function getTrackerUrl() {
  if (!import.meta.env.PROD || !configuredUrl || !siteId || !/^[1-9]\d*$/.test(siteId)) return null;
  try {
    const url = new URL(configuredUrl);
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) return null;
    return url.href.replace(/\/?$/, '/');
  } catch {
    return null;
  }
}

const trackerUrl = getTrackerUrl();
export const matomoEnabled = trackerUrl !== null;
let initialized = false;
let allowed = false;
let lastNavigation: string | null = null;
let previousUrl: string | null = null;

export function readConsent(): boolean | null {
  try {
    const stored = JSON.parse(localStorage.getItem(consentKey) ?? 'null');
    if (typeof stored?.accepted === 'boolean' && typeof stored?.expires === 'number' && stored.expires > Date.now()) {
      return stored.accepted;
    }
  } catch {
    return null;
  }
  return null;
}

export function saveConsent(accepted: boolean) {
  try {
    localStorage.setItem(consentKey, JSON.stringify({ accepted, expires: Date.now() + consentLifetime }));
  } catch {
    return;
  }
}

function queue(command: MatomoCommand) {
  window._paq ??= [];
  window._paq.push(command);
}

export function setTrackingConsent(accepted: boolean) {
  const nextAllowed = accepted && matomoEnabled;
  if (nextAllowed === allowed) return;
  allowed = nextAllowed;
  if (!allowed) {
    if (initialized) queue(['forgetConsentGiven']);
    lastNavigation = null;
    previousUrl = null;
    return;
  }
  if (!initialized) {
    queue(['requireConsent']);
    queue(['disableCookies']);
    queue(['setDoNotTrack', true]);
    queue(['setTrackerUrl', `${trackerUrl}matomo.php`]);
    queue(['setSiteId', siteId]);
    const script = document.createElement('script');
    script.async = true;
    script.src = `${trackerUrl}matomo.js`;
    document.head.appendChild(script);
    initialized = true;
  }
  queue(['setConsentGiven']);
}

export function trackPage(navigationKey: string) {
  if (!allowed || lastNavigation === navigationKey) return;
  const pageUrl = `${window.location.origin}${window.location.pathname}`;
  let referrer = previousUrl ?? '';
  if (!previousUrl && document.referrer) {
    try {
      const url = new URL(document.referrer);
      referrer = `${url.origin}${url.pathname}`;
    } catch {
      referrer = '';
    }
  }
  queue(['setReferrerUrl', referrer]);
  queue(['setCustomUrl', pageUrl]);
  queue(['setDocumentTitle', `BAM - ${window.location.pathname}`]);
  queue(['trackPageView']);
  previousUrl = pageUrl;
  lastNavigation = navigationKey;
}