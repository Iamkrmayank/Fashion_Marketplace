import React from 'react';

interface SocialButtonProps {
  icon: 'google' | 'apple' | 'x';
  label: string;
  onClick: () => void;
}

export default function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  const getIcon = () => {
    switch (icon) {
      case 'google':
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        );
      case 'apple':
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.78 1.18-.19 2.31-.89 3.51-.84 1.54.07 2.7.6 3.44 1.51-3.03 1.81-2.52 5.87.22 7.22-.59 1.36-1.27 2.71-2.25 4.3zm-3.08-15.45c-.19 1.87 1.37 3.29 3.08 3.03.31-1.98-1.35-3.31-3.08-3.03z"
            />
          </svg>
        );
      case 'x':
        return (
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        );
    }
  };

  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 border dark:border-gray-700 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
    >
      {getIcon()}
      <span>{label}</span>
    </button>
  );
}