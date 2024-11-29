import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, Coins } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { NavLink } from './navbar/NavLinks';
import MobileMenu from './navbar/MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
                MetaFashion
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="/runway">Virtual Runway</NavLink>
              <NavLink to="/nft-marketplace">NFT Market</NavLink>
              <NavLink to="/fabric-market">Fabric Market</NavLink>
              <NavLink to="/workshops">Workshops</NavLink>
              <NavLink to="/brands">Brand Collabs</NavLink>
              <NavLink to="/metacoin" className="flex items-center space-x-1">
                <Coins className="h-4 w-4" />
                <span>MetaCoin</span>
              </NavLink>
              <ThemeToggle />
              <Link 
                to="/auth" 
                className="px-6 py-2 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-full transition-all"
              >
                Sign In
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}