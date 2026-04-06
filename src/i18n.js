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

import enUSKarma from './locales/en-US/karmachronicles.json';
import zhCNKarma from './locales/zh-CN/karmachronicles.json';
import ptBRKarma from './locales/pt-BR/karmachronicles.json';
import enAUKarma from './locales/en-AU/karmachronicles.json';
import nlNLKarma from './locales/nl-NL/karmachronicles.json';
import deDEKarma from './locales/de-DE/karmachronicles.json';

import enUSSeance from './locales/en-US/seancemessages.json';
import zhCNSeance from './locales/zh-CN/seancemessages.json';
import ptBRSeance from './locales/pt-BR/seancemessages.json';
import enAUSeance from './locales/en-AU/seancemessages.json';
import nlNLSeance from './locales/nl-NL/seancemessages.json';
import deDESeance from './locales/de-DE/seancemessages.json';

import enUSGriefCounseling from './locales/en-US/griefcounseling.json';
import zhCNGriefCounseling from './locales/zh-CN/griefcounseling.json';
import ptBRGriefCounseling from './locales/pt-BR/griefcounseling.json';
import enAUGriefCounseling from './locales/en-AU/griefcounseling.json';
import nlNLGriefCounseling from './locales/nl-NL/griefcounseling.json';
import deDEGriefCounseling from './locales/de-DE/griefcounseling.json';

import enUSRecoveryMerch from './locales/en-US/recoverymerch.json';
import zhCNRecoveryMerch from './locales/zh-CN/recoverymerch.json';
import ptBRRecoveryMerch from './locales/pt-BR/recoverymerch.json';
import enAURecoveryMerch from './locales/en-AU/recoverymerch.json';
import nlNLRecoveryMerch from './locales/nl-NL/recoverymerch.json';
import deDERecoveryMerch from './locales/de-DE/recoverymerch.json';

import enUSGriefArticles from './locales/en-US/griefarticles.json';
import zhCNGriefArticles from './locales/zh-CN/griefarticles.json';
import ptBRGriefArticles from './locales/pt-BR/griefarticles.json';
import enAUGriefArticles from './locales/en-AU/griefarticles.json';
import nlNLGriefArticles from './locales/nl-NL/griefarticles.json';
import deDEGriefArticles from './locales/de-DE/griefarticles.json';

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
      'en-US': { landing: enUSLanding, layout: enUSLayout, advertisement: enUSAdvertisement, karmachronicles: enUSKarma, seancemessages: enUSSeance, griefcounseling: enUSGriefCounseling, recoverymerch: enUSRecoveryMerch, griefarticles: enUSGriefArticles },
      'zh-CN': { landing: zhCNLanding, layout: zhCNLayout, advertisement: zhCNAdvertisement, karmachronicles: zhCNKarma, seancemessages: zhCNSeance, griefcounseling: zhCNGriefCounseling, recoverymerch: zhCNRecoveryMerch, griefarticles: zhCNGriefArticles },
      'pt-BR': { landing: ptBRLanding, layout: ptBRLayout, advertisement: ptBRAdvertisement, karmachronicles: ptBRKarma, seancemessages: ptBRSeance, griefcounseling: ptBRGriefCounseling, recoverymerch: ptBRRecoveryMerch, griefarticles: ptBRGriefArticles },
      'en-AU': { landing: enAULanding, layout: enAULayout, advertisement: enAUAdvertisement, karmachronicles: enAUKarma, seancemessages: enAUSeance, griefcounseling: enAUGriefCounseling, recoverymerch: enAURecoveryMerch, griefarticles: enAUGriefArticles },
      'nl-NL': { landing: nlNLLanding, layout: nlNLLayout, advertisement: nlNLAdvertisement, karmachronicles: nlNLKarma, seancemessages: nlNLSeance, griefcounseling: nlNLGriefCounseling, recoverymerch: nlNLRecoveryMerch, griefarticles: nlNLGriefArticles },
      'de-DE': { landing: deDELanding, layout: deDELayout, advertisement: deDEAdvertisement, karmachronicles: deDEKarma, seancemessages: deDESeance, griefcounseling: deDEGriefCounseling, recoverymerch: deDERecoveryMerch, griefarticles: deDEGriefArticles },
    },
    fallbackLng: 'en-US',
    defaultNS: 'landing',
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
