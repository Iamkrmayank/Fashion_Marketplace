import React, { useState } from 'react';
import { Calendar, Clock, Users, Bell, Shield } from 'lucide-react';
import Modal from './Modal';

interface Show {
  id: string;
  title: string;
  designer: string;
  date: string;
  time: string;
}

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  show: Show | null;
}

export default function RSVPModal({ isOpen, onClose, show }: RSVPModalProps) {
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);

  if (!show) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle RSVP submission
    console.log('RSVP submitted:', { show, email, notifications });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="RSVP for Virtual Fashion Show">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-purple-500/20 rounded-xl">
            <Calendar className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold">{show.title}</h3>
            <p className="text-sm text-gray-400">by {show.designer}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-purple-900/20 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
              <Calendar className="h-4 w-4" />
              <span>Date</span>
            </div>
            <p className="font-medium">{show.date}</p>
          </div>

          <div className="p-4 bg-purple-900/20 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
              <Clock className="h-4 w-4" />
              <span>Time</span>
            </div>
            <p className="font-medium">{show.time}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="rounded border-gray-400 text-purple-500 focus:ring-purple-500"
            />
            <span className="text-sm">Send me show reminders</span>
          </label>

          <div className="bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center space-x-2 text-sm text-purple-400">
              <Shield className="h-4 w-4" />
              <span>Your email will only be used for show-related updates</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2 transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span>Confirm RSVP</span>
          </button>
        </form>
      </div>
    </Modal>
  );
}