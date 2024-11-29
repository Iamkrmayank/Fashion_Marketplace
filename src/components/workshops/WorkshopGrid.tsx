import React from 'react';
import { Calendar, Users, Clock, Star } from 'lucide-react';

const workshops = [
  {
    id: 1,
    title: 'Mastering 3D Draping',
    host: 'Elena Virtual',
    date: 'March 15, 2024',
    time: '18:00 UTC',
    duration: '2 hours',
    level: 'Intermediate',
    price: '$20',
    attendees: 45,
    maxAttendees: 50,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Digital Texturing Workshop',
    host: 'Marcus Pixel',
    date: 'March 20, 2024',
    time: '15:00 UTC',
    duration: '1.5 hours',
    level: 'Beginner',
    price: 'Free',
    attendees: 120,
    maxAttendees: 200,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Advanced Pattern Making',
    host: 'Sarah Digital',
    date: 'March 25, 2024',
    time: '20:00 UTC',
    duration: '3 hours',
    level: 'Advanced',
    price: '$35',
    attendees: 28,
    maxAttendees: 30,
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80'
  }
];

export default function WorkshopGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    workshop.level === 'Beginner'
                      ? 'bg-green-500/20 text-green-400'
                      : workshop.level === 'Intermediate'
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {workshop.level}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                <p className="text-gray-400 mb-4">by {workshop.host}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{workshop.time} ({workshop.duration})</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{workshop.attendees}/{workshop.maxAttendees} spots</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-purple-400">
                    {workshop.price}
                  </span>
                  <button className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg flex items-center space-x-2 transition-colors">
                    <Star className="h-4 w-4" />
                    <span>Reserve Seat</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}