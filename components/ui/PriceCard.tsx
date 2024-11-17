"use client";
import { useEffect } from "react";
import { CourseDetail } from "@/constants";
import { PriceCardImage } from "@/utils";
import Image from "next/image";

interface PriceCardProps {
  courseDetails: CourseDetail;
}

const PriceCard = ({ courseDetails }: PriceCardProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute(
      "data-payment_button_id",
      courseDetails.razorPay.paymentButtonId
    );
    script.async = true;

    const container = document.getElementById("razorpay-button-container");
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script);
      }
    };
  }, [courseDetails.razorPay.paymentButtonId]);

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:max-w-md lg:max-w-sm relative">
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-sm">
        {courseDetails.discount}
      </div>

      <Image
        src={PriceCardImage}
        alt="Dashboard with analytics"
        className="w-full h-40 object-cover"
      />

      <div className="p-4 sm:p-6">
        <div className="flex flex-col justify-between items-left  font-Plus-jakarta">
          <h3 className="text-gray-600 text-sm font-normal ">
            Cohort starts on
          </h3>
          <span className="text-lg md:text-xl lg:text-lg text-black-primary font-medium">
            {courseDetails.dateOfStart}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-gray-500 text-sm font-normal">Price</p>
          <div className="flex gap-2 items-end">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900">
              {courseDetails.cost}
            </h1>
            <span className="text-gray-500 text-sm line-through">
              {courseDetails.actualcost}
            </span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          EMI from ₹{courseDetails.EmiOptions}/month available at checkout
        </div>

        <form id="razorpay-button-container" className="mt-4 text-center sm:text-left" >
          {/* Razorpay button script will be appended here */}
        </form>

        <div className="mt-2 text-xs text-red-500">
          Price increase from Nov 10 11:59 PM
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
