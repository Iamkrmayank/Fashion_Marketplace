import React, { useState } from 'react';
import { Save, Upload, Download, Undo, Redo, Palette, Layers } from 'lucide-react';

export default function VirtualStudio() {
  const [activeTab, setActiveTab] = useState('design');

  return (
    <div className="pt-16 min-h-screen">
      {/* Studio Header */}
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-b dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Virtual Studio</h1>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-purple-500/20 rounded-full transition-colors">
                  <Undo className="h-5 w-5" />
                </button>
                <button className="p-2 hover:bg-purple-500/20 rounded-full transition-colors">
                  <Redo className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors">
                <Save className="h-5 w-5" />
              </button>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center space-x-2 transition-colors">
                <Upload className="h-5 w-5" />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Workspace */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Tools Panel */}
          <div className="col-span-2">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4">
              <div className="space-y-4">
                <button className="w-full p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center space-x-2 transition-colors">
                  <Palette className="h-5 w-5" />
                  <span>Colors</span>
                </button>
                <button className="w-full p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center space-x-2 transition-colors">
                  <Layers className="h-5 w-5" />
                  <span>Layers</span>
                </button>
                <button className="w-full p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center space-x-2 transition-colors">
                  <Download className="h-5 w-5" />
                  <span>Assets</span>
                </button>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="col-span-8">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl aspect-square flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">3D Canvas Loading...</p>
            </div>
          </div>

          {/* Properties Panel */}
          <div className="col-span-2">
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4">
              <h3 className="font-semibold mb-4">Properties</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Material</label>
                  <select className="w-full p-2 rounded-lg bg-purple-500/20 border-none">
                    <option>Cotton</option>
                    <option>Silk</option>
                    <option>Leather</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Texture</label>
                  <select className="w-full p-2 rounded-lg bg-purple-500/20 border-none">
                    <option>Smooth</option>
                    <option>Rough</option>
                    <option>Pattern</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}