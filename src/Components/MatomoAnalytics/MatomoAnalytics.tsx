import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { matomoEnabled, readConsent, saveConsent, setTrackingConsent, trackPage } from '../../Services/matomo';
import styles from './MatomoAnalytics.module.scss';

const MatomoAnalytics = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const [consent, setConsent] = useState<boolean | null>(readConsent);
  const [editing, setEditing] = useState(false);
  const english = i18n.language.startsWith('en');

  useEffect(() => {
    setTrackingConsent(consent === true);
    if (consent === true) trackPage(`${location.key}:${location.pathname}`);
  }, [consent, location.key, location.pathname]);

  function choose(accepted: boolean) {
    setTrackingConsent(accepted);
    saveConsent(accepted);
    setConsent(accepted);
    setEditing(false);
  }

  if (!matomoEnabled) return null;

  if (consent !== null && !editing) {
    return (
      <button className={styles.preferences} type="button" onClick={() => setEditing(true)}>
        {english ? 'Privacy settings' : 'Confidentialit\u00e9'}
      </button>
    );
  }

  return (
    <aside className={styles.banner} aria-label={english ? 'Audience measurement' : "Mesure d'audience"}>
      <div className={styles.message}>
        <p>{english
          ? 'May we use Matomo to measure visits to this site? Tracking is optional and uses no analytics cookies. Your choice is saved for 6 months and can be changed at any time.'
          : "Acceptez-vous que Matomo mesure les visites sur ce site ? Ce suivi est facultatif et sans cookies de mesure d'audience. Votre choix est conserv\u00e9 6 mois et reste modifiable."}</p>
        <Link to="/legal-notice">{english ? 'Privacy information' : 'Informations sur la confidentialit\u00e9'}</Link>
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={() => choose(false)}>{english ? 'Decline' : 'Refuser'}</button>
        <button type="button" onClick={() => choose(true)}>{english ? 'Accept' : 'Accepter'}</button>
        {editing && <button type="button" onClick={() => setEditing(false)}>{english ? 'Close' : 'Fermer'}</button>}
      </div>
    </aside>
  );
};

export default MatomoAnalytics;