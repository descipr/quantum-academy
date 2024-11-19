"use client";
import React, { useState, useEffect } from "react";
import FellowshipSection from "./ui/FellowshipSection";
import { MobileFellowshipImages } from "@/constants";
import MobileCarousel from "./ui/MobileCarousel";

const DesciprFellowSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className={`container mx-auto px-4 py-4 md:py-8 flex flex-col items-center ${
        isMobile ? "space-y-4" : "space-y-8"
      }`}
    >
      <div className="flex flex-col space-y-1 items-center justify-center">
        <h2 className="heading text-black-primary">
          Become a <span className="text-blue-teal">Descipr Fellow</span>{" "}
          and
        </h2>
        <h2 className="heading text-black-primary">Experience the difference</h2>
      </div>

      {isMobile ? (
        <MobileCarousel images={MobileFellowshipImages} />
      ) : (
        <FellowshipSection />
      )}
    </section>
  );
};

export default DesciprFellowSection;
