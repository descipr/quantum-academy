"use client";
import React from "react";
import Image from "next/image";

interface MobileCarouselProps {
  images: string[];
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ images }) => {
  return (
    <div className="container text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full px-2">
            <Image
              src={image}
              alt={`Fellowship image ${index}`}
              width={400}
              height={250}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
