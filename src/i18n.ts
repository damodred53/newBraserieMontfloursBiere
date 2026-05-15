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

const supportedLanguages = ['fr', 'en', 'may'];

const detectLanguage = (): string => {
  const stored = localStorage.getItem('bam-language');
  if (stored && supportedLanguages.includes(stored)) return stored;
  const browserLang = navigator.language?.split('-')[0] ?? 'fr';
  return supportedLanguages.includes(browserLang) ? browserLang : 'fr';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: 'fr', // Langue de repli
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les valeurs (React le fait déjà)
    },
  });

export default i18n;