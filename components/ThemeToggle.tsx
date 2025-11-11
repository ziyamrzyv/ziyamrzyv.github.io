// components/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // SSR hydration uyarısı olmaması için:
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = (theme ?? resolvedTheme) === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="px-3 py-2 rounded-md border border-neutral-700 hover:bg-neutral-800 dark:hover:bg-neutral-200 
                 bg-neutral-900 text-neutral-100 dark:bg-white dark:text-neutral-900 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? '🌙 Dark' : '🌤️ Light'}
    </button>
  );
}
