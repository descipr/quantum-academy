import { CardData } from "@/constants";
import Image from "next/image";

const CareerCard = ({ imageUrl, title, description, background }: CardData) => {
  return (
    <div
      className="flex flex-col max-w-md p-4 pb-8 space-y-4 rounded-xl shadow-md overflow-hidden h-full w-full"
      style={{ backgroundColor: background }}
    >
      <div className="flex">
        <Image
          src={imageUrl}
          alt={title}
          width={48}
          height={48}
          className="object-cover w-12 h-12 md:w-18 md:h-18"
          priority
        />
      </div>
      <div className="flex flex-col">
        <h2 className="mb-2 text-xl font-bold text-black font-Plus-jakarta">
          {title}
        </h2>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};

export default CareerCard;
