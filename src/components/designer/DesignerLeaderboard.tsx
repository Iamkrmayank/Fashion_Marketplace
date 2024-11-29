import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';

const topDesigners = [
  { name: 'Elena Virtual', earnings: '$45,230', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80' },
  { name: 'Marcus Pixel', earnings: '$38,450', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80' },
  { name: 'Sarah Digital', earnings: '$32,180', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80' }
];

export default function DesignerLeaderboard() {
  return (
    <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-6">
        <Trophy className="h-6 w-6 text-yellow-500" />
        <h2 className="text-xl font-bold">Top Designers</h2>
      </div>

      <div className="space-y-4">
        {topDesigners.map((designer, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
            <div className="relative">
              <img
                src={designer.avatar}
                alt={designer.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {index === 0 && <Crown className="absolute -top-2 -right-2 h-5 w-5 text-yellow-500" />}
              {index === 1 && <Medal className="absolute -top-2 -right-2 h-5 w-5 text-gray-400" />}
              {index === 2 && <Medal className="absolute -top-2 -right-2 h-5 w-5 text-amber-700" />}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{designer.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{designer.earnings}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}