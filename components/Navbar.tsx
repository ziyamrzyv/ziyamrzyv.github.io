// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="sticky top-5 mx-10 my-3 border-panel backdrop-blur">
        <div className="mx-10  py-3 flex items-center justify-between">
          <Link href="/" className="font-mono text-lg text-emerald-400">ziyamrzyv</Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* <button
              onClick={() => setOpen(true)}
              className="lg:hidden px-3 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100"
              aria-label="Open menu"
            >
              ≡ Menu
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />
      <nav
        className={`fixed right-0 top-0 z-50 h-full w-80 border-panel rounded-none p-4 transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile Menu"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-2xl text-emerald-400">Menu</h3>
          <button onClick={() => setOpen(false)} className="px-3 py-2 rounded-md border border-zinc-700">✕</button>
        </div>
        <ul className="mt-4 space-y-2">
          <li><Link href="/" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Home</Link></li>
          <li><Link href="/#about" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ About</Link></li>
          <li><Link href="/#skills" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Skills</Link></li>
          <li><Link href="/#projects" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Projects</Link></li>
          <li><Link href="/tools" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Tools</Link></li>
          <li><Link href="/#contact" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}
