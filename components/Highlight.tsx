import React from 'react';

interface HighlightProps {
  text: string;
  keywords: string[];
  className?: string;
}

const highlightClass = "text-petrol-dark dark:text-smoke-white font-bold";

export const Highlight: React.FC<HighlightProps> = ({ text, keywords, className }) => {
  if (!keywords || !keywords.length || !text) {
    return <>{text}</>;
  }

  // Create a regex to find all keywords, case-insensitive, as whole words.
  const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
  
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const isKeyword = keywords.some(kw => kw.toLowerCase() === part.toLowerCase());
        if (isKeyword) {
          return (
            <span key={index} className={className || highlightClass}>
              {part}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};