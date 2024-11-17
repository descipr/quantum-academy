"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import LearningCardSection from "./ui/LearningCardSection";
import Image from "next/image";
import { DownloadIcon } from "@/utils";
import { LearningCardData } from "@/constants";
import MobileLearningCarousel from "./ui/MobileLearningCarousel";

interface LearningProps {
  courseDetails: LearningCardData[];
  pdfurl: string;
}

const Learning = ({ courseDetails, pdfurl }: LearningProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDownloadClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pdfUrl = pdfurl;
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = pdfUrl;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

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
          "Thank you for downloading the curriculum. Our team will get in touch with you shortly"
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

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 10) {
      setPhoneNumber(input);
    }
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  return (
    <section className="section-style gap-6 sm:gap-0 ">
      <h2 className="heading text-black-primary">
        What Will<span className="text-green-primary"> You Learn</span>
      </h2>

      {isDesktop ? (
        <LearningCardSection courseDetails={courseDetails} />
      ) : (
        <MobileLearningCarousel courseDetails={courseDetails} />
      )}

      <button
        onClick={handleDownloadClick}
        className="flex items-center px-4 py-2 space-x-2 text-white bg-[#208817] hover:bg-green-primary rounded-xl shadow-md box-shadow mx-auto"
      >
        <span className="flex items-center justify-center text-black-primary text-center font-bold text-lg">
          Download Detailed Curriculum and Course Timelines
        </span>
        <Image
          src={DownloadIcon}
          alt="Download icon"
          width={24}
          height={24}
          priority
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4">Download Curriculum</h3>
            <p className="text-gray-600 mb-4">
              Please fill in your details to download the PDF. The download will
              start automatically after submission.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
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
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-accent text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Learning;
