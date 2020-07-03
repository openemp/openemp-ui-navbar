import './en.i18n.json';
import './ar.i18n.json';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

i18n
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,

    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    backend: {
      loadPath: `//${process.env.HOST}:${process.env.PORT}/public/i18n/{{lng}}.i18n.json`,
    },
  });

export default i18n;
