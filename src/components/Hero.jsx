import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFax, FaReact, FaDownload } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";
import About from "./About";

const Hero = () => {
    return (
        <section id="hero" className="relative bg-black text-white font-bai">
            {/* Hero Content */}
            <div className="flex items-center justify-evenly h-screen">
                <div className="flex flex-col items-center justify-center h-screen text-center px-6">
                    {/* Animated Heading */}
                    <motion.h1
                        className="mt-32 text-5xl md:text-6xl font-extrabold text-gray-100 drop-shadow-lg"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-lime-300 bg-clip-text text-transparent">Shubham Maity</span>
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

                    <div>
                        <motion.p
                            className="mt-24 text-lg md:text-xl font-light text-gray-400 text-justify leading-relaxed container mx-auto max-w-3xl"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            I am a student pursuing B.Tech in Information Technology. Currently working as a programming lead at Robocon KJSIT. Experienced in critical logic building for advance robotics and machine learning.
                        </motion.p>

                        {/* Social Icons */}
                        <motion.div
                            className="mt-16 flex space-x-6"
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
                        </motion.div>
                    </div>

                    {/* Call-to-Action Button */}
                    <motion.div
                        className="mt-16 flex space-x-6 items-center"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a
                            href="https://drive.google.com/file/d/1jXZgGs4Mgd5dyEiiCDDBambHTgJFhuRF/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 border border-gray-500 hover:bg-gray-100 hover:text-black rounded-lg text-md font-bold text-gray-500 transition-all"
                        >
                            View Resume
                        </a>
                        <a
                            href="#projects"
                            // className="px-6 py-3 border border-gray-500 hover:bg-gray-100 hover:text-black rounded-lg text-gray-300 transition-all text-lg"
                            className="text-md font-bold text-gray-500 hover:text-white transition-all"
                        >
                            View My Work
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    className="flex items-center justify-center"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGCkZRvcAB1oA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702657951245?e=1756339200&v=beta&t=ryBdIe89xFhGwPXlRT2Ot9QbaOL9gyd8FH3gnlh_k4w"
                        alt=""
                        className="absolute blur-3xl scale-105 rounded-full"
                    />

                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGCkZRvcAB1oA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702657951245?e=1756339200&v=beta&t=ryBdIe89xFhGwPXlRT2Ot9QbaOL9gyd8FH3gnlh_k4w"
                        alt=""
                        className="z-10 rounded-full"
                    />

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
