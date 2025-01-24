
import { inter } from "@/app/font";
import Link from "next/link";
import React from "react";

const NavbarLinks: React.FC = () => {
    return (
        <div className={`flex flex-row items-center gap-8 ${inter.className}`}>
            <ul className="flex flex-row items-center gap-4 ">
                <li className="text-base hover:text-black text-gray-navlink font-medium cursor-pointer hover:border-b-[3px] border-blue-teal px-2">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-base hover:text-black text-gray-navlink font-medium cursor-pointer hover:border-b-[3px] border-blue-teal px-2">
                    <Link href="#courses">Live cohorts</Link>
                </li>
            </ul>

            <button className="text-blue-teal text-base font-medium border border-blue-teal rounded-md px-4 py-2 hover:bg-blue-teal hover:text-white">    
                Log In
            </button>
        </div>

    );
};

export default NavbarLinks;
