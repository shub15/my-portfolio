import React, { useState } from "react";
import burger from "../assets/burger-menu.svg";

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4 fixed top-0 z-50 shadow-lg w-full">
      <div className="md:flex justify-between items-center w-full">
        <div className="flex justify-between w-full px-4 md:px-8">
          <a href="#hero">
            <h1 className="text-xl font-bold">Shubham Maity</h1>
          </a>
          <img 
            src={burger} 
            onClick={() => setExpand(!expand)} 
            className="md:hidden size-10 cursor-pointer rounded-md hover:border w-16"
            alt="Menu"
          />
        </div>
        
        <ul className={`md:flex md:space-x-4 w-full md:w-auto 
          ${expand ? "grid grid-flow-row pt-8 space-y-4 text-center w-full" : "hidden"}`}>
          <li><a href="https://www.linkedin.com/in/maityshub/overlay/1733080567248/single-media-viewer/?profileId=ACoAAEVCtxUBBYHUrlawURg0P5uClEmyhCL15Tw" className="hover:text-blue-400 bg-blue-900 rounded-full px-4 py-2 transition-all" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="#about" className="hover:text-blue-400 transition-all">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400 transition-all">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-400 transition-all">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-400 transition-all">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
