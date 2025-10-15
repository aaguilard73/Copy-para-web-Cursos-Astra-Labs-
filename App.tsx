import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { CourseGrid } from './components/CourseGrid';
import { CourseModal } from './components/CourseModal';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import type { Course } from './types';
import { COURSES } from './constants';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [sessionViewedCourses, setSessionViewedCourses] = useState<Set<number>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);
  
  useEffect(() => {
    const checkScrollTop = () => {
      // Show button if we're more than 400px down
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const handleSelectCourse = useCallback((course: Course) => {
    setSelectedCourse(course);
    document.body.style.overflow = 'hidden';

    setSessionViewedCourses(prev => {
      const newSet = new Set(prev);
      newSet.add(course.id);
      if (newSet.size >= COURSES.length) {
        // Cycle complete, reset for the next cycle, starting with the current course.
        return new Set([course.id]);
      }
      return newSet;
    });
  }, []);

  const handleCloseModal = () => {
    setSelectedCourse(null);
    document.body.style.overflow = 'auto';
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-smoke-white dark:bg-petrol-dark min-h-screen font-sans text-deep-blue dark:text-smoke-white transition-colors duration-500">
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CourseGrid courses={COURSES} onSelectCourse={handleSelectCourse} />
      </main>
      <Footer />
      <CourseModal 
        course={selectedCourse} 
        onClose={handleCloseModal} 
        onSelectCourse={handleSelectCourse}
        sessionViewedCourses={sessionViewedCourses}
      />
      <ScrollToTopButton isVisible={showScrollTop} onScroll={handleScrollToTop} />
    </div>
  );
};

export default App;