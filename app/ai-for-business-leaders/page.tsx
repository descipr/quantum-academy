import { AiForLeaderData, courseContent, courseStructureData, faqData, smeBenefitsData, takeawaysContent } from "@/constants";
import CourseBenefits from "../_components/course-content/CourseBenefits";
import CourseContent from "../_components/course-content/CourseContent";
import CourseStructure from "../_components/course-content/CourseStructure";
import FAQ from "../_components/faq/FAQ";
import Hero from "../_components/hero/Hero";
import KeyTakeaways from "../_components/keytake-away/KeyTakeaways";
import Mentors from "../_components/mentors/Mentors";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";
import { HeroImage } from "@/utils";

const AiForBusinessLeaders = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            {/* <Hero text="Navigating this AI age doesn't just take technical guidance; it takes strategic and human-centric leadership, a clear vision, and the ability to manage teams effectively. " heading="AI for Leaders" link=" https://buy.stripe.com/6oE6pl2VZgVQ0xyfYY */}
{/* " /> */}
            <Hero imageSrc={HeroImage} imageAlt="Ai-for business leaders" heading="AI for Leaders" text="Navigating this AI age doesn't just take technical guidance; it takes strategic and human-centric leadership, a clear vision, and the ability to manage teams effectively." batchInfo="Next batch starts from 22th February, 2025" primaryLink={{
                href: "https://buy.stripe.com/6oE6pl2VZgVQ0xyfYY ",
                label: "Enroll Now"
            }} secondaryLink={{
                href: "https://docs.google.com/forms/d/e/1FAIpQLSczIJmMx9GqFKUqs8-PqsxEfVhqXWYwZlo-kPWkiOoUavFY5A/viewform?usp=header ",
                label: "Requeest a Callback"
            }}  />
            <Mentors />
            <KeyTakeaways heading={takeawaysContent.heading} takeaways={takeawaysContent.takeaways} />
            <CourseContent data={courseContent} />
            <WhoShouldTakeThisCourse heading="Who Should Take This Course?" data={AiForLeaderData} />
            <CourseBenefits heading={smeBenefitsData.heading} benefits={smeBenefitsData.benefits} />
            <CourseStructure heading={courseStructureData.heading} courseItems={courseStructureData.courseItems} />
            <FAQ heading={faqData.heading} faqs={faqData.faqs} />
        </main>
    );
}

export default AiForBusinessLeaders;