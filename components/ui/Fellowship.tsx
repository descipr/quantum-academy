import { fellowshipList } from "@/constants";
import Link from "next/link";
import React from "react";

const Fellowship: React.FC = () => {
  return (
    <div className="flex flex-col text-left text-white space-y-4">
      <h3 className="font-normal sm:font-semibold text-md">Fellowships</h3>
      <ul className="flex flex-col space-y-2">
        {fellowshipList.map((item, index) => (
          <li key={index} className="text-xs font-light">
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fellowship;
