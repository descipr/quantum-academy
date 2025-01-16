"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

const courseContent = [
    {
        number: 1,
        title: "AI Fundamentals",
        description:
            "Identify and prioritize AI opportunities tailored to your industry, role, and goals.",
    },
    {
        number: 2,
        title: "Strategic Integration",
        description:
            "Learn how to align AI solutions with business objectives and workforce strategies for maximum impact.",
    },
    {
        number: 3,
        title: "Actionable Deployment Tactics",
        description:
            "Avoid pitfalls and make informed decisions on cost, speed, and build vs. buy for successful AI execution.",
    },
    {
        number: 4,
        title: "Personalized Strategy",
        description:
            "Master AI change management, foster an AI-driven culture, and future-proof your organization.",
    },
    {
        number: 5,
        title: "Ethical AI Leadership",
        description:
            "Understand risks, navigate regulations, and build trust through responsible AI practices.",
    },
    {
        number: 6,
        title: "Exclusive Networking",
        description:
            "Connect with AI experts and forward-thinking professionals.",
    },
];

const CourseContent: React.FC = () => {
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
        <div className="bg-white py-10  max-w-6xl mx-auto w-full  px-6">
            <h2 className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}>
                Course Content
            </h2>
            <div
                className="flex flex-col  space-y-6"
                ref={containerRef}
            >
                {courseContent.map((content, index) => (
                    <div
                        key={index}
                        className="flex items-start md:items-center  space-x-4 md:space-x-6"
                    >
                        <div className="flex-shrink-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 h-20 md:w-20 md:h-24 text-blue-teal"
                                viewBox="0 0 100 100"
                                fill="currentColor"
                            >
                                <path d="M10 10 H90 V70 L50 90 L10 70 Z" />
                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="text-white font-bold text-2xl md:text-3xl"
                                >
                                    {content.number}
                                </text>
                            </svg>
                        </div>
                        <div>
                            <h3 className={`text-lg md:text-2xl font-semibold  text-blue-teal ${dm_sans.className}`}>
                                {content.title}
                            </h3>
                            <p className={`text-sm md:text-lg text-gray-600 ${inter.className}`}>
                                {content.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContent;
