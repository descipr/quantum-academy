'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

interface Benefit {
  title: string;
  description: string;
}

interface CourseBenefitsProps {
  heading: string;
  benefits: Benefit[];
}

const CourseBenefits: React.FC<CourseBenefitsProps> = ({ heading, benefits }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
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
      <h2 className={`text-3xl md:text-5xl font-semibold text-left mb-10 ${dm_sans.className}`}>
        {heading}
      </h2>
      <div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        ref={containerRef}
      >
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-6 w-full">
            {/* Perfect Square */}
            <div className="w-10 h-10 bg-gray-square flex-shrink-0"></div>
            <div>
              <h3 className={`text-lg md:text-2xl font-semibold text-black ${dm_sans.className}`}>
                {benefit.title}
              </h3>
              <p className={`text-gray-navlink font-medium text-base md:text-xl ${inter.className}`}>
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBenefits;
