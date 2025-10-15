import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
      className="relative inline-flex items-center h-8 w-14 rounded-full bg-warm-gray-light dark:bg-petrol-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-vibrant-blue focus:ring-offset-2 dark:focus:ring-offset-petrol-dark"
    >
      <span
        className={`${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
        } inline-block w-6 h-6 transform bg-white dark:bg-deep-blue rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center`}
      >
        {theme === 'light' ? '☀️' : '🌙'}
      </span>
    </button>
  );
};