import React from 'react';
import { Link } from 'react-router-dom';
import { MobileNavLink } from './NavLinks';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-2 py-4 space-y-1">
          <MobileNavLink to="/shop" onClick={onClose}>Shop</MobileNavLink>
          <MobileNavLink to="/runway" onClick={onClose}>Virtual Runway</MobileNavLink>
          <MobileNavLink to="/nft-marketplace" onClick={onClose}>NFT Market</MobileNavLink>
          <MobileNavLink to="/fabric-market" onClick={onClose}>Fabric Market</MobileNavLink>
          <MobileNavLink to="/workshops" onClick={onClose}>Workshops</MobileNavLink>
          <MobileNavLink to="/subscription" onClick={onClose}>Pricing</MobileNavLink>
          <MobileNavLink to="/designer/dashboard" onClick={onClose}>For Designers</MobileNavLink>
          <MobileNavLink to="/community" onClick={onClose}>Community</MobileNavLink>
          
          <div className="px-2 pt-4">
            <Link
              to="/auth"
              onClick={onClose}
              className="w-full px-4 py-2 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-lg flex items-center justify-center transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}