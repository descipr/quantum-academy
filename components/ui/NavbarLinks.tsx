import Link from "next/link";
import React from "react";

const NavbarLinks: React.FC = () => {
  return (
    <ul className="flex flex-row items-center gap-8 ">
      <li className="text-md hover:text-blue-teal text-white font-Plus-jakarta font-normal cursor-pointer">
        <Link href="/">Home</Link>
      </li>
      <li className="text-md hover:text-blue-teal text-white font-Plus-jakarta font-normal cursor-pointer">
        <Link href="/#Fellowship">Fellowship</Link>
      </li>
      <li className="text-md hover:text-blue-teal text-white font-Plus-jakarta font-normal cursor-pointer">
      <Link href="/#reviews">Reviews</Link>
      </li>
      <li className="text-md hover:text-blue-teal text-white font-Plus-jakarta font-normal cursor-pointer">
      <Link href="/aboutus">About Us</Link>
      </li>
    </ul>
  );
};

export default NavbarLinks;
