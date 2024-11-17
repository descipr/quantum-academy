import { LearningCardData } from "@/constants";
import React from "react";

interface LearningCardProps {
  data: LearningCardData;
}
const LearningCardWorkshop = ({ data }: LearningCardProps) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md flex flex-col justify-between space-y-4 max-w-xs md:max-w-sm w-full mx-auto p-4 h-full">
      <div className="flex flex-col gap-4 text-left flex-grow">
        <h3 className="font-semibold text-lg md:text-xl text-blue-b2d">
          {data.title}
        </h3>
        <div className="list-disc  mb-4 text-sm md:text-base text-black-primary">
          {data.listItems.map((item, index) => (
            <p key={index} className="opacity-70">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningCardWorkshop;
