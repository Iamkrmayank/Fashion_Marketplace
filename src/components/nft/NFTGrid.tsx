import React from 'react';
import { Heart, Eye, Shield, Star } from 'lucide-react';

const nfts = [
  {
    id: 1,
    name: 'Cyber Couture #001',
    creator: 'Elena Virtual',
    price: '500 MetaCoin',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    likes: 124,
    views: 1.2,
    verified: true
  },
  {
    id: 2,
    name: 'Digital Streetwear',
    creator: 'Marcus Pixel',
    price: '300 MetaCoin',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    likes: 89,
    views: 0.9,
    verified: true
  },
  {
    id: 3,
    name: 'Meta Fashion Gala',
    creator: 'Sarah Digital',
    price: '800 MetaCoin',
    image: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&q=80',
    likes: 156,
    views: 1.5,
    verified: true
  }
];

export default function NFTGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={nft.image}
                  alt={nft.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {nft.verified && (
                  <div className="absolute top-4 right-4">
                    <Shield className="h-5 w-5 text-purple-400" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
                <p className="text-gray-400 mb-4">by {nft.creator}</p>

                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">{nft.price}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Heart className="h-4 w-4" />
                      <span>{nft.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Eye className="h-4 w-4" />
                      <span>{nft.views}k</span>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <Star className="h-4 w-4" />
                  <span>Place Bid</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}