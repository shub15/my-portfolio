import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpeg";

const Projects = () => {
  const projects = [
    {
      title: "CET College Finder",
      description: "A comprehensive platform to search and filter colleges based on cutoffs and other criteria.",
      link: "https://github.com/shub15/cetcollegefinder",
      img: project1
    },
    {
      title: "SMS Data",
      description: "Analyzed real-world SMS data to derive insightful financial trends and relationships",
      link: "https://github.com/shub15/sms_data_analysis",
      img: project2
    },
    {
      title: "Embedded Software in C",
      description: "Programs to control 4 wheel holonomic drive robot which uses mecanum wheels",
      link: "https://github.com/shub15/arduino",
      img: project3
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects.",
      link: "https://shubhamportfolio-seven.vercel.app/",
      img: project4
    },
  ];

  return (
    <section id="projects" className="py-20 bg-blue-50 overflow-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              // className="border p-4 rounded-lg hover:shadow-lg transition transform hover:scale-105"
              className="border p-4 rounded-lg hover:bg-gray-200"
              // style={{backgroundImage: `url(${project1})`}}
            >
              <img className={!project.img ? "bg-slate-800 min-h-60" : "min-h-60"} src={project.img} alt="preview of the project" srcset=""/>
              <h3 className="text-xl font-semibold my-2">{project.title}</h3>
              <p className="text-gray-700 mb-6 mx-8">{project.description}</p>
              <a
                href={project.link}
                className="text-white bg-blue-900 px-4 py-2 rounded-full hover:bg-blue-800"
                target="_blank"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;