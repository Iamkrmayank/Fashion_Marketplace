import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ to, children, onClick }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export function MobileNavLink({ to, children, onClick }: NavLinkProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="w-full px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-500/10 rounded-lg transition-all"
    >
      {children}
    </Link>
  );
}