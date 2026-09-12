import React, { useEffect, useState } from 'react';

const TICK_SPEED = 18;
const HOLD_AFTER = 350;
const FADE_DURATION = 400;

function Preloader() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHidden(true);
      return undefined;
    }

    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 1, 100));
    }, TICK_SPEED);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (hidden || progress < 100) return undefined;

    const holdTimer = setTimeout(() => {
      setFading(true);
      const fadeTimer = setTimeout(() => {
        setHidden(true);
        document.body.style.overflow = '';
      }, FADE_DURATION);
      return () => clearTimeout(fadeTimer);
    }, HOLD_AFTER);

    return () => clearTimeout(holdTimer);
  }, [progress, hidden]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[3000] flex items-center justify-center bg-space transition-opacity duration-[400ms] ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-xs px-6">
        <p className="mb-4 text-center text-sm font-medium tracking-wide text-muted">Cargando portfolio...</p>
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="w-10 shrink-0 text-right font-mono text-sm text-accent">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
