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
      className={`fixed flex flex-col justify-center items-center z-50 top-0 right-0 w-full bg-black-primary text-white transition-transform duration-300 h-screen transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-4xl" icon={faXmark} />
      </button>
      <ul className="flex flex-col justify-center items-center space-y-4 z-10">
        <li className="text-xl hover:text-gray-500 font-Plus-jakarta">
          <Link href="/#fellowship" onClick={onClose}>
            Fellowship
          </Link>
        </li>
        <li className="text-xl hover:text-gray-500  font-Plus-jakarta">
          <Link href="/#reviews" onClick={onClose}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileDrawer;
