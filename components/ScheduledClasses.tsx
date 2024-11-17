"use client";
import React, { useEffect, useState } from "react";
import ScheduledClassCard from "./ui/ScheduledClassCard";
import { ScheduledClassData } from "@/constants";
import MobileScheduledCarousel from "./ui/MobileScheduledCarousel";

const ScheduledClasses = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container py-6">
      {isDesktop ? (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {ScheduledClassData.map((card, index) => (
            <ScheduledClassCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              para={card.para}
              date={card.date}
              background={card.background}
            />
          ))}
        </div>
      ) : (
        <MobileScheduledCarousel scheduledClassData={ScheduledClassData} />
      )}
    </div>
  );
};

export default ScheduledClasses;
