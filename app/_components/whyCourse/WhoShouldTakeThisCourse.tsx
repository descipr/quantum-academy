"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

const WhoShouldTakeThisCourse: React.FC = () => {
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
                        start: "top 80%", // Trigger when the top of the container reaches 80% of the viewport
                        end: "bottom 20%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }


    }, []);

    return (
        <section className=" w-full mx-auto bg-[#6d81b7] py-16">
            <div className="py-10 px-6 max-w-6xl mx-auto">
                <h2 className={`text-3xl md:text-5xl text-white font-bold text-left mb-10 ${dm_sans.className}`}>
                    Who Should Take This Course?
                </h2>
                <div
                    className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    ref={containerRef}
                >
                    <div className="flex flex-col items-start text-center shadow-lg rounded-lg bg-[#DAE0F1] p-6">
                        <h3 className={`text-xl text-left md:text-2xl font-semibold text-gray-800 mb-2 ${dm_sans.className}`}>
                            Business Leaders
                        </h3>
                        <p className={`text-gray-600 ${inter.className} text-left text-base md:text-xl`}>
                            CEOs, CTOs, and executives looking to integrate AI into their
                            organizations.
                        </p>
                    </div>
                    <div className="flex flex-col items-start text-center shadow-lg rounded-lg bg-[#DAE0F1] p-6">
                        <h3 className={`text-xl text-left md:text-2xl font-semibold text-gray-800 mb-2 ${dm_sans.className}`}>
                            Entrepreneurs
                        </h3>
                        <p className={`text-gray-600 ${inter.className} text-left text-base md:text-xl `}>
                            Startup founders aiming to leverage AI for competitive advantage.
                        </p>
                    </div>
                    <div className="flex flex-col items-start text-center shadow-lg rounded-lg bg-[#DAE0F1] p-6">
                        <h3 className={`text-xl text-left md:text-2xl font-semibold text-gray-800 mb-2 ${dm_sans.className}`}>
                            Decision Makers
                        </h3>
                        <p className={`text-gray-600 ${inter.className} text-left text-base md:text-xl`}>
                            Managers and directors responsible for strategic technology
                            adoption.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WhoShouldTakeThisCourse;
