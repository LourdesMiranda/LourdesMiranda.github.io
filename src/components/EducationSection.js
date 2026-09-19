import React from 'react';
import EDUCATION from '../data/education';
import SectionHeading from './SectionHeading';
import Timeline from './Timeline';

function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
      <SectionHeading>Formación</SectionHeading>
      <div className="mx-auto max-w-2xl rounded-xl border border-white/5 bg-surface/30 p-5 sm:p-6">
        <Timeline items={EDUCATION} compact />
      </div>
    </section>
  );
}

export default EducationSection;
