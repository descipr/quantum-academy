import { FC } from "react";
import Image from "next/image";

interface Tool {
  src: string;
  alt: string;
  title: string;
}

interface WorkshopToolSectionProps {
  tools: Tool[];
}

const WorkshopToolSection: FC<WorkshopToolSectionProps> = ({ tools }) => {
  // Determine grid columns based on the number of tools
  const gridColumns = tools.length === 2 ? 'grid-cols-2  md:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4';

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col gap-12 justify-center items-center">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white heading text-center text-2xl sm:text-4xl font-bold">
          Tools You Will Learn
        </h2>
      </div>
      <div className={`w-full grid ${gridColumns} gap-4 mx-auto`}>
        {tools.map((item, index) => (
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
    </div>
  );
};

export default WorkshopToolSection;
