import React, { useState } from 'react';
import { Wallet, Shield, Key, AlertCircle } from 'lucide-react';

export default function ConnectWallet() {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const wallets = [
    {
      id: 'metamask',
      name: 'MetaMask',
      icon: <Wallet className="h-6 w-6" />,
      description: 'Connect using MetaMask browser extension'
    },
    {
      id: 'walletconnect',
      name: 'WalletConnect',
      icon: <Key className="h-6 w-6" />,
      description: 'Scan QR code with your mobile wallet'
    },
    {
      id: 'coinbase',
      name: 'Coinbase Wallet',
      icon: <Shield className="h-6 w-6" />,
      description: 'Connect using Coinbase Wallet'
    }
  ];

  const handleConnect = (walletId: string) => {
    setSelectedWallet(walletId);
    // Wallet connection logic would go here
  };

  return (
    <div className="pt-24 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="bg-purple-900/20 backdrop-blur-lg rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Connect Your Wallet
          </h1>
          
          <div className="space-y-4">
            {wallets.map((wallet) => (
              <button
                key={wallet.id}
                onClick={() => handleConnect(wallet.id)}
                className={`w-full p-4 rounded-xl transition-all ${
                  selectedWallet === wallet.id
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : 'bg-purple-900/30 hover:bg-purple-900/50'
                } flex items-center space-x-4`}
              >
                <div className="p-2 bg-purple-400/20 rounded-lg">
                  {wallet.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{wallet.name}</h3>
                  <p className="text-sm text-gray-400">{wallet.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 bg-purple-400/10 rounded-lg flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-purple-400 mt-0.5" />
            <p className="text-sm text-gray-300">
              By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
              Never share your private keys or seed phrases with anyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}