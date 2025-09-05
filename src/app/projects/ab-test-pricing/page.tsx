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

export default function ABTestPricingPage() {
  const { t } = useI18n();
  const controlRate = 0.082; // 8.2%
  const treatmentRate = 0.088; // 8.8%
  const lift = ((treatmentRate - controlRate) / controlRate) * 100; // ~7.3%
  const pValue = 0.03; // simulated
  const ciControl = [0.078, 0.086];
  const ciTreatment = [0.084, 0.093];

  const data = {
    labels: ["Control", "Treatment"],
    datasets: [
      {
        label: "Conversion Rate",
        data: [controlRate * 100, treatmentRate * 100],
        backgroundColor: ["#60a5fa", "#4ade80"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: t("project.abtest.chartTitle") },
    },
    scales: {
      y: { ticks: { callback: (v: any) => `${v}%` } },
    },
  };

  return (
    <div className="min-h-screen bg-primary text-white px-4 py-10 md:px-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>{t("project.abtest.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300">{t("project.abtest.desc")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Metric label={t("metric.Lift")} value={`${lift.toFixed(1)}%`} />
            <Metric label={t("metric.pValue")} value={pValue.toFixed(2)} />
            <Metric label={t("metric.controlCI")} value={`${(ciControl[0]*100).toFixed(1)}–${(ciControl[1]*100).toFixed(1)}%`} />
            <Metric label={t("metric.treatmentCI")} value={`${(ciTreatment[0]*100).toFixed(1)}–${(ciTreatment[1]*100).toFixed(1)}%`} />
          </div>
          <div className="bg-secondary rounded-lg p-4">
            <Bar data={data} options={options} />
            <p className="text-xs text-gray-400 mt-2">{t("note.intervalsOmitted")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-secondary p-4 shadow-card">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
