"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ScheduledClassProps } from "@/constants";
import ScheduledClassCard from "./ScheduledClassCard";

interface MobileScheduledCarouselProps {
  scheduledClassData: ScheduledClassProps[];
}

const MobileScheduledCarousel: React.FC<MobileScheduledCarouselProps> = ({
  scheduledClassData,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, [scheduledClassData]);

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
        {scheduledClassData.map((data, index) => (
          <div key={index} className="flex-shrink-0 w-[90%] px-2 md:w-1/2">
            <ScheduledClassCard
              imageUrl={data.imageUrl}
              title={data.title}
              para={data.para}
              date={data.date}
              background={data.background}
              key={index}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileScheduledCarousel;
