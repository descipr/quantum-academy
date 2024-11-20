import MentorsCardSection from "./ui/MentorsCardSection";

const AboutSectionMentors = () => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-black-primary heading">Our <span className="text-blue-teal">Mentors</span> </h2>
      </div>
      <MentorsCardSection />
    </section>
  );
};

export default AboutSectionMentors;
