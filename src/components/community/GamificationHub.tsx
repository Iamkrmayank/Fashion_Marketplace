import React from 'react';
import { Trophy, Target, Star, Award } from 'lucide-react';

const leaderboardData = [
  {
    rank: 1,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    name: 'Anna Style',
    points: 2500,
    badge: 'Style Icon'
  },
  {
    rank: 2,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    name: 'John Digital',
    points: 2300,
    badge: 'Trendsetter'
  },
  {
    rank: 3,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    name: 'Maria Fashion',
    points: 2100,
    badge: 'Rising Star'
  }
];

const missions = [
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Style Challenge',
    description: 'Create 3 unique outfits this week',
    reward: 'Limited Edition NFT',
    progress: 66
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Social Butterfly',
    description: 'Engage with 10 community posts',
    reward: '500 Style Points',
    progress: 40
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Collection Master',
    description: 'Complete your first collection',
    reward: 'Exclusive Badge',
    progress: 85
  }
];

export default function GamificationHub() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Style Champions
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Compete, complete missions, and earn exclusive rewards
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Leaderboard */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <h3 className="text-xl font-bold">Top Fashionistas</h3>
            </div>
            
            <div className="space-y-4">
              {leaderboardData.map((user) => (
                <div key={user.rank} className="flex items-center space-x-4 p-4 bg-purple-500/10 rounded-xl">
                  <span className="text-2xl font-bold text-purple-400">#{user.rank}</span>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{user.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-purple-400">{user.points} pts</span>
                      <span className="text-sm px-2 py-1 bg-purple-500/20 rounded-full">
                        {user.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Missions */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">Active Missions</h3>
            <div className="space-y-6">
              {missions.map((mission, index) => (
                <div key={index} className="p-4 bg-purple-500/10 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      {mission.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{mission.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">{mission.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-purple-400">{mission.reward}</span>
                        <span>{mission.progress}%</span>
                      </div>
                      <div className="mt-2 h-2 bg-purple-500/20 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
                          style={{ width: `${mission.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}