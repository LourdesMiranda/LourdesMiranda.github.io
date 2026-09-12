import React from 'react';
import SKILLS from '../data/skills';
import SectionHeading from './SectionHeading';

const GROUPS = [
  { key: 'confident', title: 'Con las que trabajo' },
  { key: 'learning', title: 'Aprendiendo ahora' },
];

function SkillCard({ skill }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-surface/60 p-5 shadow-glow backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-lg">
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white/5">
        <img
          src={process.env.PUBLIC_URL + skill.logo}
          alt={skill.name}
          className="h-9 w-9 object-contain grayscale-[30%] transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rotate-[30deg] opacity-0 transition-opacity duration-500 [background:radial-gradient(circle,rgba(79,195,247,0.6)_0%,rgba(79,195,247,0)_70%)] group-hover:animate-shine group-hover:opacity-100" />
      </div>
      <div className="text-center text-sm font-semibold text-white">{skill.name}</div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading>Habilidades</SectionHeading>
      <div className="flex flex-col gap-10">
        {GROUPS.map((group) => {
          const groupSkills = SKILLS.filter((skill) => skill.status === group.key);
          if (groupSkills.length === 0) return null;
          return (
            <div key={group.key}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">{group.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
                {groupSkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsSection;
