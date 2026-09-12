import React, { useMemo } from 'react';

const PARTICLE_COUNT = 40;
const COLORS = ['#4fc3f7', '#a78bfa'];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        size: randomBetween(2, 6),
        duration: randomBetween(16, 34),
        delay: randomBetween(-30, 0),
        peakOpacity: randomBetween(0.5, 1),
        color: COLORS[i % COLORS.length],
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle absolute bottom-0 rounded-full"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.color}`,
            animation: `float-dust ${p.duration}s linear ${p.delay}s infinite`,
            '--peak-opacity': p.peakOpacity,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
