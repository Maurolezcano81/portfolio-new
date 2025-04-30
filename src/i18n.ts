import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esHero from "./locales/es/hero.json";
import enHero from "./locales/en/hero.json";

import esGrid from "./locales/es/grid.json";
import enGrid from "./locales/en/grid.json";


import esNavbar from "./locales/es/navbar.json";
import enNavbar from "./locales/en/navbar.json";

i18n.use(initReactI18next).init({
    resources: {
        es: {
            hero: esHero,
            navbar: esNavbar,
            grid: esGrid
        },
        en: {
            hero: enHero,
            navbar: enNavbar,
            grid: enGrid
        },
    },
    lng: localStorage.getItem("lang") || "es",
    fallbackLng: "es",
    ns: ["hero", "navbar"],
    defaultNS: "hero",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
