import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Sidebar() {
  return (
    <nav className="rounded-xl border border-neutral-800 dark:border-neutral-800 bg-neutral-900/60 dark:bg-neutral-900/60 p-4">
      <h3 className="text-xl font-semibold mb-3 text-emerald-400">Menu</h3>
      <ul className="space-y-1">
        {links.map(l => (
          <li key={l.href}>
            <Link
              className="block px-2 py-2 rounded hover:bg-neutral-800/70"
              href={l.href}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
