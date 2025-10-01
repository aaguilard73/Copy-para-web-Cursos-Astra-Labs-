
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  return (
    <header className="bg-white/50 dark:bg-deep-blue/50 backdrop-blur-lg sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold tracking-wider text-vibrant-blue">
              ASTRA<span className="text-deep-blue dark:text-smoke-white">LABS</span>
            </div>
            <h1 className="text-xl font-semibold text-deep-blue dark:text-warm-gray-light hidden sm:block">
              Formaciones
            </h1>
          </div>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
};
