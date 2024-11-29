import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest digital fashion trends and events.
      </p>
      <form className="space-y-4">
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-purple-900/20 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </form>
    </div>
  );
}