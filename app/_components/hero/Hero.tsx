'use client';
import { useRef } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import { useGSAP } from "@gsap/react";
import { dm_sans, inter } from "@/app/font";
import Link from "next/link";

interface HeroProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  heading: string;
  text: string;
  batchInfo: string;
  primaryLink: {
    href: string;
    label: string;
  };
  secondaryLink: {
    href: string;
    label: string;
  };
}

const Hero = ({
  imageSrc,
  imageAlt,
  heading,
  text,
  batchInfo,
  primaryLink,
  secondaryLink,
}: HeroProps) => {
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
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 gap-4 bg-white mt-4">
      {/* Image Section */}
      <div
        ref={imageRef}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="md:w-[436px] md:h-[406px] w-full h-[300px] object-cover rounded-md"
          width={430}
          height={405}
          priority
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-6"
      >
        <h1
          className={`text-3xl md:text-5xl font-medium text-black ${dm_sans.className}`}
        >
          {heading}
        </h1>

        <div>
          <p
            className={`text-base md:text-lg text-gray-navlink font-semibold text-justify ${inter.className}`}
          >
            {text}
          </p>
        </div>

        <p
          className={`text-lg font-medium text-blue-teal ${inter.className}`}
        >
          {batchInfo}
        </p>
        <div
          className={`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 w-full ${inter.className}`}
        >
          {/* Primary Link */}
          <Link
            href={primaryLink.href}
            className="bg-blue-teal text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition text-center"
          >
            {primaryLink.label}
          </Link>
          
          {/* Secondary Link */}
          <Link
            href={secondaryLink.href}
            target="_blank"
            className="border-2 border-blue-teal text-blue-teal px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 hover:text-white transition text-center"
          >
            {secondaryLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
