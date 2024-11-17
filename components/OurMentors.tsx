import MentorsCardSection from "./ui/MentorsCardSection";

const OurMentors = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-black-primary heading">
          Guidance <span className="text-green-primary">Sessions with</span> our Mentors
        </h2>
      </div>
      <MentorsCardSection />
    </section>
  );
};

export default OurMentors;
