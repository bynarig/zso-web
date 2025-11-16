"use client";

import React, { createContext, useContext, useMemo, useState, useCallback } from "react";
import { translations, defaultLanguage, type Language } from "@/lib/i18n";

const STORAGE_KEY = "zso.lang";

type I18nContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
        if (stored === "cs" || stored === "uk" || stored === "ru" || stored === "en") return stored;
      }
    } catch {
      // ignore
    }
    return defaultLanguage;
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, l);
      }
    } catch {
      // ignore
    }
  }, []);

  const t = useMemo(() => {
    const dict = translations[lang] ?? translations[defaultLanguage];
    return (key: string) => dict[key] ?? key;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
