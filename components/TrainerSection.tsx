import Image from "next/image";
import { OutTrainers } from "@/constants";
import Link from "next/link";

const TrainerSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {OutTrainers.map((trainer, index) => (
          <Link href={trainer.link}>
            <div
              key={index}
              className="relative w-full pb-1/1 overflow-hidden rounded-lg"
            >
              <Image
                src={trainer.src}
                alt={trainer.alt}
                objectFit="cover"
                className="rounded-lg object-cover w-full h-full"
                width={180}
                height={190}
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrainerSection;
