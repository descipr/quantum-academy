
import { Metadata } from "next";
import Contact from "./_components/contact/Contact";
import LiveAICoursesForDevelopers from "./_components/courseForDevelopment/LiveAICoursesForDevelopers";
import CoursesForLeaders from "./_components/courses/CoursesForLeaders";
import MainHero from "./_components/hero/MainHero";
import MeetYourMentors from "./_components/mentors/MeetYourMentors";
import QuantumAcademy from "./_components/quantum-academy/QuantumAcademy";
import Reviews from "./_components/whyCourse/Reviews";

export const metadata: Metadata = {
  title:"Home Page"
}
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-8 md:gap-16 ">
      <MainHero />
      <QuantumAcademy />
      <CoursesForLeaders />
      <LiveAICoursesForDevelopers />
      <MeetYourMentors />
      <Reviews />
      <Contact />
    </main>
  );
}
