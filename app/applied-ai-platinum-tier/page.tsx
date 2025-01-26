import { platinum_tier } from "@/utils";
import TierHero from "../_components/hero/TierHero";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";
import { courseStructureDataGold, courseStructureDataPlatinum, goldCaseStudiesData, goldFaqData, GoldTakeawaysContent,  platinumCaseStudiesData,  platinumFaqData,  platinumTakeawaysContent,  PlatinumTierData } from "@/constants";
import BuildingSkills from "../_components/keytake-away/BuildingSkills";
import CourseStructure from "../_components/course-content/CourseStructure";
import CaseStudies from "../_components/case-studies/CaseStudies";
import CoreFeature from "../_components/core-features/CoreFeature";
import { FaCertificate, FaChalkboardTeacher, FaInfinity, FaVideo } from "react-icons/fa";
import FAQ from "../_components/faq/FAQ";


const platinumCoreFeatures = {
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
        title: "Case Study-Driven Learning",
        description:
          "Solve real-world problems that mirror actual industry challenges",
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Lifetime Access",
        description:
          "Revisit resources, templates, and recordings anytime you need",
      },
      {
        icon: <FaChalkboardTeacher />,
        title: "Mentorship & Feedback",
        description: "Receive personalized guidance to refine your AI journey",
      },
      {
        icon: <FaCertificate />,
        title: "Professional Certification",
        description: "Demonstrate your expertise with a recognized credential.",
      },
    ],
  };

const AppliedAiPlatinumTier = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            <TierHero
                imageSrc={platinum_tier}
                altText="AI Gold Tier Illustration"
                title="Applied AI Platinum Tier"
                highlightText=" Boost Your AI Skills"
                description="Transform your data expertise into real-world AI solutions with advanced analytics, machine learning, and interactive dashboards."
                details={{
                    level: 'Intermediate',
                    prerequisite: 'Basic familiarity with Python, SQL, and any visualization tool',
                    duration: '4 Weeks',
                    investment: {
                        original: '$2999',
                        discounted: '$2499',
                    },
                }}
                buttonText="Enroll Now"
                buttonLink="https://buy.stripe.com/14k8xtcwzdJEa88bIM"
            />
            <WhoShouldTakeThisCourse heading="Who This Course Is For" data={PlatinumTierData} />
            <BuildingSkills heading={platinumTakeawaysContent.heading} takeaways={platinumTakeawaysContent.takeaways} />
            <CourseStructure heading={courseStructureDataPlatinum.heading} courseItems={courseStructureDataPlatinum.courseItems} />
            <CaseStudies heading={platinumCaseStudiesData.heading} caseStudies={platinumCaseStudiesData.caseStudies} />
            <CoreFeature heading={platinumCoreFeatures.heading} takeaways={platinumCoreFeatures.takeaways} />
            <FAQ heading={platinumFaqData.heading} faqs={platinumFaqData.faqs} />
        </main>
    );
}

export default AppliedAiPlatinumTier;