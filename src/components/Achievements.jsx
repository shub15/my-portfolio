import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "Robocon 2025",
            organization: "ABU Robocon National Competition",
            achievement: "16th / 40 Teams",
            date: "July 2025",
            type: "Competition",
            description: "ABU Robocon India is the national qualifying competition for the prestigious Asia-Pacific Broadcasting Union (ABU) Robotic Contest, where Indian engineering students build robots to tackle specific themes (like basketball or traditional games) for national and international glory, organized by Doordarshan (DD) and IIT Delhi (IITD)/Prasar Bharati with teams from top engineering colleges showcasing their innovation, with the winner representing India globally.",
            highlights: [
                "Embedded control systems implementation",
                "3-wheel holonomic drive mechanism",
                "Advanced sensor integration",
                "National-level competition ranking"
            ]
        },
        {
            id: 2,
            title: "Finathon Hackathon",
            organization: "Thakur College of Polytechnic",
            achievement: "Winner",
            date: "January 2025",
            type: "Hackathon",
            description: "Analyzed 100k+ daily SMS data to extract financial information related to credit & debit transactions, loans, EMI amounts, user spending & earning trends.",
            highlights: [
                "First place winner",
                "Financial technology solution",
                "Real-world problem solving",
                "Team collaboration and leadership"
            ]
        }
    ];

    return (
        <section id="achievements" className="relative bg-black text-white py-24 md:py-32 overflow-hidden selection:bg-white selection:text-black">
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
                        <span className="text-xs font-mono text-neutral-400 tabular-nums">04</span>
                        <h2 className="text-4xl md:text-5xl font-light text-neutral-200">
                            Achievements
                        </h2>
                    </div>
                    <p className="text-neutral-500 font-mono text-sm pl-8 md:pl-12">
                        / Notable Accomplishments
                    </p>
                </motion.div>

                {/* Achievements Timeline */}
                <div className="space-y-12">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Timeline Line (except for last item) */}
                            {index < achievements.length - 1 && (
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
                                                {achievement.title}
                                            </h3>
                                            <span className="text-xs font-mono text-neutral-400 px-2 py-1 border border-neutral-800 rounded">
                                                {achievement.type}
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3 text-neutral-400 mb-2">
                                            <span className="font-medium">{achievement.organization}</span>
                                            <span className="text-neutral-500">•</span>
                                            <span className="text-sm font-mono">{achievement.date}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 mt-2">
                                            <span className="text-xs text-neutral-500">Achievement:</span>
                                            <span className="text-lg font-bold text-white">{achievement.achievement}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 leading-relaxed text-lg mb-6 max-w-3xl">
                                        {achievement.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {achievement.highlights.map((highlight, idx) => (
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

export default Achievements;

