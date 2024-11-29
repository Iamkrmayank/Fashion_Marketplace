import React, { useState } from 'react';
import { Upload, Tag, DollarSign, Shield } from 'lucide-react';

export default function NFTForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    royalties: '',
    collection: '',
    tags: '',
    properties: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle NFT creation logic
    console.log('Creating NFT:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6">
        <div className="border-2 border-dashed border-purple-500/30 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500/50 transition-colors">
          <Upload className="h-8 w-8 mx-auto mb-4 text-purple-400" />
          <p className="text-gray-400 mb-2">Upload your digital fashion design</p>
          <p className="text-sm text-gray-500">
            Supported formats: JPG, PNG, GIF, MP4, GLTF (Max 100MB)
          </p>
        </div>
      </div>

      <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">NFT Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g., Cyber Couture #001"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
            placeholder="Describe your digital fashion piece..."
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Price (ETH)</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full pl-10 pr-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="0.5"
                step="0.01"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Royalties (%)</label>
            <input
              type="number"
              value={formData.royalties}
              onChange={(e) => setFormData({ ...formData, royalties: e.target.value })}
              className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="10"
              min="0"
              max="50"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Collection</label>
          <select
            value={formData.collection}
            onChange={(e) => setFormData({ ...formData, collection: e.target.value })}
            className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a collection</option>
            <option value="cyber-couture">Cyber Couture</option>
            <option value="meta-streetwear">Meta Streetwear</option>
            <option value="digital-haute">Digital Haute</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tags</label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="w-full pl-10 pr-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="fashion, cyberpunk, streetwear (comma separated)"
            />
          </div>
        </div>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6">
        <div className="flex items-center space-x-2 text-sm text-purple-600 dark:text-purple-400">
          <Shield className="h-4 w-4" />
          <span>Your NFT will be minted on the Ethereum blockchain</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
      >
        Create NFT
      </button>
    </form>
  );
}