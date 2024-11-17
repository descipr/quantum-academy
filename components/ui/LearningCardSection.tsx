"use client";
import React, { useEffect, useState } from "react";
import LearningCard from "./LearningCard";
import { LearningCardData } from "@/constants";

interface LearningProps {
  courseDetails: LearningCardData[];
}

const LearningCardSection = ({courseDetails} : LearningProps) => {
  const [current, setCurrent] = useState(0);
  const [learningCardArrayPerPage, setLearningCardArrayPerPage] = useState(1);
  const length = courseDetails.length;


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLearningCardArrayPerPage(3);
      } else if (window.innerWidth >= 768) {
        setLearningCardArrayPerPage(2);
      } else {
        setLearningCardArrayPerPage(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.ceil(length / learningCardArrayPerPage) - 1;

  const nextSlide = () => {
    setCurrent(current === maxIndex ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? maxIndex : current - 1);
  };

  return (
    <div className="text-white">
      <div className="container mx-auto text-center flex flex-col">
        <div className="overflow-x-hidden overflow-y-visible ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {courseDetails.map((data, index) => (
              <div
                key={index}
                className=" w-full px-4 flex-shrink-0 "
                style={{
                  maxWidth: `${100 / learningCardArrayPerPage}%`,
                }}
              >
                <LearningCard key={data.id} data={data} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center space-x-4">
          <button
            onClick={prevSlide}
            className="bg-gray-500/50  p-2 rounded-full shadow-md"
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
            className="bg-gray-500/50  p-2 rounded-full shadow-md"
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

export default LearningCardSection;
