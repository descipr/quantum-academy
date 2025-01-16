
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

gsap.registerPlugin(ScrollTrigger);

const KeyTakeaways: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = sectionRef.current?.querySelectorAll(".icon");

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

  const takeaways = [
    {
      icon: "✏️",
      text: "Contextualizing AI into your business and the environment today",
    },
    {
      icon: "✨",
      text: "Finding your first AI use case",
    },
    {
      icon: "✔️",
      text: "Methods to evaluate and prioritize use cases",
    },
    {
      icon: "📋",
      text: "AI case studies for enterprise and personal productivity",
    },
    {
      icon: "⚡",
      text: "Real-world tactics of ML execution, including business trade-offs",
    },
    {
      icon: "⭐",
      text: "Responsible AI deployment and risk mitigation",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className=" flex flex-col items-center md:items-start justify-center py-10 px-6 bg-white max-w-6xl mx-auto"
    >
      <h2 className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}>
        Key Takeaways
      </h2>
      <div
        className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl"
      >
        {takeaways.map((item, index) => (
          <div
            key={index}
            className="icon flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-4 text-blue-500">{item.icon}</div>
            
            <p className={`text-gray-700 text-sm md:text-base ${inter.className}`}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTakeaways;
