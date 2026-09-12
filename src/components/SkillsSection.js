import React from 'react';
import SKILLS from '../data/skills';
import SectionHeading from './SectionHeading';

const GROUPS = [
  { key: 'confident', title: 'Con las que trabajo' },
  { key: 'learning', title: 'Aprendiendo ahora' },
];

function SkillBadge({ skill }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-bold tracking-wide shadow-glow transition-transform duration-200 hover:-translate-y-0.5"
      style={{ backgroundColor: skill.bg, color: skill.text }}
    >
      <img src={process.env.PUBLIC_URL + skill.logo} alt="" className="h-4 w-4 object-contain" />
      {skill.name}
    </span>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading>Habilidades</SectionHeading>
      <div className="flex flex-col gap-8 rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-sm sm:p-8">
        {GROUPS.map((group) => {
          const groupSkills = SKILLS.filter((skill) => skill.status === group.key);
          if (groupSkills.length === 0) return null;
          return (
            <div key={group.key} className="text-center">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {groupSkills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
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
