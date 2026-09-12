import React from 'react';
import SKILLS from '../data/skills';
import SectionHeading from './SectionHeading';

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading>Habilidades</SectionHeading>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center rounded-2xl border border-white/10 bg-surface/60 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-lg"
          >
            <div className="relative mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white/5">
              <img
                src={process.env.PUBLIC_URL + skill.logo}
                alt={skill.name}
                className={`h-9 w-9 object-contain grayscale-[30%] transition-all duration-300 group-hover:grayscale-0 ${
                  skill.pulse ? 'group-hover:animate-pulse-scale' : 'group-hover:scale-110'
                }`}
              />
              <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rotate-[30deg] opacity-0 transition-opacity duration-500 [background:radial-gradient(circle,rgba(79,195,247,0.6)_0%,rgba(79,195,247,0)_70%)] group-hover:animate-shine group-hover:opacity-100" />
            </div>
            <div className="mb-3 text-center text-sm font-semibold text-white">{skill.name}</div>
            <div className="mt-auto w-full">
              <div className="mb-1.5 flex justify-between text-xs text-muted">
                <span>Nivel</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-lg bg-white/10">
                <div
                  className={`h-full rounded-lg bg-gradient-to-r transition-[width] duration-1000 ease-out ${
                    skill.barClass || 'from-accent to-accent-dark'
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
