import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFax, FaReact, FaDownload } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";
import About from "./About";

const Hero = () => {
    return (
        <section id="hero" className="relative bg-black text-white font-bai">
            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center h-screen text-center px-6">
                {/* Animated Heading */}
                <motion.h1
                    className="mt-40 text-5xl md:text-6xl font-extrabold text-gray-100"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm Shubham Maity
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="mt-6 text-lg md:text-xl font-light text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Full-Stack Developer | Embedded Software
                </motion.p>

                <motion.p
                    className="mt-24 text-lg md:text-xl font-light text-gray-400 text-justify leading-relaxed container mx-auto max-w-3xl"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    I am a student at KJSIT pursuing BTech in Information Technology. Currently working as a programmer in Robocon KJSIT and a technical member of IET. Experienced in full stack development and IoT.
                </motion.p>
                {/* Call-to-Action Button */}
                <motion.div
                    className="mt-24"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 border border-gray-500 hover:bg-gray-100 hover:text-black rounded-lg text-gray-300 transition-all text-lg"
                    >
                        View My Work
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    className="mt-24 flex space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <a
                        href="https://www.linkedin.com/in/maityshub/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-gray-500 hover:text-white transition-all"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/shub15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl text-gray-500 hover:text-white transition-all"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1jXZgGs4Mgd5dyEiiCDDBambHTgJFhuRF/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl text-gray-500 hover:text-white transition-all"
                    >
                        View Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
