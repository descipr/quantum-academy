import React from 'react';
import Image from 'next/image';
import CourseSection from './CourseSection';
import { BackgroundLogo } from '@/utils';


const Hero: React.FC = () => {
    return (
        <section className="section-style items-center">
            <Image
                src={BackgroundLogo}
                alt="background image"
                width={480}
                className="absolute top-0 right-0 -z-10"
            />
            <div className="relative flex flex-col items-center justify-center leading-relaxed tracking-wide space-y-5 md:space-y-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-7xl font-bold text-center text-white">
                        Become a{' '}
                        <span className=" text-green-primary font-Plus-jakarta">360-degree</span>
                    </h1>
                    <h1 className="text-3xl md:text-6xl font-bold text-center text-green-primary mt-1 md:mt-3">
                        AI Professional
                    </h1>
                </div>
                <p className="text-sm md:text-lg text-white text-center font-normal">
                    Fast-track your career with live Cohort-based{' '}
                    <span className="text-green-primary font-medium">
                        learning and mentorship from Hiring managers
                    </span>
                </p>
            </div>
            <CourseSection />
        </section>
    );
};

export default Hero;
