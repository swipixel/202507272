import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en/translation.json';
import huTranslation from './locales/hu/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  hu: {
    translation: huTranslation
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language if translation is not found
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    debug: false // Set to true for debugging in development
  });

export default i18n;
