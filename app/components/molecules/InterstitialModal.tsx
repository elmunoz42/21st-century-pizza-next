'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface InterstitialModalProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  enabled: boolean;
}

export const InterstitialModal: React.FC<InterstitialModalProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  enabled = true, // Default to true if not provided
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when component mounts
    if (!enabled) return; // If modal is not enabled, do not show
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, [enabled]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        
        {/* Modal content */}
        <div className="p-6 text-center">
          <div className="mb-4">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={380}
              height={380}  
              className="mx-auto rounded-lg"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {title}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          
          <button
            onClick={closeModal}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};
