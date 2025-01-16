'use client';
import Image from 'next/image';
import { dm_sans, inter } from '@/app/font'; // Assuming you have these fonts defined
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Ai_for_leaders_course, tanoy_mentor } from '@/utils';

const CoursesForLeaders = () => {
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
      <h2 className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}>
        Live AI Courses for <span className='text-blue-teal'>Leaders</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-start justify-center">
          <div className="w-full h-64 relative mb-4">
            <Image
              src={Ai_for_leaders_course} // Replace with actual image path
              alt="AI for Leaders Course"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className={`text-xl md:text-2xl text-blue-teal font-semibold mt-4 ${dm_sans.className}`}>
            AI for Leaders
          </h3>
          <p className={`text-gray-700 mt-2 md:text-lg font-semibold ${inter.className}`}>
            Course for leaders to gain actionable AI knowledge.
          </p>
          <ul className="list-disc mt-4 text-gray-800 font-medium md:text-lg">
            <li>2 days of interactive sessions</li>
            <li>3 hours of doubt clearing</li>
            <li>Access to QA exclusive resources</li>
            <li>Real-world case studies</li>
            <li>Price - <span className='text-red-600 line-through'>$1999</span> <span className='text-green-600'>$1499</span></li>
          </ul>
          <div className="flex mt-4">
            <button className="bg-blue-teal hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2">
              Enroll Now
            </button>
            <button className="border border-blue-teal hover:bg-gray-100 text-blue-teal font-bold py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="w-full h-64 relative mb-4">
            <Image
              src={tanoy_mentor} // Replace with actual image path
              alt="AI for SMEs Course"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <h3 className={`text-xl md:text-2xl text-blue-teal font-semibold mt-4 ${dm_sans.className}`}>
            AI for SMEs
          </h3>
          <p className={`text-gray-700 mt-2 md:text-lg font-semibold ${inter.className}`}>
            Course for SMEs to leverage AI for profit and efficiency.
          </p>
          <ul className="list-disc mt-4 text-gray-800 font-medium md:text-lg">
            <li>2 days of interactive sessions</li>
            <li>3 hours of doubt clearing</li>
            <li>Access to QA exclusive resources</li>
            <li>Real-world case studies</li>
            <li>Price - <span className='text-red-600 line-through'>$1999</span> <span className='text-green-600'>$1499</span></li>
          </ul>
          <div className="flex mt-4">
            <button className="bg-blue-teal hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2">
              Join Waitlist
            </button>
            <button className="border border-blue-teal hover:bg-gray-100 text-blue-teal font-bold py-2 px-4 rounded">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesForLeaders;
