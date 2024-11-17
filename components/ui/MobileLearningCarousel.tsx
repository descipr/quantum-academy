"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LearningCard from "./LearningCard"; 
import { LearningCardData } from "@/constants";

interface MobileLearningCarouselProps {
  courseDetails: LearningCardData[];
}

const MobileLearningCarousel: React.FC<MobileLearningCarouselProps> = ({ courseDetails }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, [courseDetails]);

  return (
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
        {courseDetails.map((data, i) => (
          <div key={i} className="flex-shrink-0 w-70 px-2">
            <LearningCard data={data} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileLearningCarousel;
