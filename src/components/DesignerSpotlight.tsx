import React from 'react';
import { Crown, MessageCircle } from 'lucide-react';

const designers = [
  {
    id: 1,
    name: "Elena Virtual",
    specialty: "Digital Haute Couture",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    available: true
  },
  {
    id: 2,
    name: "Marcus Pixel",
    specialty: "Metaverse Streetwear",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    available: false
  },
  {
    id: 3,
    name: "Sarah Digital",
    specialty: "NFT Fashion Art",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    available: true
  }
];

export default function DesignerSpotlight() {
  return (
    <section id="designers" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Meet Our Digital Designers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer) => (
            <div key={designer.id} className="relative group">
              <div className="relative rounded-xl overflow-hidden bg-purple-900/20 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-96 relative">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <Crown className="h-5 w-5 text-purple-400" />
                      <h3 className="text-xl font-semibold">{designer.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{designer.specialty}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        designer.available 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {designer.available ? 'Available Now' : 'Away'}
                      </span>
                      <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center space-x-2 transition-all">
                        <MessageCircle className="h-4 w-4" />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}