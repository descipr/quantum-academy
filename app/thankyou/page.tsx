"use client";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="max-w-4xl flex items-center justify-center mx-auto h-3/4 mb-8">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20, delay: 0.6 }}
        className="text-center text-black-primary flex flex-col gap-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Thank <span className="text-blue-teal">You!</span></h1>
        <p className="mt-4 text-lg md:text-xl">
          Thank you for your interest, one of our representatives will get in
          touch with you soon. In the meantime, for faster & quick responses,
          feel free to contact us at{" "}
          <a href="tel:+917019156736" className="underline">
            +917019156736
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
