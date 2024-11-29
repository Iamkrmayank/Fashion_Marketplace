import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgImage: string;
}

export default function FeatureCard({ icon, title, description, bgImage }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative p-6 h-[400px] flex flex-col justify-end">
        <div className="mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="bg-purple-500/20 backdrop-blur-sm p-3 rounded-xl inline-block">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
          {title}
        </h3>
        <p className="text-gray-300 transform transition-transform duration-300 group-hover:-translate-y-2">
          {description}
        </p>
        
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}