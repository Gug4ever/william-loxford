'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const allBooks = [
  {
    slug: 'the-anagram-stories',
    title: 'The Anagram Stories',
    genre: 'Fiction',
    description: 'A playful, linguistically inventive collection that hides new worlds inside familiar words. Each story begins with a single anagram — and spirals into something entirely unexpected.',
    coverSrc: '/images/book-the-anagram-stories.jpg',
  },
  {
    slug: 'the-vanishing-alphabet',
    title: 'The Vanishing Alphabet',
    genre: 'Fiction',
    description: 'A meditation on language, loss, and the quiet power of letters disappearing from the page. Part fable, part essay, entirely singular.',
    coverSrc: '/images/book-the-vanishing-alphabet.jpg',
  },
];

export default function WorksClient() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section style={{ paddingTop: 100, paddingBottom: 60, textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'linear-gradient(135deg, var(--charcoal), #2D4A7A)',
            color: 'white', padding: '8px 22px', borderRadius: 50,
            fontFamily: 'DM Mono, monospace', fontWeight: 500,
            fontSize: '0.78rem', letterSpacing: '0.08em', marginBottom: 20,
          }}>
            Literary Fiction &amp; Non-Fiction
          </span>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300,
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--charcoal)', lineHeight: 1.1, marginBottom: 16,
          }}>
            Works
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Writing that moves freely between styles and genres — blending reflection, storytelling,
            humour, and essay without ever settling into a single category.
          </p>
        </div>
      </section>

      {/* ── BOOKS GRID ── */}
      <section style={{ background: 'white', padding: '60px 0 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
            {allBooks.map((book) => (
              <div key={book.slug} ref={addRef} className="fade-in">
                <WorksBookCard {...book} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPRINT NOTE ── */}
      <section style={{ padding: '40px 0 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', borderTop: '1px solid var(--light)', paddingTop: 32 }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', letterSpacing: '0.06em', color: 'var(--muted)' }}>
            All titles published by{' '}
            <a href="https://limouze-books.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontWeight: 500 }}>
              Limouze Books
            </a>
            {' '}— an imprint of Tonton Gug Studio.
          </p>
        </div>
      </section>
    </div>
  );
}

function WorksBookCard({ slug, title, genre, description, coverSrc }: {
  slug: string; title: string; genre: string; description: string; coverSrc: string;
}) {
  return (
    <div
      style={{
        background: 'white', borderRadius: 16, overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(27,43,74,0.08)',
        border: '2px solid transparent', transition: 'all 0.3s',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 16px 40px rgba(27,43,74,0.14)'; el.style.borderColor = 'var(--gold)'; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 20px rgba(27,43,74,0.08)'; el.style.borderColor = 'transparent'; }}
    >
      {/* Gold top bar */}
      <div style={{ height: 6, background: 'linear-gradient(90deg, var(--charcoal), var(--gold))' }} />

      {/* Cover */}
      <div style={{ position: 'relative', aspectRatio: '3/4', width: '100%', background: 'var(--light)', overflow: 'hidden', cursor: 'zoom-in' }}>
        <Image src={coverSrc} alt={`Cover of ${title}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw"
          style={{ transition: 'transform 0.4s ease' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
        />
      </div>

      {/* Info */}
      <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>
          {genre}
        </p>
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, fontSize: '1.3rem', color: 'var(--charcoal)', marginBottom: 10, lineHeight: 1.2 }}>
          {title}
        </h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65, flex: 1, marginBottom: 16 }}>
          {description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <Link href={`/works/${slug}`} style={{
            fontFamily: 'DM Mono, monospace', fontSize: '0.78rem',
            color: 'var(--gold)', fontWeight: 500,
          }}>
            Learn more →
          </Link>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '5px 12px', borderRadius: 999,
            background: 'var(--light)', color: 'var(--muted)',
            fontSize: '0.72rem', fontFamily: 'DM Mono, monospace',
          }}>
            Limouze Books
          </span>
        </div>
      </div>
    </div>
  );
}
