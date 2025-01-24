import { AiForLeaderData, courseStructureData, ethicsBenefitsData, ethicsCourseContent, ethicsFaqData, ethicsTakeawaysContent } from "@/constants";
import Hero from "../_components/hero/Hero";
import Mentors from "../_components/mentors/Mentors";
import KeyTakeaways from "../_components/keytake-away/KeyTakeaways";
import CourseContent from "../_components/course-content/CourseContent";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";
import CourseBenefits from "../_components/course-content/CourseBenefits";
import CourseStructure from "../_components/course-content/CourseStructure";
import FAQ from "../_components/faq/FAQ";

const AiForEthics = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            <Hero text="Learn to design, deploy, and manage AI systems that are ethical, inclusive, and aligned with legal and societal norms." heading="AI Ethics" link=" https://buy.stripe.com/6oE6pl2VZgVQ0xyfYY
" />
            <Mentors />
            <KeyTakeaways heading={ethicsTakeawaysContent.heading} takeaways={ethicsTakeawaysContent.takeaways} />
            <CourseContent data={ethicsCourseContent} />
            <WhoShouldTakeThisCourse heading="Who Should Take This Course?" data={AiForLeaderData} />
            <CourseBenefits heading={ethicsBenefitsData.heading} benefits={ethicsBenefitsData.benefits} />
            <CourseStructure heading={courseStructureData.heading} courseItems={courseStructureData.courseItems} />
            <FAQ heading={ethicsFaqData.heading} faqs={ethicsFaqData.faqs} />
        </main>
    );
}

export default AiForEthics;