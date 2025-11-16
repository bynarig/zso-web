"use client";

import Link from "next/link";
import { useState, useLayoutEffect } from "react";
import { useI18n } from "@/components/LanguageProvider";

export default function JoinPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    faculty: "",
    year: "",
    interests: "",
    lookingFor: "friends",
    instagram: "",
  });

  const { t } = useI18n();

  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    // This is the recommended pattern for fixing hydration errors in Next.js
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        {mounted && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '700ms' }}></div>
          </div>
        )}

        <div className="relative z-10 max-w-2xl text-center space-y-8">
          <div className="text-6xl animate-bounce">🎉</div>
          <h1 className="text-5xl font-bold text-glow-purple">{t("join.welcome.title")}</h1>
          <p className="text-xl text-gray-300">
            {t("join.welcome.desc")}
          </p>
          <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">{t("join.whatsnext")}</h2>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <span>{t("join.check.email")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <span>{t("join.follow.ig")}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <span>{t("join.get.ready")}</span>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            {t("nav.back").replace("← ", "")} {/* keep clean text on button */}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated background */}
      {mounted && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '700ms' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        </div>
      )}

      {/* Header */}
      <nav className="relative z-10 border-b border-gray-800 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-glow-purple hover:text-purple-400 transition-colors">
            {t("join.header.title")}
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            {t("nav.back")}
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow-purple">
            {t("join.main.title")}
          </h1>
          <p className="text-xl text-gray-300">
            {t("join.main.subtitle")}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all p-8 md:p-10 rounded-2xl space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder={t("form.name.placeholder")}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder={t("form.email.placeholder")}
              />
            </div>

            {/* University */}
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-purple-300 mb-2">
                {t("form.university")}
              </label>
              <input
                type="text"
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder={t("form.university.placeholder")}
              />
            </div>

            {/* Faculty and Year */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-purple-300 mb-2">
                  {t("form.faculty")}
                </label>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  required
                  value={formData.faculty}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder={t("form.faculty.placeholder")}
                />
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium text-purple-300 mb-2">
                  {t("form.year")}
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white"
                >
                  <option value="">{t("form.year.select")}</option>
                  <option value="1">{t("form.year.1")}</option>
                  <option value="2">{t("form.year.2")}</option>
                  <option value="3">{t("form.year.3")}</option>
                  <option value="4">{t("form.year.4")}</option>
                  <option value="5+">{t("form.year.5plus")}</option>
                  <option value="masters">{t("form.year.masters")}</option>
                  <option value="phd">{t("form.year.phd")}</option>
                </select>
              </div>
            </div>

            {/* Looking For */}
            <div>
              <label htmlFor="lookingFor" className="block text-sm font-medium text-purple-300 mb-2">
                {t("form.looking")}
              </label>
              <select
                id="lookingFor"
                name="lookingFor"
                required
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white"
              >
                <option value="friends">{t("form.looking.friends")}</option>
                <option value="relationship">{t("form.looking.relationship")}</option>
                <option value="both">{t("form.looking.both")}</option>
                <option value="networking">{t("form.looking.networking")}</option>
              </select>
            </div>

            {/* Interests */}
            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-purple-300 mb-2">
                {t("form.interests")}
              </label>
              <textarea
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 resize-none"
                placeholder={t("form.interests.placeholder")}
              />
            </div>

            {/* Instagram (optional) */}
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-blue-300 mb-2">
                {t("form.instagram")}
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder={t("form.instagram.placeholder")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg glow-purple"
            >
              {t("form.submit")}
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              {t("form.agree")}
            </p>
          </div>
        </form>

        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-3">{t("join.expect.title")}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{t("join.expect.1")}</li>
              <li>{t("join.expect.2")}</li>
              <li>{t("join.expect.3")}</li>
              <li>{t("join.expect.4")}</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">{t("join.why.title")}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{t("join.why.1")}</li>
              <li>{t("join.why.2")}</li>
              <li>{t("join.why.3")}</li>
              <li>{t("join.why.4")}</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm border-t border-gray-800 mt-16">
        <p>{t("footer.copy")}</p>
      </footer>
    </div>
  );
}
