import React, { useState } from 'react';
import { Tag, ShoppingCart, RefreshCcw, Shield, Star } from 'lucide-react';
import PurchaseModal from './PurchaseModal';

const fabrics = [
  {
    id: 1,
    name: 'Holographic Mesh',
    price: '$5',
    creator: 'Elena Virtual',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80',
    tags: ['Futuristic', 'Smooth', 'Patterned'],
    verified: true,
    featured: true
  },
  {
    id: 2,
    name: 'Digital Denim',
    price: '$3',
    creator: 'Marcus Pixel',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80',
    tags: ['Vintage', 'Rough', 'Plain'],
    verified: true,
    featured: false
  },
  {
    id: 3,
    name: 'Quantum Silk',
    price: '$8',
    creator: 'Sarah Digital',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80',
    tags: ['Luxury', 'Smooth', 'Plain'],
    verified: true,
    featured: true
  }
];

export default function FabricGrid() {
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePurchaseClick = (fabric) => {
    setSelectedFabric(fabric);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fabrics.map((fabric) => (
            <div
              key={fabric.id}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative aspect-square">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {fabric.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">Featured</span>
                  </div>
                )}
                {fabric.verified && (
                  <div className="absolute top-4 right-4">
                    <Shield className="h-5 w-5 text-purple-400" />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{fabric.name}</h3>
                <p className="text-gray-400 mb-4">by {fabric.creator}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {fabric.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm flex items-center space-x-1"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-purple-400 font-bold">{fabric.price} per use</span>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
                      <RefreshCcw className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handlePurchaseClick(fabric)}
                      className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fabric={selectedFabric}
      />
    </section>
  );
}