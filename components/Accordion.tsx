import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from './icons';

interface AccordionProps {
  title: React.ReactNode;
  icon: React.ReactNode;
  children: React.ReactNode;
  isCta?: boolean;
  defaultOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, icon, children, isCta = false, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  
  const ctaClasses = "bg-vibrant-blue/10 dark:bg-vibrant-blue/20 border-vibrant-blue";
  const defaultClasses = "bg-white dark:bg-deep-blue/50 border-warm-gray-light dark:border-deep-blue";
  
  return (
    <div className={`border rounded-lg overflow-hidden transition-all duration-300 ${isCta ? ctaClasses : defaultClasses}`}>
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 text-left font-semibold"
      >
        <div className="flex items-center space-x-3">
            <span className={isCta ? "text-vibrant-blue" : ""}>{icon}</span>
            <span>{title}</span>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDownIcon />
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-4 pt-0">
          {children}
        </div>
      </div>
    </div>
  );
};