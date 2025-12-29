import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Bachelor of Technology in Information Technology",
            institution: "K. J. Somaiya Institute of Technology",
            location: "Mumbai, India",
            period: "Aug 2023 - June 2027",
            cgpa: "9.29 CGPA",
            type: "Expected",
            highlights: [
                "Specialized in Full-Stack Development and Mobile Applications",
                "Active member of Robocon KJSIT and IET Committee",
                "Focused on AI/ML, Cloud Computing, and System Design",
                "Participated in national-level robotics competitions"
            ]
        }
    ];

    return (
        <section id="education" className="relative bg-black text-white py-24 md:py-32 overflow-hidden selection:bg-white selection:text-black">
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
                        <span className="text-xs font-mono text-neutral-400 tabular-nums">03</span>
                        <h2 className="text-4xl md:text-5xl font-light text-neutral-200">
                            Education
                        </h2>
                    </div>
                    <p className="text-neutral-500 font-mono text-sm pl-8 md:pl-12">
                        / Academic Background
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
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
                                                {edu.degree}
                                            </h3>
                                            <span className="text-xs font-mono text-neutral-400 px-2 py-1 border border-neutral-800 rounded">
                                                {edu.type}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-neutral-400 mb-2">
                                            <span className="font-medium">{edu.institution}</span>
                                            <span className="text-neutral-500">•</span>
                                            <span className="text-sm">{edu.location}</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-neutral-400">
                                            <span className="text-sm font-mono">{edu.period}</span>
                                            <span className="text-neutral-500">•</span>
                                            <span className="text-sm font-mono font-medium text-white">{edu.cgpa}</span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {edu.highlights.map((highlight, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-3 group/item"
                                            >
                                                <span className="text-neutral-500 font-mono text-xs mt-1">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <span className="text-neutral-300 text-sm group-hover/item:text-white transition-colors">
                                                    {highlight}
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

export default Education;
