"use client";
import React from "react";
import { careerCardData } from "@/constants";
import CareerCard from "./CareerCard";

const DesktopCareerCardGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {careerCardData.map((card, index) => (
          <CareerCard
            key={index}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
            background={card.background}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopCareerCardGrid;
