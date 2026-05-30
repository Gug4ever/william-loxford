'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/works', label: 'Works' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(250,248,245,0.96)', backdropFilter: 'blur(10px)',
      borderBottom: '2px solid var(--gold)',
      padding: '12px 0',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, fontSize: '1.25rem', color: 'var(--charcoal)', letterSpacing: '0.02em' }}>
          William Loxford
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-desktop-links">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} style={{
                fontFamily: 'DM Mono, monospace', fontWeight: 500, fontSize: '0.82rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: active ? 'var(--gold)' : 'var(--muted)',
                position: 'relative', paddingBottom: 4,
                transition: 'color 0.2s',
              }}>
                {label}
                <span style={{
                  position: 'absolute', bottom: 0, left: 0,
                  height: 2, width: '100%', background: 'var(--gold)',
                  borderRadius: 2, transform: active ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left', transition: 'transform 0.25s',
                }} />
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: 'none', background: 'none', border: 'none',
            fontSize: '1.4rem', cursor: 'pointer', color: 'var(--charcoal)',
          }}
          className="nav-toggle"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--cream)', borderTop: '1px solid var(--light)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.82rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: pathname === href ? 'var(--gold)' : 'var(--muted)',
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop-links { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
