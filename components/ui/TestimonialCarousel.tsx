"use client";
import React, { useState, useEffect } from "react";
import DesktopTestimonialCarousel from "./DesktopTestimonialCarousel";
import MobileTestimonialCarousel from "./MobileTestimonialCarousel";

const TestimonialCarousel: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isDesktop ? <DesktopTestimonialCarousel /> : <MobileTestimonialCarousel />;
};

export default TestimonialCarousel;
