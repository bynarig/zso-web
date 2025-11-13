"use client";

import Link from "next/link";
import { useState, useLayoutEffect } from "react";

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
          <h1 className="text-5xl font-bold text-glow-purple">Welcome to Seznamka!</h1>
          <p className="text-xl text-gray-300">
            Thank you for joining our community! We&apos;ll contact you soon with details about our next event.
          </p>
          <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-8 rounded-xl border border-purple-500/30">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">What&apos;s Next?</h2>
            <ul className="text-left space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <span>Check your email for a confirmation message</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <span>Follow us on Instagram for event updates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400">✓</span>
                <span>Get ready to meet amazing people!</span>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
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
            Seznamka
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back
          </Link>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow-purple">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-300">
            Fill out the form below and become part of something special
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm border border-purple-500/30 hover:border-purple-500/60 transition-all p-8 md:p-10 rounded-2xl space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder="your.email@university.cz"
              />
            </div>

            {/* University */}
            <div>
              <label htmlFor="university" className="block text-sm font-medium text-purple-300 mb-2">
                University *
              </label>
              <input
                type="text"
                id="university"
                name="university"
                required
                value={formData.university}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder="e.g., ČVUT, UK, VŠE"
              />
            </div>

            {/* Faculty and Year */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="faculty" className="block text-sm font-medium text-purple-300 mb-2">
                  Faculty *
                </label>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  required
                  value={formData.faculty}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="e.g., FIT, FEL"
                />
              </div>

              <div>
                <label htmlFor="year" className="block text-sm font-medium text-purple-300 mb-2">
                  Year of Study *
                </label>
                <select
                  id="year"
                  name="year"
                  required
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white"
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                  <option value="5+">5th Year+</option>
                  <option value="masters">Master&apos;s</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            </div>

            {/* Looking For */}
            <div>
              <label htmlFor="lookingFor" className="block text-sm font-medium text-purple-300 mb-2">
                What are you looking for? *
              </label>
              <select
                id="lookingFor"
                name="lookingFor"
                required
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white"
              >
                <option value="friends">New Friends</option>
                <option value="relationship">A Relationship</option>
                <option value="both">Both</option>
                <option value="networking">Networking</option>
              </select>
            </div>

            {/* Interests */}
            <div>
              <label htmlFor="interests" className="block text-sm font-medium text-purple-300 mb-2">
                Your Interests & Hobbies
              </label>
              <textarea
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500 resize-none"
                placeholder="Tell us about your interests, hobbies, or what you're passionate about..."
              />
            </div>

            {/* Instagram (optional) */}
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-blue-300 mb-2">
                Instagram Handle (Optional)
              </label>
              <input
                type="text"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                placeholder="@yourusername"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg glow-purple"
            >
              Join Seznamka Community
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              By joining, you agree to participate in a safe, respectful community
            </p>
          </div>
        </form>

        {/* Info boxes */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-semibold text-purple-300 mb-3">🎯 What to Expect</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Regular monthly or bi-weekly events</li>
              <li>• Fun games and activities</li>
              <li>• Meet students from different faculties</li>
              <li>• Safe and organized environment</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-xl font-semibold text-blue-300 mb-3">💡 Why Join?</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Break out of your comfort zone</li>
              <li>• No pressure, just genuine connections</li>
              <li>• Reduce loneliness and isolation</li>
              <li>• Build your social network</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm border-t border-gray-800 mt-16">
        <p>© 2025 Seznamka • Creating connections, building community</p>
      </footer>
    </div>
  );
}

