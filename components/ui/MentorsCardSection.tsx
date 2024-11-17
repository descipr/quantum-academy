import { Mentors } from "@/constants";
import Link from "next/link";
import Image from "next/image";

const MentorsCardSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {Mentors.map((mentor, index) => (
          <Link href={mentor.link}>
            <div
              key={index}
              className="relative w-full pb-1/1 overflow-hidden rounded-lg"
            >
              <Image
                src={mentor.src}
                alt={mentor.alt}
                className="rounded-lg object-cover"
                width={397}
                height={277}
                priority
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MentorsCardSection;
