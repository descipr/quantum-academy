'use client';

import Image from 'next/image';
import { dm_sans, inter } from '@/app/font'; // Assuming you have these fonts defined
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { advanced, foundation, intermediate } from '@/utils';


const LiveAICoursesForDevelopers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-white p-10 rounded-lg shadow-md max-w-6xl mx-auto w-full" ref={containerRef}>
      <h2 className={`text-3xl md:text-5xl font-semibold text-left mb-10 ${dm_sans.className}`}>
        Live AI Courses for <span className='text-blue-teal'>Developers</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start justify-center">
          <div className="w-full h-64 relative mb-4">
            <Image
              src={foundation}
              alt="Applied AI Foundation Course"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className={`text-xl md:text-2xl font-semibold mt-4 text-blue-teal ${dm_sans.className}`}>
            Applied AI Foundation
          </h3>
          <p className={`text-gray-700 mt-2 md:text-lg font-medimum ${inter.className}`}>
            Aspiring data scientists and fresh graduates start here.
          </p>
          <ul className="list-disc mt-4 text-gray-600 font-medium md:text-lg">
            <li>24 hours of interactive sessions</li>
            <li>4 Weeks of focussed upskilling</li>
            <li>3 career strategy sessions</li>
            <li>4 introductory case studies</li>
            <li>Price - <span className='text-red-600 line-through'>$2499</span> <span className='text-green-600'>$1999</span></li>
          </ul>
          <button className="text-blue-teal border-blue-teal border font-bold py-2 px-4 rounded-lg mt-4">
            Coming Soon!
          </button>
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="w-full h-64 relative mb-4">
            <Image
              src={intermediate}
              alt="Applied AI Intermediate Course"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className={`text-xl md:text-2xl font-semibold mt-4 text-blue-teal ${dm_sans.className}`}>
            Applied AI Intermediate
          </h3>
          <p className={`text-gray-700 mt-2 md:text-lg font-medium ${inter.className}`}>
            Built a solid foundation? Take the next step.
          </p>
          <ul className="list-disc mt-4 text-gray-600 font-medium md:text-lg">
            <li>24 hours of interactive sessions</li>
            <li>4 Weeks of focussed upskilling</li>
            <li>3 career strategy sessions</li>
            <li>4 complex case studies</li>
            <li>Price - <span className='text-red-600 line-through'>$2999</span> <span className='text-green-600'>$2199</span></li>
          </ul>
          <button className="text-blue-teal border-blue-teal border font-bold py-2 px-4 rounded-lg mt-4">
            Coming Soon!
          </button>
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="w-full h-64 relative mb-4">
            <Image
              src={advanced}
              alt="Applied AI Advanced Course"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className={`text-xl md:text-2xl font-semibold mt-4 text-blue-teal ${dm_sans.className}`}>
            Applied AI Advanced
          </h3>
          <p className={`text-gray-700 mt-2 md:text-lg font-medium ${inter.className}`}>
            Ambitious data scientists aiming for senior roles.
          </p>
          <ul className="list-disc mt-4 text-gray-600 font-medium md:text-lg">
            <li>24 hours of interactive sessions</li>
            <li>4 Weeks of focussed upskilling</li>
            <li>3 career strategy sessions</li>
            <li>4 advanced case studies</li>
            <li>Price - <span className='text-red-600 line-through'>$3499</span> <span className='text-green-600'>$2499</span></li>
          </ul>
          <button className=" text-blue-teal border-blue-teal border font-bold py-2 px-4 rounded-lg mt-4">
            Coming Soon!
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveAICoursesForDevelopers;