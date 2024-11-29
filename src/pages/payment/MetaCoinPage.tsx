import React from 'react';
import { Coins, CreditCard, DollarSign, ArrowRight } from 'lucide-react';

const exchangeRates = [
  { currency: 'USD', rate: '1 MetaCoin = $1.00' },
  { currency: 'EUR', rate: '1 MetaCoin = €0.85' },
  { currency: 'GBP', rate: '1 MetaCoin = £0.73' }
];

const packages = [
  {
    amount: '100',
    bonus: '10',
    price: '$100',
    popular: false
  },
  {
    amount: '500',
    bonus: '75',
    price: '$500',
    popular: true
  },
  {
    amount: '1000',
    bonus: '200',
    price: '$1000',
    popular: false
  }
];

export default function MetaCoinPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Buy MetaCoin
          </h1>
          <p className="text-gray-400 text-lg">
            The official currency for digital fashion transactions
          </p>
        </div>

        {/* Exchange Rates */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {exchangeRates.map((rate, index) => (
            <div key={index} className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-2">
                <Coins className="h-5 w-5 text-purple-400" />
                <h3 className="font-semibold">{rate.currency}</h3>
              </div>
              <p className="text-2xl font-bold text-purple-400">{rate.rate}</p>
            </div>
          ))}
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 ${
                pkg.popular ? 'border-2 border-purple-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Coins className="h-6 w-6 text-purple-400" />
                  <span className="text-3xl font-bold">{pkg.amount}</span>
                </div>
                <p className="text-gray-400">+ {pkg.bonus} Bonus MetaCoins</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-purple-400">{pkg.price}</p>
              </div>

              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <CreditCard className="h-5 w-5" />
                <span>Purchase Now</span>
              </button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button className="p-4 border border-purple-500/30 rounded-xl flex items-center justify-between hover:bg-purple-500/10 transition-colors">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Credit/Debit Card</p>
                  <p className="text-sm text-gray-400">Visa, Mastercard, Amex</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-purple-400" />
            </button>

            <button className="p-4 border border-purple-500/30 rounded-xl flex items-center justify-between hover:bg-purple-500/10 transition-colors">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Bank Transfer</p>
                  <p className="text-sm text-gray-400">Direct bank payment</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-purple-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}