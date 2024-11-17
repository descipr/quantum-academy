"use client";
import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants";

const DesktopTestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const testimonialsPerPage = 3;
  const length = testimonials.length;
  const maxIndex = Math.ceil(length / testimonialsPerPage) - 1;

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  return (
    <div className="text-white">
      <div className="container mx-auto text-center flex flex-col">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 px-4 flex flex-shrink-0"
              >
                <TestimonialCard
                  profilePic={testimonial.profilePic}
                  name={testimonial.name}
                  position={testimonial.position}
                  testimonial={testimonial.testimonial}
                  linkedinUrl={testimonial.linkedinUrl}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white p-2 rounded-full shadow-md"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopTestimonialCarousel;
