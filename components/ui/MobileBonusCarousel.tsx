import { BonusWorkshopData, IwebinarForData } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import IntendedForCard from "../IntendedForCard";

interface IBonusCardSection {
  Wdata : IwebinarForData[];
}

const MobileBonusCarousel = ({Wdata} : IBonusCardSection) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, [BonusWorkshopData]);
  return (
    <motion.div
      ref={carouselRef}
      className="container overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {Wdata.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-[90%] px-4 md:w-1/2">
            <IntendedForCard
              key={card.id}
              title={card.title}
              description={card.description}
              background={card.background}
              id={0}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileBonusCarousel;
