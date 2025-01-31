import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend) 
  .use(LanguageDetector)
  .use(initReactI18next)  
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "zh-TW",
    lng: "zh-TW",
    load: 'currentOnly',
    ns: ['app', 'authentication'],
    defaultNS: 'app',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;