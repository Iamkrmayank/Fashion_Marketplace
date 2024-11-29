import React from 'react';
import QuickLinks from './QuickLinks';
import SocialLinks from './SocialLinks';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <QuickLinks />
          <SocialLinks />
          <Newsletter />
          <Testimonials />
        </div>
        
        <div className="border-t border-gray-800 py-8 text-center">
          <p className="text-gray-400">© 2024 MetaFashion. Step into the future of style.</p>
        </div>
      </div>
    </footer>
  );
}