import React from "react";
import { Search, Sparkles } from "lucide-react";

const GptSearch = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-black/95 to-black/80 text-white px-4 py-8">

      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          GPT Movie Search
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl font-light tracking-wide">
          Find the perfect movie using AI-powered suggestions 🎬
        </p>
      </div>

      {/* Enhanced Search Bar */}
      <div className="w-full max-w-3xl mb-16">
        <div className="relative flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl hover:shadow-purple-500/20 hover:border-purple-400/30 transition-all duration-500 group">
          <Search size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
          <input
            type="text"
            placeholder='e.g. "mind-bending sci-fi thrillers"'
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400 text-base sm:text-lg font-medium"
          />
          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 hover:from-purple-500 hover:via-purple-400 hover:to-blue-400 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-300">
            <Sparkles size={20} />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="mt-16"></div>
    </div>
  );
};

export default GptSearch;
