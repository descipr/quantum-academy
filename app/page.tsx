import CareerSection from "@/components/CareerSection";
import DesciprFellowSection from "@/components/DesciprFellowSection";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Cta from "@/components/ui/Cta";
import HorizontalLine from "@/components/ui/HorizontalLine";


const Home: React.FC = () => {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-2">
        <div className="max-w-7xl w-full flex flex-col space-y-8 items-center">
          <Hero />
          <HorizontalLine />
          <Testimonials />
          <HorizontalLine />
          <DesciprFellowSection />
          <HorizontalLine />
          <CareerSection />
          <HorizontalLine />
          <Cta />
        </div>
      </main>
    </>
  );
};

export default Home;
