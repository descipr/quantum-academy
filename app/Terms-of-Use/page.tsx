import TermsOfUse from "@/components/TermsofUse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Provides information about the terms of use of Descipr products",
};

const page = () => {
  return <TermsOfUse />;
};

export default page;
