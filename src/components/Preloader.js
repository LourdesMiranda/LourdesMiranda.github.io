import React, { useEffect, useState } from 'react';

const LINES = [
  '$ whoami',
  '> Lourdes Miranda — Software Engineer',
  '$ ./cargar-portfolio.sh',
  '> Listo ✓',
];

const FULL_TEXT = LINES.join('\n');
const TYPE_SPEED = 28;
const HOLD_AFTER = 500;
const FADE_DURATION = 400;

function Preloader() {
  const [charCount, setCharCount] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('preloaderShown')) {
      setHidden(true);
      return undefined;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sessionStorage.setItem('preloaderShown', '1');
      setHidden(true);
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setCharCount((c) => Math.min(c + 1, FULL_TEXT.length));
    }, TYPE_SPEED);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (hidden || charCount < FULL_TEXT.length) return undefined;

    const holdTimer = setTimeout(() => {
      setFading(true);
      const fadeTimer = setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
        sessionStorage.setItem('preloaderShown', '1');
      }, FADE_DURATION);
      return () => clearTimeout(fadeTimer);
    }, HOLD_AFTER);

    return () => clearTimeout(holdTimer);
  }, [charCount, hidden]);

  if (hidden) return null;

  const visibleText = FULL_TEXT.slice(0, charCount);
  const visibleLines = visibleText.split('\n');

  return (
    <div
      className={`fixed inset-0 z-[3000] flex items-center justify-center bg-space transition-opacity duration-[400ms] ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <pre className="w-full max-w-md px-6 font-mono text-sm leading-relaxed sm:text-base">
        {LINES.map((line, idx) => {
          const shown = visibleLines[idx] || '';
          const isActive = idx === visibleLines.length - 1 && charCount < FULL_TEXT.length;
          return (
            <div key={line} className={line.startsWith('$') ? 'text-white/70' : 'text-accent'}>
              {shown}
              {isActive && <span className="animate-pulse">▌</span>}
            </div>
          );
        })}
      </pre>
    </div>
  );
}

export default Preloader;
