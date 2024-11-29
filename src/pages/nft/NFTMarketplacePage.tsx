import React from 'react';
import NFTHero from '../../components/nft/NFTHero';
import NFTGrid from '../../components/nft/NFTGrid';
import TrendingCollections from '../../components/marketplace/TrendingCollections';

export default function NFTMarketplacePage() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <NFTHero />
      <NFTGrid />
      <TrendingCollections />
    </div>
  );
}