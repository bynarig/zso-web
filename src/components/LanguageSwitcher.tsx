"use client";

import { useI18n } from "./LanguageProvider";
import type { Language } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  return (
    <div className="fixed top-3 right-3 z-50">
      <select
        aria-label="Language"
        value={lang}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setLang(e.target.value as Language)}
        className="bg-black/60 backdrop-blur-sm border border-gray-700 text-gray-200 text-sm rounded-md px-3 py-1 hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <option value="cs">Čeština</option>
        <option value="uk">Українська</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
