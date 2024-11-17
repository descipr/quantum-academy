import { DesciprDiffernce } from "@/constants";
import Image from "next/image";

const DesciprSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {DesciprDiffernce.map((item, index) => (
          <div
            key={index}
            className="flex flex-col mx-auto items-center justify-center space-y-2"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="w-12 h-12 md:w-16 md:h-16"
              priority
            />
            <p className="text-sm sm:text-base md:text-md text-white font-light font-Plus-jakarta">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesciprSection;
