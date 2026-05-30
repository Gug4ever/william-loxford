export default function Footer() {
  return (
    <footer style={{ background: 'var(--charcoal)', color: 'rgba(255,255,255,0.65)', padding: '40px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, fontSize: '1.1rem', color: 'white', marginBottom: 12, letterSpacing: '0.03em' }}>
          William Loxford
        </p>
        <p style={{ fontSize: '0.85rem', marginBottom: 8 }}>
          © {new Date().getFullYear()} William Loxford. All rights reserved.
        </p>
        <p style={{ fontSize: '0.8rem' }}>
          A{' '}
          <a
            href="https://limouze-books.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold-light)', fontWeight: 600 }}
          >
            Limouze Books
          </a>
          {' '}publication.
        </p>
      </div>
    </footer>
  );
}
