import React, { useState } from 'react';
import { Upload, Tag, DollarSign, Shield, Sparkles } from 'lucide-react';

export default function SellMaterialsPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    tags: '',
    license: 'standard'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Sell Your Digital Materials
          </h1>
          <p className="text-gray-400 text-lg">
            Share your unique digital fabrics with designers worldwide
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Upload Section */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="border-2 border-dashed border-purple-500/30 rounded-lg p-8 text-center cursor-pointer hover:border-purple-500/50 transition-colors">
              <Upload className="h-12 w-12 mx-auto mb-4 text-purple-400" />
              <p className="text-gray-400 mb-2">Upload your material files</p>
              <p className="text-sm text-gray-500">
                Drag and drop or click to select files
                <br />
                Supported formats: PBR textures, 3D materials, fabric scans
              </p>
            </div>
          </div>

          {/* Material Details */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Material Details</h2>

            <div>
              <label className="block text-sm font-medium mb-2">Material Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="e.g., Holographic Mesh"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
                placeholder="Describe your material's properties and unique features..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                >
                  <option value="">Select category</option>
                  <option value="natural">Natural Fabrics</option>
                  <option value="synthetic">Synthetic Materials</option>
                  <option value="futuristic">Futuristic Textures</option>
                  <option value="fantasy">Fantasy Materials</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price per Use</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="5.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
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
                  placeholder="smooth, metallic, futuristic (comma separated)"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">License Type</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="relative flex items-center p-4 border border-purple-500/30 rounded-lg cursor-pointer hover:bg-purple-500/10">
                  <input
                    type="radio"
                    name="license"
                    value="standard"
                    checked={formData.license === 'standard'}
                    onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                    className="hidden"
                  />
                  <div>
                    <div className="font-medium">Standard License</div>
                    <div className="text-sm text-gray-400">Single use per purchase</div>
                  </div>
                </label>

                <label className="relative flex items-center p-4 border border-purple-500/30 rounded-lg cursor-pointer hover:bg-purple-500/10">
                  <input
                    type="radio"
                    name="license"
                    value="unlimited"
                    checked={formData.license === 'unlimited'}
                    onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                    className="hidden"
                  />
                  <div>
                    <div className="font-medium">Unlimited License</div>
                    <div className="text-sm text-gray-400">Unlimited uses</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 p-4 rounded-lg mb-6">
            <div className="flex items-center space-x-2 text-sm text-purple-400">
              <Shield className="h-4 w-4" />
              <span>Your material will be protected by blockchain verification</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <Sparkles className="h-5 w-5" />
            <span>List Material</span>
          </button>
        </form>
      </div>
    </div>
  );
}