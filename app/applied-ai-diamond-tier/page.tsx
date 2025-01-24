import { platinum_tier } from "@/utils";
import TierHero from "../_components/hero/TierHero";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";
import { courseStructureDataDaimond,  daimondCaseStudiesData, daimondFaqData, daimondTakeawaysContent, DaimondTierData } from "@/constants";
import BuildingSkills from "../_components/keytake-away/BuildingSkills";
import CourseStructure from "../_components/course-content/CourseStructure";
import CaseStudies from "../_components/case-studies/CaseStudies";
import CoreFeature from "../_components/core-features/CoreFeature";
import { FaCertificate, FaChalkboardTeacher, FaInfinity, FaVideo } from "react-icons/fa";
import FAQ from "../_components/faq/FAQ";


const daimondCoreFeatures = {
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

const AppliedAiDaimondTier = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            <TierHero
                imageSrc={platinum_tier}
                altText="Applied AI Diamond Tier"
                title="Applied AI Diamond Tier"
                highlightText="Build AI Mastery"
                description="Specialize in cutting-edge AI techniques, from NLP and LLMs to scalable systems, for impactful solutions in production environments."
                details={{
                    level: ' Advanced',
                    prerequisite: 'Proficiency in Python, Machine Learning, and NLP Basics',
                    duration: '4 Weeks',
                    investment: {
                        original: '$3499',
                        discounted: '$2799',
                    },
                }}
                buttonText="Enroll Now"
                buttonLink="#"
            />
            <WhoShouldTakeThisCourse heading="Who This Course Is For" data={DaimondTierData} />
            <BuildingSkills heading={daimondTakeawaysContent.heading} takeaways={daimondTakeawaysContent.takeaways} />
            <CourseStructure heading={courseStructureDataDaimond.heading} courseItems={courseStructureDataDaimond.courseItems} />
            <CaseStudies heading={daimondCaseStudiesData.heading} caseStudies={daimondCaseStudiesData.caseStudies} />
            <CoreFeature heading={daimondCoreFeatures.heading} takeaways={daimondCoreFeatures.takeaways} />
            <FAQ heading={daimondFaqData.heading} faqs={daimondFaqData.faqs} />
        </main>
    );
}

export default AppliedAiDaimondTier;