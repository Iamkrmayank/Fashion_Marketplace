import React from 'react';
import { Eye, Heart, Shield } from 'lucide-react';

export default function NFTPreview() {
  return (
    <div className="sticky top-24">
      <h2 className="text-xl font-bold mb-6">Preview</h2>
      
      <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden">
        <div className="relative aspect-square">
          <div className="absolute inset-0 flex items-center justify-center bg-purple-900/40">
            <p className="text-gray-400">Upload preview will appear here</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute top-4 right-4">
            <Shield className="h-5 w-5 text-purple-400" />
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold">NFT Name</h3>
          </div>
          <p className="text-gray-400 mb-4">by Your Name</p>

          <div className="flex items-center justify-between">
            <span className="text-purple-400 font-bold">0.00 ETH</span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-400">
                <Heart className="h-4 w-4" />
                <span>0</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-400">
                <Eye className="h-4 w-4" />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-purple-900/20 backdrop-blur-sm rounded-xl">
        <h3 className="font-semibold mb-2">Properties</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <p className="text-sm text-gray-400">Collection</p>
            <p className="font-medium">-</p>
          </div>
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <p className="text-sm text-gray-400">Royalties</p>
            <p className="font-medium">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
}