import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Palette, ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/50 to-black/80" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-fashion-show-in-paris-5244/1080p.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
          The Future of Fashion is Digital
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Step into a world where fashion knows no boundaries. Create, collect, and showcase
          digital fashion in the metaverse.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/designer/studio')}
            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
          >
            <Palette className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>Start Designing</span>
          </button>
          
          <button
            onClick={() => navigate('/marketplace')}
            className="group px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>Shop the Metaverse</span>
          </button>
          
          <button
            onClick={() => navigate('/auth')}
            className="group px-8 py-4 border-2 border-purple-400 hover:bg-purple-400/20 rounded-full flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
          >
            <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>Sign Up for Free</span>
          </button>
        </div>
      </div>
    </div>
  );
}