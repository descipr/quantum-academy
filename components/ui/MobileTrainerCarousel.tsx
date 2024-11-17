"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { OutTrainers } from "@/constants";
import Link from "next/link";

const MobileTrainerCarousel: React.FC = () => {
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
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex"
      >
        {OutTrainers.map((trainer, index) => (
          <div key={index} className="flex-shrink-0 w-80 px-2 py-2">
            <Link href={trainer.link}>
              <div className="relative w-full pb-1/1 overflow-hidden rounded-lg">
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
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileTrainerCarousel;
