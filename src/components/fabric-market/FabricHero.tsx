import React from 'react';
import { Sparkles, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FabricHero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-900/50 to-black/80" />
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80"
          alt="Digital Fabrics"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
          The Future of Textiles is Digital
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore, trade, and create unique digital fabrics for your virtual fashion designs
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/fabric-market/explore')}
            className="group px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
          >
            <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>Explore Fabrics</span>
          </button>
          
          <button
            onClick={() => navigate('/fabric-market/sell')}
            className="group px-8 py-4 border-2 border-purple-400 hover:bg-purple-400/20 rounded-full flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
          >
            <Upload className="h-5 w-5 group-hover:rotate-12 transition-transform" />
            <span>Sell Your Materials</span>
          </button>
        </div>
      </div>
    </div>
  );
}