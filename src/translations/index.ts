import { initReactI18next } from 'react-i18next';
import fr from './fr.json';
import i18n from 'i18next';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'fr',
    debug: true,
    resources: {
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
