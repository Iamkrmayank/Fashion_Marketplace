import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart, Eye, Shield } from 'lucide-react';

const recentItems = [
  {
    id: 1,
    name: 'Cyber Punk Jacket',
    designer: 'Elena Virtual',
    price: '1.5 ETH',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80',
    verified: true,
    likes: 128,
    views: 1240
  },
  {
    id: 2,
    name: 'Digital Denim',
    designer: 'Marcus Pixel',
    price: '0.8 ETH',
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80',
    verified: true,
    likes: 95,
    views: 850
  },
  {
    id: 3,
    name: 'Neon Dreams Dress',
    designer: 'Sarah Digital',
    price: '2.0 ETH',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    verified: true,
    likes: 156,
    views: 1890
  }
];

export default function RecentlyAdded() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Recently Added</h2>
            <p className="text-gray-400">The latest digital fashion pieces</p>
          </div>
          <Link
            to="/marketplace/recent"
            className="px-6 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentItems.map((item) => (
            <Link
              key={item.id}
              to={`/marketplace/item/${item.id}`}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>New</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  {item.verified && (
                    <Shield className="h-5 w-5 text-purple-400" />
                  )}
                </div>

                <p className="text-gray-400 mb-4">by {item.designer}</p>

                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">{item.price}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}