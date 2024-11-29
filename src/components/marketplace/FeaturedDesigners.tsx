import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Shield } from 'lucide-react';

const designers = [
  {
    id: 1,
    name: 'Elena Virtual',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    bio: 'Digital Haute Couture Designer',
    verified: true,
    followers: '12.5K',
    collections: 28
  },
  {
    id: 2,
    name: 'Marcus Pixel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    bio: 'Metaverse Streetwear Specialist',
    verified: true,
    followers: '8.2K',
    collections: 15
  },
  {
    id: 3,
    name: 'Sarah Digital',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&q=80',
    bio: 'NFT Fashion Artist',
    verified: true,
    followers: '6.8K',
    collections: 12
  }
];

export default function FeaturedDesigners() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Featured Designers
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Discover the most talented digital fashion creators
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer) => (
            <div
              key={designer.id}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={designer.cover}
                  alt={designer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <img
                  src={designer.avatar}
                  alt={designer.name}
                  className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-2 border-purple-400"
                />
                {designer.verified && (
                  <Shield className="absolute bottom-4 left-16 h-5 w-5 text-purple-400" />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{designer.name}</h3>
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-gray-400 mb-4">{designer.bio}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{designer.followers} followers</span>
                  <span>{designer.collections} collections</span>
                </div>

                <Link
                  to={`/designer/${designer.id}`}
                  className="w-full py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}