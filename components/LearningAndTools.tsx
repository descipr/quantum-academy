
import { CourseDetail } from "@/constants";
import LearnSection from "./ui/LearnSection";
import ToolsSection from "./ui/ToolsSection";

interface LearningProps {
  courseDetails: CourseDetail;
}


const LearningAndTools = ({courseDetails} : LearningProps) => {
  return (
    <section className="section-style">
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-black-primary heading">Concepts You  <span className="text-blue-teal">Will Learn</span> </h2>
      </div>

      <LearnSection learnings = {courseDetails.learning} />
      <ToolsSection tools = {courseDetails.tools} />
    </section>
  );
};

export default LearningAndTools;
