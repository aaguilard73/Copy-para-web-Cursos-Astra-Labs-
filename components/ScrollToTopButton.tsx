import React from 'react';
import { ChevronUpIcon } from './icons';

interface ScrollToTopButtonProps {
  isVisible: boolean;
  onScroll: () => void;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ isVisible, onScroll }) => {
  return (
    <button
      onClick={onScroll}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 p-3 bg-vibrant-blue text-white rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-vibrant-blue focus:ring-offset-2 dark:focus:ring-offset-petrol-dark ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUpIcon />
    </button>
  );
};
