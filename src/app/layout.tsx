import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/react-grid-layout.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Julio Bobadilla - Data Analyst & Data Scientist",
  description: "Portfolio of Julio Bobadilla, a Data Analyst and Data Scientist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary bg-noise`}>{children}</body>
    </html>
  );
}
