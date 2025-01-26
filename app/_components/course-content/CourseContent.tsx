"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";
import { courseContent } from "@/constants";

interface CourseContentProps {
    data: {
        number: number;
        title: string;
        description: string
    }[];
}


const CourseContent: React.FC<CourseContentProps> = ({data}) => {
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
            <h2 className={`text-3xl md:text-5xl font-semibold text-left mb-10 ${dm_sans.className}`}>
                Course Content
            </h2>
            <div
                className="flex flex-col space-y-6"
                ref={containerRef}
            >
                {data.map((content, index) => (
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
                            <p className={`text-base md:text-lg text-gray-navlink ${inter.className}`}>
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
