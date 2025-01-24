'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { dm_sans, inter } from "@/app/font";

interface FAQItem {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

interface FAQProps {
  heading: string;
  faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ heading, faqs }) => {
  const faqRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }, faqRef);

    return () => ctx.revert(); // Clean up GSAP context
  }, []);

  return (
    <div ref={faqRef} className="max-w-6xl w-full mx-auto px-4 py-8">
      <h1 className={`text-3xl md:text-5xl font-bold text-left mb-10 ${dm_sans.className}`}>
        {heading}
      </h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item border-b py-4">
          <h2 className={`text-lg md:text-2xl text-blue-teal font-semibold ${dm_sans.className}`}>
            {faq.question}
          </h2>
          <p className={`text-gray-800 mt-2 md:text-lg ${inter.className}`}>
            {faq.answer}
            {faq.linkText && faq.linkHref && (
              <>
                {" "}
                <a href={faq.linkHref} className="text-blue-600 underline">
                  {faq.linkText}
                </a>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
