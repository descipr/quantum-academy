"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { linkedin } from "@/utils";
import { TestimonialCardProps } from "@/constants";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  profilePic,
  name,
  position,
  testimonial,
  linkedinUrl,
}) => {
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);

  const toggleTestimonial = () => {
    setShowFullTestimonial((prev) => !prev);
  };

  const displayedTestimonial = showFullTestimonial
    ? testimonial
    : `${testimonial.slice(0, 150)}`;

  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col justify-between space-y-4 max-w-xs md:max-w-sm md:w-full mx-auto p-3 h-full text-center mt-4 sm:mt-0">
      <div className="flex items-center">
        <p className="text-black-Textsecondary text-sm md:text-lg font-Plus-jakarta font-normal text-left py-2">
          {displayedTestimonial}
          <span>
            {testimonial.length > 150 && (
              <button
                onClick={toggleTestimonial}
                className="text-blue-600 font-semibold text-sm mt-1"
              >
                {showFullTestimonial ? "Read Less" : "...Read More"}
              </button>
            )}
          </span>
        </p>
      </div>

      <div className="flex flex-row items-center justify-between bg-[#d9d9d9] rounded-xl px-2 py-1 sm:px-4 sm:py-2">
        <div className="flex items-center space-x-2">
          <Image
            src={profilePic}
            alt={`${name} profile picture`}
            width={43}
            height={43}
            className="rounded-full"
            priority
          />

          <div className="flex flex-col flex-grow space-y-[2px] items-start">
            <span className="font-semibold text-black-Textsecondary text-md">
              {name}
            </span>
            <span className="text-black-Textsecondary text-sm font-normal">
              {position}
            </span>
          </div>
        </div>

        <Link href={linkedinUrl} target="_blank">
          <Image
            src={linkedin}
            alt="LinkedIn Icon"
            width={24}
            height={24}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCard;
