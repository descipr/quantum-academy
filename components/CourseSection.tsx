"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CourseCard from "./ui/CourseCard";
import { courses } from "@/constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CourseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play pause resume reset",
      },
      delay: 6,
    });

    cardsRef.current.forEach((item, index) => {
      if (item) {
        tl.fromTo(
          item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          `-=${0.5 - index * 0.1}`
        );
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-8 w-full">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <CourseCard
              imageSrc={course.imageSrc}
              title={course.title}
              date={course.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
