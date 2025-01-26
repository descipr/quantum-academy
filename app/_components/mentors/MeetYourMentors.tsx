"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image, { StaticImageData } from "next/image";
import { Bart_mentor, tanoy_mentor } from "@/utils";
import { dm_sans, inter } from "@/app/font";
import Link from "next/link";

interface Mentor {
    name: string;
    title: string;
    description: string;
    imageSrc: StaticImageData;
}

const mentors: Mentor[] = [
    {
        name: "Bart Pietruszka",
        title: "CEO, Refocus AI | Ex- Chief Data & Analytics Officer, HSBC",
        description:
            "Specializes in AI implementation, Data quality, automation, commercialization",
        imageSrc: Bart_mentor,
    },
    {
        name: "Tanoy Dewanjee",
        title: "Lead AVP - Data Science, HSBC | Ex- Amazon",
        description:
            "Specializes in AI/ML implementation, growth & fraud Data Science Projects",
        imageSrc: tanoy_mentor,
    },
];

const MeetYourMentors: React.FC = () => {
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
                        start: "top 80%", // When the top of the container reaches 80% of the viewport
                        end: "bottom 20%", // End of the animation trigger range
                        toggleActions: "play none none none", // Animation plays when triggered
                    },
                }
            );
        }
    }, []);

    return (
        <div className="py-10 px-4 bg-white max-w-6xl mx-auto flex flex-col ">
            <h2
                className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}
            >
                Meet the Trainers/Mentors
            </h2>
            <div className="flex flex-col items-center justify-center ">
                <div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
                    ref={containerRef}
                >
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-center shadow-lg rounded-lg bg-white "
                        >
                            <div className="w-full h-64 relative mb-4">
                                <Image
                                    src={mentor.imageSrc}
                                    alt={mentor.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex flex-col items-start justify-between ">
                                <h3
                                    className={`text-xl md:text-2xl font-semibold mb-2 text-left text-blue-teal ${dm_sans.className}`}
                                >
                                    {mentor.name}
                                </h3>
                                <p
                                    className={`text-sm  text-gray-600 mb-4 text-left ${inter.className}`}
                                >
                                    {mentor.title}
                                </p>
                                <p
                                    className={`text-sm md:text-base text-gray-800 font-semibold text-left ${inter.className}`}
                                >
                                    {mentor.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 md:mt-16">
                    <Link href="https://calendly.com/bartekpietruszka" target="_blank" className="bg-blue-teal hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-lg mr-2 mx-auto ">
                        Schedule a 1:1 connect
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MeetYourMentors;
