import React from 'react';
import NFTForm from '../../components/nft/create/NFTForm';
import NFTPreview from '../../components/nft/create/NFTPreview';

export default function CreateNFTPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Create Your NFT
          </h1>
          <p className="text-gray-400 text-lg">
            Turn your digital fashion designs into unique NFTs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <NFTForm />
          <NFTPreview />
        </div>
      </div>
    </div>
  );
}