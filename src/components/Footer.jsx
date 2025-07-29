import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <a href="#hero">
          <p className="text-lg font-medium text-gray-300">
            &copy; 2024 <span className="text-blue-400 font-semibold">Shubham Maity</span>. All Rights Reserved.
          </p>
        </a>

        {/* Social Links */}
        {/* <div className="flex justify-center items-center gap-6 mt-4">
          <a 
            href="#" 
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition duration-300"
          >
            <FaGithub className="text-xl" /> GitHub
          </a>
          <a 
            href="#" 
            className="flex items-center gap-2 text-gray-400 hover:text-blue-300 transition duration-300"
          >
            <FaTwitter className="text-xl" /> Twitter
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
