import Image from "next/image";
import { Community, CourseCard, HiringManager, Mentorship } from "@/utils";

const FellowshipSection = () => {
  return (
    <div className="container mx-auto max-w-5xl py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-10 md:px-8">
        <div className="relative rounded-lg shadow-md overflow-hidden lg:col-span-5 md:col-span-2">
          <Image
            src={HiringManager}
            alt="Live-learning with Hiring Managers"
            className="object-cover w-full h-full"
            width={600}
            height={370}
            priority
          />
        </div>

        <div className="relative rounded-lg shadow-md overflow-hidden lg:col-span-5 md:col-span-2 aspect-w-16 aspect-h-9">
          <Image
            src={CourseCard}
            alt="Learn through Job Simulation Projects"
            className="object-cover w-full h-full"
            width={600}
            height={370}
            priority
          />
        </div>

        <div className="relative rounded-lg shadow-md overflow-hidden lg:col-span-6 md:col-span-2 aspect-w-16 aspect-h-9">
          <Image
            src={Mentorship}
            alt="1:1 Mentorship"
            className="object-cover w-full h-full"
            width={740}
            height={370}
            priority
          />
        </div>

        <div className="relative rounded-lg shadow-md overflow-hidden lg:col-span-4 md:col-span-2 aspect-w-16 aspect-h-9">
          <Image
            src={Community}
            alt="Exclusive Community Access"
            className="object-cover w-full h-full"
            width={503}
            height={370}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default FellowshipSection;
