import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-50 top-0 right-0 w-full bg-white bg-opacity-50 text-black transition-transform duration-300 h-[45vh] transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-3 top-1 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-4xl" icon={faXmark} />
      </button>

      <div className="flex flex-col justify-center items-center space-y-4 w-full px-8">
        <ul className="flex flex-col justify-center items-center space-y-4 z-10">
          <li
            className="text-lg hover:text-black text-black font-medium cursor-pointer hover:border-b-[3px] border-blue-teal px-2"
            onClick={onClose} // Close drawer on click
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="text-lg hover:text-black text-black font-medium cursor-pointer hover:border-b-[3px] border-blue-teal px-2"
            onClick={onClose} // Close drawer on click
          >
            <Link href="#courses">Live cohorts</Link>
          </li>
        </ul>
        {/* <button
          className="text-blue-teal text-lg font-medium border border-blue-teal rounded-md px-4 py-2 hover:bg-blue-teal hover:text-white w-full bg-white"
          onClick={onClose} // Optionally close drawer when "Log In" is clicked
        >
          Log In
        </button> */}
      </div>
    </div>
  );
};

export default MobileDrawer;
