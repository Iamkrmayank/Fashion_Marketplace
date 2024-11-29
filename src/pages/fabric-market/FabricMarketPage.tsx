import React from 'react';
import FabricHero from '../../components/fabric-market/FabricHero';
import FabricGrid from '../../components/fabric-market/FabricGrid';

export default function FabricMarketPage() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <FabricHero />
      <FabricGrid />
    </div>
  );
}