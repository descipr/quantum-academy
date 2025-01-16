'use client';
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { HeroImage } from "@/utils";
import { useGSAP } from "@gsap/react";
import { dm_sans, inter } from "@/app/font";
import Link from "next/link";


const MainHero = () => {
    const imageRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);


    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            imageRef.current,
            { scale: 0.3 },
            { scale: 1, duration: 1.5, ease: "power3.out" }
        );
        tl.fromTo(
            textRef.current,
            { x: "100%", opacity: 0 },
            { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" },
            "<"
        );
    }, []);

    return (
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-4 bg-white mt-8 pr-3 px-6">
            <div
                ref={imageRef}
                className="w-full md:w-1/2 flex justify-center items-center"
            >
                <Image
                    src={HeroImage}
                    alt="AI for Leaders"
                    className="md:w-[436px] md:h-[406px] w-[300px] h-[300px] object-cover rounded-md"
                    width={430}
                    height={405}
                    priority
                />
            </div>

            <div
                ref={textRef}
                className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-6"
            >
                <h1 className={`text-3xl md:text-5xl font-medium  text-blue-teal ${dm_sans.className}`}>
                    Elevate Your AI Expertise
                </h1>

                <div>
                    <p className={`text-base md:text-lg text-gray-700 font-semibold text-justify ${inter.className}`}>
                        Immerse yourself in personalized AI courses led by industry experts. Master essential skills through interactive case studies and hands-on learning.
                    </p>
                </div>
                <div className={`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full ${inter.className}`}>
                    <Link href="#courses" className=" border-2 border-blue-teal text-blue-teal px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 hover:text-white transition text-center">
                        Explore Live Courses
                    </Link >
                    <button className="bg-blue-teal text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
                        Request a callback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainHero;
