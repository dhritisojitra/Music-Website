import React from 'react';

export default function DailyMixes() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-950 to-black p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32">
        {/* Daily Mix 1 */}
        <div className="h-[22em] w-[22em] border border-purple-500/30 rounded-2xl bg-white/5 text-white font-nunito p-6 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div>
            <h1 className="text-xl font-bold mb-2">🎧 Daily Mix 1</h1>
            <p className="text-sm text-gray-300">
              A fresh blend of your all-time favorites and trending hits. Perfect for your everyday mood.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/014/524/358/non_2x/dj-mix-vector.jpg" 
                alt="Mix Cover" 
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-600"
              />
              <div>
                <p className="text-base font-medium">Pop & Soul</p>
                <p className="text-xs text-gray-400">Bruno Mars, Dua Lipa & more</p>
              </div>
            </div>
            <button
              className="px-4 py-1 border border-purple-600 rounded-full flex items-center gap-2 hover:bg-purple-800/40 transition duration-300"
            >
              <span className="text-sm">Play</span>
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Daily Mix 2 */}
        <div className="h-[22em] w-[22em] border border-purple-500/30 rounded-2xl bg-white/5 text-white font-nunito p-6 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div>
            <h1 className="text-xl font-bold mb-2">🎶 Daily Mix 2</h1>
            <p className="text-sm text-gray-300">
              Discover your chill zone. A curated mix of indie, mellow beats, and acoustic gems.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/014/524/358/non_2x/dj-mix-vector.jpg" 
                alt="Mix Cover" 
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-600"
              />
              <div>
                <p className="text-base font-medium">Indie Chill</p>
                <p className="text-xs text-gray-400">One Direction, Prettymuch</p>
              </div>
            </div>
            <button
              className="px-4 py-1 border border-purple-600 rounded-full flex items-center gap-2 hover:bg-purple-800/40 transition duration-300"
            >
              <span className="text-sm">Play</span>
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Daily Mix 3 */}
        <div className="h-[22em] w-[22em] border border-purple-500/30 rounded-2xl bg-white/5 text-white font-nunito p-6 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div>
            <h1 className="text-xl font-bold mb-2">🎵 Daily Mix 3</h1>
            <p className="text-sm text-gray-300">
              A Bollywood fusion of golden hits and latest chartbusters. Nostalgia and freshness all in one.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/014/524/358/non_2x/dj-mix-vector.jpg" 
                alt="Mix Cover" 
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-600"
              />
              <div>
                <p className="text-base font-medium">Bollywood Blend</p>
                <p className="text-xs text-gray-400">Arijit Singh, Shreya Ghoshal</p>
              </div>
            </div>
            <button
              className="px-4 py-1 border border-purple-600 rounded-full flex items-center gap-2 hover:bg-purple-800/40 transition duration-300"
            >
              <span className="text-sm">Play</span>
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
