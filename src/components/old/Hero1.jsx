import React from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-3.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div
        className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white 
        font-bai bg-cover"
        // style={bg1 && {backgroundImage: `url(${bg2})`}}
        // className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-[#022a30] text-white"
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Shubham Maity
          </motion.h1>
          <p className="mt-4 text-lg font-medium">
            Embedded Software Developer | <text className="text-[#e0f780]">Full-Stack Developer</text>
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-white shadow-md transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;