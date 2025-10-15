import React from 'react';
import type { Course } from '../types';
import { Highlight } from './Highlight';
import { KEYWORDS } from '../constants';

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelectCourse }) => {
  return (
    <div className="bg-white dark:bg-deep-blue rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-vibrant-blue/20 transform hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col overflow-hidden border border-transparent dark:hover:border-vibrant-blue/50">
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-vibrant-blue mb-4">
          {course.icon}
        </div>
        <h3 className="text-xl font-bold mb-3">
          <Highlight text={course.title} keywords={KEYWORDS} />
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {course.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold px-2 py-1 bg-vibrant-blue/10 dark:bg-vibrant-blue/20 text-vibrant-blue dark:text-smoke-white/80 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
          <Highlight text={course.preview} keywords={KEYWORDS} />
        </p>
      </div>
      <div className="p-6 bg-warm-gray-light/50 dark:bg-petrol-dark/50 mt-auto">
        <button
          onClick={() => onSelectCourse(course)}
          className="w-full text-center font-semibold text-vibrant-blue group"
        >
          Conocer más
          <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-200 ml-2">→</span>
        </button>
      </div>
    </div>
  );
};