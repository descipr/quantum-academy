"use client";
import { motion } from "framer-motion";

const CallNow = () => {
  return (
    <div className="max-w-4xl flex flex-col items-center justify-center mx-auto h-1/2 py-8 px-4">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="text-center text-white flex flex-col gap-4"
      >
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold">
          For More Details on the Workshop, connect with us on the below number!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:space-x-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl">
            <a href="tel:+919148398744 " className="underline text-white">
            +919148398744
            </a>
          </p>
          <a
            href="tel:+919148398744"
            className="mt-4 md:mt-0 px-4 py-2 text-base md:text-lg lg:text-xl bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Call Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CallNow;
