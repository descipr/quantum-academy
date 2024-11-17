import PrivacyPolicy from "@/components/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Provides information about the privacy policy of the company",
};


const page = () => {
  return <PrivacyPolicy />;
};

export default page;
