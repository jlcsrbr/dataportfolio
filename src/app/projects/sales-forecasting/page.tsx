"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useI18n } from "@/context/i18n";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function mae(actual: number[], forecast: number[]) {
  const n = actual.length;
  return (
    actual.reduce((acc, a, i) => acc + Math.abs(a - forecast[i]), 0) / n
  );
}

function mape(actual: number[], forecast: number[]) {
  const n = actual.length;
  return (
    (actual.reduce((acc, a, i) => acc + Math.abs((a - forecast[i]) / a), 0) /
      n) * 100
  );
}

export default function SalesForecastingPage() {
  const { t } = useI18n();
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const actual = [120, 135, 128, 150, 162, 170, 180, 176, 185, 200, 195, 210];
  const forecast = [118, 130, 132, 148, 160, 168, 178, 174, 188, 198, 197, 208];

  const metrics = {
    mae: mae(actual, forecast).toFixed(1),
    mape: mape(actual, forecast).toFixed(1),
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Actual",
        data: actual,
        borderColor: "#BB86FC",
        backgroundColor: "rgba(187,134,252,0.2)",
        tension: 0.3,
      },
      {
        label: "Forecast",
        data: forecast,
        borderColor: "#4ade80",
        backgroundColor: "rgba(74,222,128,0.2)",
        borderDash: [6, 6],
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: t("project.sales.chartTitle") },
      tooltip: { intersect: false, mode: "index" as const },
    },
    interaction: { intersect: false, mode: "index" as const },
  };

  return (
    <div className="min-h-screen bg-primary text-white px-4 py-10 md:px-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>{t("project.sales.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300">{t("project.sales.desc")}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-lg bg-secondary p-4 shadow-card">
              <div className="text-sm text-gray-400">{t("metric.MAE")}</div>
              <div className="text-2xl font-bold">{metrics.mae}</div>
            </div>
            <div className="rounded-lg bg-secondary p-4 shadow-card">
              <div className="text-sm text-gray-400">{t("metric.MAPE")}</div>
              <div className="text-2xl font-bold">{metrics.mape}%</div>
            </div>
          </div>
          <div className="bg-secondary rounded-lg p-4">
            <Line data={data} options={options} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
