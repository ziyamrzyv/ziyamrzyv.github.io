// src/app/page.tsx
export default function HomePage() {
  return (
    <section className="rounded-xl border border-zinc-800/60 dark:border-zinc-800 bg-white/5 dark:bg-zinc-900/50 p-6 shadow-sm">
      <h2 className="text-emerald-400 font-semibold tracking-wide">➜ WELCOME</h2>
      <h1 className="mt-1 text-4xl md:text-6xl font-bold text-emerald-400/90">Hello, I&apos;m Ziya Mirzayev</h1>

      <div className="mt-6 rounded-lg border border-dashed border-zinc-700 p-4 bg-zinc-50 dark:bg-zinc-900">
        <div className="font-mono text-sm text-zinc-700 dark:text-zinc-300">
          <div>&gt; ziyamrzyv@home:~$ whoami</div>
          <div>it-support • linux • networking • devops</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <span className="px-2 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-200">Linux</span>
        <span className="px-2 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-200">Networking</span>
        <span className="px-2 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-200">DevOps</span>
      </div>
    </section>
  );
}
