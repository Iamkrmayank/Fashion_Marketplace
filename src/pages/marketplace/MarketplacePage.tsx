import React from 'react';
import FeaturedDesigners from '../../components/marketplace/FeaturedDesigners';
import RecentlyAdded from '../../components/marketplace/RecentlyAdded';
import TrendingCollections from '../../components/marketplace/TrendingCollections';

export default function MarketplacePage() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <FeaturedDesigners />
      <RecentlyAdded />
      <TrendingCollections />
    </div>
  );
}