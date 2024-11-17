import { IwebinarForData } from "@/constants";

const IntendedForCard = ({
  title,
  description,
  background,
}: IwebinarForData) => {
  return (
    <div
      className="flex flex-col max-w-md p-4 space-y-4 rounded-xl shadow-md h-full items-center"
      style={{ backgroundColor: background }}
    >
      
      <div className="flex flex-col gap-4 w-full items-center ">
        <h2 className="font-semibold text-lg md:text-xl text-blue-b2d h-full md:h-[65px]">
          {title}
        </h2>
        <div className="w-full">
          <div className="border-t border-gray-400"></div>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <p className="text-md text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IntendedForCard;
