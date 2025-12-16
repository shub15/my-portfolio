import React from "react";
import { FaReact, FaJava, FaPython, FaJs, FaCloud, FaDatabase, FaMicrochip } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTensorflow, SiArduino, SiEspressif } from "react-icons/si";

// Grouping skills makes the list scannable and professional
const skillCategories = [
  {
    title: "Core & Languages",
    items: [
      { name: "Java", icon: <FaJava />, color: "hover:text-orange-500" },
      { name: "Python", icon: <FaPython />, color: "hover:text-yellow-400" },
      { name: "JavaScript", icon: <FaJs />, color: "hover:text-yellow-300" },
      { name: "C++", icon: <FaMicrochip />, color: "hover:text-blue-500" }, // Assumed C++ given Arduino
    ],
  },
  {
    title: "Hardware & IoT",
    items: [
      { name: "Arduino", icon: <SiArduino />, color: "hover:text-teal-500" },
      { name: "ESP 32", icon: <SiEspressif />, color: "hover:text-red-500" },
      { name: "Embedded C", icon: <FaMicrochip />, color: "hover:text-gray-400" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "hover:text-green-500" },
      { name: "MySQL", icon: <SiMysql />, color: "hover:text-blue-400" },
      { name: "Cloud", icon: <FaCloud />, color: "hover:text-sky-300" },
    ],
  },
  {
    title: "Intelligence",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow />, color: "hover:text-orange-400" },
      { name: "Machine Learning", icon: <FaDatabase />, color: "hover:text-purple-400" },
      { name: "Data Science", icon: <FaReact />, color: "hover:text-cyan-400" }, // Using React icon as placeholder or swap
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-neutral-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">
              / Technical Arsenal
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-neutral-200">
              Capabilities & Tools
            </p>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs text-right hidden md:block">
            A comprehensive overview of my technical stack across software and hardware domains.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Category Title */}
              <h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-neutral-700 rounded-full"></span>
                {category.title}
              </h3>

              {/* Items List */}
              <div className="flex flex-col gap-3">
                {category.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`
                      group flex items-center gap-4 p-4 rounded-lg
                      bg-neutral-900/30 border border-neutral-800/50 
                      hover:bg-neutral-900 hover:border-neutral-700 
                      transition-all duration-300 cursor-default
                    `}
                  >
                    {/* Icon Container */}
                    <div className={`text-2xl text-neutral-500 transition-colors duration-300 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    
                    {/* Text */}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Decorative Footer Line */}
        <div className="mt-20 flex items-center gap-4 text-neutral-800">
           <div className="h-[1px] flex-1 bg-neutral-900"></div>
           <span className="text-xs font-mono uppercase tracking-widest">End of Spec</span>
           <div className="h-[1px] flex-1 bg-neutral-900"></div>
        </div>

      </div>
    </section>
  );
};

export default Skills;