// src/app/page.tsx
export default function Herosec() {
  return (
    <section className="border-panel p-6 shadow-sm">
      <h2 className="text-emerald-400 font-semibold tracking-wide">➜ WELCOME</h2>
      <h1 className="mt-1 text-4xl md:text-6xl font-bold text-emerald-400/90">Hello, I&apos;m Ziya Mirzayev</h1>

      <div className="mt-6 border-dashed-panel">
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
