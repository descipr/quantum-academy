"use client";
import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      className="w-screen h-screen fixed bg-gray-900 top-0 pointer-events-none z-20"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    />
  );
}
