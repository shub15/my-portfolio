import React, { useState, useEffect } from "react"; // Added useEffect
import { NavLink, useLocation, useNavigate } from "react-router"; // Added useNavigate
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // --- SCROLL LOGIC FIX ---
  useEffect(() => {
    // 1. Check if there is a hash in the URL (e.g., #contact)
    if (location.hash) {
      // 2. Find the element with that ID
      const elem = document.getElementById(location.hash.substring(1));
      
      // 3. If found, scroll to it smoothly
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // Run this every time the location (URL) changes

  // --- CONDITIONAL RENDERING (MOVED DOWN) ---
  // Now we check if we should hide the navbar.
  // Since this is AFTER the hooks, React is happy.
  const isProjectDetailPage = location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

  if (isProjectDetailPage) {
    return null;
  }
  // -----------------------------

  // Helper function to handle clicks
  const handleNavClick = (href) => {
    setIsOpen(false);
    
    // If it's a hash link (starts with #), we manually scroll if we are already on home
    if (href.startsWith("#")) {
       const elem = document.getElementById(href.substring(1));
       if (elem) {
         elem.scrollIntoView({ behavior: "smooth" });
       }
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-auto max-w-2xl">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          className={`
            relative bg-neutral-900/80 backdrop-blur-md border border-white/10 
            shadow-2xl shadow-black/50 overflow-hidden
            ${isOpen ? "rounded-[2rem]" : "rounded-full"}
          `}
        >
          <div className="px-6 py-3 flex items-center justify-between md:justify-center">
            
            <span className="md:hidden text-sm font-bold text-white tracking-widest uppercase">
              Shubham
            </span>

            <ul className="hidden md:flex gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = 
                  (link.href === "/" && location.pathname === "/" && location.hash === "") ||
                  (link.href.startsWith("#") && location.hash === link.href) ||
                  (link.href !== "/" && !link.href.startsWith("#") && location.pathname === "/" + link.href);

                return (
                  <li key={link.href} className="relative">
                    <NavLink
                      to={link.href}
                      // Attach the click handler here
                      onClick={() => handleNavClick(link.href)}
                      className={`
                        relative z-10 block px-5 py-2 text-sm font-medium transition-colors duration-200
                        ${isActive ? "text-black" : "text-neutral-300 hover:text-white"}
                      `}
                    >
                      {link.label}
                    </NavLink>
                    
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-full z-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              {isOpen ? <IoClose size={20} /> : <FaBars size={18} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <ul className="flex flex-col gap-2 px-4 pb-6 pt-2">
                  {NAV_LINKS.map((link) => {
                     const isActive = 
                        (link.href === "/" && location.pathname === "/" && location.hash === "") ||
                        (link.href.startsWith("#") && location.hash === link.href) ||
                        (link.href !== "/" && !link.href.startsWith("#") && location.pathname === "/" + link.href);
                     
                     return (
                        <li key={link.href}>
                          <NavLink
                            to={link.href}
                            // Attach the click handler here as well
                            onClick={() => handleNavClick(link.href)}
                            className={`
                              block w-full px-4 py-3 text-center rounded-xl text-sm font-medium transition-all
                              ${isActive 
                                ? "bg-white text-black shadow-lg" 
                                : "text-neutral-300 hover:text-white hover:bg-white/5"}
                            `}
                          >
                            {link.label}
                          </NavLink>
                        </li>
                     );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;