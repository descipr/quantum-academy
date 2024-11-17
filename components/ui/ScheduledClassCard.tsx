import { ScheduledClassProps } from "@/constants";
import Image from "next/image";


const ScheduledClassCard = ({
  key,
  imageUrl,
  title,
  para,
  date,
  background,
}: ScheduledClassProps) => {
  return (
    <div
      className="flex flex-col max-w-md w-full p-4 pb-8 space-y-4 rounded-xl shadow-md overflow-hidden h-full"
      style={{ backgroundColor: background }}
    >
      <div className="flex flex-col gap-2">
        <Image
          src={imageUrl}
          alt={title}
          width={14}
          height={14}
          className="object-cover w-12 h-12 md:w-14 md:h-14"
          priority
        />
        <h2 className="mb-2 text-xl font-bold text-black">{title}</h2>
      </div>
      <div className=" px-2 content-center opacity-50 w-full">
        <div className="border border-gray-line h-[1px]"></div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{para}</p>
        <p className="text-black">{date}</p>
      </div>
    </div>
  );
};

export default ScheduledClassCard;
