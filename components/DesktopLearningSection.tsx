import { LearningCardData, workshopData } from "@/constants";
import { useEffect, useState } from "react";
import LearningCardWorkshop from "./ui/LearningCardWorkshop";

interface IDesktopLearningSection {
  Wdata : LearningCardData[]
}

const DesktopLearningSection = ({Wdata} : IDesktopLearningSection) => {
  const [current, setCurrent] = useState(0);
  const [learningCardArrayPerPage, setLearningCardArrayPerPage] = useState(1);
  const length = workshopData.length;
  const maxIndex = Math.ceil(length / learningCardArrayPerPage) - 1;

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
            className="flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Wdata.map((data, index) => (
              <div
                key={index}
                className=" w-full px-4 flex-shrink-0"
                style={{
                  maxWidth: `${100 / learningCardArrayPerPage}%`,
                }}
              >
                <LearningCardWorkshop data={data} />
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

export default DesktopLearningSection;
