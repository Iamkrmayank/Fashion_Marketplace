import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeatureHighlight from '../components/landing/FeatureHighlight';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <FeatureHighlight />
    </div>
  );
}