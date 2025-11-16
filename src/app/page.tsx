"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { useI18n } from "@/components/LanguageProvider";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  useLayoutEffect(() => {
    // This is the recommended pattern for fixing hydration errors in Next.js
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      {mounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '700ms' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        </div>
      )}

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full space-y-12 text-center">
          {/* Logo/Title */}
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-glow-purple">
              {t("home.hero.title")}
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 font-light">
              {t("home.hero.subtitle")}
            </p>
          </div>

          {/* Hero section */}
          <div className="space-y-8 mt-16">
            <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t("home.section.title")}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {t("home.section.desc")}
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all hover:glow-purple">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{t("benefit.safe.title")}</h3>
                <p className="text-gray-400">{t("benefit.safe.desc")}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:glow-blue">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{t("benefit.natural.title")}</h3>
                <p className="text-gray-400">{t("benefit.natural.desc")}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all hover:glow-purple">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">{t("benefit.community.title")}</h3>
                <p className="text-gray-400">{t("benefit.community.desc")}</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <Link
                href="/join"
                className="inline-block group relative px-12 py-5 text-xl font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 glow-purple"
              >
                <span className="relative z-10 text-white">{t("cta.join")}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                {t("home.cta.small")}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm border-t border-gray-800">
        <p>{t("footer.copy")}</p>
      </footer>
    </div>
  );
}
