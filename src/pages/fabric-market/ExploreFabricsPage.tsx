import React, { useState } from 'react';
import { Filter, Search, Tag, RefreshCcw, ArrowDownWideNarrow } from 'lucide-react';
import FabricGrid from '../../components/fabric-market/FabricGrid';

export default function ExploreFabricsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Explore Digital Fabrics
          </h1>
          <p className="text-gray-400 text-lg">
            Discover unique materials for your digital fashion designs
          </p>
        </div>
        
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search fabrics..."
                className="w-full md:w-80 pl-10 pr-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
                <Filter className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
                <RefreshCcw className="h-5 w-5" />
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none text-white cursor-pointer"
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'none'
                  }}
                >
                  <option value="featured" className="bg-gray-900">Featured</option>
                  <option value="newest" className="bg-gray-900">Newest</option>
                  <option value="price-low" className="bg-gray-900">Price: Low to High</option>
                  <option value="price-high" className="bg-gray-900">Price: High to Low</option>
                </select>
                <ArrowDownWideNarrow className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <FabricGrid />
      </div>
    </div>
  );
}