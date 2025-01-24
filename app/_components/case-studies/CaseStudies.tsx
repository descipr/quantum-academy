"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
}

interface CaseStudiesProps {
  heading: string;
  caseStudies: CaseStudy[];
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ heading, caseStudies }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
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
      <h2 className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}>
        {heading}
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2" ref={containerRef}>
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy.id} className="flex items-start space-x-4 w-full">
            <div
              className="w-12 h-12 bg-blue-200 flex items-center justify-center"
              style={{ minWidth: "3rem", minHeight: "3rem" }}
            >
              <span className="text-lg font-bold text-gray-700">{caseStudy.id}</span>
            </div>
            <div>
              <h3 className={`text-lg md:text-2xl font-semibold text-gray-700 ${dm_sans.className}`}>
                {caseStudy.title}
              </h3>
              <p className={`text-gray-600 text-base md:text-xl ${inter.className}`}>
                {caseStudy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
