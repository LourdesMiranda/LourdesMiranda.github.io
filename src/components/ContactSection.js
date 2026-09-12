import React, { useState } from 'react';
import SOCIAL_LINKS from '../data/social';
import SectionHeading from './SectionHeading';

const EMAIL = 'lourdescoronela@gmail.com';

function ContactSection() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
      <SectionHeading>Contacto</SectionHeading>
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-surface/60 p-8 shadow-glow backdrop-blur-sm sm:flex-row sm:p-10">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-accent to-accent2 px-7 py-3 font-semibold text-space transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg"
            onClick={() => setShowEmail((v) => !v)}
          >
            {showEmail ? 'Ocultar Email' : 'Mostrar Email'}
          </button>
          {showEmail && (
            <div className="flex animate-fade-in flex-col items-center gap-2 text-base text-white sm:flex-row">
              {EMAIL}
              <button
                type="button"
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-accent transition-colors duration-200 hover:bg-white/10"
                onClick={copyEmail}
              >
                {copied ? '✓ Copiado!' : 'Copiar'}
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10"
            >
              <img
                src={process.env.PUBLIC_URL + social.logo}
                alt={social.alt}
                className="h-full w-full rounded-full object-cover grayscale-[30%] transition-all duration-300 hover:grayscale-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
