import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#skills", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section on hash change
  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const isProjectDetailPage = location.pathname.startsWith("/projects/") && location.pathname !== "/projects";

  if (isProjectDetailPage) {
    return null;
  }

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const elem = document.getElementById(href.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar - Unique Split Line Design */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`
              relative pointer-events-auto transition-all duration-300
              ${scrolled ? "bg-black/80 backdrop-blur-md border border-white/5 rounded-sm" : ""}
            `}
          >
            <div className="flex items-center justify-between px-6 py-4">

              {/* Logo/Name */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white" />
                <span className="text-white font-mono text-sm tracking-wider">SHUBHAM</span>
              </div>

              {/* Navigation Links with Split Line Effect */}
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link, index) => {
                  const isActive =
                    (link.href === "/" && location.pathname === "/" && location.hash === "") ||
                    (link.href.startsWith("#") && location.hash === link.href) ||
                    (link.href !== "/" && !link.href.startsWith("#") && location.pathname === "/" + link.href);

                  return (
                    <div key={link.href} className="relative group">
                      <NavLink
                        to={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className="relative block"
                      >
                        <div className="flex items-center gap-2 px-4 py-2">
                          {/* Number */}
                          <span className={`
                            font-mono text-xs tabular-nums transition-colors duration-200
                            ${isActive ? "text-white" : "text-neutral-600 group-hover:text-neutral-400"}
                          `}>
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          {/* Vertical Divider */}
                          <div className={`
                            w-px h-4 transition-all duration-200
                            ${isActive ? "bg-white" : "bg-neutral-700 group-hover:bg-neutral-500"}
                          `} />

                          {/* Label */}
                          <span className={`
                            text-sm font-medium transition-colors duration-200
                            ${isActive ? "text-white" : "text-neutral-400 group-hover:text-white"}
                          `}>
                            {link.label}
                          </span>
                        </div>

                        {/* Active Indicator - Horizontal Line */}
                        {isActive && (
                          <motion.div
                            layoutId="desktop-nav-indicator"
                            className="absolute bottom-0 left-0 right-0 h-px bg-white"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </NavLink>
                    </div>
                  );
                })}
              </div>

              {/* Right Indicator */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-px bg-neutral-800" />
                <div className="w-1 h-1 bg-neutral-600" />
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Navbar - Minimal Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            transition-all duration-300
            ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-black/50"}
          `}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white" />
              <span className="text-white font-mono text-xs tracking-wider">SHUBHAM</span>
            </div>

            {/* Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors"
            >
              {isOpen ? <IoClose size={20} /> : <FaBars size={18} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl"
              style={{ top: "64px" }}
            >
              <div className="flex flex-col items-center justify-center h-full px-6">
                <ul className="w-full max-w-md space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive =
                      (link.href === "/" && location.pathname === "/" && location.hash === "") ||
                      (link.href.startsWith("#") && location.hash === link.href) ||
                      (link.href !== "/" && !link.href.startsWith("#") && location.pathname === "/" + link.href);

                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <NavLink
                          to={link.href}
                          onClick={() => handleNavClick(link.href)}
                          className={`
                            flex items-center gap-4 px-6 py-4 border transition-all
                            ${isActive
                              ? "bg-white text-black border-white"
                              : "text-neutral-300 border-white/10 hover:border-white/30 hover:text-white"}
                          `}
                        >
                          <span className={`
                            font-mono text-xs tabular-nums
                            ${isActive ? "text-black" : "text-neutral-600"}
                          `}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className={`w-px h-5 ${isActive ? "bg-black" : "bg-neutral-700"}`} />
                          <span className="text-lg font-medium">{link.label}</span>
                        </NavLink>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;