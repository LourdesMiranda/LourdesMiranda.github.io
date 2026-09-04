import React from 'react';

function ImageModal({ image, onClose }) {
  if (!image) return null;

  const isPhysical = image.alt === 'Wireframes físico';

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center overflow-auto bg-black/95 p-2.5"
      onClick={onClose}
    >
      <div className="relative flex w-full max-w-[95%] flex-col items-center">
        <button
          type="button"
          className="fixed right-4 top-4 z-[2001] flex h-10 w-10 items-center justify-center rounded-full bg-accent/95 text-2xl text-white"
          onClick={onClose}
          aria-label="Cerrar imagen"
        >
          &times;
        </button>
        <img
          src={image.src}
          alt={image.alt}
          onClick={(e) => e.stopPropagation()}
          className={`max-h-[55vh] max-w-full rounded border border-accent object-contain shadow-[0_0_15px_rgba(79,195,247,0.3)] ${
            isPhysical ? 'bg-[#f0f0f0] p-1' : 'bg-[#1a1a1a]'
          }`}
        />
      </div>
    </div>
  );
}

export default ImageModal;
