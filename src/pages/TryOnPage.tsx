import React, { useState } from 'react';
import { Camera, RotateCw, Download, Share2, Sparkles } from 'lucide-react';

interface ViewMode {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const viewModes: ViewMode[] = [
  { id: 'ar', name: 'AR View', icon: <Camera className="h-5 w-5" /> },
  { id: '3d', name: '3D View', icon: <RotateCw className="h-5 w-5" /> }
];

export default function TryOnPage() {
  const [selectedMode, setSelectedMode] = useState('ar');
  const [isCapturing, setIsCapturing] = useState(false);

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Preview Area */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden">
              {isCapturing ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-12 w-12 mx-auto mb-4 text-purple-400 animate-pulse" />
                    <p className="text-gray-400">Accessing camera...</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-400">Camera preview will appear here</p>
                </div>
              )}

              {/* Capture Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                <button className="p-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                  <Camera className="h-6 w-6" />
                </button>
                <button className="p-3 bg-purple-900/50 backdrop-blur-sm rounded-full hover:bg-purple-900/70 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-3 bg-purple-900/50 backdrop-blur-sm rounded-full hover:bg-purple-900/70 transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* View Mode Selector */}
            <div className="mt-6 flex justify-center space-x-4">
              {viewModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-colors ${
                    selectedMode === mode.id
                      ? 'bg-purple-600'
                      : 'bg-purple-900/20 hover:bg-purple-900/40'
                  }`}
                >
                  {mode.icon}
                  <span>{mode.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Selected Item</h2>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
                  alt="Digital Fashion Item"
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold">Cyber Couture Dress</h3>
                  <p className="text-sm text-gray-400">by Elena Virtual</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-4">Adjustments</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <select className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <div className="flex space-x-2">
                    {['#FF0000', '#00FF00', '#0000FF', '#FFD700'].map((color) => (
                      <button
                        key={color}
                        className="w-8 h-8 rounded-full border-2 border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Effects</label>
                  <button className="w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                    <Sparkles className="h-4 w-4" />
                    <span>Add Sparkle Effect</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsCapturing(true)}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2 transition-colors"
            >
              <Camera className="h-5 w-5" />
              <span>Start Try On</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}