import React from 'react';
import EXPERIENCE from '../data/experience';
import EDUCATION from '../data/education';

function InfoItem({ item, hoverShadowClass, hoverBgClass }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border-l-4 border-accent bg-black/30 p-4 transition-all duration-300 hover:-translate-y-1 ${hoverBgClass} ${hoverShadowClass}`}
    >
      <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full bg-accent/10 p-1.5">
        <img
          src={process.env.PUBLIC_URL + item.logo}
          alt={item.title}
          className="h-full w-full object-contain grayscale-[30%] transition-[filter] duration-300 hover:grayscale-0"
        />
      </div>
      <div className="flex-1">
        <h4 className="mb-1 text-base text-accent">{item.title}</h4>
        <p className="mb-1 text-sm text-gray-300">{item.institution}</p>
        <div className="mb-2 inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent">
          {item.year}
        </div>
        {item.description && <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 text-3xl font-bold text-accent">Sobre mí</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border-2 border-accent bg-black/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.3)]">
          <h3 className="mb-4 text-xl text-accent">Experiencia Laboral</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {EXPERIENCE.map((experience) => (
              <InfoItem
                key={experience.title}
                item={experience}
                hoverBgClass="hover:bg-[rgba(16,163,127,0.05)]"
                hoverShadowClass="hover:shadow-[0_5px_15px_rgba(16,163,127,0.2)]"
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border-2 border-accent bg-black/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.3)]">
          <h3 className="mb-4 text-xl text-accent">Formación Académica</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {EDUCATION.map((education) => (
              <InfoItem
                key={education.title}
                item={education}
                hoverBgClass="hover:bg-accent/5"
                hoverShadowClass="hover:shadow-[0_5px_15px_rgba(79,195,247,0.2)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
