import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enUS from './locales/en-US/landing.json';
import zhCN from './locales/zh-CN/landing.json';
import ptBR from './locales/pt-BR/landing.json';
import enAU from './locales/en-AU/landing.json';
import nlNL from './locales/nl-NL/landing.json';
import deDE from './locales/de-DE/landing.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': { landing: enUS },
      'zh-CN': { landing: zhCN },
      'pt-BR': { landing: ptBR },
      'en-AU': { landing: enAU },
      'nl-NL': { landing: nlNL },
      'de-DE': { landing: deDE },
    },
    fallbackLng: 'en-US',
    defaultNS: 'landing',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
