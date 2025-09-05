export const projectsData = [
  {
    id: "sales-forecasting",
    name: "Sales Forecasting",
    description:
      "Time-series forecasting (ARIMA/Prophet-style) with MAE/MAPE and forecast vs actuals.",
    technologies: ["Python", "Pandas", "Statsmodels", "Prophet", "Matplotlib"],
    year: 2024,
  },
  {
    id: "customer-churn",
    name: "Customer Churn",
    description:
      "EDA + classification narrative with feature importance and ROC-like evaluation.",
    technologies: ["Python", "scikit-learn", "Pandas", "Seaborn"],
    year: 2024,
  },
  {
    id: "cohort-retention",
    name: "Cohort Retention",
    description:
      "Monthly cohorts with retention heatmap and actionable retention insights.",
    technologies: ["Python", "Pandas", "NumPy"],
    year: 2024,
  },
  {
    id: "ab-test-pricing",
    name: "A/B Test Pricing",
    description:
      "End-to-end test narrative: hypothesis, lift estimate, and simulated p-value.",
    technologies: ["Python", "SciPy", "Pandas"],
    year: 2024,
  },
  {
    id: "nlp-reviews",
    name: "NLP Reviews",
    description:
      "Word frequency and sentiment summary on product reviews (simulated).",
    technologies: ["Python", "NLTK", "spaCy"],
    year: 2024,
  },
];

export const skillsData = {
  labels: ["Python", "SQL", "R", "Tableau", "Power BI", "Machine Learning"],
  datasets: [
    {
      label: "Years of Experience",
      data: [5, 4, 3, 4, 3, 4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
