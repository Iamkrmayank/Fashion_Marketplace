import React, { useState } from 'react';
import { Shield, CreditCard } from 'lucide-react';
import Modal from '../common/Modal';

interface Fabric {
  id: number;
  name: string;
  price: string;
  creator: string;
  image: string;
}

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  fabric: Fabric | null;
}

export default function PurchaseModal({ isOpen, onClose, fabric }: PurchaseModalProps) {
  const [licenseType, setLicenseType] = useState('single');
  
  if (!fabric) return null;

  const handlePurchase = () => {
    // Handle purchase logic here
    console.log('Purchasing fabric:', fabric.name, 'with license:', licenseType);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Purchase Fabric">
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <img
            src={fabric.image}
            alt={fabric.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="font-semibold">{fabric.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">by {fabric.creator}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium">Select License Type</h4>
          <div className="grid gap-4">
            <label className="relative flex items-center p-4 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <input
                type="radio"
                name="license"
                value="single"
                checked={licenseType === 'single'}
                onChange={(e) => setLicenseType(e.target.value)}
                className="hidden"
              />
              <div className="flex-1">
                <div className="font-medium">Single Use License</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Use this fabric in one design
                </div>
              </div>
              <div className="text-purple-600 dark:text-purple-400 font-semibold">
                {fabric.price}
              </div>
            </label>

            <label className="relative flex items-center p-4 border dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              <input
                type="radio"
                name="license"
                value="unlimited"
                checked={licenseType === 'unlimited'}
                onChange={(e) => setLicenseType(e.target.value)}
                className="hidden"
              />
              <div className="flex-1">
                <div className="font-medium">Unlimited License</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Unlimited use in any design
                </div>
              </div>
              <div className="text-purple-600 dark:text-purple-400 font-semibold">
                ${parseInt(fabric.price) * 5} per use
              </div>
            </label>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <div className="flex items-center space-x-2 text-sm text-purple-600 dark:text-purple-400">
            <Shield className="h-4 w-4" />
            <span>Secure blockchain-verified purchase</span>
          </div>
        </div>

        <button
          onClick={handlePurchase}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center space-x-2 transition-colors"
        >
          <CreditCard className="h-5 w-5" />
          <span>Complete Purchase</span>
        </button>
      </div>
    </Modal>
  );
}