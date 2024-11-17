import { plus_jakarta } from "@/app/fonts";
import Accomplishments from "@/components/Accomplishments";
import FaqSection from "@/components/FaqSection";
import FloatingBar from "@/components/Floater";
import HorizontalLine from "@/components/ui/HorizontalLine";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`${plus_jakarta.className} relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5 `}
    >
      
      <FloatingBar />
      <div className="max-w-7xl w-full flex flex-col space-y-8 items-center">
        {children}
        <HorizontalLine />
        <Accomplishments />
        <HorizontalLine />
        <FaqSection />
      </div>
    </section>
  );
}
