import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Upload, TrendingUp, Trophy, DollarSign, Users } from 'lucide-react';
import StatsCard from '../../components/designer/StatsCard';
import DesignerLeaderboard from '../../components/designer/DesignerLeaderboard';
import RecentDesigns from '../../components/designer/RecentDesigns';

export default function DesignerDashboard() {
  const stats = [
    { icon: <DollarSign className="h-6 w-6" />, label: 'Total Earnings', value: '$12,450' },
    { icon: <Upload className="h-6 w-6" />, label: 'Designs Uploaded', value: '24' },
    { icon: <Users className="h-6 w-6" />, label: 'Total Collectors', value: '156' },
    { icon: <TrendingUp className="h-6 w-6" />, label: 'Growth Rate', value: '+27%' }
  ];

  return (
    <div className="pt-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Designer Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your digital fashion empire
            </p>
          </div>
          <Link
            to="/designer/studio"
            className="mt-4 md:mt-0 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105"
          >
            <Palette className="h-5 w-5" />
            <span>Create New Design</span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Designs */}
          <div className="lg:col-span-2">
            <RecentDesigns />
          </div>

          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <DesignerLeaderboard />
          </div>
        </div>
      </div>
    </div>
  );
}