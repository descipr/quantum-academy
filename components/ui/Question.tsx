"use client";
import { faqData, FAQItem } from "@/constants";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export interface Ifaqs {
  faqs: FAQItem[];
}

const Question = ({ faqs }: Ifaqs) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 w-full sm:w-[70%] mx-auto px-4">
      {faqs.map((item: FAQItem, index: number) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-4 cursor-pointer w-full"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center w-full">
            <h3 className="text-sm w-[90%] sm:text-lg font-semibold text-black">
              {item.question}
            </h3>
            {openIndex === index ? (
              <FaChevronUp className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
            ) : (
              <FaChevronDown className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
            )}
          </div>
          {openIndex === index && (
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Question;
