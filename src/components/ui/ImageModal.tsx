import React from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, alt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-w-full max-h-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-400 text-2xl font-bold"
        >
          ×
        </button>
        <img
          src={imageSrc}
          alt={alt}
          className="max-w-full max-h-screen rounded shadow-lg"
        />
      </div>
    </div>
  );
};
