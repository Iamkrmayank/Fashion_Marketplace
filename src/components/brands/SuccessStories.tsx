import React from 'react';
import { Star, Award, TrendingUp, DollarSign } from 'lucide-react';

const stories = [
  {
    designer: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      role: 'Digital Fashion Designer'
    },
    brand: {
      name: 'LuxuryBrand',
      logo: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80'
    },
    project: {
      title: 'Neo-Classic Collection',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
      stats: {
        revenue: '$50K+',
        sales: '1.2K',
        growth: '+127%'
      }
    },
    testimonial: "Collaborating with LuxuryBrand opened up incredible opportunities. The support and creative freedom were exceptional."
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Success Stories
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          See how designers are transforming their careers through brand collaborations
        </p>

        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-purple-900/20 backdrop-blur-sm rounded-2xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video">
                <img
                  src={story.project.image}
                  alt={story.project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="p-4 bg-purple-600/80 rounded-full transform group-hover:scale-110 transition-transform">
                    <Star className="h-8 w-8" />
                  </div>
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.designer.avatar}
                    alt={story.designer.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{story.designer.name}</h3>
                    <p className="text-gray-400">{story.designer.role}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.brand.logo}
                    alt={story.brand.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">× {story.brand.name}</h3>
                    <p className="text-gray-400">{story.project.title}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 italic mb-8">
                  "{story.testimonial}"
                </blockquote>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-purple-500/20 rounded-lg">
                    <DollarSign className="h-5 w-5 text-purple-400 mb-2" />
                    <p className="font-bold">{story.project.stats.revenue}</p>
                    <p className="text-sm text-gray-400">Revenue</p>
                  </div>
                  <div className="p-4 bg-purple-500/20 rounded-lg">
                    <Award className="h-5 w-5 text-purple-400 mb-2" />
                    <p className="font-bold">{story.project.stats.sales}</p>
                    <p className="text-sm text-gray-400">Sales</p>
                  </div>
                  <div className="p-4 bg-purple-500/20 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-400 mb-2" />
                    <p className="font-bold">{story.project.stats.growth}</p>
                    <p className="text-sm text-gray-400">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}