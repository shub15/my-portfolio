import React, { useState } from "react";
import burger from "../assets/burger-menu.svg";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="flex justify-between">
          <a href="#hero"><h1 className="text-xl font-bold">Shubham Maity</h1></a>
          <img src={burger} onClick={() => { setExpand(!expand) }} className={`md:hidden size-10 text-white cursor-pointer  rounded-md hover:border w-16`}></img>
        </div>
        <ul className={`md:flex ${expand && `grid grid-flow-row pt-8 space-y-4`} ${!expand && `hidden`} space-x-4`}>
          <li><a href="https://www.linkedin.com/in/maityshub/overlay/1733080567248/single-media-viewer/?profileId=ACoAAEVCtxUBBYHUrlawURg0P5uClEmyhCL15Tw" className="hover:text-blue-400 bg-blue-900 rounded-full px-4 py-2 transition-all" target="_blank">Resume</a></li>
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