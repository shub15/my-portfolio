import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { projectsData } from "../data/projectsData";

// --- Components ---

// 1. Clean Minimal Slider (Original Design) - for sections with multiple images
const SectionImageSlider = ({ images = [], title = "" }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // If only one image, show it without slider controls
  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden rounded-sm">
        <img
          src={images[0]}
          alt={title || "Project Screenshot"}
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[16/9] bg-neutral-900 group overflow-hidden rounded-sm">
      <img
        src={images[current]}
        alt={`${title} - Slide ${current + 1}`}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Navigation - Only visible on hover */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={prevSlide} className="p-3 bg-black/50 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors rounded-full">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="p-3 bg-black/50 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-colors rounded-full">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1 bg-neutral-800">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`flex-1 transition-colors duration-300 ${idx === current ? "bg-white" : "bg-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
};

// 2. Detailed Screenshot Showcase
const ProjectScreenshots = ({ images = [], imageDetails = [], projectTitle = "" }) => {
  // If imageDetails has images arrays (new structure), use it; otherwise fall back to old structure
  const sections = imageDetails && imageDetails.length > 0 && imageDetails[0].images
    ? imageDetails // New structure: each detail has its own images array
    : images.map((img, idx) => ({ // Old structure: map images to details
      images: [img],
      title: imageDetails?.[idx]?.title,
      description: imageDetails?.[idx]?.description
    }));

  if (!sections || sections.length === 0) return null;

  return (
    <div className="space-y-16">
      {sections.map((section, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group"
          >
            {/* Section Number & Title */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-xs font-mono text-neutral-600 tabular-nums">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {section.title && (
                <h3 className="text-xl md:text-2xl font-medium text-neutral-200">
                  {section.title}
                </h3>
              )}
            </div>

            {/* Two-Column Layout: Image + Features */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 mb-6">

              {/* Left Column: Image(s) / Slider */}
              <div className={section.features && section.features.length > 0 ? "lg:col-span-7" : "lg:col-span-12"}>
                <SectionImageSlider
                  images={section.images}
                  title={section.title || `${projectTitle} Section ${idx + 1}`}
                />
              </div>

              {/* Right Column: Feature List (if provided) */}
              {section.features && section.features.length > 0 && (
                <div className="lg:col-span-5 border-l border-neutral-800 lg:pl-8">
                  <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">
                    / Key Points
                  </h4>
                  <ul className="space-y-4">
                    {section.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex gap-4 items-start group/item">
                        <span className="text-neutral-700 font-mono text-sm mt-1">
                          {String(featureIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-neutral-300 group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Description */}
            {section.description && (
              <p className="text-neutral-400 leading-relaxed pl-8 md:pl-12 max-w-4xl">
                {section.description}
              </p>
            )}

            {/* Divider (except for last item) */}
            {idx < sections.length - 1 && (
              <div className="mt-16 border-b border-neutral-800/50" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

// 2. Main Page
export default function ProjectShowcase() {
  const { id } = useParams();

  // Data Logic
  const project = projectsData.find((p) => p.id === id);
  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  // 404 State
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold mb-4 font-mono">404: Project Missing</h1>
        <Link to="/" className="text-neutral-500 hover:text-white border-b border-neutral-800 hover:border-white transition-all pb-1">Return Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black"
    >
      {/* --- Header --- */}
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        <Link to="/" className="text-sm font-mono font-bold tracking-widest pointer-events-auto uppercase hover:opacity-50 transition-opacity">
          Shubham / Portfolio
        </Link>
        <Link to="/" className="pointer-events-auto group flex items-center gap-2">
          <span className="text-xs font-mono hidden md:block opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">CLOSE</span>
          <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white transition-colors bg-black">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </div>
        </Link>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">

        {/* --- Hero Section --- */}
        <div className="border-b border-neutral-800 pb-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              {project.title}
            </h1>
            <span className="font-mono text-neutral-500 text-sm mb-2 block md:hidden">
              {String(projectIndex + 1).padStart(2, '0')} — {projectsData.length}
            </span>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-y-4 gap-x-12 text-sm font-mono text-neutral-400 uppercase tracking-wide">
            <div>
              <span className="text-neutral-600 block text-xs mb-1">Role/Subtitle</span>
              {project.subtitle}
            </div>
            {project.location && (
              <div>
                <span className="text-neutral-600 block text-xs mb-1">Location</span>
                {project.location}
              </div>
            )}
            <div>
              <span className="text-neutral-600 block text-xs mb-1">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 15).map((t, i) => <span key={i}>{t}{i < project.stack.length - 1 ? ',' : ''}</span>)}
                {project.stack.length > 15 && <span>& +{project.stack.length - 15}</span>}
              </div>
            </div>
          </div>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

          {/* Left: Description */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-medium mb-6 text-neutral-200">About the project</h3>
            <p className="text-neutral-400 leading-relaxed text-lg whitespace-pre-line">
              {project.description}
            </p>

            {project.link && (
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-neutral-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <span className="font-medium">Visit Live Site</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </a>
              </div>
            )}
          </div>

          {/* Right: Key Features List */}
          <div className="lg:col-span-5 border-l border-neutral-800 lg:pl-12">
            <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">
              / {project.featureHeading || "Key Highlights"}
            </h3>
            <ul className="space-y-4">
              {project.features?.map((feature, idx) => (
                <li key={idx} className="flex gap-4 items-start group">
                  <span className="text-neutral-700 font-mono text-sm mt-1">0{idx + 1}</span>
                  <span className="text-neutral-300 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Visuals --- */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Project Showcase</h2>
          <ProjectScreenshots
            images={project.images ?? [project.img]}
            imageDetails={project.imageDetails}
            projectTitle={project.title}
          />
        </div>

        {/* --- Footer Navigation --- */}
        <div className="border-t border-neutral-800 pt-12 flex flex-col md:flex-row justify-between gap-8">
          {prevProject ? (
            <Link to={`/projects/${prevProject.id}`} className="group flex-1">
              <span className="text-xs font-mono text-neutral-600 mb-2 block uppercase">Previous</span>
              <div className="flex items-center gap-4 text-neutral-400 group-hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-2 transition-transform"><path d="M19 12H5M5 12L12 19M5 12L12 5" /></svg>
                <span className="text-2xl md:text-3xl font-bold">{prevProject.title}</span>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextProject ? (
            <Link to={`/projects/${nextProject.id}`} className="group flex-1 text-right">
              <span className="text-xs font-mono text-neutral-600 mb-2 block uppercase">Next Project</span>
              <div className="flex items-center justify-end gap-4 text-neutral-400 group-hover:text-white transition-colors">
                <span className="text-2xl md:text-3xl font-bold">{nextProject.title}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-2 transition-transform"><path d="M5 12H19M19 12L12 5M19 12L12 19" /></svg>
              </div>
            </Link>
          ) : <div className="flex-1" />}
        </div>

      </main>
    </motion.div>
  );
}