import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-center items-center relative">
        
        {/* Burger Icon for Mobile */}
        <div className="absolute left-4 md:hidden">
          <button 
            onClick={() => setExpand(!expand)} 
            className="focus:outline-none text-white"
          >
            <FaBars className="size-10 cursor-pointer p-2 rounded-md hover:bg-white/20 transition" />
          </button>
        </div>

        {/* Nav Items */}
        <ul className={`absolute md:static top-full left-0 w-full md:w-auto bg-white/10 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-b border-white/10 md:border-none text-center md:flex md:space-x-6 
          ${expand ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"}
          transition-all duration-300 overflow-hidden`}
        >
          <li><a href="#about" className="block py-2 px-4 md:inline hover:text-blue-400 transition">About</a></li>
          <li><a href="#projects" className="block py-2 px-4 md:inline hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#skills" className="block py-2 px-4 md:inline hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#contact" className="block py-2 px-4 md:inline hover:text-blue-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
