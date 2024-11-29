import React from 'react';
import { Filter, Search, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Digital Neon Dress',
    designer: 'Elena Virtual',
    price: '2.5 ETH',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Metaverse Suit',
    designer: 'Marcus Pixel',
    price: '1.8 ETH',
    category: 'Casual',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Fantasy Wings',
    designer: 'Sarah Digital',
    price: '3.2 ETH',
    category: 'Fantasy',
    image: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Digital Crown',
    designer: 'CryptoFashion',
    price: '1.5 ETH',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80'
  }
];

const categories = ['All', 'Casual', 'Luxury', 'Fantasy', 'Accessories'];

export default function ShopSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Shop Digital Fashion
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover unique digital fashion pieces from top designers around the world
        </p>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search designs..."
              className="pl-10 pr-4 py-2 rounded-lg bg-purple-500/20 border-none focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-xl overflow-hidden bg-purple-900/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Star className="h-4 w-4" />
                  <span>Try On</span>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-400 mb-2">by {product.designer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">{product.price}</span>
                  <span className="text-sm text-gray-400">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}