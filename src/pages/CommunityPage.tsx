import React from 'react';
import GamificationHub from '../components/community/GamificationHub';
import UpcomingEvents from '../components/community/UpcomingEvents';

export default function CommunityPage() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <GamificationHub />
      <UpcomingEvents />
    </div>
  );
}