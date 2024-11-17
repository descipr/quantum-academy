import React from 'react';

import CourseCard from './ui/CourseCard';
import { courses } from '@/constants';

const CourseSection: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 w-full">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        imageSrc={course.imageSrc}
                        title={course.title}
                        date={course.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseSection;
