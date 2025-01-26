"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { dm_sans, inter } from "@/app/font";

const Reviews: React.FC = () => {
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
                        start: "top bottom", // Trigger when the top of the container reaches 80% of the viewport
                        end: "bottom 50%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 max-w-6xl mx-auto flex flex-col overflow-hidden">
            <div className="py-6 max-w-6xl mx-auto">
                <h2
                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 ${dm_sans.className}`}
                >
                    Reviews/Recommendations
                </h2>
                <div
                    className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    ref={containerRef}
                >
                    {/* Review Card 1 */}
                    <div className="flex flex-col items-start text-left shadow-lg rounded-lg bg-[#DAE0F1] p-6">
                        <h3
                            className={`text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 ${dm_sans.className}`}
                        >
                            Excellent Course!
                        </h3>
                        <p
                            className={`text-gray-600 ${inter.className} text-base sm:text-sm md:text-lg mb-4`}
                        >
                            Highly recommend this course for professionals looking to enhance their AI skills!
                        </p>
                        <p
                            className={`text-gray-800 ${inter.className} text-base sm:text-sm`}
                        >
                            - Senior Manager, Dubai based Manufacturing giant
                        </p>
                    </div>
                    {/* Review Card 2 */}
                    <div className="flex flex-col items-start text-left shadow-lg rounded-lg bg-[#DAE0F1] p-6">
                        <h3
                            className={`text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 ${dm_sans.className}`}
                        >
                            Practical and Engaging
                        </h3>
                        <p
                            className={`text-gray-600 ${inter.className} text-base sm:text-sm md:text-lg mb-4`}
                        >
                            The practical exercises and real-world projects made learning AI much more engaging.
                        </p>
                        <p
                            className={`text-gray-800 ${inter.className} text-base sm:text-sm`}
                        >
                            - L&D Head, UK based microfinance company
                        </p>
                    </div>
                    {/* Review Card 3 */}
                    <div className="flex flex-col items-start text-left shadow-lg rounded-lg bg-[#DAE0F1] p-6">
                        <h3
                            className={`text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 ${dm_sans.className}`}
                        >
                            Great Mentors
                        </h3>
                        <p
                            className={`text-gray-600 ${inter.className} text-base sm:text-sm md:text-lg mb-4`}
                        >
                            Bart is extremely knowledgeable, very supportive and provided valuable feedback throughout the mentorship.
                        </p>
                        <p
                            className={`text-gray-800 ${inter.className} text-base sm:text-sm`}
                        >
                            - AI Leaders in leading e-commerce company in India.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
