"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Video from "./ui/Video";

interface VideoProps {
  VideoUrl?: string;
}

const LiveSessionSection = ({ VideoUrl }: VideoProps) => {
  const pathname = usePathname();
  const [isEnrollNowPage, setIsEnrollNowPage] = useState(false);

  useEffect(() => {
    if (pathname === "/workshop") {
      setIsEnrollNowPage(true);
    } else {
      setIsEnrollNowPage(false);
    }
  }, [pathname]);

  return (
    <section className="section-style mx-auto items-center">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold">
          Get a  <span className="text-green-primary">Glimpse of</span> a Live Session
        </h2>
      </div>
      {isEnrollNowPage ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-7xl px-2">
          <Video VideoUrl="https://www.youtube.com/embed/ipl7zZuAVts?si=YrDEC-SB2R_ByQXu" />
          <Video VideoUrl="https://www.youtube.com/embed/6N7Og0IKwc0?si=EFySGyUfNsxBs6_g" />
          <Video VideoUrl="https://www.youtube.com/embed/PwROxu2mrUI?si=3LBlTrd9D015sU1s" />
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <Video
            VideoUrl={
              VideoUrl ||
              "https://www.youtube.com/embed/yXmK7TAJ1Mc?si=dfbTOXvm8rfRi_XJ"
            }
          />
        </div>
      )}
    </section>
  );
};

export default LiveSessionSection;
