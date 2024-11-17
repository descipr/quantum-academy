"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/constants";

const MobileTestimonialCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
      console.log(width)
    }
  }, []);

  return (
    <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }} >
      <motion.div drag="x" dragConstraints={{ right: 0, left: -(width) }} className="flex">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="flex-shrink-0 w-[90%] sm:w-full px-2">
            <TestimonialCard
              profilePic={testimonial.profilePic}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              linkedinUrl={testimonial.linkedinUrl}
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MobileTestimonialCarousel;



