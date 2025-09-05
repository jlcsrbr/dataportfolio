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
  | "actions.viewProject"
  // Project: Sales Forecasting
  | "project.sales.title"
  | "project.sales.desc"
  | "project.sales.chartTitle"
  // Metrics common
  | "metric.MAE"
  | "metric.MAPE"
  | "metric.Accuracy"
  | "metric.Precision"
  | "metric.Recall"
  | "metric.AUC"
  | "metric.Lift"
  | "metric.pValue"
  | "metric.controlCI"
  | "metric.treatmentCI"
  // Project: Churn
  | "project.churn.title"
  | "project.churn.desc"
  | "project.churn.featureImportance"
  | "project.churn.rocTitle"
  // Project: Cohort
  | "project.cohort.title"
  | "project.cohort.desc"
  | "table.cohortHeader"
  // Project: AB Test
  | "project.abtest.title"
  | "project.abtest.desc"
  | "project.abtest.chartTitle"
  | "note.intervalsOmitted"
  // Project: NLP Reviews
  | "project.nlp.title"
  | "project.nlp.desc"
  | "project.nlp.topWords"
  | "project.nlp.sentimentDistribution";

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
    // Sales
    "project.sales.title": "Sales Forecasting",
    "project.sales.desc":
      "ARIMA/Prophet-style workflow: cleaned seasonality and trend, trained on the last 12 months, and produced a one-step-ahead forecast.",
    "project.sales.chartTitle": "Forecast vs Actuals",
    // Metrics
    "metric.MAE": "MAE",
    "metric.MAPE": "MAPE",
    "metric.Accuracy": "Accuracy",
    "metric.Precision": "Precision",
    "metric.Recall": "Recall",
    "metric.AUC": "AUC",
    "metric.Lift": "Lift",
    "metric.pValue": "p-value",
    "metric.controlCI": "Control CI",
    "metric.treatmentCI": "Treatment CI",
    // Churn
    "project.churn.title": "Customer Churn",
    "project.churn.desc":
      "EDA highlighted tenure and contract as key signals. A simple tree-based classifier achieved strong separation with focus on monthly charges and support frequency.",
    "project.churn.featureImportance": "Feature Importance (mock)",
    "project.churn.rocTitle": "ROC-like curve (mock)",
    // Cohort
    "project.cohort.title": "Cohort Retention",
    "project.cohort.desc":
      "Monthly cohorts with 6-month retention. Heatmap highlights stable early retention with opportunity around months 3–5.",
    "table.cohortHeader": "Cohort",
    // AB Test
    "project.abtest.title": "A/B Test – Pricing",
    "project.abtest.desc":
      "Hypothesis: a value-anchored pricing message increases conversion. Randomized traffic split 50/50 across two weeks.",
    "project.abtest.chartTitle": "Pricing Test Results",
    "note.intervalsOmitted":
      "Note: intervals are summarized numerically; chart omits error bars for clarity.",
    // NLP
    "project.nlp.title": "NLP – Reviews",
    "project.nlp.desc":
      "Simulated analysis of product reviews: tokenization and basic sentiment. Most frequent terms emphasize quality and price; overall sentiment skews positive.",
    "project.nlp.topWords": "Top words",
    "project.nlp.sentimentDistribution": "Sentiment distribution",
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
    // Sales
    "project.sales.title": "Pronóstico de Ventas",
    "project.sales.desc":
      "Flujo al estilo ARIMA/Prophet: limpieza de estacionalidad y tendencia, entrenamiento con los últimos 12 meses y pronóstico a un paso.",
    "project.sales.chartTitle": "Pronóstico vs Reales",
    // Metrics
    "metric.MAE": "MAE",
    "metric.MAPE": "MAPE",
    "metric.Accuracy": "Exactitud",
    "metric.Precision": "Precisión",
    "metric.Recall": "Recall",
    "metric.AUC": "AUC",
    "metric.Lift": "Lift",
    "metric.pValue": "p-valor",
    "metric.controlCI": "IC Control",
    "metric.treatmentCI": "IC Tratamiento",
    // Churn
    "project.churn.title": "Fuga de Clientes",
    "project.churn.desc":
      "La EDA destacó la antigüedad y el contrato como señales clave. Un clasificador de árboles logró buena separación enfocándose en cargos mensuales y soporte.",
    "project.churn.featureImportance": "Importancia de Características (simulado)",
    "project.churn.rocTitle": "Curva tipo ROC (simulada)",
    // Cohort
    "project.cohort.title": "Retención por Cohortes",
    "project.cohort.desc":
      "Cohortes mensuales con retención a 6 meses. El mapa de calor resalta retención temprana estable y oportunidades en meses 3–5.",
    "table.cohortHeader": "Cohorte",
    // AB Test
    "project.abtest.title": "Prueba A/B – Precios",
    "project.abtest.desc":
      "Hipótesis: un mensaje de precios con anclaje de valor aumenta la conversión. Tráfico aleatorizado 50/50 durante dos semanas.",
    "project.abtest.chartTitle": "Resultados de la Prueba de Precios",
    "note.intervalsOmitted":
      "Nota: los intervalos se resumen numéricamente; el gráfico omite barras de error para claridad.",
    // NLP
    "project.nlp.title": "PLN – Reseñas",
    "project.nlp.desc":
      "Análisis simulado de reseñas: tokenización y sentimiento básico. Los términos más frecuentes enfatizan calidad y precio; el sentimiento general es positivo.",
    "project.nlp.topWords": "Palabras más frecuentes",
    "project.nlp.sentimentDistribution": "Distribución del sentimiento",
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
