"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

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
              Seznamka
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 font-light">
              Connect • Meet • Belong
            </p>
          </div>

          {/* Hero section */}
          <div className="space-y-8 mt-16">
            <div className="gradient-border bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Meet New People. Build Real Connections.
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                After high school, meeting new people becomes challenging. Seznamka creates safe,
                organized events where university students can connect face-to-face in a natural,
                pressure-free environment.
              </p>
            </div>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all hover:glow-purple">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Safe Environment</h3>
                <p className="text-gray-400">No fake profiles. Real people, real connections in organized settings.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:glow-blue">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-blue-300 mb-2">Natural Meetings</h3>
                <p className="text-gray-400">Meet people through games and activities, not awkward small talk.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all hover:glow-purple">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-semibold text-purple-300 mb-2">Community First</h3>
                <p className="text-gray-400">Connect students from different faculties and universities.</p>
              </div>
            </div>

            {/* Story section */}
            <div className="bg-black/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-800 mt-12">
              <div className="space-y-6 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🧑‍🎓</span>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-2">Our Story</h3>
                    <p className="text-gray-300">
                      Meet Tomáš, a first-year ČVUT student who just moved to a new city.
                      He spends most of his time in lectures or at his computer. While he&apos;s
                      active on social media, he&apos;s shy about approaching new people in real life.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <p className="text-gray-300">
                      Tomáš wants to find friends or someone special. He wants to grab coffee,
                      chat, and feel part of the student community. That&apos;s where Seznamka comes in.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <p className="text-gray-300">
                      Our events bring together students from different faculties in a safe,
                      friendly, and relaxed environment. Through games and activities, people
                      connect naturally—no pressure, just genuine interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <Link
                href="/join"
                className="inline-block group relative px-12 py-5 text-xl font-semibold rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 glow-purple"
              >
                <span className="relative z-10">Join Our Community</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                Be part of something special. Your next connection awaits.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-500 text-sm border-t border-gray-800">
        <p>© 2025 Seznamka • Creating connections, building community</p>
      </footer>
    </div>
  );
}
