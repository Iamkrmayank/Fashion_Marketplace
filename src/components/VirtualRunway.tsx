import React from 'react';
import { Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VirtualRunway() {
  return (
    <section id="runway" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/50 to-black dark:from-black dark:via-purple-900/50 dark:to-black" />
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
          Virtual Fashion Week
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-purple-600 dark:text-purple-400">
              <Calendar className="h-6 w-6" />
              <span className="text-xl">Next Show: March 15, 2024</span>
            </div>
            <h3 className="text-3xl font-bold">Experience Fashion Like Never Before</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Join us for an immersive virtual fashion experience featuring the world's top designers.
              Watch stunning digital collections come to life in our metaverse runway.
            </p>
            <Link 
              to="/runway"
              className="inline-flex px-8 py-3 bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-full items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Star className="h-5 w-5" />
              <span>Enter Virtual Runway</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80"
                  alt="Virtual Fashion Show"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80"
                  alt="Digital Runway"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80"
                  alt="Fashion Week"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="h-48 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80"
                  alt="Digital Fashion"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}