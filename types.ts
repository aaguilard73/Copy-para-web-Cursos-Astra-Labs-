
import type { ReactNode } from 'react';

export interface CourseContentBlock {
  title: string;
  icon: ReactNode;
  text?: string;
  list?: string[];
}

export interface Course {
  id: number;
  icon: ReactNode;
  title: string;
  preview: string;
  content: {
    whatIsIt: CourseContentBlock;
    whatFor: CourseContentBlock;
    howItHelps: CourseContentBlock;
    benefits: CourseContentBlock;
    whyChoose: CourseContentBlock;
    cta: CourseContentBlock;
  };
  relatedCourseIds: number[];
}
