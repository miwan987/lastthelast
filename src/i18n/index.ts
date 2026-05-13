import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import messages from './local/index';

const savedLang = localStorage.getItem('pdr_lang');
const defaultLang = savedLang && ['pl', 'uk', 'en'].includes(savedLang) ? savedLang : 'pl';

i18n
  .use(initReactI18next)
  .init({
    lng: defaultLang,
    fallbackLng: 'pl',
    supportedLngs: ['pl', 'uk', 'en'],
    debug: false,
    resources: messages,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;