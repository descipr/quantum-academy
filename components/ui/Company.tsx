import { companyList } from "@/constants";
import Link from "next/link";
import React from "react";

const Company: React.FC = () => {
  return (
    <div className="flex flex-col text-left text-white space-y-4">
      <h3 className="font-normal sm:font-semibold text-md">Company</h3>
      <ul className="flex flex-col space-y-2">
        {companyList.map((item, index) => (
          <li key={index} className="text-xs font-light">
            <Link href={item.href as string}>{item.label}</Link>
          </li>
        ))}
        <li className="text-xs font-light">
          <Link href="/Privacy-Policy">Privacy Policy</Link>
        </li>
        <li className="text-xs font-light">
          <Link href="/Terms-of-Use">Terms of Use</Link>
        </li>
        <li className="text-xs font-light">
          <Link
            href={`mailto:hello@descipr.com?subject=${encodeURIComponent(
              "Contact us"
            )}`}
          >
            Contact us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Company;
