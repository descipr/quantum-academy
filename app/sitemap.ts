import { CourseDetail, courseDetails } from "@/constants";
import { cleanUpSlug } from "@/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const courseEnries: MetadataRoute.Sitemap = courseDetails.map(
    (course: CourseDetail) => ({
      url: `https://www.descipr.com/courses/${cleanUpSlug(course.heading)}`,
      lastModified: new Date(),
    })
  );

  return [
    {
      url: "https://www.descipr.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.descipr.com/aboutus",
      lastModified: new Date(),
    },
    {
      url: "https://www.descipr.com/Privacy-Policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.descipr.com/Terms-of-Use",
      lastModified: new Date(),
    },
    {
      url: "https://www.descipr.com/thankyou",
      lastModified: new Date(),
    },
    {
      url: "https://www.descipr.com/workshop",
      lastModified: new Date(),
    },
    {
      url: "https://www.descipr.com/workshop_llm",
      lastModified: new Date(),
    },
    ...courseEnries,
  ];
}
