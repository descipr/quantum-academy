import DesciprDifference from "@/components/DesciprDifference";
import Learning from "@/components/Learning";
import LearningAndTools from "@/components/LearningAndTools";
import LiveSchedule from "@/components/LiveSchedule";
import LiveSessionSection from "@/components/LiveSessionSection";
import OurMentors from "@/components/OurMentors";
import OurTrainers from "@/components/OurTrainers";
import Testimonials from "@/components/Testimonials";
import HorizontalLine from "@/components/ui/HorizontalLine";
import PriceCard from "@/components/ui/PriceCard";
import { CourseDetail, courseDetails } from "@/constants";
import { BackgroundLogo, cleanUpSlug } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export interface Params {
  slug: string;
}
export async function generateStaticParams(): Promise<Params[]> {
  const paths: Params[] = courseDetails.map((course: CourseDetail) => ({
    slug: cleanUpSlug(course.heading),
  }));

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cleanedSlug = cleanUpSlug(params.slug);

  const course: CourseDetail | undefined = courseDetails.find(
    (course) => cleanUpSlug(course.heading) === cleanedSlug
  );

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The course you are looking for could not be found.",
    };
  }

  return {
    title: course.heading,
    description: `Learn more about ${course.heading}. ${course.description}`,
  };
}

const CoursePage = ({ params }: { params: { slug: string } }) => {
  const cleanedSlug = cleanUpSlug(params.slug);

  const course: CourseDetail | undefined = courseDetails.find(
    (course) => cleanUpSlug(course.heading) === cleanedSlug
  );

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <section className="relative container mx-auto px-4 py-4 md:py-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:space-x-4 md:space-x-16 sm:space-y-8 md:space-y-16">
        <Image
          src={BackgroundLogo}
          alt="background image"
          width={480}
          className="absolute top-0 right-0 -z-10"
          priority
        />
        <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-left sm:w-1/2">
          <h3 className="text-3xl md:text-6xl font-bold text-white font-Plus-jakarta">
            {course.heading}
          </h3>
          <p className="text-sm md:text-base text-white font-light">
            {course.description}
          </p>

          <Image
            src={course.sessionInsights}
            alt="course insights"
            width={500}
            height={250}
            className="rounded-lg pt-4"
            priority
          />
        </div>

        <div className="flex justify-center sm:w-1/2  pt-16 md:pt-0">
          <PriceCard courseDetails={course} />
        </div>
      </section>
      <HorizontalLine />
      <Learning courseDetails={course.weekSchedule || []} pdfurl={course.pdf} />
      <HorizontalLine />
      <LiveSchedule />
      <HorizontalLine />
      <OurTrainers />
      <HorizontalLine />
      <OurMentors />
      <HorizontalLine />
      <DesciprDifference />
      <HorizontalLine />
      <Testimonials />
      <HorizontalLine />
      <LearningAndTools courseDetails={course} />
      <HorizontalLine />
      <LiveSessionSection VideoUrl={course.videoUrl} />
    </>
  );
};

export default CoursePage;
