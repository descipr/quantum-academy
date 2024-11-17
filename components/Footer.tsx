import React from "react";
import Company from "./ui/Company";
import Fellowship from "./ui/Fellowship";
import FollowUs from "./ui/FollowUs";

import Image from "next/image";
import Link from "next/link";
import { footerLogo, headerLogo } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto flex flex-col items-center sm:items-start  justify-between py-4 md:py-8 space-y-4 md:space-y-16 px-8">
      <div className="flex flex-col sm:flex-row items-left items-center sm:items-start justify-between w-full space-y-4 md:space-y-0">
      <div className="mb-4 text-center sm:mb-0">
            <Link href="/">
                <Image src={footerLogo} alt="Company Logo" width={180} height={50} priority />
            </Link>
        </div>
        <div className="flex flex-col sm:flex-row align-left sm:items-center justify-between gap-8 md:gap-16 lg:gap-24 ">
          <div className="flex gap-4 md:gap-16 lg:gap-24">
            <Fellowship />
            <Company />
            <FollowUs />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-auto space-x-4">
        <p className="text-xs font-light text-black-primary">
          © 2024 — All Rights Reserved
        </p>
        <p className="text-xs font-light text-black-primary">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
