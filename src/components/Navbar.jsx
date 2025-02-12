import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-transparent p-4">
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

        {/* Navigation Container with Glass Effect */}
        <div className={`flex items-center gap-6 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg
          ${expand ? "block" : "hidden md:flex"}`}
        >
          <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
          <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
