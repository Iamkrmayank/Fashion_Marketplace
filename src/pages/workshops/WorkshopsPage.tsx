import React from 'react';
import WorkshopHero from '../../components/workshops/WorkshopHero';
import WorkshopGrid from '../../components/workshops/WorkshopGrid';

export default function WorkshopsPage() {
  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      <WorkshopHero />
      <WorkshopGrid />
    </div>
  );
}