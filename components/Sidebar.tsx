import Link from "next/link";

// components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="rounded-xl border border-zinc-800/60 bg-zinc-900 p-4">
      <h3 className="font-mono text-3xl text-emerald-400 text-center">Menu</h3>
      <ul className="mt-3 space-y-1">
        <li><Link href="/#home" className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Home</Link></li>
        <li><Link href="/#about" className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ About</Link></li>
        <li><Link href="/#skills" className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Skills</Link></li>
        <li><Link href="/#projects" className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Projects</Link></li>
        <li><Link href="/tools" className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Tools</Link></li>
        <li><Link href="/#contact" className="block rounded-md px-3 py-2 hover:bg-zinc-800">☆ Contact</Link></li>
      </ul>

      <div className="mt-4 rounded-md border border-dashed border-zinc-700 p-3 text-sm">
        <div><span className="text-emerald-400 font-semibold">I&apos;m ONLINE_</span></div>
        <div>System uptime is shown below</div>
      </div>
    </aside>
  );
}
