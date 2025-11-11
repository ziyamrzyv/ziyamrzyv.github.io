// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return (
    <button className="px-3 py-2 rounded-md border border-zinc-700">…</button>
  );

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="px-3 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800 transition"
      aria-label="Toggle theme"
    >
      {isDark ? "🌙 Dark" : "🌤️ Light"}
    </button>
  );
}
