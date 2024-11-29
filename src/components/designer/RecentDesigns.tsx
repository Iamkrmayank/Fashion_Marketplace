import React from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

const recentDesigns = [
  {
    id: 1,
    title: 'Neon Dreams Collection',
    preview: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    views: 1234,
    likes: 89,
    status: 'Live'
  },
  {
    id: 2,
    title: 'Digital Couture 2024',
    preview: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
    views: 856,
    likes: 67,
    status: 'Draft'
  }
];

export default function RecentDesigns() {
  return (
    <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <h2 className="text-xl font-bold mb-6">Recent Designs</h2>
      <div className="grid gap-6">
        {recentDesigns.map((design) => (
          <div key={design.id} className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all">
            <img
              src={design.preview}
              alt={design.title}
              className="w-full md:w-48 h-48 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{design.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  design.status === 'Live'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {design.status}
                </span>
              </div>
              <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{design.views}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>{design.likes}</span>
                </div>
                <button className="p-2 hover:bg-purple-500/20 rounded-full transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}