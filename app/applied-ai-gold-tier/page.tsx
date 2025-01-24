import { Gold_tier } from "@/utils";
import TierHero from "../_components/hero/TierHero";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";
import { courseStructureDataGold, goldCaseStudiesData, goldFaqData, GoldTakeawaysContent, GoldTierData, takeawaysContent } from "@/constants";
import BuildingSkills from "../_components/keytake-away/BuildingSkills";
import CourseStructure from "../_components/course-content/CourseStructure";
import CaseStudies from "../_components/case-studies/CaseStudies";
import CoreFeature from "../_components/core-features/CoreFeature";
import { FaCertificate, FaChalkboardTeacher, FaInfinity, FaVideo } from "react-icons/fa";
import FAQ from "../_components/faq/FAQ";

const goldCoreFeatures = {
    heading: "Core Features: Boosting Your Learning",
    takeaways: [
      {
        icon: <FaVideo />,
        title: "Live Interactive Classes",
        description:
          "Engage with industry experts in real-time sessions for dynamic learning experiences.",
      },
      {
        icon: <FaInfinity />,
        title: "Lifetime Access",
        description:
          "Revisit resources, templates, and recordings anytime you need.",
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Case Study–Driven Learning",
        description:
          "Solve real-world problems that mirror actual industry challenges.",
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Mentorship & Feedback",
        description: "Receive personalized guidance to refine your AI journey.",
      },
      {
        icon: <FaCertificate />,
        title: "Professional Certification",
        description: "Demonstrate your expertise with a recognized credential.",
      },
    ],
  };

const AppliedAiGoldTier = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            <TierHero
                imageSrc={Gold_tier}
                altText="AI Gold Tier Illustration"
                title="Applied AI Gold Tier"
                highlightText="Path to Data Science & AI"
                description="Unlock the power of AI and data science with our beginner-friendly course. Gain essential skills and prepare for a rewarding career."
                details={{
                    level: 'Beginner',
                    prerequisite: 'None',
                    duration: '4 Weeks',
                    investment: {
                        original: '$2699',
                        discounted: '$2199',
                    },
                }}
                buttonText="Enroll Now"
                buttonLink="#"
            />
            <WhoShouldTakeThisCourse heading="Who This Course Is For" data={GoldTierData} />
            <BuildingSkills heading={GoldTakeawaysContent.heading} takeaways={GoldTakeawaysContent.takeaways} />
            <CourseStructure heading={courseStructureDataGold.heading} courseItems={courseStructureDataGold.courseItems} />
            <CaseStudies heading={goldCaseStudiesData.heading} caseStudies={goldCaseStudiesData.caseStudies} />
            <CoreFeature heading={goldCoreFeatures.heading} takeaways={goldCoreFeatures.takeaways} />
            <FAQ heading={goldFaqData.heading} faqs={goldFaqData.faqs} />
        </main>
    );
}

export default AppliedAiGoldTier;