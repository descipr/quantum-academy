"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CourseSection from "./CourseSection";
import { BackgroundLogo } from "@/utils";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const heading1 = heading1Ref.current;
    const heading2 = heading2Ref.current;
    const paragraph = paragraphRef.current;

    if (section && heading1 && heading2 && paragraph) {
      gsap.fromTo(
        [heading1, heading2],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            toggleActions: "play pause resume reset",
          },
        }
      );

      gsap.fromTo(
        paragraph,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom+=100",
            toggleActions: "play pause resume reset",
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-style items-center relative flex flex-col space-y-5 md:space-y-8"
    >
      <Image
        src={BackgroundLogo}
        alt="background image"
        width={480}
        className="absolute top-0 right-0 -z-10"
      />
      <div className="relative flex flex-col items-center leading-relaxed tracking-wide">
        <div className="flex flex-col items-center">
          <h1
            ref={heading1Ref}
            className="text-3xl md:text-7xl font-bold text-center text-black-primary"
          >
            Become a{" "}
            <span className="text-blue-teal font-Plus-jakarta">
              360-degree
            </span>
          </h1>
          <h1
            ref={heading2Ref}
            className="text-3xl md:text-6xl font-bold text-center text-blue-teal mt-1 md:mt-3"
          >
            AI Professional
          </h1>
        </div>
        <p
          ref={paragraphRef}
          className="text-sm md:text-lg text-black-primary text-center font-normal mt-2 md:mt-4"
        >
          Fast-track your career with live Cohort-based{" "}
          <span className="text-blue-teal font-medium">
            learning and mentorship from Hiring managers
          </span>
        </p>
      </div>
      <CourseSection />
    </section>
  );
};

export default Hero;
