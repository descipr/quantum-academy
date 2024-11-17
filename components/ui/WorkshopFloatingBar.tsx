"use client";
import Link from "next/link";
import { useEffect } from "react";

interface Iworkshop {
  date: string;
  cost: string;
}

const WorkshopFloatingBar = ({ date, cost }: Iworkshop) => {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[src="https://checkout.razorpay.com/v1/payment-button.js"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_OpRb7xG2aaZA22");
      script.async = true;

      const container = document.getElementById(
        "razorpay-button-container-floating"
      );
      if (container) {
        container.appendChild(script);
      }

      return () => {
        if (container && container.contains(script)) {
          container.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 to-black-primary text-white shadow-lg py-4 z-10 opacity-95">
      <div className="container mx-auto max-w-5xl flex flex-row justify-between items-center space-x-2 md:space-x-4 px-2 md:px-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            Workshop Date
          </span>
          <span className="text-sm sm:text-base md:text-lg font-semibold">
            {date}
          </span>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            Cost
          </span>
          <div className="flex items-baseline space-x-1 md:space-x-2">
            <span className="text-base sm:text-lg md:text-2xl font-bold">
              {cost}
            </span>
          </div>
        </div>

        <div className="relative flex items-center">
          <span className="absolute -top-2 md:-top-3 -left-2 md:-left-4 bg-green-500 text-white text-[8px] sm:text-[10px] md:text-xs font-semibold rounded-full px-1 sm:px-2 py-[2px] z-30">
            Filling fast
          </span>
          {/* <form
            id="razorpay-button-container-floating"
            className="ml-2 sm:ml-4 md:ml-8 relative z-10"
          ></form> */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdHuTzfjEptrRohJahiIOIa_A_He9LdyEKJ30Y0KJ0EuL99tg/viewform" className="text-blue-900 px-4 py-2 bg-yellow-400/90 font-semibold rounded-lg">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkshopFloatingBar;
