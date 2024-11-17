import {  workshopFaqData } from "@/constants";
import Question from "./ui/Question";

const WorkshopFaq = () => {
  return (
    <section className="section-style mx-auto items-center">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold">
          FAQ
        </h2>
      </div>

      <Question faqs={workshopFaqData} />
    </section>
  );
};

export default WorkshopFaq;
