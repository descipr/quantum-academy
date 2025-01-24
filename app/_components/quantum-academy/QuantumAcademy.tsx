'use client'
import { dm_sans, inter } from "@/app/font";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const QuantumAcademy = () => {

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
        <div className="py-10 px-6 bg-white max-w-6xl mx-auto w-full ">
            <h2 className={`text-3xl md:text-5xl font-semibold text-left mb-12 ${dm_sans.className}`}>
                Experience the Quantum Academy Difference
            </h2>
            <div
                className="relative mx-auto"
                ref={containerRef}
            >
                {[
                    {
                        id: 1,
                        title: "Live Hands-On Cohorts",
                        description: "Interactive learning with real-world experts provides immediate feedback and personalized guidance.",
                    },
                    {
                        id: 2,
                        title: "Case Study Based Learning",
                        description: "Apply theoretical concepts to practical scenarios for a deeper understanding of AI applications.",
                    },
                    {
                        id: 3,
                        title: "Focussed Upskilling",
                        description:
                            "Targeted modules and projects help you build specific skills for your career goals.",
                    },
                    {
                        id: 4,
                        title: "Exclusive resources",
                        description:
                            "Actionable frameworks, latest AI tools and a engaging community for your career and business success.",
                    },
                    
                ].map((item, index) => (
                    <div
                        key={item.id}
                        className="flex items-center mx-auto  mb-8 last:mb-0"
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
                            <h3 className={`text-xl md:text-2xl font-semibold text-blue-teal  ${inter.className}`}>
                                {item.title}
                            </h3>
                            <p className={`text-gray-navlink font-semibold text-lg `}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
export default QuantumAcademy;