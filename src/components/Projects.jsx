import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/robocon_2025_bot_photo.jpeg";
import project4 from "../assets/project4.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "CET College Finder",
      description: "A comprehensive platform to search and filter colleges based on cutoffs and other criteria.",
      link: "https://github.com/shub15/cetcollegefinder",
      img: project1,
      stack: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    },
    {
      title: "SMS Data Analysis",
      description: "This project focuses on analyzing real-world SMS data to derive insightful financial trends and relationships. We developed this project during the Finothon hackathon to showcase the potential of data analysis in improving financial literacy and decision-making.",
      link: "https://github.com/shub15/sms_data_analysis",
      img: "https://media.licdn.com/dms/image/v2/D4D22AQGTJb0QnclcLA/feedshare-shrink_2048_1536/B4DZUOq3wlHAAo-/0/1739707875338?e=1756339200&v=beta&t=Ry3H8MwwKd1hJr2bn1oTGWPVEta6Vf55OWRcUbTSPKI",
      stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    },
    // {
    //   title: "Embedded Software in C",
    //   description: "Programs to control a 4-wheel holonomic drive robot using mecanum wheels.",
    //   link: "https://github.com/shub15/arduino",
    //   img: project3,
    //   stack: ["C", "STM32", "Arduino", "ESP32", "Embedded Systems"],
    // },
    {
      title: "Embedded Software in C",
      description: "The system for the robot was primarily developed for Robocon 2025, and is designed to operate using an STM32 microcontroller equipped with advanced functionalities, and is controlled via a PS5 controller.",
      link: "https://github.com/shub15/arduino",
      img: project3,
      stack: ["C", "STM32", "Arduino", "ESP32", "Embedded System", "Control System"],
    },
    // {
    //   title: "Portfolio Website",
    //   description: "A personal portfolio to showcase my skills and projects.",
    //   link: "https://shubhamportfolio-seven.vercel.app/",
    //   img: project4,
    //   stack: ["React", "Tailwind CSS", "Framer Motion"],
    // },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-24">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-200 tracking-wide text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121212] rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-cyan-950"
            >
              <div className="w-full h-56 overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover transition-transform duration-500"
                  src={project.img}
                  alt={project.title}
                />
              </div>

              <div className="text-left mt-4 p-4">
                <a
                  href={project.link}
                  className="group transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="
                    text-xl font-semibold 
                    bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300
                    bg-clip-text text-transparent
                    drop-shadow transition-all duration-300
                    group-hover:bg-gradient-to-r
                    group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-pink-500
                    group-hover:drop-shadow-lg
                  ">{project.title}</h3>
                </a>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 my-4 text-sm text-justify">{project.description}</p>

                {/* View Project Button */}
                {/* <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-lg font-medium transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
