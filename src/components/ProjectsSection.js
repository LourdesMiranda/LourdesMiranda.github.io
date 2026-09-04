import React from 'react';
import PROJECTS from '../data/projects';

function ProjectsSection({ onImageClick }) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 text-3xl font-bold text-accent">Proyectos</h2>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border-2 border-accent bg-black/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.3)]"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mb-4 inline-block">
              <h3 className="inline-block rounded-full border-2 border-accent bg-accent/20 px-4 py-2 text-lg text-accent transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/40 hover:shadow-[0_4px_8px_rgba(79,195,247,0.3)] active:translate-y-0">
                {project.title}
              </h3>
            </a>
            <p className="mb-3 text-sm leading-relaxed">
              <b>
                <u>Proyecto personal</u>
              </b>{' '}
              {project.intro}
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              <b>
                <u>Objetivo:</u>
              </b>{' '}
              {project.goal}
            </p>

            <div className="flex flex-col gap-4">
              {project.images.map((image) => (
                <div key={image.src} className="flex flex-col items-start gap-4 sm:flex-row">
                  <img
                    src={process.env.PUBLIC_URL + image.src}
                    alt={image.alt}
                    onClick={() => onImageClick(image.src, image.alt)}
                    className="h-[180px] w-full cursor-pointer rounded-md border border-accent object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-[120px] sm:w-[180px]"
                  />
                  <div className="flex-1">
                    <h4 className="mb-1 text-base text-white">{image.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-300">{image.description}</p>
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
