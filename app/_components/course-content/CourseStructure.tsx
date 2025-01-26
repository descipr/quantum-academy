"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

interface CourseItem {
  id: number;
  title: string;
  description: string | string[]; // Can be a paragraph or an array of points
}

interface CourseStructureProps {
  heading: string;
  courseItems: CourseItem[];
}

const CourseStructure: React.FC<CourseStructureProps> = ({
  heading,
  courseItems,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="py-10 px-6 bg-white max-w-6xl mx-auto w-full">
      <h2 className={`text-3xl md:text-5xl font-bold text-left mb-12 ${dm_sans.className}`}>
        {heading}
      </h2>
      <div className="relative" ref={containerRef}>
        {courseItems.map((item, index) => (
          <div key={item.id} className="flex items-center mb-8 last:mb-0">
            <div className="relative">
              <div
                className={`w-14 h-14 bg-gray-square flex items-center justify-center text-gray-800 text-xl md:text-2xl font-bold rounded ${dm_sans.className}`}
              >
                {item.id}
              </div>
              {index !== courseItems.length - 1 && (
                <div className="absolute left-1/2 top-full w-[2px] h-full bg-[#DAE0F1]"></div>
              )}
            </div>

            <div className="top-full w-[30px] md:w-[50px] h-[4px] bg-[#DAE0F1]"></div>

            <div className="ml-4">
              <h3 className={`text-lg md:text-2xl font-semibold text-gray-800 ${inter.className}`}>
                {item.title}
              </h3>
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside text-gray-600 text-base md:text-xl">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className={`text-gray-600 text-lg md:text-xl`}>{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStructure;
