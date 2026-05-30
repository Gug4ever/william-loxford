'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const books = [
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

export default function HomePage() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    fadeRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null) => { if (el && !fadeRefs.current.includes(el)) fadeRefs.current.push(el); };

  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        paddingTop: 80, position: 'relative', overflow: 'hidden',
      }}>
        {/* Subtle bg blobs */}
        <div style={{
          position: 'absolute', top: -80, right: -150, width: 420, height: 420,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,105,20,0.08), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -80, left: -100, width: 350, height: 350,
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,43,74,0.06), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px', width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>

            {/* Text */}
            <div>
              <p style={{
                fontFamily: 'DM Mono, monospace', fontSize: '0.72rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: 16,
              }}>
                Author · Adventurer · Limouze Books
              </p>

              <h1 style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(3rem, 6vw, 5.5rem)', lineHeight: 1.05,
                color: 'var(--charcoal)', marginBottom: 20,
              }}>
                William<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Loxford</em>
              </h1>

              <div style={{ height: 2, width: 56, background: 'var(--gold)', marginBottom: 24, borderRadius: 2 }} />

              <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 440, lineHeight: 1.8, marginBottom: 32 }}>
                Born in New Zealand. Raised across the UK, Spain, France, and Hong Kong.
                Writing that moves between reflection, storytelling, and essay — without settling into a single category.
              </p>

              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, var(--charcoal), #2D4A7A)',
                color: 'white', padding: '10px 24px', borderRadius: 50,
                fontFamily: 'DM Mono, monospace', fontWeight: 500,
                fontSize: '0.8rem', letterSpacing: '0.08em',
                marginBottom: 28,
              }}>
                Literary Fiction &amp; Non-Fiction
              </span>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/works" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'var(--gold)', color: 'white',
                  padding: '12px 28px', borderRadius: 50,
                  fontFamily: 'DM Mono, monospace', fontWeight: 500,
                  fontSize: '0.82rem', letterSpacing: '0.06em',
                  transition: 'opacity 0.2s, transform 0.2s',
                }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                   onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}>
                  Discover his writing →
                </Link>
                <Link href="/about" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'transparent', color: 'var(--gold)',
                  border: '2px solid var(--gold)',
                  padding: '12px 28px', borderRadius: 50,
                  fontFamily: 'DM Mono, monospace', fontWeight: 500,
                  fontSize: '0.82rem', letterSpacing: '0.06em',
                  transition: 'all 0.2s',
                }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--gold)'; el.style.color = 'white'; }}
                   onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--gold)'; }}>
                  About the author
                </Link>
              </div>
            </div>

            {/* Portrait */}
            <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-portrait-col">
              <div style={{
                position: 'relative', width: '100%', maxWidth: 420,
                aspectRatio: '3/4', borderRadius: 16,
                overflow: 'hidden', boxShadow: '0 20px 60px rgba(27,43,74,0.18)',
                border: '4px solid white',
              }}>
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="William Loxford, author"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORKS ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400,
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', textAlign: 'center',
            color: 'var(--charcoal)', marginBottom: 12,
          }}>
            Books &amp; Writing
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '1rem', marginBottom: 48, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
            Two titles published by Limouze Books — more to come.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
            {books.map((book) => (
              <BookCard key={book.slug} {...book} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/works" style={{
              fontFamily: 'DM Mono, monospace', fontSize: '0.82rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--gold)', fontWeight: 500,
            }}>
              View all works →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="about-preview-grid" style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: 60, alignItems: 'center' }}>
            <div ref={addRef} className="fade-in" style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(27,43,74,0.1)', border: '4px solid white' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', width: '100%' }}>
                <Image
                  src="/images/author-about.jpg"
                  alt="William Loxford"
                  fill
                  className="object-cover object-top"
                  sizes="350px"
                />
              </div>
            </div>
            <div ref={addRef} className="fade-in">
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', color: 'var(--charcoal)', marginBottom: 20 }}>
                About the Author
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: 16, lineHeight: 1.85, fontSize: '1.02rem' }}>
                William Loxford was born in New Zealand to a French family — an upbringing that gave him an early sense of both belonging and distance. Having lived across the United Kingdom, Spain, France, and Hong Kong, he developed a fascination with the way language evolves across cultures.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: 28, lineHeight: 1.85, fontSize: '1.02rem' }}>
                A lifelong lover of words, he is particularly drawn to puns, double meanings, hidden references, and the quiet pleasure of a sentence that reveals more the second time it is read.
              </p>
              <Link href="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--charcoal)', color: 'white',
                padding: '12px 28px', borderRadius: 50,
                fontFamily: 'DM Mono, monospace', fontWeight: 500,
                fontSize: '0.82rem', letterSpacing: '0.06em',
                transition: 'opacity 0.2s, transform 0.2s',
              }} onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = '0.85'; el.style.transform = 'translateY(-2px)'; }}
                 onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
          .hero-portrait-col { order: -1; }
          .about-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

/* Inline BookCard to avoid client/server mismatch */
function BookCard({ slug, title, genre, description, coverSrc }: {
  slug: string; title: string; genre: string; description: string; coverSrc: string;
}) {
  return (
    <Link href={`/works/${slug}`} style={{ display: 'block', textDecoration: 'none' }}>
      <div
        style={{
          background: 'white', borderRadius: 16, overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(27,43,74,0.08)',
          border: '2px solid transparent', transition: 'all 0.3s',
        }}
        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-6px)'; el.style.boxShadow = '0 16px 40px rgba(27,43,74,0.14)'; el.style.borderColor = 'var(--gold)'; }}
        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 4px 20px rgba(27,43,74,0.08)'; el.style.borderColor = 'transparent'; }}
      >
        {/* Gold top bar */}
        <div style={{ height: 6, background: 'linear-gradient(90deg, var(--charcoal), var(--gold))' }} />
        {/* Cover */}
        <div style={{ position: 'relative', aspectRatio: '3/4', width: '100%', background: 'var(--light)' }}>
          <Image src={coverSrc} alt={`Cover of ${title}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        {/* Info */}
        <div style={{ padding: '20px 22px 24px' }}>
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 6 }}>
            {genre}
          </p>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, fontSize: '1.25rem', color: 'var(--charcoal)', marginBottom: 8, lineHeight: 1.2 }}>
            {title}
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 14 }}>
            {description}
          </p>
          <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 500 }}>
            Discover →
          </span>
        </div>
      </div>
    </Link>
  );
}
