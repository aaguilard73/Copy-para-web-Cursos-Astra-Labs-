import React, { useState, useMemo } from 'react';
import type { Course } from '../types';
import { CourseCard } from './CourseCard';
import { SearchIcon } from './icons';
import { Highlight } from './Highlight';
import { KEYWORDS } from '../constants';

interface CourseGridProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ courses, onSelectCourse }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    if (!searchTerm) {
      return courses;
    }
    return courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.preview.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, courses]);
  
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-deep-blue dark:text-smoke-white text-shine-effect animate-text-shine">
          <Highlight text="Nuestros Cursos de IA" keywords={KEYWORDS} />
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          <Highlight text="Capacitaciones diseñadas para potenciar tus habilidades y transformar tu forma de trabajar con inteligencia artificial." keywords={KEYWORDS} />
        </p>
      </div>

      <div className="mb-10 max-w-lg mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar un curso..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-deep-blue border-2 border-warm-gray-light dark:border-petrol-dark rounded-full focus:outline-none focus:ring-2 focus:ring-vibrant-blue transition-all duration-300"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </div>
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} onSelectCourse={onSelectCourse} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
            <p className="text-xl text-gray-500 dark:text-gray-400">No se encontraron cursos. Intenta con otra búsqueda.</p>
        </div>
      )}
    </section>
  );
};