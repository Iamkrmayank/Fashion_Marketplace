import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1550047882-6d72be0f235c?auto=format&fit=crop&q=80"
          alt="Virtual Fashion"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/50 to-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
          The Future of Fashion is Digital
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Buy, sell, and create digital fashion in the metaverse. Join exclusive fashion shows and meet renowned designers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center space-x-2 transition-all transform hover:scale-105">
            <Sparkles className="h-5 w-5" />
            <span>Explore Collection</span>
          </button>
          <button className="px-8 py-3 border-2 border-purple-400 hover:bg-purple-400/20 rounded-full transition-all transform hover:scale-105">
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}