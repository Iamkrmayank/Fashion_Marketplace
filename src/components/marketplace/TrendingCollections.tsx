import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Star } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Cyberpunk 2077 Collection',
    designer: 'Elena Virtual',
    items: 12,
    owners: 156,
    floorPrice: '0.8 ETH',
    preview: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 2,
    name: 'Digital Streetwear',
    designer: 'Marcus Pixel',
    items: 8,
    owners: 92,
    floorPrice: '0.5 ETH',
    preview: [
      'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550418290-a8d86ad674a6?auto=format&fit=crop&q=80'
    ]
  }
];

export default function TrendingCollections() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 mb-12">
          <TrendingUp className="h-8 w-8 text-purple-400" />
          <h2 className="text-3xl font-bold">Trending Collections</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              to={`/marketplace/collection/${collection.id}`}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="grid grid-cols-2 gap-4 mb-6">
                {collection.preview.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${collection.name} preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
              <p className="text-gray-400 mb-4">by {collection.designer}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Star className="h-4 w-4" />
                    <span>{collection.items} items</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users className="h-4 w-4" />
                    <span>{collection.owners} owners</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400">Floor Price</p>
                  <p className="text-xl font-bold text-purple-400">
                    {collection.floorPrice}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}