"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

const CourseBenefits: React.FC = () => {
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
        Course Benefits
      </h2>
      <div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        ref={containerRef}
      >
        <div className="flex items-start space-x-4 w-full">
          <div className="w-6 h-6 bg-blue-200  mt-1"></div>
          <div>
            <h3 className={`text-lg md:text-2xl font-semibold text-gray-700 ${dm_sans.className}`}>
              AI Leadership
            </h3>
            <p className={`text-gray-600 text-base md:text-xl ${inter.className}`}>
              Develop your AI leadership skills.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-6 h-6 bg-blue-200 mt-1"></div>
          <div>
            <h3 className={`text-lg md:text-2xl font-semibold text-gray-700 ${dm_sans.className}`}>
              Strategic Implementation
            </h3>
            <p className={`text-gray-600 text-base md:text-xl ${inter.className}`}>
              Master the art of effective AI deployment.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-6 h-6 bg-blue-200 mt-1"></div>
          <div>
            <h3 className={`text-lg md:text-2xl font-semibold text-gray-700 ${dm_sans.className}`}>
              Ethical Considerations
            </h3>
            <p className={`text-gray-600 text-base md:text-xl ${inter.className}`}>
              Understand and mitigate ethical and risk implications of AI.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="w-6 h-6 bg-blue-200 mt-1"></div>
          <div>
            <h3 className={`text-lg md:text-2xl font-semibold text-gray-700 ${dm_sans.className}`}>
              Networking
            </h3>
            <p className={`text-gray-600 text-base md:text-xl ${inter.className}`}>
              Connect with leading AI experts and your peers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseBenefits;
