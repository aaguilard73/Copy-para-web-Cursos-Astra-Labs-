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
          <div className="flex items-center space-x-2 sm:space-x-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCYNbQU188LOaSia0QV7j0Cpj--JMvkyA9TS4vF0lAbIQMlg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-semibold text-white bg-vibrant-blue rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Solicita Información
            </a>
            <a
              href="https://astralabs.inte.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 text-sm font-semibold text-vibrant-blue bg-white/80 dark:bg-deep-blue/80 border border-vibrant-blue/30 rounded-full hover:bg-vibrant-blue/10 dark:hover:bg-vibrant-blue/20 transition-colors duration-300 hidden sm:inline-block"
            >
              Volver a inicio
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};