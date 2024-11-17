"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { careerCardData } from "@/constants";
import CareerCard from "./CareerCard";

const MobileCareerCardCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="container mx-auto px-4 py-6 overflow-hidden"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {careerCardData.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full px-2 md:w-1/2">
            <CareerCard
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              background={card.background}
              key={index}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileCareerCardCarousel;
