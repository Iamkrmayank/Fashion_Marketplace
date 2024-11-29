import React from 'react';
import { Wallet, Shield, Zap, ArrowRight } from 'lucide-react';

const walletOptions = [
  {
    id: 'metamask',
    name: 'MetaMask',
    description: 'Connect to your MetaMask wallet',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg',
    popular: true
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    description: 'Connect to your Coinbase wallet',
    icon: 'https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg',
    popular: true
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    description: 'Connect with WalletConnect',
    icon: 'https://avatars.githubusercontent.com/u/37784886',
    popular: false
  }
];

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Secure Connection',
    description: 'Your assets are protected by industry-leading security protocols'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Instant Access',
    description: 'Start trading and collecting digital fashion immediately'
  },
  {
    icon: <Wallet className="h-6 w-6" />,
    title: 'Multiple Wallets',
    description: 'Support for all major Web3 wallets and platforms'
  }
];

export default function ConnectWallet() {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Connect Your Wallet
          </h1>
          <p className="text-gray-400 text-lg">
            Choose your preferred wallet to start collecting digital fashion
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          {walletOptions.map((wallet) => (
            <button
              key={wallet.id}
              className="flex items-center p-6 bg-purple-900/20 backdrop-blur-sm rounded-xl hover:bg-purple-900/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-6 flex-1 text-left">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">{wallet.name}</h3>
                  {wallet.popular && (
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mt-1">{wallet.description}</p>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-purple-900/20 backdrop-blur-sm"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>
            By connecting a wallet, you agree to MetaFashion's{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}