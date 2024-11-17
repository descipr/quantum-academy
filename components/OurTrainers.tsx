"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TrainerSection from "./TrainerSection";
import MobileTrainerCarousel from "./ui/MobileTrainerCarousel";

const OurTrainers = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();

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

  const headingText =
    pathname === "/aboutus" ? "Our Trainers" : "Learn from Our Trainers";

  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white text-center text-2xl md:text-4xl font-bold">
        Learn from Our <span className="text-green-primary">Trainers</span>
        </h2>
      </div>
      {isMobile ? <MobileTrainerCarousel /> : <TrainerSection />}
    </section>
  );
};

export default OurTrainers;
