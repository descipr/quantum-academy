"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Whatsapp } from "@/utils";
import { usePathname } from "next/navigation";

const FloatingButton = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, phoneNumber }),
      });

      if (response.ok) {
        alert(
          "We’ve received your request. Our mentor will connect with you within the next 24 hours!"
        );
        setFullName("");
        setPhoneNumber("");
        setIsOpen(false);
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 10) {
      setPhoneNumber(input);
    }
  };

  return (
    <div
      className={`fixed z-50 ${
        pathname === "/" ? "bottom-3 right-3" : "bottom-24 right-3"
      }`}
    >
      <div className="flex justify-end items-center gap-4 md:flex-row">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center px-3 py-2 md:px-4 md:py-2 space-x-2 text-sm md:text-base text-black bg-blue-400 hover:bg-blue-500 rounded-lg md:rounded-xl shadow-md"
        >
          <span className="font-medium">Request a Call back</span>
          <Image src={Phone} alt="Phone icon" width={20} height={20} priority />
        </button>
        <Link
          href="https://wa.me/9148398744"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-2 md:px-4 md:py-2 space-x-2 text-sm md:text-base text-white bg-green-500 hover:bg-green-600 rounded-lg md:rounded-xl shadow-md"
        >
          <span className="font-medium">WhatsApp</span>
          <Image
            src={Whatsapp}
            alt="WhatsApp icon"
            width={20}
            height={20}
            priority
          />
        </Link>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
              Book Your Free 30-Minute Career Guidance Session
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 text-sm md:text-base"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 text-sm md:text-base"
                  required
                  maxLength={10}
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-sm md:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 text-sm md:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
