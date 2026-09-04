import React from 'react';
import SKILLS from '../data/skills';

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 text-3xl font-bold text-accent">Habilidades</h2>
      <div className="skills-scroll flex gap-6 overflow-x-auto pb-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="group flex min-w-[160px] flex-col items-center rounded-xl border border-accent bg-black/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.3)]"
          >
            <div className="relative flex h-[70px] w-[70px] items-center justify-center overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + skill.logo}
                alt={skill.name}
                className={`h-full w-full object-contain grayscale-[30%] transition-all duration-300 group-hover:grayscale-0 ${
                  skill.pulse ? 'group-hover:animate-pulse-scale' : 'group-hover:scale-110'
                }`}
              />
              <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rotate-[30deg] opacity-0 transition-opacity duration-500 [background:radial-gradient(circle,rgba(79,195,247,0.6)_0%,rgba(79,195,247,0)_70%)] group-hover:animate-shine group-hover:opacity-100" />
            </div>
            <div className="my-3 w-full text-center text-lg font-bold text-accent">{skill.name}</div>
            <div className="mt-auto w-full">
              <div className="mb-2 flex justify-between text-xs">
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
