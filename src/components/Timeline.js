import React from 'react';

function Timeline({ items, compact = false }) {
  return (
    <ol className="relative border-l border-white/10 pl-7">
      {items.map((item, idx) => (
        <li key={item.title} className={`relative ${idx !== items.length - 1 ? (compact ? 'mb-5' : 'mb-8') : ''}`}>
          <span
            className={`absolute -left-[34px] top-1.5 rounded-full border-2 border-space bg-accent ${
              compact ? 'h-2.5 w-2.5' : 'h-3 w-3 shadow-[0_0_10px_rgba(79,195,247,0.6)]'
            }`}
          />
          <div className="flex items-start gap-3">
            {!compact && (
              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 p-2 sm:flex">
                {item.logo ? (
                  <img
                    src={process.env.PUBLIC_URL + item.logo}
                    alt={item.title}
                    className="h-full w-full object-contain grayscale-[30%] transition-[filter] duration-300 hover:grayscale-0"
                  />
                ) : (
                  <span className="text-xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                )}
              </div>
            )}
            <div className="flex-1">
              <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                <h4 className={`font-semibold text-white ${compact ? 'text-sm' : 'text-base'}`}>{item.title}</h4>
                <span
                  className={`rounded-full bg-accent/10 font-semibold text-accent ${
                    compact ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-0.5 text-xs'
                  }`}
                >
                  {item.year}
                </span>
                {item.badge && (
                  <span className="rounded-full bg-accent2/10 px-2.5 py-0.5 text-xs font-semibold text-accent2">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className={`mb-1 text-muted ${compact ? 'text-xs' : 'text-sm'}`}>{item.institution}</p>
              {item.description && (
                <p className={`leading-relaxed text-muted ${compact ? 'text-xs' : 'text-sm'}`}>{item.description}</p>
              )}
              {item.bullets && (
                <ul className={`mt-1 flex flex-col gap-1 leading-relaxed text-muted ${compact ? 'text-xs' : 'text-sm'}`}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
