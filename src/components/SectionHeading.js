import React from 'react';

function SectionHeading({ children }) {
  return (
    <div className="mb-10 flex flex-col items-start gap-3 sm:mb-12">
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{children}</h2>
      <span className="h-1 w-14 rounded-full bg-gradient-to-r from-accent to-accent2" />
    </div>
  );
}

export default SectionHeading;
