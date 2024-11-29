import React from 'react';
import BrandHero from '../../components/brands/BrandHero';
import ActiveProjects from '../../components/brands/ActiveProjects';
import SuccessStories from '../../components/brands/SuccessStories';

export default function BrandCollaborationPage() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <BrandHero />
      <ActiveProjects />
      <SuccessStories />
    </div>
  );
}