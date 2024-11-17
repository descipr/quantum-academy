import { LearningCardData } from "@/constants";
import React from "react";

interface LearningCardProps {
  data: LearningCardData;
}

const LearningCard: React.FC<LearningCardProps> = ({ data }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md flex flex-col justify-between space-y-4 max-w-xs md:max-w-sm w-full mx-auto p-4 h-full">
      <div className="absolute top-2 left-4 transform -translate-y-1/2 bg-green-secondary rounded-lg px-2 py-1 z-20">
        <p className="text-white font-semibold text-sm md:text-base">
          {data.time}
        </p>
      </div>

      <div className="flex flex-col gap-4 text-left flex-grow">
        <h3 className="font-semibold text-lg md:text-xl text-blue-b2d">
          {data.title}
        </h3>
        <ul className="list-disc pl-5 mb-4 text-sm md:text-base text-black-primary">
          {data.listItems.map((item, index) => (
            <li key={index} className="opacity-70">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Case study with consistent height */}
      <div className="bg-blue-bl2 px-2 py-4 rounded-xl flex flex-col gap-2 text-left" style={{ minHeight: '120px' }}>
        <h4 className="text-sm md:text-base text-[#292A2D] font-normal">
          {data.subheading}
        </h4>
        <p className="text-sm md:text-base font-medium text-black-primary">
          {data.para}
        </p>
      </div>
    </div>
  );
};

export default LearningCard;
