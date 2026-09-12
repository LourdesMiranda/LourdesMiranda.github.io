import React from 'react';
import PROJECTS from '../data/projects';
import SectionHeading from './SectionHeading';

function ProjectsSection({ onImageClick }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading>Proyectos</SectionHeading>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-lg sm:p-8"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 inline-flex items-center gap-2 font-display text-xl font-bold text-white transition-colors duration-200 hover:text-accent sm:text-2xl"
            >
              {project.title}
              <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
            </a>

            <div className="mb-6 flex flex-col gap-3 text-sm leading-relaxed text-muted sm:text-base">
              <p>
                <span className="mr-2 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent">
                  Proyecto personal
                </span>
                {project.intro}
              </p>
              <p>
                <span className="mr-2 rounded-full bg-accent2/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent2">
                  Objetivo
                </span>
                {project.goal}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {project.images.map((image) => (
                <div key={image.src} className="flex flex-col gap-3">
                  <div
                    className="group/img relative cursor-pointer overflow-hidden rounded-xl border border-white/10"
                    onClick={() => onImageClick(image.src, image.alt)}
                  >
                    <img
                      src={process.env.PUBLIC_URL + image.src}
                      alt={image.alt}
                      className="h-[190px] w-full object-cover transition-transform duration-500 ease-out group-hover/img:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-space/60 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
                      <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                        Ver imagen
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-white">{image.title}</h4>
                    <p className="text-sm leading-relaxed text-muted">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
