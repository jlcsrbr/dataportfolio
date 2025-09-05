"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/context/i18n";

export function LanguageToggle({ variant = "header" }: { variant?: "header" | "floating" }) {
  const { lang, toggle } = useI18n();
  const label = lang === "en" ? "ES" : "EN";

  if (variant === "floating") {
    return (
      <button
        onClick={toggle}
        className="fixed right-4 top-4 z-50 rounded-full border border-accent/30 bg-secondary/80 px-3 py-1 text-sm text-white shadow-card backdrop-blur hover:shadow-glow"
        aria-label="Toggle language"
      >
        {label}
      </button>
    );
  }

  return (
    <Button variant="outline" size="sm" onClick={toggle} aria-label="Toggle language">
      {label}
    </Button>
  );
}

export default LanguageToggle;

