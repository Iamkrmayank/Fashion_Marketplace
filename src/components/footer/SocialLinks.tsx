import React from 'react';
import { Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    icon: <Instagram className="h-5 w-5" />,
    label: 'Instagram',
    href: 'https://instagram.com'
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    label: 'Twitter',
    href: 'https://twitter.com'
  },
  {
    icon: <Youtube className="h-5 w-5" />,
    label: 'YouTube',
    href: 'https://youtube.com'
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: 'Discord',
    href: 'https://discord.gg'
  }
];

export default function SocialLinks() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
      <div className="space-y-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors"
          >
            {social.icon}
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}