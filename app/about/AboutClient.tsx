'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const timeline = [
  { place: 'New Zealand', role: 'Birthplace' },
  { place: 'United Kingdom', role: 'Formative years' },
  { place: 'Spain', role: 'Mediterranean chapter' },
  { place: 'France', role: 'Literary roots' },
  { place: 'Hong Kong', role: 'International edge' },
  { place: 'Writing', role: 'All of the above' },
];

export default function AboutClient() {
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
          <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
            Author · Adventurer · Limouze Books
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--charcoal)', marginBottom: 12, lineHeight: 1.1 }}>
            About William
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', fontStyle: 'italic' }}>
            A traveller at heart, a lover of language by nature.
          </p>
        </div>
      </section>

      {/* ── BIO ── */}
      <section style={{ background: 'white', padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>

            {/* Portrait */}
            <div ref={addRef} className="fade-in" style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(27,43,74,0.12)', border: '4px solid var(--cream)' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', width: '100%' }}>
                <Image src="/images/hero-portrait.jpg" alt="William Loxford" fill className="object-cover object-top" sizes="380px" />
              </div>
            </div>

            {/* Text */}
            <div ref={addRef} className="fade-in">
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, fontSize: '2rem', color: 'var(--charcoal)', marginBottom: 24 }}>
                The Man Behind the Words
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: 18, lineHeight: 1.85, fontSize: '1.02rem' }}>
                William Loxford was born in New Zealand to a French family, an upbringing that gave him an early sense of both belonging and distance — never entirely from one place, yet at home in many. Having lived across the United Kingdom, Spain, France, and Hong Kong, he developed a fascination with the way language evolves across cultures, identities, and generations.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: 18, lineHeight: 1.85, fontSize: '1.02rem' }}>
                A lifelong lover of words, Loxford is particularly drawn to the playful architecture of language: puns, double meanings, hidden references, rhythm, and the quiet pleasure of a sentence that reveals more the second time it is read. His writing moves freely between styles and genres, blending reflection, storytelling, humour, observation, and essay-like exploration without ever settling into a single category.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: 18, lineHeight: 1.85, fontSize: '1.02rem' }}>
                Influenced as much by long London conversations and Mediterranean cafés as by the restless energy of Hong Kong, his work reflects a deeply international perspective — curious, layered, and shaped by movement between worlds.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: 28, lineHeight: 1.85, fontSize: '1.02rem' }}>
                When he is not writing, William can often be found skydiving, scuba diving, or chasing the next adventure across the globe. Above all, he treasures time with his lovely wife and their two children, Eva and Raphael.
              </p>
              <p style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 500, fontSize: '1rem' }}>
                William writes wherever life takes him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STANDING PORTRAIT ── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div className="standing-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 64, alignItems: 'center' }}>

            {/* Timeline */}
            <div ref={addRef} className="fade-in">
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
                A Life in Motion
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, fontSize: '2rem', color: 'var(--charcoal)', marginBottom: 32 }}>
                From Wellington to Hong Kong
              </h2>
              <div style={{ position: 'relative', paddingLeft: 32 }}>
                <div style={{ position: 'absolute', left: 7, top: 0, bottom: 0, width: 2, background: 'var(--light)', borderRadius: 2 }} />
                {timeline.map((stop) => (
                  <div key={stop.place} style={{ position: 'relative', marginBottom: 28 }}>
                    <div style={{
                      position: 'absolute', left: -29, top: 6,
                      width: 12, height: 12, borderRadius: '50%',
                      border: '2px solid var(--gold)', background: 'white',
                    }} />
                    <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 2 }}>
                      {stop.role}
                    </p>
                    <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 600, fontSize: '1.1rem', color: 'var(--charcoal)' }}>
                      {stop.place}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Standing portrait */}
            <div ref={addRef} className="fade-in" style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 30px rgba(27,43,74,0.12)', border: '4px solid white' }}>
              <div style={{ position: 'relative', aspectRatio: '3/4', width: '100%' }}>
                <Image src="/images/author-about.jpg" alt="William Loxford" fill className="object-cover object-top" sizes="380px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'white', padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 400, fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', color: 'var(--charcoal)', marginBottom: 16 }}>
            The Writing
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: 28, lineHeight: 1.8 }}>
            Discover the books William has published through Limouze Books — two titles available, more to come.
          </p>
          <Link href="/works" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--gold)', color: 'white',
            padding: '12px 28px', borderRadius: 50,
            fontFamily: 'DM Mono, monospace', fontWeight: 500,
            fontSize: '0.82rem', letterSpacing: '0.06em',
            transition: 'opacity 0.2s, transform 0.2s',
          }}>
            Explore his works →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .standing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
