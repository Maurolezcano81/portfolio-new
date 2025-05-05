import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esHero from "./locales/es/hero.json";
import enHero from "./locales/en/hero.json";

import esGrid from "./locales/es/grid.json";
import enGrid from "./locales/en/grid.json";


import esNavbar from "./locales/es/navbar.json";
import enNavbar from "./locales/en/navbar.json";

import esExperience from './locales/es/experience.json';
import enExperience from './locales/en/experience.json'

import esProjects from './locales/es/projects.json';
import enProjects from './locales/en/projects.json';

import esFooter from './locales/es/footer.json';
import enFooter from './locales/en/footer.json';

i18n.use(initReactI18next).init({
    resources: {
        es: {
            hero: esHero,
            navbar: esNavbar,
            grid: esGrid,
            experience: esExperience,
            projects: esProjects,
            footer: esFooter,
        },
        en: {
            hero: enHero,
            navbar: enNavbar,
            grid: enGrid,
            experience: enExperience,
            projects: enProjects,
            footer: enFooter,
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
