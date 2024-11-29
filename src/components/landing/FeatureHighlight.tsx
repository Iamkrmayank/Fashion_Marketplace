import React from 'react';
import { Smartphone, ShoppingBag, Tv, Cpu } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Virtual Try-On',
    description: 'Experience digital fashion in real-time with our AR technology',
    bgImage: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80'
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: 'NFT Marketplace',
    description: 'Buy, sell, and trade unique digital fashion pieces',
    bgImage: 'https://images.unsplash.com/photo-1550418290-a8d86ad674a6?auto=format&fit=crop&q=80'
  },
  {
    icon: <Tv className="h-8 w-8" />,
    title: 'Digital Runway Events',
    description: 'Attend exclusive virtual fashion shows in the metaverse',
    bgImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'AI-Powered Design',
    description: 'Create stunning designs with our AI-assisted tools',
    bgImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80'
  }
];

export default function FeatureHighlight() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Redefining Fashion in the Digital Age
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}