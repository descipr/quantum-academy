import MentorsCardSection from "./ui/MentorsCardSection";

const AboutSectionMentors = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-white heading">Our <span className="text-green-primary">Mentors</span> </h2>
      </div>
      <MentorsCardSection />
    </section>
  );
};

export default AboutSectionMentors;
