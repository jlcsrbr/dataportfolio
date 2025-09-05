"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "es";
type DictKey =
  | "nav.projects"
  | "nav.about"
  | "nav.skills"
  | "hero.title"
  | "hero.desc"
  | "hero.viewWork"
  | "hero.contactMe"
  | "sections.myProjects"
  | "sections.aboutMe"
  | "sections.skills"
  | "about.text"
  | "footer.rights"
  | "footer.madeWith"
  | "actions.viewProject";

const dict: Record<Lang, Record<DictKey, string>> = {
  en: {
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.skills": "Skills",
    "hero.title": "Data Analyst & Data Scientist",
    "hero.desc":
      "I transform complex data into clear, actionable insights. Explore my work and see how I can help you make data-driven decisions.",
    "hero.viewWork": "View My Work",
    "hero.contactMe": "Contact Me",
    "sections.myProjects": "My Projects",
    "sections.aboutMe": "About Me",
    "sections.skills": "Skills",
    "about.text":
      "I'm a passionate data analyst and data scientist with a knack for weaving compelling narratives from data. My goal is to help businesses grow by uncovering insights and opportunities hidden within their datasets. I'm always eager to learn new technologies and take on challenging projects.",
    "footer.rights": "© 2024 Julio Bobadilla. All rights reserved.",
    "footer.madeWith": "Made with Next.js and Firebase",
    "actions.viewProject": "View Project",
  },
  es: {
    "nav.projects": "Proyectos",
    "nav.about": "Acerca de mí",
    "nav.skills": "Habilidades",
    "hero.title": "Analista de Datos y Científico de Datos",
    "hero.desc":
      "Transformo datos complejos en información clara y accionable. Explora mi trabajo y cómo puedo ayudarte a tomar decisiones basadas en datos.",
    "hero.viewWork": "Ver mi trabajo",
    "hero.contactMe": "Contáctame",
    "sections.myProjects": "Mis Proyectos",
    "sections.aboutMe": "Sobre mí",
    "sections.skills": "Habilidades",
    "about.text":
      "Soy un analista y científico de datos apasionado, con talento para crear narrativas convincentes a partir de datos. Mi objetivo es ayudar a las empresas a crecer descubriendo insights y oportunidades ocultas en sus conjuntos de datos. Siempre estoy aprendiendo nuevas tecnologías y asumiendo proyectos desafiantes.",
    "footer.rights": "© 2024 Julio Bobadilla. Todos los derechos reservados.",
    "footer.madeWith": "Hecho con Next.js y Firebase",
    "actions.viewProject": "Ver proyecto",
  },
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (k: DictKey) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(() => (k: DictKey) => dict[lang][k] ?? dict.en[k] ?? k, [lang]);
  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

