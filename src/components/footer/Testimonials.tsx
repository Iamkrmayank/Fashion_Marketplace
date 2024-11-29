import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "MetaFashion has revolutionized how I express myself in the digital world.",
    author: "Alex M.",
    role: "Digital Fashion Creator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80"
  },
  {
    quote: "The future of fashion is here, and it's more inclusive than ever.",
    author: "Sarah K.",
    role: "Fashion Influencer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">What Our Community Says</h3>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="space-y-3">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-400 italic">"{testimonial.quote}"</p>
            <div className="flex items-center space-x-3">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}