import CareerCardSection from "./ui/CareerCardSection";
import TakeQuiz from "./ui/TakeQuix";

const CareerSection = () => {
  return (
    <section className="section-style  items-center">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="heading text-black-primary">
          Take your career to <span className="text-green-primary">newer heights</span> with us
        </h2>
      </div>
      <CareerCardSection />
      <TakeQuiz />
    </section>
  );
};

export default CareerSection;
