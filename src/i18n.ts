// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import des fichiers de traduction
import translationFR from './locales/fr/translation.json';
import translationEN from './locales/en/translation.json';
import translationMAY from './locales/may/translation.json';

const resources = {
  fr: {
    translation: translationFR,
  },
  en: {
    translation: translationEN,
  },
  may: {
    translation: translationMAY,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('bam-language') || 'fr', // Langue par défaut
    fallbackLng: 'fr', // Langue de repli
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les valeurs (React le fait déjà)
    },
  });

export default i18n;