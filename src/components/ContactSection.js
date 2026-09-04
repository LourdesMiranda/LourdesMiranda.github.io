import React, { useState } from 'react';
import SOCIAL_LINKS from '../data/social';

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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 text-3xl font-bold text-accent">Contacto</h2>
      <div className="mx-auto flex max-w-2xl flex-col items-center justify-between gap-8 rounded-xl border-2 border-accent bg-black/30 p-6 sm:flex-row sm:p-8">
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <button
            type="button"
            className="w-[180px] rounded-full bg-accent px-6 py-3 font-bold text-space transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-[0_4px_8px_rgba(79,195,247,0.3)]"
            onClick={() => setShowEmail((v) => !v)}
          >
            {showEmail ? 'Ocultar Email' : 'Mostrar Email'}
          </button>
          {showEmail && (
            <div className="flex animate-fade-in flex-col items-center gap-2 text-lg text-white sm:flex-row">
              {EMAIL}
              <button
                type="button"
                className="rounded-full border border-accent bg-accent/20 px-3 py-1 text-sm text-accent transition-colors duration-200 hover:bg-accent/30"
                onClick={copyEmail}
              >
                {copied ? '✓ Copiado!' : 'Copiar'}
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-6">
          {SOCIAL_LINKS.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
              <img
                src={process.env.PUBLIC_URL + social.logo}
                alt={social.alt}
                className="h-[50px] w-[50px] grayscale-[30%] transition-all duration-300 hover:scale-110 hover:grayscale-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
