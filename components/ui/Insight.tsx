import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}
const Insight = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex items-center  space-x-4 ">
      <Image src={icon} width={64} height={64} priority alt={title} className="w-8 h-8 md:w-16 md:h-16" />
      <div className="flex flex-col items-start">
        <h3 className=" text-sm md:text-lg text-white font-Plus-jakarta">{title}</h3>
        <p className="text-white text-xs md:text-base font-Plus-jakarta font-light text-left">{description}</p>
      </div>
    </div>
  );
};

export default Insight;
