import React from 'react';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: '$10',
    icon: <Star className="h-6 w-6" />,
    features: [
      'Access to basic collections',
      'Virtual try-on feature',
      'Basic customization tools',
      'Community access'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: 'Pro',
    price: '$25',
    icon: <Crown className="h-6 w-6" />,
    features: [
      'Everything in Basic',
      'Early access to new designs',
      'Advanced customization tools',
      'Priority support',
      'Exclusive events access'
    ],
    color: 'from-pink-400 to-purple-600',
    popular: true
  },
  {
    name: 'Elite',
    price: '$50',
    icon: <Sparkles className="h-6 w-6" />,
    features: [
      'Everything in Pro',
      'VIP fashion show access',
      'Personal styling assistant',
      'Custom design requests',
      'Unlimited downloads',
      'Priority minting'
    ],
    color: 'from-yellow-400 to-pink-600'
  }
];

export default function SubscriptionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Choose Your Style Level
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Unlock exclusive perks and elevate your digital fashion experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-purple-900/20 backdrop-blur-sm p-8 ${
                tier.popular ? 'transform scale-105 border-2 border-purple-500' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className={`bg-gradient-to-r ${tier.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                {tier.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-purple-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full ${
                  tier.popular
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-purple-500/20 hover:bg-purple-500/30'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}