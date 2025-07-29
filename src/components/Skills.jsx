import React from "react";
import { FaReact, FaJava, FaPython, FaDatabase, FaMicrochip, FaJs, FaCloud } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTensorflow, SiArduino, SiEspressif } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava />, desc: "Programming Language" },
  { name: "Python", icon: <FaPython />, desc: "Programming Language" },
  { name: "React", icon: <FaReact />, desc: "JavaScript Library" },
  { name: "JavaScript", icon: <FaJs />, desc: "Programming Language" },
  { name: "Spring Boot", icon: <SiSpringboot />, desc: "Backend Framework" },
  { name: "MySQL", icon: <SiMysql />, desc: "Database" },
  { name: "Data Science", icon: <SiTensorflow />, desc: "AI/ML & Analytics" },
  { name: "Machine Learning", icon: <FaDatabase />, desc: "AI Model Development" },
  { name: "Arduino", icon: <SiArduino />, desc: "Microcontroller Platform" },
  { name: "ESP 32", icon: <SiEspressif />, desc: "IoT & Embedded Systems" },
  { name: "Cloud", icon: <FaCloud />, desc: "Deployment & Hosting" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 md:max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-200 tracking-wide">
          Skills
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          I'm proficient in a range of modern technologies that empower me to build highly functional solutions.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-900 rounded-xl shadow-md hover:bg-gray-800 transition duration-300"
            >
              <div className="text-4xl text-blue-400 mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
              <p className="text-gray-500 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
