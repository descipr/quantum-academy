import { AiForSmeData, benefitsData, courseContent, courseStructureData, faqData, SmeTakeawaysContent, takeawaysContent } from "@/constants";
import CourseBenefits from "../_components/course-content/CourseBenefits";
import CourseContent from "../_components/course-content/CourseContent";
import CourseStructure from "../_components/course-content/CourseStructure";
import FAQ from "../_components/faq/FAQ";
import Hero from "../_components/hero/Hero";
import KeyTakeaways from "../_components/keytake-away/KeyTakeaways";
import Mentors from "../_components/mentors/Mentors";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";
import { tanoy_mentor } from "@/utils";

const AiForBusinessLeaders = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            {/* <Hero text="Empowering small business owners to harness the potential of AI for growth, efficiency, and innovation." heading="AI for SMEs" link="https://buy.stripe.com/bIY295gMP9tocggdQR
" /> */}
            <Hero imageSrc={tanoy_mentor} imageAlt="Ai Sme image" heading="AI for SMEs" text="Empowering small business owners to harness the potential of AI for growth, efficiency, and innovation." batchInfo="Next batch starts from 22th February, 2025" primaryLink={{
                href: "https://buy.stripe.com/bIY295gMP9tocggdQR",
                label: "Enroll Now"
            }} secondaryLink={{
                href: "https://docs.google.com/forms/d/e/1FAIpQLSczIJmMx9GqFKUqs8-PqsxEfVhqXWYwZlo-kPWkiOoUavFY5A/viewform?usp=header ",
                label: "Requeest a Callback"
            }} />
            <Mentors />
            <KeyTakeaways heading={SmeTakeawaysContent.heading} takeaways={SmeTakeawaysContent.takeaways} />
            <CourseContent data={courseContent} />
            <WhoShouldTakeThisCourse heading="Who Should Take This Course?"
                data={AiForSmeData} />
            <CourseBenefits heading={benefitsData.heading} benefits={benefitsData.benefits} />
            <CourseStructure heading={courseStructureData.heading} courseItems={courseStructureData.courseItems} />
            <FAQ heading={faqData.heading} faqs={faqData.faqs} />
        </main>
    );
}

export default AiForBusinessLeaders;