import React from 'react';
import Hero from '../components/Hero';
import FeaturedItems from '../components/FeaturedItems';
import VirtualRunway from '../components/VirtualRunway';
import DesignerSpotlight from '../components/DesignerSpotlight';
import CreateSection from '../components/CreateSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedItems />
      <VirtualRunway />
      <DesignerSpotlight />
      <CreateSection />
    </>
  );
}