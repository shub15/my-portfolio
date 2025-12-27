import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll"; // Assuming you might want smooth scroll, or use react-router Link
import profile_pic from "../assets/profile_pic/profile_pic.jpg";

const resumeLink = import.meta.env.VITE_RESUME_LINK;

const Hero = () => {
  return (
    <section id="hero" className="relative bg-black text-white min-h-screen flex items-center pt-32 md:pt-0 overflow-hidden selection:bg-white selection:text-black">
      
      {/* --- Ambient Background Effects --- */}
      {/* Blue Glow Top Left */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      {/* Purple Glow Bottom Right */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-0">
          
          {/* --- Left Column: Typography --- */}
          <div className="flex-1 text-center lg:text-left">

            {/* Name */}
            <motion.h1
              className="text-6xl sm:text-7xl md:text-5xl font-bold tracking-tighter leading-[0.9] mb-6 text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shubham {" "}
              <span className="text-neutral-500">Maity</span>.
            </motion.h1>

            {/* Role & Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-xl md:text-2xl font-light text-neutral-300">
                Full-Stack Developer <span className="text-neutral-600 mx-2">/</span> Mobile & Backend
              </h2>
              
              <p className="text-neutral-400 leading-relaxed mx-auto lg:mx-0 text-base md:text-xl">
              I am at Third Year of my college, pursuing <span className="text-white">B.Tech in Information Technology</span> from{" "}
              <span className="text-white">Mumbai University</span>.
              Currently interning as <span className="text-white">React Native dev</span> at{" "}
              <span className="text-white">Baya.biz</span>.
              <div className="py-2"/>
              I have <span className="text-white">6 month</span> of work experience in <span className="text-white">mobile app development</span>. I have done internships, worked with startups. I have helped build <span className="text-white">embedded control system</span> for <span className="text-white">Robocon</span>, a national level robotics competition hosted by IIT Delhi, where our team <span className="text-white">ranked 16th</span> nationally.
              <div className="py-2"/>
              I have participated in <span className="text-white">6+</span> hackathons and <span className="text-white">won 1</span>. Lead end-to-end <span className="text-white">backend, frontend, mobile app and server deployment </span> with high scalibilty.
              <div className="py-2"/>
              I have studied <span className="text-white">Computer Networks, DBMS, OS, DSA, Machine Learning, AI, Cloud Computing, Web Development, DevOps</span> as my college subjects.
              </p>
              <p>Mumbai, India</p>
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
                href={resumeLink}
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
            className="relative lg:w-1/3 flex justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              {/* Spinning Border Effect */}
              {/* <div className="absolute inset-0 rounded-full border border-neutral-800 group-hover:border-neutral-600 transition-colors duration-500 scale-110" />
              <div className="absolute inset-0 rounded-full border border-neutral-800/50 scale-125 border-dashed animate-[spin_10s_linear_infinite]" /> */}
              
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