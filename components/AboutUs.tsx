import { BackgroundLogo } from "@/utils";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="section-style items-center ">
      <Image
        src={BackgroundLogo}
        alt="background image"
        width={480}
        className="absolute top-0 right-0 -z-10"
      />
      <div className="relative flex flex-col  justify-center leading-relaxed tracking-wide space-y-5 md:space-y-8">
        <h1 className="text-3xl md:text-7xl font-bold text-center text-white">
          About
          <span className="text-green-primary font-Plus-jakarta"> Us</span>
        </h1>

        <p className="text-center sm:text-left text-white text-base md:text-lg">
          Our story begins with a simple yet profound observation made by our
          team of seasoned hiring managers: amidst a sea of resumes boasting
          technical skills and tool proficiencies, one critical element was
          often missing—practical problem-solving and strategic thinking.
        </p>
        <p className="text-center sm:text-left text-white text-base md:text-lg">
          Realizing that many promising candidates were falling short in these
          essential areas, our team set out to address this gap. They
          envisioned a platform where aspiring data scientists could not only
          master technical skills but also develop the critical thinking and
          business acumen needed to thrive in the real world.
        </p>
        <p className="text-center sm:text-left text-white text-base md:text-lg">
          Thus, Descipr was born. We are committed to transforming the landscape
          of data science education by offering meticulously curated learning
          journeys and immersive projects. Our goal is to equip learners with a
          holistic skill set that goes beyond theory, preparing them for success
          in today’s dynamic job market.
        </p>
        <p className="text-center sm:text-left text-white text-base md:text-lg">
          At Descipr, we are dedicated to fostering an ecosystem of excellence
          in AI and Data Science. We invite you to join us on this journey of
          discovery and empowerment, where endless possibilities await and true
          potential is unlocked.
        </p>
        <p className="text-center sm:text-left text-white text-base md:text-lg">
          Together, let’s shape the future of Data Science and AI.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
