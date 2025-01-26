'use client';

import Image from 'next/image';
import { dm_sans, inter } from '@/app/font'; // Assuming you have these fonts defined
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Gold_tier, platinum_tier, daimond_tier, ethics } from '@/utils';

const LiveAICoursesForDevelopers = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [current, setCurrent] = useState(0);

  const courses = [
    {
      title: 'Applied AI Gold Tier',
      description: 'Ideal for fresh graduates and early-career developers looking to build a solid foundation in AI.',
      points: [
        '24 hours of interactive sessions.',
        '4 Weeks of focussed upskilling',
        '2 career strategy sessions.',
        '4 introductory case studies.',
        'Access to a private community forum for networking.',
      ],
      price: {
        original: '$2699',
        discounted: '$2199',
      },
      link: '/applied-ai-gold-tier',
      image: Gold_tier,
      enrollLink: "https://buy.stripe.com/4gw4hdbsv7lg6VWdQT"

    },
    {
      title: 'Applied AI Platinum Tier',
      description: 'Perfect for mid-level AI developers ready to tackle intermediate challenges and advance their expertise.',
      points: [
        '28 hours of interactive sessions.',
        '4 weeks of focused upskilling with advanced tools and techniques.',
        '3 career strategy sessions with personalized mentorship.',
        '4 complex case studies with live feedback.',
        'Exclusive access to AI job boards and internships.',
        'Certification from a recognized AI institution.',
      ],
      price: {
        original: '$2999',
        discounted: '$2499',
      },
      link: '/applied-ai-platinum-tier',
      image: platinum_tier,
      enrollLink: "https://buy.stripe.com/14k8xtcwzdJEa88bIM"
    },
    {
      title: 'Applied AI Diamond Tier',
      description: 'Designed for ambitious AI professionals aiming for senior or leadership roles in the industry.',
      points: [
        '32 hours of advanced, interactive sessions.',
        '5 weeks of intensive upskilling with cutting-edge AI frameworks.',
        '1-on-1 career coaching sessions (2 sessions).',
        '4 advanced case studies addressing real-world leadership challenges.',
        'Priority access to executive-level networking events.',
        'Lifetime membership to an elite AI alumni group.',
        'Platinum certification with leadership credentials.',
      ],
      price: {
        original: '$3499',
        discounted: '$2799',
      },
      link: '/applied-ai-diamond-tier',
      image: daimond_tier,
      enrollLink: "https://buy.stripe.com/dR6dRNgMPfRMcggbIN"
    },
    {
      title: 'Applied AI Ethics',
      description: 'Learn to design, deploy, and manage AI systems that are ethical, inclusive, and aligned with legal and societal norms.',
      points: [
        '2 immersive days of live, highly engaging sessions tailored for professionals navigating the complexities of AI ethics.',
        '+Additional 3 hours of Exclusive Group Q&A post-training to tackle specific organizational challenges.',
        'Gain access to curated tools and resources designed to support ethical AI adoption in leadership roles.',
        'Engage in practical case studies and hands-on exercises to address real-world ethical dilemmas in AI applications',
      ],
      price: {
        original: '$1999',
        discounted: '$1499',
      },
      link: '/ai-ethics',
      image: ethics,
      enrollLink: " https://buy.stripe.com/5kA6plaoraxs4NOeUW"
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setCarouselWidth(totalWidth - visibleWidth);
    }
  }, []);

  const nextSlide = () => {
    const maxIndex = isDesktop ? Math.ceil(courses.length / 2) - 1 : courses.length - 1;
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    const maxIndex = isDesktop ? Math.ceil(courses.length / 2) - 1 : courses.length - 1;
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  return (
    <div
      className="bg-white rounded-lg py-10 shadow-md max-w-6xl mx-auto w-full"
      ref={containerRef}
    >
      <h2
        className={`text-3xl md:text-5xl font-semibold text-left mb-10 text-gray-navlink pl-4 ${dm_sans.className}`}
      >
        Live AI Courses for <span className="text-blue-teal">Developers</span>
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          ref={carouselRef}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className={`flex-shrink-0 ${isDesktop ? 'w-1/2' : 'w-full'} px-4`}
            >
              <div className="flex flex-col items-start max-w-6xl py-4 justify-between bg-gray-50 mx-auto rounded-lg shadow-md h-full relative">
                {/* Limited Seats Tag */}
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-3 rounded-full z-50">
                  Limited Seats
                </div>
                {/* Course Image */}
                <div className="w-full h-64 relative mb-4">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Course Details */}
                <h3
                  className={`text-xl md:text-2xl font-semibold text-blue-teal text-center ${dm_sans.className}`}
                >
                  {course.title}
                </h3>
                <p
                  className={`text-gray-navlink mt-2 text-base md:text-lg font-semibold ${inter.className}`}
                >
                  {course.description}
                </p>
                <ul className="list-disc mt-4 pl-5 text-gray-navlink font-medium md:text-lg flex-grow">
                  {course.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                  <li className="mt-2">
                    Investment -{' '}
                    <span className="text-red-600 line-through">
                      {course.price.original}
                    </span>{' '}
                    <span className="text-green-600">{course.price.discounted}</span>
                  </li>
                </ul>

                <div className='flex'>
                  <Link
                    href={course.enrollLink as string}
                    className="bg-blue-teal hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-2"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href={course.link}
                    className="border border-blue-teal hover:bg-gray-100 text-blue-teal font-semibold py-2 px-4 rounded"
                  >
                    Know More
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

        {/* Carousel Controls */}
        <div className="mt-8 mb-4 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full "
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full "
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveAICoursesForDevelopers;
