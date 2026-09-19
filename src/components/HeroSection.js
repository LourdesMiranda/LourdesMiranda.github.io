import React from 'react';

function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
        De Marketing Digital y Ecommerce a Software Engineer
      </p>
      <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        Construyo experiencias de ecommerce en producción, con una base full-stack recién ampliada.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        Empecé en marketing digital y ecommerce, y di el salto al desarrollo web dentro de Grupo
        IskayPet, donde hoy trabajo como Software Engineer sobre Salesforce Commerce Cloud tras una
        promoción interna. Por el camino, completé una formación full-stack en 4Geeks Academy.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-glow-lg"
        >
          Ver proyectos
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
        >
          Contactar
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
