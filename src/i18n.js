import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import header_vn from "./translations/vn/header.json";
import header_en from "./translations/en/header.json";
import home_vn from "./translations/vn/home.json";
import home_en from "./translations/en/home.json";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    header: header_en,
    home: home_en,
  },
  vn: {
    header: header_vn,
    home: home_vn,
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "vn",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;