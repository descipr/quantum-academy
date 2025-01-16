"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

const CourseStructure: React.FC = () => {
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
                Course Structure
            </h2>
            <div
                className="relative "
                ref={containerRef}
            >
                {[
                    {
                        id: 1,
                        title: "Interactive Live Sessions",
                        description: "2 days to interact with instructors and peers.",
                    },
                    {
                        id: 2,
                        title: "Lifetime Access",
                        description: "Unlimited access to course materials.",
                    },
                    {
                        id: 3,
                        title: "In-Depth Lessons",
                        description:
                            "40+ slides, worksheet, frameworks to learn and apply AI principles.",
                    },
                    {
                        id: 4,
                        title: "Case Study Based Learning",
                        description:
                            "Real-world case study to put learning into practice.",
                    },
                    {
                        id: 5,
                        title: "Guided Feedback",
                        description:
                            "Get constructive feedback on your work.",
                    },
                    {
                        id: 6,
                        title: "Certificate of Completion",
                        description:
                            "Show off your new AI leadership skills.",
                    },
                ].map((item, index) => (
                    <div
                        key={item.id}
                        className="flex items-center  mb-8 last:mb-0"
                    >
                        <div className="relative">
                            <div className={`w-14 h-14 bg-[#DAE0F1] flex items-center justify-center text-gray-800 text-2xl font-bold rounded ${dm_sans.className}`}>
                                {item.id}
                            </div>
                            {index !== 5 && (
                                <div className="absolute left-1/2 top-full w-[2px] h-full bg-[#DAE0F1]"></div>
                            )}
                        </div>

                        <div className="top-full w-[30px] md:w-[50px] h-[4px] bg-[#DAE0F1]"></div>

                        <div className="ml-4">
                            <h3 className={`text-xl md:text-2xl font-semibold text-gray-800 ${inter.className}`}>
                                {item.title}
                            </h3>
                            <p className={`text-gray-600 text-lg md:text-xl`}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseStructure;
