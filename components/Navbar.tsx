// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-neutral-100">
          ziyamrzyv
        </Link>

        <div className="flex items-center gap-2">
          {/* Tema butonu */}
          <ThemeToggle />

          {/* Mobil menü butonu */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden px-3 py-2 rounded-md border border-neutral-700 text-neutral-100"
            aria-label="Open menu"
          >
            ≡ Menu
          </button>
        </div>
      </div>

      {/* Mobil drawer (örnek) */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 lg:hidden" onClick={() => setOpen(false)}>
          <aside
            className="absolute right-0 top-0 h-full w-72 bg-neutral-900 border-l border-neutral-800 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="mb-4 px-3 py-2 rounded-md border border-neutral-700 text-neutral-100"
            >
              ✕ Kapat
            </button>
            <ul className="space-y-2">
              <li><Link href="/#home" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link href="/#about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link href="/#projects" onClick={() => setOpen(false)}>Projects</Link></li>
              <li><Link href="/tools" onClick={() => setOpen(false)}>Tools</Link></li>
            </ul>
          </aside>
        </div>
      )}
    </nav>
  );
}
