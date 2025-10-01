import React, { useEffect, useCallback, useRef, useMemo } from 'react';
// FIX: Import CourseContentBlock to use for type annotation.
import type { Course, CourseContentBlock } from '../types';
import { COURSES, KEYWORDS } from '../constants';
import { Accordion } from './Accordion';
import { XIcon } from './icons';
import { Highlight } from './Highlight';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onSelectCourse: (course: Course) => void;
  sessionViewedCourses: Set<number>;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onSelectCourse, sessionViewedCourses }) => {
  const contentAreaRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (course && contentAreaRef.current) {
      contentAreaRef.current.scrollTop = 0;
    }
  }, [course]);

  const relatedCourses = useMemo(() => {
    if (!course) return [];

    const shuffle = (array: Course[]): Course[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const otherCourses = COURSES.filter(c => c.id !== course.id);

    const notYetViewed = otherCourses.filter(c => !sessionViewedCourses.has(c.id));
    const alreadyViewed = otherCourses.filter(c => sessionViewedCourses.has(c.id));

    // Prioritize not-yet-viewed courses, but show all other available courses.
    return [...shuffle(notYetViewed), ...shuffle(alreadyViewed)];

  }, [course, sessionViewedCourses]);
  
  // FIX: Explicitly type `contentBlocks` as `CourseContentBlock[]` to resolve type inference issues with `Object.values`.
  // This fixes errors where properties on `block` inside `contentBlocks.map` were not found because `block` was of type `unknown`.
  const contentBlocks: CourseContentBlock[] = course ? Object.values(course.content) : [];

  return (
    <div
      className={`fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
        course ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={course ? 'course-modal-title' : undefined}
      aria-hidden={!course}
    >
      <div
        className={`w-full max-w-4xl max-h-[90vh] bg-smoke-white dark:bg-petrol-dark shadow-2xl rounded-xl flex flex-col transform transition-all duration-300 ease-in-out ${
          course ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={e => e.stopPropagation()}
      >
        {course && (
          <>
            <header className="p-6 flex justify-between items-center border-b border-warm-gray-light dark:border-deep-blue flex-shrink-0">
              <div className="flex items-center space-x-4">
                <span className="text-vibrant-blue">{course.icon}</span>
                <h2 id="course-modal-title" className="text-2xl font-bold">
                  <Highlight text={course.title} keywords={KEYWORDS} />
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-warm-gray-light dark:hover:bg-deep-blue transition-colors"
                aria-label="Cerrar modal"
              >
                <XIcon />
              </button>
            </header>

            <div ref={contentAreaRef} className="flex-grow overflow-y-auto p-8 space-y-4">
              {contentBlocks.map((block, index) => {
                const isCtaBlock = block.title === course.content.cta.title;
                
                if (isCtaBlock && block.text) {
                  return (
                    <div
                      key={`${course.id}-${index}`}
                      className="bg-vibrant-blue/10 dark:bg-vibrant-blue/20 border border-vibrant-blue rounded-lg p-6 shadow-lg"
                      aria-label={block.title}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-vibrant-blue">{block.icon}</span>
                        <h3 className="text-xl font-bold">
                          <Highlight text={block.title} keywords={KEYWORDS} />
                        </h3>
                      </div>
                      <div>
                        {block.text.split('\n').map((line, i) => (
                          <p key={i} className={`text-gray-700 dark:text-gray-300 leading-relaxed ${i === 0 ? 'font-bold mb-2' : ''}`}>
                            <Highlight text={line.trim()} keywords={KEYWORDS} />
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Accordion
                    key={`${course.id}-${index}`}
                    title={<Highlight text={block.title} keywords={KEYWORDS} />}
                    icon={block.icon}
                    isCta={false}
                    defaultOpen={index === 0}
                  >
                    {block.text && <p className="text-gray-700 dark:text-gray-300 leading-relaxed"><Highlight text={block.text} keywords={KEYWORDS} /></p>}
                    {block.list && (
                      <ul className="space-y-3 pl-5 list-disc text-gray-700 dark:text-gray-300 leading-relaxed">
                        {block.list.map((item, i) => <li key={i}><Highlight text={item} keywords={KEYWORDS} /></li>)}
                      </ul>
                    )}
                  </Accordion>
                );
              })}
              
              <div className="pt-8 mt-8 border-t border-warm-gray-light dark:border-deep-blue">
                  <h3 className="text-lg font-semibold mb-4 text-deep-blue dark:text-warm-gray-light">
                    <Highlight text="Si te interesa este curso, también te puede interesar:" keywords={KEYWORDS} />
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedCourses.map(related => (
                          <button 
                            key={related.id} 
                            onClick={() => onSelectCourse(related)}
                            className="w-full text-left bg-white dark:bg-deep-blue p-4 rounded-lg border border-warm-gray-light dark:border-petrol-dark hover:bg-warm-gray-light/50 dark:hover:bg-petrol-dark/50 hover:border-vibrant-blue/50 dark:hover:border-vibrant-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-vibrant-blue"
                          >
                              <div className="flex items-center space-x-3">
                                  <span className="text-vibrant-blue">{related.icon}</span>
                                  <p className="font-semibold">
                                    <Highlight text={related.title} keywords={KEYWORDS} />
                                  </p>
                              </div>
                          </button>
                      ))}
                  </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
