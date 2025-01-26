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
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-4 bg-white md:mt-8 pr-3 px-6">
            <div
                ref={imageRef}
                className="w-full md:w-1/2 flex justify-center items-center"
            >
                <Image
                    src={HeroImage}
                    alt="AI for Leaders"
                    className="md:w-[436px] md:h-[406px] w-full h-[300px] object-cover rounded-md"
                    width={430}
                    height={405}
                    priority
                />
            </div>

            <div
                ref={textRef}
                className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-6"
            >
                <h1 className={`text-3xl md:text-5xl font-semibold  text-blue-teal ${dm_sans.className}`}>
                Elevate Your AI Expertise with Live, Interactive Learning
                </h1>

                <div>
                    <p className={`text-base text-gray-navlink font-medium text-justify ${inter.className} max-w-xl`}>
                    Forget pre-recorded sessions. Our AI courses are 100% live, designed for leaders and SMEs, with limited cohort sizes to ensure real-time interaction. Engage directly with industry experts, ask questions, participate in live polls, brainstorm ideas, and solve real-world business challenges. Our interactive approach goes beyond theory, offering hands-on learning with practical, actionable insights tailored to your needs.
                    </p>
                </div>
                <div className={`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full ${inter.className}`}>
                    <Link href="#courses" className=" border-2 border-blue-teal text-blue-teal px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-600 hover:text-white transition text-center">
                        Explore Live Courses
                    </Link >
                    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSczIJmMx9GqFKUqs8-PqsxEfVhqXWYwZlo-kPWkiOoUavFY5A/viewform?usp=header " target="_blank" className="bg-blue-teal text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 transition text-center">
                        Request a callback
                    </Link >
                </div>
            </div>
        </div>
    );
};

export default MainHero;
