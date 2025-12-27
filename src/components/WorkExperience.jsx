import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
    const experiences = [
        {
            id: 1,
            role: "React Native Developer Intern",
            company: "Baya.biz",
            period: "Present",
            type: "Internship",
            description: "Developing cross-platform mobile applications using React Native, implementing responsive UI components and integrating backend APIs.",
            achievements: [
                "Built responsive mobile interfaces",
                "Integrated RESTful APIs",
                "Collaborated with design team",
                "Implemented state management solutions"
            ]
        },
        {
            id: 2,
            role: "Programming Lead",
            company: "Robocon KJSIT | Club",
            period: "2024 - 2025",
            type: "Leadership",
            description: "Led the programming team for ABU Robocon 2025 competition, implementing embedded control systems and wireless communication protocols.",
            achievements: [
                "Designed embedded control architecture",
                "Implemented STM32 & ESP32 integration",
                "Led team of 5+ developers",
                "Achieved 16th rank in national competition",
            ]
        },
        {
            id: 3,
            role: "Core Member",
            company: "Institute of Engineering and Technology | Committee",
            period: "2024 - 2025",
            type: "Part-time",
            description: "Managed technical events in college techfest.",
            achievements: [
                "Coordinated with the technical team",
                "Organized technical events",
                "Collaborated with companies"
            ]
        }
    ];

    return (
        <section id="experience" className="relative bg-black text-white py-24 md:py-32 overflow-hidden selection:bg-white selection:text-black">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl" />
            </div>

            <div className="relative px-6 md:px-12 lg:px-24 mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-baseline gap-4 mb-4">
                        <span className="text-xs font-mono text-neutral-600 tabular-nums">02</span>
                        <h2 className="text-4xl md:text-5xl font-light text-neutral-200">
                            Work Experience
                        </h2>
                    </div>
                    <p className="text-neutral-500 font-mono text-sm pl-8 md:pl-12">
                        / Professional Journey
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Timeline Line (except for last item) */}
                            {index < experiences.length - 1 && (
                                <div className="absolute left-8 md:left-12 top-12 bottom-0 w-px bg-neutral-800" />
                            )}

                            <div className="flex gap-8 md:gap-12">
                                {/* Timeline Dot */}
                                <div className="flex-shrink-0">
                                    <div className="w-3 h-3 rounded-full bg-white group-hover:scale-150 transition-transform duration-300" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-12">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                            <h3 className="text-xl md:text-2xl font-medium text-neutral-200">
                                                {exp.role}
                                            </h3>
                                            <span className="text-xs font-mono text-neutral-600 px-2 py-1 border border-neutral-800 rounded">
                                                {exp.type}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-neutral-400">
                                            <span className="font-medium">{exp.company}</span>
                                            <span className="text-neutral-700">•</span>
                                            <span className="text-sm font-mono">{exp.period}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 leading-relaxed text-lg mb-6 max-w-3xl">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {exp.achievements.map((achievement, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3 group/item"
                                            >
                                                <span className="text-neutral-700 font-mono text-xs mt-1">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <span className="text-neutral-300 text-sm group-hover/item:text-white transition-colors">
                                                    {achievement}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
