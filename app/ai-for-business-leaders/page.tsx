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
            <Hero text="Navigating this AI age doesn't just take technical guidance; it takes strategic and human-centric leadership, a clear vision, and the ability to manage teams effectively. " heading="AI for Leaders" link=" https://buy.stripe.com/6oE6pl2VZgVQ0xyfYY
" />
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