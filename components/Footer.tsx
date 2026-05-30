import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 md:px-12 mt-auto"
      style={{ borderTop: '1px solid rgba(181,84,26,0.2)', background: 'var(--cream)' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm" style={{ color: 'var(--charcoal)', opacity: 0.6 }}>
          Published by{' '}
          <Link href="#" style={{ color: 'var(--copper)' }}>
            Limouze Books
          </Link>
        </p>

        <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--charcoal)', opacity: 0.4 }}>
          © {new Date().getFullYear()} William Loxford
        </p>

        <div className="flex gap-5">
          {/* TODO: replace href="#" with real social URLs */}
          <a href="#" aria-label="Instagram" style={{ color: 'var(--charcoal)', opacity: 0.5 }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter / X" style={{ color: 'var(--charcoal)', opacity: 0.5 }}>
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
