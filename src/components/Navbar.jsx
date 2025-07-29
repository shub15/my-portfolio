import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"; // For close icon (install react-icons if needed)

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [expand, setExpand] = useState(false);

  // // Optional body scroll lock
  // React.useEffect(() => {
  //   if (expand) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }
  //   return () => { document.body.style.overflow = ""; };
  // }, [expand]);

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4 py-4">
      <div className="flex justify-center items-center relative">
        {/* Burger Icon */}
        <button
          onClick={() => setExpand(true)}
          className="absolute left-2 top-0 md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/10 text-white hover:bg-white/20 transition"
          aria-label="Open menu"
        >
          <FaBars className="size-8" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Nav Overlay */}
        {expand && (
          <div className="fixed inset-0 z-50 flex">
            {/* Overlay to close menu */}
            <div
              className="fixed inset-0 bg-black/40 h-screen backdrop-blur-sm"
              onClick={() => setExpand(false)}
              aria-label="Close mobile navigation"
            />
            {/* Slide-in Menu */}
            <div className="fixed bg-black/30 w-full max-w-md min-h-full py-8 px-6 flex flex-col gap-8 shadow-2xl animate-slide-in-right">
              <button
                onClick={() => setExpand(false)}
                className="absolute top-4 right-4 p-2 bg-gray-800 rounded-md text-white hover:bg-gray-700 transition"
                aria-label="Close menu"
              >
                <IoClose className="size-8" />
              </button>
              <nav className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-100 text-lg font-medium hover:text-blue-400 transition"
                    onClick={() => setExpand(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;