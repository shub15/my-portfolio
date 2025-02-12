import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0a0a0a] text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-gray-200 tracking-wide">
                    Contact Me
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                    Feel free to reach out for collaborations or just a friendly chat!
                </p>

                {/* Email Button */}
                <div className="mt-8 flex justify-center">
                    <a
                        href="mailto:maityshubham1510@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-6 py-3 text-lg font-medium text-white border border-blue-500 rounded-full shadow-md hover:border-purple-400 transition"
                    >
                        <FaEnvelope className="text-xl" /> maityshubham1510@gmail.com
                    </a>
                </div>



                {/* Social Media Links */}
                <div className="flex justify-center gap-6 mt-8">
                    <a href="https://github.com/shubhammaity" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/shubhammaity" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/shubhammaity" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-400 hover:text-white transition">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
