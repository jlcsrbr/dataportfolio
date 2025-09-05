"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useI18n } from "@/context/i18n";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function NLPReviewsPage() {
  const { t } = useI18n();
  const topWords = [
    { word: "quality", count: 128 },
    { word: "price", count: 112 },
    { word: "easy", count: 96 },
    { word: "delivery", count: 84 },
    { word: "support", count: 75 },
  ];
  const sentiment = { positive: 0.68, neutral: 0.22, negative: 0.10 };

  const wordsData = {
    labels: topWords.map((w) => w.word),
    datasets: [
      {
        label: "Frequency",
        data: topWords.map((w) => w.count),
        backgroundColor: "#BB86FC",
      },
    ],
  };

  const sentimentData = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "% of reviews",
        data: [
          sentiment.positive * 100,
          sentiment.neutral * 100,
          sentiment.negative * 100,
        ],
        backgroundColor: ["#4ade80", "#60a5fa", "#f87171"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-primary text-white px-4 py-10 md:px-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>{t("project.nlp.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300">{t("project.nlp.desc")}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="mb-2 font-semibold">{t("project.nlp.topWords")}</h3>
              <Bar data={wordsData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="mb-2 font-semibold">{t("project.nlp.sentimentDistribution")}</h3>
              <Bar data={sentimentData} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { ticks: { callback: (v: any) => `${v}%` } } } }} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
