import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll"; // Assuming you might want smooth scroll, or use react-router Link
import profile_pic from "../assets/profile_pic/profile_pic.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-black text-white min-h-screen flex items-center pt-32 md:pt-0 overflow-hidden selection:bg-white selection:text-black">
      
      {/* --- Ambient Background Effects --- */}
      {/* Blue Glow Top Left */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      {/* Purple Glow Bottom Right */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20">
          
          {/* --- Left Column: Typography --- */}
          <div className="flex-1 text-center lg:text-left">
            
            {/* Intro Tag */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
                Available for work
              </span>
            </motion.div> */}

            {/* Name */}
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shubham <br className="hidden lg:block" />
              <span className="text-neutral-500">Maity</span>.
            </motion.h1>

            {/* Role & Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-xl md:text-2xl font-light text-neutral-300">
                Full-Stack Developer <span className="text-neutral-600 mx-2">/</span> Embedded Software
              </h2>
              
              <p className="text-neutral-400 leading-relaxed max-w-lg mx-auto lg:mx-0 text-base md:text-lg">
                Engineering intelligent solutions at the intersection of hardware and software. 
                Currently Programming Lead at <span className="text-white border-b border-neutral-700">Robocon KJSIT</span>.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="#projects" // Change to Link component if needed
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-200 w-full sm:w-auto text-center"
              >
                View Works
              </a>
              
              <a
                href="https://drive.google.com/file/d/1b1XtDROnvhCnMVjj41T4LsEc6yQnxBOQ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-neutral-700 text-neutral-300 rounded-full hover:border-white hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto group"
              >
                <span>Resume</span>
                <FaFileDownload className="group-hover:-translate-y-1 transition-transform" size={14} />
              </a>
            </motion.div>

            {/* Socials - Minimalist */}
            <motion.div
              className="mt-12 flex items-center justify-center lg:justify-start gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
               <SocialLink href="https://github.com/shub15" icon={<FaGithub />} label="GitHub" />
               <SocialLink href="https://www.linkedin.com/in/maityshub/" icon={<FaLinkedin />} label="LinkedIn" />
            </motion.div>
          </div>

          {/* --- Right Column: Image --- */}
          <motion.div
            className="relative lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Spinning Border Effect */}
              <div className="absolute inset-0 rounded-full border border-neutral-800 group-hover:border-neutral-600 transition-colors duration-500 scale-110" />
              <div className="absolute inset-0 rounded-full border border-neutral-800/50 scale-125 border-dashed animate-[spin_10s_linear_infinite]" />
              
              {/* Image Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-neutral-900 bg-neutral-900 z-10">
                <img
                  src={profile_pic}
                  alt="Shubham Maity"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-neutral-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-600 to-transparent" />
      </motion.div>

    </section>
  );
};

// Helper Component for Social Links
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="text-neutral-500 hover:text-white transition-colors duration-300 text-2xl"
  >
    {icon}
  </a>
);

export default Hero;