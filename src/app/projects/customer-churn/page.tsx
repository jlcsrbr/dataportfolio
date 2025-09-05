"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
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
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CustomerChurnPage() {
  const { t } = useI18n();
  const featureLabels = [
    "Tenure",
    "MonthlyCharges",
    "Contract",
    "SupportTickets",
    "PaymentMethod",
  ];
  const featureImportances = [0.32, 0.25, 0.18, 0.15, 0.10];

  const rocLabels = [0, 0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 1]; // FPR
  const rocTpr = [0, 0.35, 0.55, 0.7, 0.82, 0.9, 0.95, 1]; // mock TPR

  const classificationMetrics = {
    accuracy: 0.86,
    precision: 0.78,
    recall: 0.72,
    auc: 0.90,
  };

  return (
    <div className="min-h-screen bg-primary text-white px-4 py-10 md:px-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>{t("project.churn.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300">{t("project.churn.desc")}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Metric label={t("metric.Accuracy")} value={(classificationMetrics.accuracy * 100).toFixed(0) + "%"} />
            <Metric label={t("metric.Precision")} value={(classificationMetrics.precision * 100).toFixed(0) + "%"} />
            <Metric label={t("metric.Recall")} value={(classificationMetrics.recall * 100).toFixed(0) + "%"} />
            <Metric label={t("metric.AUC")} value={classificationMetrics.auc.toFixed(2)} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary rounded-lg p-4">
              <h3 className="mb-2 font-semibold">{t("project.churn.featureImportance")}</h3>
              <Bar
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  indexAxis: "y" as const,
                }}
                data={{
                  labels: featureLabels,
                  datasets: [
                    {
                      data: featureImportances,
                      backgroundColor: "#BB86FC",
                    },
                  ],
                }}
              />
            </div>

            <div className="bg-secondary rounded-lg p-4">
              <h3 className="mb-2 font-semibold">{t("project.churn.rocTitle")}</h3>
              <Line
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { title: { display: true, text: "FPR" } },
                    y: { title: { display: true, text: "TPR" }, min: 0, max: 1 },
                  },
                }}
                data={{
                  labels: rocLabels,
                  datasets: [
                    {
                      data: rocTpr,
                      borderColor: "#4ade80",
                      backgroundColor: "rgba(74,222,128,0.2)",
                      pointRadius: 3,
                      tension: 0.3,
                    },
                  ],
                }}
              />
            </div>
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
