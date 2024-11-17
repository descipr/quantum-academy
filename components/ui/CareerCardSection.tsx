"use client";
import React, { useState, useEffect } from "react";
import MobileCareerCardCarousel from "./MobileCareerCardCarousel";
import DesktopCareerCardGrid from "./DesktopCareerCardGrid";


const CareerCardSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <MobileCareerCardCarousel /> : <DesktopCareerCardGrid />;
};

export default CareerCardSection;
