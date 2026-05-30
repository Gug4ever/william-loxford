'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{ background: 'var(--cream)', borderBottom: '1px solid rgba(181,84,26,0.15)' }}
    >
      <Link
        href="/"
        className="font-display text-xl font-semibold tracking-wide"
        style={{ color: 'var(--charcoal)' }}
      >
        William Loxford
      </Link>

      <ul className="flex items-center gap-1">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 relative group"
              style={{ color: pathname === href ? 'var(--copper)' : 'var(--charcoal)' }}
            >
              {label}
              <span
                className="absolute bottom-1 left-4 right-4 h-px transition-transform origin-left"
                style={{
                  background: 'var(--copper)',
                  transform: pathname === href ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
