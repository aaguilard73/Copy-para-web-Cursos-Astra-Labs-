import React, { useState, useEffect, useRef } from 'react';
import { CompassIcon, CustomDesignIcon, FutureTechIcon } from './icons';
import { Highlight } from './Highlight';
import { KEYWORDS } from '../constants';

interface Phrase {
  text: string;
  icon: React.ReactNode;
}

const TypingEffect: React.FC<{ phrases: Phrase[] }> = ({ phrases }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const typingSpeed = 50; // ms per character
  const pauseDuration = 3000; // 3 seconds pause between phrases
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentText = phrases[phraseIndex].text;

    const handleTyping = () => {
      if (currentIndex < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, typingSpeed);
      } else {
        timeoutRef.current = setTimeout(() => {
          setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
          setCurrentIndex(0);
        }, pauseDuration);
      }
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isPaused) {
      handleTyping();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isPaused, phrases, phraseIndex]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const { text, icon } = phrases[phraseIndex];
  const isFinished = currentIndex >= text.length;

  const displayedText = text.substring(0, currentIndex);

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      role="timer" 
      aria-live="polite"
      className="flex items-start space-x-4"
    >
        <div className="text-vibrant-blue flex-shrink-0 mt-1">{icon}</div>
        <p className="text-2xl text-warm-gray-light leading-relaxed text-left">
            <Highlight text={displayedText} keywords={KEYWORDS} className="text-white font-bold" />
            {!isFinished && (
                <span 
                    className="inline-block w-0.5 h-7 bg-vibrant-blue ml-1 animate-pulse"
                    style={{ verticalAlign: 'middle' }}
                    aria-hidden="true"
                ></span>
            )}
        </p>
    </div>
  );
};


export const Footer: React.FC = () => {
  const customTrainingPhrases = [
    {
      icon: <CompassIcon />,
      text: "No todas las empresas enfrentan los mismos desafíos, y lo sabemos."
    },
    {
      icon: <CustomDesignIcon />,
      text: "En ASTRA LABS diseñamos programas de formación a la medida, alineados con los objetivos estratégicos de tu organización."
    },
    {
      icon: <FutureTechIcon />,
      text: "Creamos experiencias de aprendizaje que inspiran a tu equipo, resuelven sus retos diarios y los preparan para liderar el futuro con inteligencia artificial."
    }
  ];
  
  return (
    <footer className="bg-white dark:bg-deep-blue border-t border-warm-gray-light dark:border-petrol-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              <Highlight text="¿Listo para empezar?" keywords={KEYWORDS} />
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                <Highlight text="Contacta con nosotros para obtener más información sobre nuestros cursos o para agendar una reunión y discutir tus necesidades." keywords={KEYWORDS} />
            </p>
            <div className="flex justify-center items-center">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfCYNbQU188LOaSia0QV7j0Cpj--JMvkyA9TS4vF0lAbIQMlg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-vibrant-blue text-white font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Quiero más información
                </a>
            </div>
        </div>

        <div className="mt-16 mb-12">
          <div className="bg-deep-blue dark:bg-petrol-dark rounded-2xl p-8 sm:p-12 text-center shadow-2xl dark:shadow-vibrant-blue/10 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 text-white">
              <Highlight text="¿Buscas formación para tu equipo?" keywords={KEYWORDS} />
            </h3>
            <div className="min-h-[150px] sm:min-h-[120px] flex items-center justify-center max-w-3xl mx-auto">
                <TypingEffect phrases={customTrainingPhrases} />
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfCYNbQU188LOaSia0QV7j0Cpj--JMvkyA9TS4vF0lAbIQMlg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-8 py-3 bg-transparent border-2 border-vibrant-blue text-vibrant-blue font-semibold rounded-full hover:bg-vibrant-blue hover:text-white transition-all duration-300 transform hover:scale-105"
            >
                Contactar para un plan a medida
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};