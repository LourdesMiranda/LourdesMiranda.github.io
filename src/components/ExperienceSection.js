import React from 'react';
import EXPERIENCE from '../data/experience';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading>Experiencia</SectionHeading>
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-surface/60 p-6 shadow-glow backdrop-blur-sm sm:p-7">
        <Timeline items={EXPERIENCE} />
      </div>
    </section>
  );
}

export default ExperienceSection;
