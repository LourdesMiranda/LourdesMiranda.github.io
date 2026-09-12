import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#projects', label: 'Proyectos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#about', label: 'Sobre mí' },
  { href: '#contact', label: 'Contacto' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-[1000] border-b border-white/5 bg-space/80 backdrop-blur-md">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <div className="z-[1002] flex items-center gap-3 md:gap-4">
          <div className="group relative h-[52px] w-[52px] cursor-pointer overflow-hidden rounded-full ring-2 ring-accent/70 ring-offset-2 ring-offset-space transition-all duration-300 hover:ring-accent md:h-[60px] md:w-[60px]">
            <img
              src={process.env.PUBLIC_URL + '/images/lourdesmirandamoreno.jpg'}
              alt="Lourdes Miranda"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rotate-[30deg] opacity-0 transition-opacity duration-500 [background:radial-gradient(circle,rgba(79,195,247,0.8)_0%,rgba(79,195,247,0)_70%)] group-hover:animate-shine group-hover:opacity-100" />
          </div>
          <div>
            <h1 className="font-display text-lg font-semibold tracking-tight text-white md:text-xl">
              Hola, soy <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text">Lourdes</span>
            </h1>
            <p className="text-xs font-medium text-muted md:text-sm">Software Engineer</p>
          </div>
        </div>

        <button
          type="button"
          className="z-[1001] p-2 text-2xl text-white transition-transform duration-300 hover:scale-110 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`fixed inset-y-0 right-0 z-[1000] h-screen w-72 transform border-l border-white/5 bg-space pt-24 shadow-2xl transition-transform duration-300 ease-in-out md:static md:z-auto md:h-auto md:w-auto md:translate-x-0 md:transform-none md:border-0 md:bg-transparent md:pt-0 md:shadow-none ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-2 px-6 md:flex-row md:gap-1 md:px-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wide text-muted transition-colors duration-200 [word-spacing:0.2em] hover:bg-white/5 hover:text-accent md:py-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {menuOpen && (
          <div
            className="fixed inset-0 z-[999] bg-black/50 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
