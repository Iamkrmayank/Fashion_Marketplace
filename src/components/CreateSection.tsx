import React, { useState } from 'react';
import { Palette, Upload, Zap, Users, Shirt, Camera } from 'lucide-react';

export default function CreateSection() {
  const [selectedDesign, setSelectedDesign] = useState<string>('tshirt');
  const [selectedColor, setSelectedColor] = useState<string>('#6B46C1');

  const features = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design Tools",
      description: "Access professional-grade digital fashion design tools"
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Easy Upload",
      description: "Convert your designs into wearable digital assets"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Minting",
      description: "Mint your fashion pieces as unique NFTs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Join a community of digital fashion creators"
    }
  ];

  const designTypes = [
    { id: 'tshirt', name: 'T-Shirt', icon: <Shirt /> },
    { id: 'dress', name: 'Dress', icon: <Shirt /> },
    { id: 'jacket', name: 'Jacket', icon: <Shirt /> }
  ];

  return (
    <section id="create" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Design Your Digital Fashion
            </h2>
            
            {/* Design Controls */}
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Choose Design Type</h3>
                <div className="grid grid-cols-3 gap-4">
                  {designTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedDesign(type.id)}
                      className={`p-4 rounded-lg flex flex-col items-center space-y-2 transition-all ${
                        selectedDesign === type.id
                          ? 'bg-purple-500'
                          : 'bg-purple-900/30 hover:bg-purple-900/50'
                      }`}
                    >
                      {type.icon}
                      <span>{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Customize</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Color</label>
                    <input
                      type="color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className="w-full h-10 rounded-lg cursor-pointer"
                    />
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-purple-900/30 hover:bg-purple-900/50 rounded-lg flex items-center justify-center space-x-2">
                    <Camera className="h-5 w-5" />
                    <span>Upload Pattern/Texture</span>
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-all transform hover:scale-105">
              Preview in Metaverse
            </button>
          </div>
          
          {/* Preview Section */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-lg" />
            <div className="relative rounded-lg overflow-hidden bg-purple-900/20 backdrop-blur-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Live Preview</h3>
              <div className="aspect-square rounded-lg overflow-hidden bg-purple-900/30">
                {/* This would be replaced with a 3D preview component */}
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400">3D Preview Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="p-4 rounded-lg bg-purple-900/20 backdrop-blur-sm">
              <div className="text-purple-400 mb-2">{feature.icon}</div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}