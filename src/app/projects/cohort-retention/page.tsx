"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/context/i18n";

type Matrix = number[][]; // 0..1 retention

const cohorts = ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06"];
const months = ["M0", "M1", "M2", "M3", "M4", "M5"];
const retention: Matrix = [
  [1.0, 0.62, 0.51, 0.44, 0.38, 0.33],
  [1.0, 0.65, 0.55, 0.46, 0.40, 0.34],
  [1.0, 0.60, 0.50, 0.42, 0.36, 0.30],
  [1.0, 0.66, 0.53, 0.45, 0.39, 0.31],
  [1.0, 0.64, 0.52, 0.43, 0.36, 0.29],
  [1.0, 0.67, 0.56, 0.47, 0.41, 0.35],
];

function colorFor(v: number) {
  // 0..1 green scale
  const g = Math.round(255 * v);
  const a = 0.75;
  return `rgba(74, 222, 128, ${a * v})`; // using Tailwind emerald-ish tone
}

export default function CohortRetentionPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-primary text-white px-4 py-10 md:px-8">
      <Card className="max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle>{t("project.cohort.title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300">{t("project.cohort.desc")}</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left p-2 text-gray-400">{t("table.cohortHeader")}</th>
                  {months.map((m) => (
                    <th key={m} className="text-center p-2 text-gray-400">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {retention.map((row, i) => (
                  <tr key={cohorts[i]}
                      className="border-t border-accent/10">
                    <td className="p-2 text-gray-300">{cohorts[i]}</td>
                    {row.map((v, j) => (
                      <td key={`${i}-${j}`} className="p-1">
                        <div
                          className="rounded-md text-center py-2"
                          style={{
                            backgroundColor: colorFor(v),
                            color: v > 0.6 ? "#0b1320" : "#e5e7eb",
                          }}
                        >
                          {(v * 100).toFixed(0)}%
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
