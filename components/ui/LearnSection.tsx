import { DesciprDiffernceProps } from "@/constants";
import Image from "next/image";
import HorizontalLine from "./HorizontalLine";

interface LearningProps {
  learnings: DesciprDiffernceProps[];
}

const LearnSection = ({ learnings }: LearningProps) => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col space-y-4 justify-center items-center">
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
        {learnings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={36}
              height={36}
              className="w-12 h-12 sm:w-16 sm:h-16"
              priority
            />
            <p className="text-xs sm:text-sm md:text-md text-white font-light font-Plus-jakarta text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <HorizontalLine />
    </div>
  );
};

export default LearnSection;
