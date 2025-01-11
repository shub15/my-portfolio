import React from "react";

const Skills = () => {
  const skills = ["Java", "Python", "React", "JavaScript", "Spring Boot", "MySQL", "Data Science", "ML", "Arduino", "ESP 32"];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;