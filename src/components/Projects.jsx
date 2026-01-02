import { Link } from "react-router";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-2">
              / Selected Works
            </h2>
            <p className="text-neutral-400 max-w-sm">
              Engineering solutions with a focus on performance and aesthetics.
            </p>
          </div>
          {/* Optional: Project counter */}
          <span className="hidden md:block font-mono text-neutral-400">
            [{projectsData.length}]
          </span>
        </div>

        {/* Project List */}
        <div className="flex flex-col border-t border-neutral-800">
          {projectsData.filter((project) => project.visible != false).map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block border-b border-neutral-800 hover:border-neutral-600 transition-colors duration-500"
            >
              <div className="py-10 md:py-2 flex flex-col md:flex-row md:items-center gap-6 hover:bg-neutral-900/20 transition-all duration-500 px-2 relative overflow-hidden">

                {/* Decorative background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/0 via-neutral-900/40 to-neutral-900/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                {/* Project Preview Image - Before Title */}
                <div className="relative w-full md:w-72 aspect-[16/9] overflow-hidden rounded-sm flex-shrink-0">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Project Info */}
                <div className="flex items-baseline gap-6 flex-1 z-10">
                  <span className="text-neutral-500 font-mono text-sm hidden md:block group-hover:text-neutral-400 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-3xl md:text-4xl lg:text-4xl font-bold text-neutral-300 group-hover:text-white transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      {project.subtitle}
                    </p>

                    {/* Tech Stack */}
                    {/* <div className="flex flex-wrap gap-2 mt-2">
                      {project.stack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>

                {/* Right Side: Stack & Arrow */}
                <div className="flex items-center justify-between md:justify-end md:w-1/3 gap-8 z-10">
                  {/* Tech Stack - Mobile: hidden, Desktop: visible */}
                  <div className="hidden md:flex gap-3">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Mobile Tech Stack (Summary) */}
                  <div className="md:hidden text-xs font-mono text-neutral-500">
                    {project.stack[0]} &bull; {project.stack[1]}
                  </div>

                  {/* Arrow Icon - Rotates on hover */}
                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-neutral-500 group-hover:text-black transition-colors duration-300 transform group-hover:-rotate-45"
                    >
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;