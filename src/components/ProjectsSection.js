import React from 'react';
import PROJECTS from '../data/projects';
import SectionHeading from './SectionHeading';

const CHIP_COLORS = [
  'bg-accent/10 text-accent',
  'bg-accent2/10 text-accent2',
];

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
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display text-xl font-bold text-white transition-colors duration-200 hover:text-accent sm:text-2xl"
              >
                {project.title}
                <span className="text-accent transition-transform duration-200 group-hover:translate-x-1">↗</span>
              </a>
              {project.badge && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-muted">
                  {project.badge}
                </span>
              )}
            </div>

            {project.headline && (
              <p className="mb-5 mt-2 text-base font-medium text-white/90 sm:text-lg">{project.headline}</p>
            )}
            {!project.headline && <div className="mb-5" />}

            <div className="mb-6 flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-base">
              {project.sections.map((section, idx) => (
                <div key={section.label}>
                  <span
                    className={`mb-1.5 mr-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide ${CHIP_COLORS[idx % CHIP_COLORS.length]}`}
                  >
                    {section.label}
                  </span>
                  <p className="inline">{section.body}</p>
                </div>
              ))}
            </div>

            {project.stack && (
              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {project.images && (
              <div className={`grid grid-cols-1 gap-5 ${project.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
