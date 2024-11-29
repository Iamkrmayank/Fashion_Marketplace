import React from 'react';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Digital Fashion Week',
    date: 'March 15, 2024',
    time: '18:00 UTC',
    location: 'Metaverse Central',
    attendees: 1420,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Style Challenge Finals',
    date: 'March 20, 2024',
    time: '20:00 UTC',
    location: 'Virtual Arena',
    attendees: 850,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Designer Workshop',
    date: 'March 25, 2024',
    time: '15:00 UTC',
    location: 'Creation Hub',
    attendees: 320,
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80'
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Upcoming Events
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Join exclusive fashion shows, challenges, and workshops
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-center text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                
                <button className="w-full py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors">
                  Reserve Your Seat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}