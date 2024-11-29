import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function StatsCard({ icon, label, value }: StatsCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:transform hover:scale-105 transition-all">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-purple-500/20 rounded-xl">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}