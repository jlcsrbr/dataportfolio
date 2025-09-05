"use client";

import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { useI18n } from "@/context/i18n";

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between h-20 px-4 md:px-8 bg-primary/80 backdrop-blur-sm border-b border-accent/20">
      <Link href="/">
        <h1 className="text-2xl font-bold text-accent cursor-pointer">Julio Bobadilla</h1>
      </Link>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#projects" className="text-lg font-medium hover:text-accent transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="/#about" className="text-lg font-medium hover:text-accent transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/#skills" className="text-lg font-medium hover:text-accent transition-colors">
            {t("nav.skills")}
          </Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}

