import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUSLanding from './locales/en-US/landing.json';
import zhCNLanding from './locales/zh-CN/landing.json';
import ptBRLanding from './locales/pt-BR/landing.json';
import enAULanding from './locales/en-AU/landing.json';
import nlNLLanding from './locales/nl-NL/landing.json';
import deDELanding from './locales/de-DE/landing.json';

import enUSLayout from './locales/en-US/layout.json';
import zhCNLayout from './locales/zh-CN/layout.json';
import ptBRLayout from './locales/pt-BR/layout.json';
import enAULayout from './locales/en-AU/layout.json';
import nlNLLayout from './locales/nl-NL/layout.json';
import deDELayout from './locales/de-DE/layout.json';

import enUSAdvertisement from './locales/en-US/advertisement.json';
import zhCNAdvertisement from './locales/zh-CN/advertisement.json';
import ptBRAdvertisement from './locales/pt-BR/advertisement.json';
import enAUAdvertisement from './locales/en-AU/advertisement.json';
import nlNLAdvertisement from './locales/nl-NL/advertisement.json';
import deDEAdvertisement from './locales/de-DE/advertisement.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      convertDetectedLanguage: (lng) => {
        const map = {
          'de': 'de-DE',
          'zh': 'zh-CN',
          'pt': 'pt-BR',
          'nl': 'nl-NL',
          'en-AU': 'en-AU',
        };
        return map[lng] ?? lng;
      },
    },
    resources: {
      'en-US': { landing: enUSLanding, layout: enUSLayout, advertisement: enUSAdvertisement },
      'zh-CN': { landing: zhCNLanding, layout: zhCNLayout, advertisement: zhCNAdvertisement },
      'pt-BR': { landing: ptBRLanding, layout: ptBRLayout, advertisement: ptBRAdvertisement },
      'en-AU': { landing: enAULanding, layout: enAULayout, advertisement: enAUAdvertisement },
      'nl-NL': { landing: nlNLLanding, layout: nlNLLayout, advertisement: nlNLAdvertisement },
      'de-DE': { landing: deDELanding, layout: deDELayout, advertisement: deDEAdvertisement },
    },
    fallbackLng: 'en-US',
    defaultNS: 'landing',
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
