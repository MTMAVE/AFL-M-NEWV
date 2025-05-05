import { motion } from "framer-motion";
import React from "react";
import { Background } from "./background";

export function BackgroundDemo() {
  return (
    <Background>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Transform Your Outdoor Space
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Professional lawn care and maintenance services
        </div>
        <button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg transition-all duration-300">
          Get Started
        </button>
      </motion.div>
    </Background>
  );
}