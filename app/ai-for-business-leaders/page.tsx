import CourseBenefits from "../_components/course-content/CourseBenefits";
import CourseContent from "../_components/course-content/CourseContent";
import CourseStructure from "../_components/course-content/CourseStructure";
import FAQ from "../_components/faq/FAQ";
import Hero from "../_components/hero/Hero";
import KeyTakeaways from "../_components/keytake-away/KeyTakeaways";
import Mentors from "../_components/mentors/Mentors";
import WhoShouldTakeThisCourse from "../_components/whyCourse/WhoShouldTakeThisCourse";

const AiForBusinessLeaders = () => {
    return (
        <main className="flex flex-col gap-8 md:gap-16 bg-white">
            <Hero />
            <Mentors />
            <KeyTakeaways />
            <CourseContent />
            <WhoShouldTakeThisCourse />
            <CourseBenefits />
            <CourseStructure />
            <FAQ />
        </main>
    );
}

export default AiForBusinessLeaders;