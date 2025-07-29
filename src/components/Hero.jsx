import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-black text-white font-bai min-h-screen">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly h-full px-6 md:px-0 md:py-0 text-center md:text-left mx-auto">

        {/* Left column: Text content */}
        <div className="flex flex-col justify-center h-screen">
          {/* Animated Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-100 drop-shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <br></br><span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-lime-300 bg-clip-text text-transparent">Shubham Maity</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl font-light text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full-Stack Developer | Embedded Software
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-8 sm:mt-12 text-sm sm:text-base md:text-lg font-light text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 text-justify"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            I am a student pursuing B.Tech in Information Technology. Currently working as a programming lead at Robocon KJSIT. Experienced in critical logic building for advanced robotics and machine learning.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="mt-10 sm:mt-16 flex justify-center md:justify-start space-x-6 text-2xl sm:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/maityshub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/shub15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div
            className="mt-10 sm:mt-16 flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="https://drive.google.com/file/d/1jXZgGs4Mgd5dyEiiCDDBambHTgJFhuRF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-500 rounded-lg text-gray-500 font-bold text-base hover:bg-gray-100 hover:text-black transition-all w-full sm:w-auto text-center"
            >
              View Resume
            </a>
            <a
              href="#projects"
              className="text-gray-500 font-bold text-base hover:text-white transition-all w-full sm:w-auto text-center"
            >
              View My Work
            </a>
          </motion.div>
        </div>

        {/* Right column: Image */}
        <motion.div
          className="relative mt-16 md:mt-0 hidden md:flex items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Blurred Background Image */}
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGCkZRvcAB1oA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702657951245?e=1756339200&v=beta&t=ryBdIe89xFhGwPXlRT2Ot9QbaOL9gyd8FH3gnlh_k4w"
            alt="Profile background"
            className="absolute blur-3xl scale-105 rounded-full w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80"
          />
          {/* Foreground Image */}
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGCkZRvcAB1oA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702657951245?e=1756339200&v=beta&t=ryBdIe89xFhGwPXlRT2Ot9QbaOL9gyd8FH3gnlh_k4w"
            alt="Profile"
            className="relative z-10 rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
