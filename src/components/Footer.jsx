import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/maityshub/", icon: <FaLinkedin /> },
  { name: "GitHub", href: "https://github.com/shub15", icon: <FaGithub /> },
  // { name: "Twitter", href: "#", icon: <FaTwitter /> }, // Uncomment if needed
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 border-t border-neutral-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* --- Top Section: Call to Action --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">
              / What's Next?
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-8">
              Let's build something <br />
              <span className="text-neutral-500">extraordinary.</span>
            </h3>
            
            <a 
              href="mailto:maityshubham1510@gmail.com" 
              className="inline-flex items-center gap-3 text-xl md:text-2xl font-light border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all"
            >
              <SiGmail />
              <span>maityshubham1510@gmail.com</span> 
              {/* Replace with your actual email */}
            </a>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-white group-hover:-translate-y-2 transition-all duration-300">
              <FaArrowUp />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest">Back to Top</span>
          </button>
        </div>

        {/* --- Middle Section: Navigation & Socials --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-900 pt-16 mb-16">
          
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-neutral-200">Sitemap</h4>
            <ul className="space-y-4 text-neutral-400 font-mono text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">/ Home</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">/ Selected Work</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">/ Technical Skills</a></li>
            </ul>
          </div>

          {/* Column 2: Socials */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-neutral-200">Socials</h4>
            <ul className="space-y-4 text-neutral-400 font-mono text-sm">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span> 
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location / Info */}
          <div>
            <h4 className="text-sm font-bold mb-6 text-neutral-200">Location</h4>
            <p className="text-neutral-400 font-mono text-sm">
              Mumbai, India <br />
              Available for Remote Work
            </p>
          </div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs font-mono text-neutral-600">
          <p>
            &copy; {new Date().getFullYear()} Shubham Maity. All Rights Reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with React & Tailwind.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;