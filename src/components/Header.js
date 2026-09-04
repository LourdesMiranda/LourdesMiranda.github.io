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
    <header className="sticky top-0 z-[1000] bg-black/85 shadow-[0_4px_15px_rgba(79,195,247,0.2)] backdrop-blur-sm">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <div className="z-[1002] flex items-center gap-3 md:gap-5">
          <div className="group relative h-[60px] w-[60px] cursor-pointer overflow-hidden rounded-full md:h-[70px] md:w-[70px]">
            <img
              src={process.env.PUBLIC_URL + '/images/lourdesmirandamoreno.jpg'}
              alt="Lourdes Miranda"
              className="h-full w-full rounded-full border-2 border-accent object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="pointer-events-none absolute -left-1/2 -top-1/2 h-[200%] w-[200%] rotate-[30deg] opacity-0 transition-opacity duration-500 [background:radial-gradient(circle,rgba(79,195,247,0.8)_0%,rgba(79,195,247,0)_70%)] group-hover:animate-shine group-hover:opacity-100" />
          </div>
          <h1 className="bg-gradient-to-r from-accent to-white bg-clip-text text-xl font-normal text-transparent transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(79,195,247,0.5)] md:text-2xl">
            Hola, soy Lourdes
          </h1>
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
          className={`fixed inset-y-0 right-0 z-[1000] h-screen w-64 transform bg-[rgba(10,25,47,0.98)] pt-24 shadow-2xl transition-transform duration-300 ease-in-out md:static md:z-auto md:h-auto md:w-auto md:translate-x-0 md:transform-none md:bg-transparent md:pt-0 md:shadow-none ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-6 px-6 md:flex-row md:gap-3 md:px-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full border-2 border-transparent px-4 py-2 font-medium text-white transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_12px_rgba(79,195,247,0.3)]"
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
