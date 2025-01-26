'use client';
import Image from 'next/image';
import { dm_sans, inter } from '@/app/font'; // Assuming you have these fonts defined
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Ai_for_leaders_course, tanoy_mentor } from '@/utils';
import Link from 'next/link';

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
    <div className="bg-white  rounded-lg shadow-md max-w-6xl w-full py-10" id="courses" ref={containerRef}>
      <h2 className={`text-3xl md:text-5xl font-semibold text-left text-gray-navlink pl-4 mb-10 ${dm_sans.className}`}>
        Live AI Courses for <span className="text-blue-teal">Leaders</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI for Leaders */}
        <div className="flex flex-col justify-between bg-gray-50 p-6 rounded-lg shadow-md h-full">
          <div>
            <div className="w-full h-64 relative mb-4">
              <Image
                src={Ai_for_leaders_course} // Replace with actual image path
                alt="AI for Leaders Course"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className={`text-xl md:text-2xl text-blue-teal font-semibold ${dm_sans.className}`}>
              AI for Leaders
            </h3>
            <p className={`text-gray-navlink mt-2 text-base md:text-lg font-semibold ${inter.className}`}>
              Empower leaders to confidently drive AI initiatives in their organizations.
            </p>
            <ul className="list-disc mt-4 pl-5 text-gray-navlink font-medium md:text-base">
              <li>2 packed days of live, highly interactive sessions tailored for strategic decision-makers.</li>
              <li>+Additional 3 hours of Exclusive Group Q&A after the training to address specific leadership challenges.</li>
              <li>Access to curated executive resources designed for C-suite and senior leadership.</li>
              <li>Hands-on exploration of real-world AI use cases for business transformation.</li>
              <li>
                Investment -{' '}
                <span className="text-red-600 line-through">$1999</span>{' '}
                <span className="text-green-600">$1499</span>
              </li>
            </ul>
          </div>
          <div className="flex mt-4 pl-2">
            <Link
              href="https://buy.stripe.com/6oE6pl2VZgVQ0xyfYY"
              className="bg-blue-teal hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              Enroll Now
            </Link>
            <Link
              href="/ai-for-business-leaders"
              className="border border-blue-teal hover:bg-gray-100 text-blue-teal font-semibold py-2 px-4 rounded"
            >
              Know More
            </Link>
          </div>
        </div>

        {/* AI for SMEs */}
        <div className="flex flex-col justify-between bg-gray-50 p-6 rounded-lg shadow-md h-full">
          <div>
            <div className="w-full h-64 relative mb-4">
              <Image
                src={tanoy_mentor} // Replace with actual image path
                alt="AI for SMEs Course"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className={`text-xl md:text-2xl text-blue-teal font-semibold ${dm_sans.className}`}>
              AI for SMEs
            </h3>
            <p className={`text-gray-700 mt-2 md:text-lg font-semibold ${inter.className}`}>
              Unlock the potential of AI to streamline operations and boost profitability
            </p>
            <ul className="list-disc mt-4 pl-5 text-gray-800 font-medium md:text-base">
              <li>2 days of practical, action-oriented sessions focused on small and medium enterprises.</li>
              <li>+Additional 3 hours of Interactive Group Q&A after the training to solve operational challenges.</li>
              <li>Access to SME-focused resources and use cases for immediate implementation.</li>
              <li>Case studies showcasing real-world examples of how SMEs are leveraging AI.</li>
              <li>
                Investment -{' '}
                <span className="text-red-600 line-through">$1999</span>{' '}
                <span className="text-green-600">$1499</span>
              </li>
            </ul>
          </div>
          <div className="flex mt-4 pl-2">
            <Link
              href="https://buy.stripe.com/bIY295gMP9tocggdQR"
              className="bg-blue-teal hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              Enroll Now
            </Link>
            <Link
              href="/ai-for-sme"
              className="border border-blue-teal hover:bg-gray-100 text-blue-teal font-semibold py-2 px-4 rounded"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesForLeaders;
