import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' }
];

export default function QuickLinks() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <ShoppingBag className="h-8 w-8 text-purple-400" />
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          MetaFashion
        </span>
      </div>
      <p className="text-gray-400 mb-6">
        Redefining fashion in the digital age. Join us in creating the future of style.
      </p>
      <nav className="grid grid-cols-2 gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}