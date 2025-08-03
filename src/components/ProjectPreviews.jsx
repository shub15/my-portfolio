import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import images as needed
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/robocon_2025_bot_photo.jpeg";
import { Link } from "react-router";

const projects = [
  {
    title: "COLLEGE FINDER",
    subtitle: "College Finder Platform",
    description: "A comprehensive platform to search and filter colleges based on cutoffs and other criteria.",
    link: "https://github.com/shub15/cetcollegefinder",
    images: [project1],
    stack: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    features: [
      "Search",
      "Filter by Cutoff",
      "Compare Colleges",
      "User-Friendly Interface",
      "Responsive Design",
      "Secure Authentication",
      "Data Visualization",
      "RESTful API Integration",
    ],
    featureHeading: "Student can prepare customized list of colleges",
  },
  {
    title: "SMS Data Analysis",
    subtitle: "100k+ SMS data from users across India",
    // description: "This project analyzes real-world SMS data to derive insightful financial trends and relationships.",
    description: "This project focused on analyzing real-world SMS data to derive insightful financial trends and relationships. We developed this project during the Finothon hackathon to showcase the potential of data analysis in improving financial literacy and decision-making.",
    link: "https://github.com/shub15/sms_data_analysis",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D22AQHmXcTFixMFRA/feedshare-shrink_2048_1536/B4DZUOq32FHkAo-/0/1739707875836?e=1756944000&v=beta&t=gkrW0uQ2JKp1Qn99SZhMEBvvLGwI48KpWZPEMLl7sik",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Integrated Embedded Control System for Robocon 2025",
    subtitle: "Robocon 2025",
    // description: "The robot was designed for Robocon 2025 hosted by IIT Delhi. The robot is controlled by an integrated embedded control system using STM32 and ESP32.",
    description: "The robot was designed for Robocon 2025 hosted by IIT Delhi, which is a national level competition that challenges students to design and build autonomous robots and compete againt various college's team across India. We ranked 16 out of 40 teams. The robot is controlled by an integrated embedded control system that uses an STM32 microcontroller and ESP32 for wireless communication. The system is designed to operate using a PS5 controller, allowing for precise control of the robot's movements with various sensor fusion.",
    link: "https://github.com/robocon-kjsieit",
    images: [project3],
    stack: ["C", "STM32", "Arduino", "ESP32", "Embedded System", "Control System"],
  },
];

function ProjectSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  return (
    <div className="relative w-full">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className=" shadow-lg w-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <FaArrowLeft size={22} />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <FaArrowRight size={22} />
          </button>
        </>
      )}
      <div className="flex justify-start">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-1 grow ${idx === current && images.length > 1 ? "bg-gray-500" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const [index, setIndex] = useState(0);
  const contentRef = useRef(null);
  const [showNextButton, setShowNextButton] = useState(false);

  // Detect when scroll hits bottom of content section
  useEffect(() => {
    const handleScroll = () => {
      const content = contentRef.current;
      if (!content) return;
      const rect = content.getBoundingClientRect();
      const atBottom = rect.bottom < window.innerHeight + 40; // Allow some buffer
      setShowNextButton(atBottom && index < projects.length - 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  // Scroll up to top of project content when switching
  const gotoProject = (i) => {
    setIndex(i);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 75);
  };

  const current = projects[index];
  const next = projects[index + 1];

  return (
    <div className="min-h-screen bg-black relative font-inter">
      <div ref={contentRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 64 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.45 }}
          >
            {/* Project Header */}
            <header className="relative py-6 md:px-8 flex items-center justify-center md:justify-between">
              <Link to="/" className="text-4xl font-extrabold tracking-tight text-white">Shubham</Link>
            </header>
            <div className="relative bg-gradient-to-l from-slate-300 to-slate-900 py-6 px-8 flex items-center justify-between">
              <span className="relative text-7xl font-extrabold text-gray-900 hollow-text ml-auto z-10 drop-shadow-lg">
                {current.title}
              </span>
            </div>

            {/* Main content area */}
            <main className="flex flex-col lg:gap-10 max-w-7xl mx-auto py-14 px-6">
              <motion.section
                className="lg:w-1/2 mb-12 lg:mb-0"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2">{current.subtitle}</h2>
                {current.location && (
                  <p className="text-sm text-gray-100 mb-1">
                    <span role="img" aria-label="location pin"></span> {current.location}
                  </p>
                )}
                <p className="text-gray-100 mb-6">{current.description}</p>
                {current.stack && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {current.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.section>
              {/* Right: Slider + Details */}
              <motion.section
                className="flex flex-col items-center md:flex-row md:items-start justify-evenly gap-5"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ProjectSlider images={current.images ?? [current.img]} />
                {current.features || current.link ? (
                  <div className="border border-blue-800 text-sm rounded-xl shadow-lg p-5 w-full md:max-w-xs">
                    {current.features && (
                      <>
                        <h3 className="font-semibold mb-2 text-gray-100">
                          {current.featureHeading ? current.featureHeading : "Key Features"}
                        </h3>
                        <ul className="list-disc ml-5 text-gray-300 mt-2 space-y-1">
                          {current.features.map((f, idx) => (
                            <li key={idx}>{f}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    {current.link && (
                      <a
                        href={current.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-5 py-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-black text-white font-semibold shadow transition"
                      >
                        View Project &rarr;
                      </a>
                    )}
                  </div>
                ) : null}
              </motion.section>
            </main>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Project Button */}
      {showNextButton && next && (
        <button
          onClick={() => gotoProject(index + 1)}
          className="fixed bottom-7 right-7 z-50 flex items-center bg-white/90 hover:bg-sky-700 hover:text-white shadow-lg px-4 py-2 rounded-full text-sky-900 font-bold transition group"
        >
          <span className="mr-2 text-base max-w-xs truncate">{next.title}</span>
          <FaArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </button>
      )}
      {/* Optional: Previous Button (if needed) */}
      {index > 0 && (
        <button
          onClick={() => gotoProject(index - 1)}
          className="fixed bottom-20 right-7 z-50 flex items-center bg-white/90 hover:bg-sky-700 hover:text-white shadow-lg px-4 py-2 rounded-full text-sky-900 font-bold transition group"
        >
          <FaArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition" />
          <span className="text-base">{projects[index - 1]?.title}</span>
        </button>
      )}
    </div>
  );
}
