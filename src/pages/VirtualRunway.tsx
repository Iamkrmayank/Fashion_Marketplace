import React, { useState } from 'react';
import { Calendar, Star, Play, Pause, SkipForward, Share2, Users } from 'lucide-react';
import RSVPModal from '../components/common/RSVPModal';

interface Show {
  id: string;
  title: string;
  designer: string;
  date: string;
  time: string;
  thumbnail: string;
  viewers: number;
  isLive: boolean;
}

const upcomingShows: Show[] = [
  {
    id: 'show1',
    title: "Digital Couture Spring 2024",
    designer: "Elena Virtual",
    date: "March 15, 2024",
    time: "18:00 UTC",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
    viewers: 1420,
    isLive: true
  },
  {
    id: 'show2',
    title: "Metaverse Street Collection",
    designer: "Marcus Pixel",
    date: "March 16, 2024",
    time: "20:00 UTC",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
    viewers: 0,
    isLive: false
  },
  {
    id: 'show3',
    title: "NFT Fashion Gala",
    designer: "Sarah Digital",
    date: "March 17, 2024",
    time: "19:00 UTC",
    thumbnail: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80",
    viewers: 0,
    isLive: false
  }
];

export default function VirtualRunwayPage() {
  const [selectedShow, setSelectedShow] = useState<Show>(upcomingShows[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  return (
    <div className="pt-16 min-h-screen">
      {/* Main Stage */}
      <div className="relative h-[70vh] bg-gradient-to-b from-purple-900/20 to-black/20">
        <img
          src={selectedShow.thumbnail}
          alt={selectedShow.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        
        {/* Show Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{selectedShow.title}</h1>
                <p className="text-gray-300">{selectedShow.designer}</p>
              </div>
              <div className="flex items-center space-x-6">
                {selectedShow.isLive && (
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    <span>{selectedShow.viewers.toLocaleString()} watching</span>
                  </div>
                )}
                <div className="flex items-center space-x-4">
                  <button className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button 
                    className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                  <button className="p-3 rounded-full bg-purple-500 hover:bg-purple-600 transition-colors">
                    <SkipForward className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Shows */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Upcoming Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingShows.map((show) => (
            <div
              key={show.id}
              onClick={() => setSelectedShow(show)}
              className={`relative rounded-xl overflow-hidden cursor-pointer transition-all hover:transform hover:scale-105 ${
                selectedShow.id === show.id ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="relative h-48">
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                {show.isLive && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                    LIVE
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-semibold mb-1">{show.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span>{show.date}</span>
                    <span>{show.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RSVP Section */}
        <div className="mt-12 p-8 rounded-2xl bg-purple-900/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Don't Miss the Show</h3>
              <p className="text-gray-400">
                Get notified when the next virtual fashion show begins
              </p>
            </div>
            <button
              onClick={() => setIsRSVPModalOpen(true)}
              className="mt-4 md:mt-0 px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center space-x-2 transition-all"
            >
              <Star className="h-5 w-5" />
              <span>RSVP Now</span>
            </button>
          </div>
        </div>
      </div>

      <RSVPModal
        isOpen={isRSVPModalOpen}
        onClose={() => setIsRSVPModalOpen(false)}
        show={selectedShow}
      />
    </div>
  );
}