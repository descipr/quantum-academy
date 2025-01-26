'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import Image, { StaticImageData } from 'next/image';
import { useGSAP } from '@gsap/react';
import { dm_sans, inter } from '@/app/font';
import Link from 'next/link';

interface TierHeroProps {
  imageSrc: StaticImageData; // Path to the image
  altText: string; // Alt text for the image
  title: string; // Main title
  highlightText: string; // Highlighted part of the title
  description: string; // Course description
  details: {
    level: string;
    prerequisite: string;
    duration: string;
    investment: {
      original: string;
      discounted: string;
    };
  }; // Course details
  buttonText: string; // Text for the button
  buttonLink: string;
  batchInfo: string // Link for the button
}

const TierHero: React.FC<TierHeroProps> = ({
  imageSrc,
  altText,
  title,
  highlightText,
  description,
  details,
  buttonText,
  buttonLink,
  batchInfo,
}) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      imageRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
    );
    tl.fromTo(
      textRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power3.out' },
      '<'
    );
  }, []);

  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 gap-8 bg-white mt-8">
      {/* Left: Image Section */}
      <div
        ref={imageRef}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <Image
          src={imageSrc}
          alt={altText}
          className="w-full h-full md:w-[400px] md:h-[500px] object-cover rounded-md"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* Right: Text Section */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 flex flex-col items-start justify-start space-y-6"
      >
        <h1 className={`text-3xl md:text-5xl font-medium text-black ${dm_sans.className}`}>
          {title}: <span className="text-blue-teal">{highlightText}</span>
        </h1>
        <p className={`text-base md:text-lg text-gray-navlink font-semibold text-justify ${inter.className}`}>
          {description}
        </p>

        <p
          className={`text-lg font-medium text-blue-teal ${inter.className}`}
        >
          {batchInfo}
        </p>
        <ul className="space-y-2 text-base md:text-lg text-black-para font-semibold">
          <li><strong>Level:</strong> {details.level}</li>
          <li><strong>Prerequisite:</strong> {details.prerequisite}</li>
          <li><strong>Duration:</strong> {details.duration}</li>
          <li>
            <strong>Investment:</strong> <s>{details.investment.original}</s>{' '}
            <span className="text-black font-medium">{details.investment.discounted}</span>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href={buttonLink}
            className="bg-blue-teal text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TierHero;
