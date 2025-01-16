'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { dm_sans, inter } from "@/app/font";

const FAQ = () => {
    const faqRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".faq-item",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: "power2.out",
                }
            );
        }, faqRef);

        return () => ctx.revert(); // Clean up GSAP context
    }, []);

    return (
        <div ref={faqRef} className="max-w-6xl w-full mx-auto px-4 py-8">
            <h1 className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}>FAQ</h1>
            <div className="faq-item border-b py-4 ">
                <h2 className={`text-lg md:text-2xl text-blue-teal font-semibold ${dm_sans.className}`}>What is the duration of the course?</h2>
                <p className={`text-gray-800 mt-2 md:text-lg ${inter.className}`}>
                    The course is a 2 days (12 hours) of live interactive course delivered over Zoom.
                </p>
            </div>
            <div className="faq-item border-b py-4">
                <h2 className={`text-lg md:text-2xl text-blue-teal font-semibold ${dm_sans.className}`}>Will it be in-person or online?</h2>
                <p className={`text-gray-800 mt-2 md:text-lg ${inter.className}`}>
                    This is online delivered over Zoom. However, we have in-person arrangements as well for corporate tie-ups.{" "}
                    <a href="#" className="text-blue-600 underline">
                        Contact us
                    </a>{" "}
                    for more details.
                </p>
            </div>
            <div className="faq-item border-b py-4">
                <h2 className={`text-lg md:text-2xl text-blue-teal font-semibold ${dm_sans.className}`}>Will I get access to recordings and materials?</h2>
                <p className={`text-gray-800 mt-2 md:text-lg ${inter.className}`}>
                    Yes, you will have lifetime access to the recordings and all materials part of the course.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
