import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

const featuredItems = [
  {
    id: 1,
    name: "Digital Neon Dress",
    designer: "CyberStyle",
    price: "2.5 ETH",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Holographic Suit",
    designer: "MetaFashionista",
    price: "3.2 ETH",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Virtual Couture Gown",
    designer: "DigitalAtelier",
    price: "4.0 ETH",
    image: "https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&q=80"
  }
];

export default function FeaturedItems() {
  return (
    <section id="marketplace" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="group relative rounded-xl overflow-hidden bg-purple-900/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-96">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all">
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">By {item.designer}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-400 font-bold">{item.price}</span>
                  <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center space-x-2 transition-all">
                    <Sparkles className="h-4 w-4" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}