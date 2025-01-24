"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

gsap.registerPlugin(ScrollTrigger);

interface TakeawayItem {
  icon: React.ReactNode; // Accepts any JSX for icons
  title: string;
  description: string;
}

interface KeyTakeawayProps {
  heading: string;
  takeaways: TakeawayItem[];
}

const CoreFeature: React.FC<KeyTakeawayProps> = ({ heading, takeaways }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = sectionRef.current?.querySelectorAll(".takeaway-item");

    if (icons) {
      gsap.fromTo(
        icons,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center md:items-start justify-center py-10 px-6 bg-white max-w-5xl mx-auto"
    >
      <h2
        className={`text-3xl md:text-5xl font-bold text-center md:text-left mb-10 ${dm_sans.className}`}
      >
        {heading}
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 ">
        {takeaways.map((item, index) => (
          <div
            key={index}
            className="takeaway-item flex flex-col items-start text-left p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
            <h3 className={`text-lg md:text-xl font-bold text-gray-800 mb-2 ${dm_sans.className}`}>
              {item.title}
            </h3>
            <p className={`text-gray-600 text-sm md:text-base ${inter.className}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeature;
