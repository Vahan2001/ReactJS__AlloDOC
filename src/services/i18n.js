import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../local/translation/en.json";
import ru from "../local/translation/ru.json";

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "ru",
  resources: {
    ru,
    en,
  },
});

export default i18n;
