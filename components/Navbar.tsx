'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  // --- theme (dark/light) ---
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    // ilk yüklemede sistem/localkayıt kontrolü
    const saved = localStorage.getItem('theme');
    const prefersLight =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;

    const initial = saved || (prefersLight ? 'light' : 'dark');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    localStorage.setItem('theme', next);
  };

  // --- mobile drawer ---
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEsc = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const linkCls =
    'px-3 py-2 rounded-md text-sm font-medium hover:text-emerald-400 transition-colors';

  return (
    <>
      {/* Topbar */}
      <nav className="
        sticky top-0 z-40
        border-b
        bg-[rgba(11,13,14,0.75)] backdrop-blur
        border-neutral-800 text-emerald-400
        dark:bg-[rgba(11,13,14,0.75)] dark:border-neutral-800
        light:bg-white light:text-neutral-900
      ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-14 flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="font-[VT323] text-2xl tracking-wider hover:text-emerald-300 transition-colors"
            >
              ziyamrzyv
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-2 text-emerald-200">
              <Link href="/#home" className={linkCls}>Home</Link>
              <Link href="/#about" className={linkCls}>About</Link>
              <Link href="/#skills" className={linkCls}>Skills</Link>
              <Link href="/#projects" className={linkCls}>Projects</Link>
              <Link href="/#contact" className={linkCls}>Contact</Link>
              <Link href="/tools" className={linkCls}>Tools</Link>
            </div>

            {/* Actions (Theme + Menu) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="px-3 py-2 rounded-md border border-neutral-800 bg-neutral-900 text-emerald-300 hover:bg-neutral-800 transition-colors md:mr-1"
                aria-label="Tema Değiştir"
                title="Tema Değiştir"
              >
                {theme === 'dark' ? '🌗 Theme' : '🌞 Light'}
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="md:hidden px-3 py-2 rounded-md border border-neutral-800 bg-neutral-900 text-emerald-300 hover:bg-neutral-800 transition-colors"
                aria-label="Menüyü Aç"
                title="Menüyü Aç"
              >
                ≡ Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`
          fixed inset-0 z-50 md:hidden
          ${open ? 'pointer-events-auto' : 'pointer-events-none'}
        `}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* panel */}
        <aside
          className={`
            absolute right-0 top-0 h-full w-[86%] max-w-[320px]
            border-l border-neutral-800
            bg-neutral-950 text-emerald-200
            transition-transform duration-200
            ${open ? 'translate-x-0' : 'translate-x-full'}
          `}
          aria-label="Mobil Menü"
        >
          <div className="p-4 border-b border-neutral-800">
            <div className="flex items-center justify-between">
              <div className="font-[VT323] text-3xl text-emerald-400">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md border border-neutral-800 bg-neutral-900 text-emerald-300 hover:bg-neutral-800 transition-colors"
              >
                ✕ Kapat
              </button>
            </div>
          </div>

          <ul className="p-3">
            {[
              { href: '/#home', label: '☆ Home' },
              { href: '/#about', label: '☆ About' },
              { href: '/#skills', label: '☆ Skills' },
              { href: '/#projects', label: '☆ Projects' },
              { href: '/#contact', label: '☆ Contact' },
              { href: '/tools', label: '☆ Tools' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-900/70 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="m-3 p-3 border border-dashed border-neutral-800 rounded-md bg-neutral-950/60 text-sm">
            <div className="text-emerald-400 font-semibold">Status</div>
            <div>I&aposm <span className="text-emerald-400 font-semibold">ONLINE_</span></div>
          </div>
        </aside>
      </div>
    </>
  );
}
