import React from 'react';
import { Filter, Search, Calendar, Users, DollarSign, Tag } from 'lucide-react';

const projects = [
  {
    id: 1,
    brand: 'LuxuryBrand',
    logo: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80',
    title: 'Luxury Accessories Collection 2024',
    theme: 'Modern Minimalism',
    deadline: 'April 15, 2024',
    budget: 'Up to $10,000',
    slots: { open: 5, total: 10 },
    tags: ['Accessories', 'Luxury', 'Minimalist'],
    preview: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    brand: 'StreetStyle',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
    title: 'Urban Metaverse Collection',
    theme: 'Cyberpunk Street Fashion',
    deadline: 'April 20, 2024',
    budget: 'Revenue Share',
    slots: { open: 3, total: 8 },
    tags: ['Streetwear', 'Urban', 'Cyberpunk'],
    preview: 'https://images.unsplash.com/photo-1523380677598-64d85d015339?auto=format&fit=crop&q=80'
  }
];

const categories = ['All', 'Accessories', 'Streetwear', 'Luxury', 'Digital Art'];

export default function BrowseProjectsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Browse Brand Projects
          </h1>
          <p className="text-gray-400 text-lg">
            Find exciting collaboration opportunities with leading fashion brands
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-4 py-2 rounded-lg bg-purple-500/20 border-none focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <img
                    src={project.logo}
                    alt={project.brand}
                    className="w-12 h-12 rounded-full border-2 border-purple-400"
                  />
                  <span className="font-bold text-lg">{project.brand}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.theme}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Deadline: {project.deadline}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{project.slots.open}/{project.slots.total} slots available</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="flex items-center px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}