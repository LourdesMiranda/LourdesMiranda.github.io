import React from 'react';
import EXPERIENCE from '../data/experience';
import EDUCATION from '../data/education';
import SectionHeading from './SectionHeading';

function Timeline({ items }) {
  return (
    <ol className="relative border-l border-white/10 pl-7">
      {items.map((item, idx) => (
        <li key={item.title} className={`relative ${idx !== items.length - 1 ? 'mb-8' : ''}`}>
          <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2 border-space bg-accent shadow-[0_0_10px_rgba(79,195,247,0.6)]" />
          <div className="flex items-start gap-3">
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 p-2 sm:flex">
              {item.logo ? (
                <img
                  src={process.env.PUBLIC_URL + item.logo}
                  alt={item.title}
                  className="h-full w-full object-contain grayscale-[30%] transition-[filter] duration-300 hover:grayscale-0"
                />
              ) : (
                <span className="text-xl" aria-hidden="true">
                  {item.emoji}
                </span>
              )}
            </div>
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {item.year}
                </span>
              </div>
              <p className="mb-1 text-sm text-muted">{item.institution}</p>
              {item.description && <p className="text-sm leading-relaxed text-muted">{item.description}</p>}
              {item.bullets && (
                <ul className="mt-1 flex flex-col gap-1 text-sm leading-relaxed text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading>Sobre mí</SectionHeading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-glow backdrop-blur-sm sm:p-7">
          <h3 className="mb-6 font-display text-lg font-bold text-white">Experiencia Laboral</h3>
          <Timeline items={EXPERIENCE} />
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-glow backdrop-blur-sm sm:p-7">
          <h3 className="mb-6 font-display text-lg font-bold text-white">Formación Académica</h3>
          <Timeline items={EDUCATION} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
