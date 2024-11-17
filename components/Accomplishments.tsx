import { Template16 } from "@/utils";
import Image from "next/image";

const Accomplishments = () => {
  return (
    <section className="mx-auto px-4 py-4 md:py-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-16">
      <div className="flex flex-col items-start gap-4 text-left sm:w-1/2">
        <h3 className="text-xl md:text-2xl font-bold text-white">Certificate of Accomplishment</h3>
        <p className="text-base md:text-lg text-white">
          Upon successful completion of the Business Analyst Fellowship course, 
          you'll earn a Certificate of Accomplishment, that will enhance your 
          Résumé and LinkedIn profile and demonstrate your readiness for 
          impactful roles in Business Analytics.
        </p>
      </div>

      <div className="flex justify-center sm:w-1/2">
        <Image 
          src={Template16} 
          alt="left image template" 
          width={480} 
          height={280} 
          className="rounded-lg"
          priority
        />
      </div>
    </section>
  );
};

export default Accomplishments;
