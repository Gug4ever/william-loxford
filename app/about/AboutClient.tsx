'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay },
});

const timeline = [
  { place: 'New Zealand', role: 'Birthplace' },
  { place: 'United Kingdom', role: 'Formative years' },
  { place: 'Spain', role: 'Mediterranean chapter' },
  { place: 'France', role: 'Literary roots' },
  { place: 'Hong Kong', role: 'International edge' },
  { place: 'Writing', role: 'All of the above' },
];

const interests = [
  {
    label: 'Skydiving',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 14l8-2 8 2L12 2z"/><path d="M12 12v10"/>
      </svg>
    ),
  },
  {
    label: 'Scuba diving',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Travel',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: 'Family',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function AboutClient() {
  return (
    <div style={{ color: 'var(--charcoal)' }}>

      {/* ── FULL-BLEED HEADER with portrait ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh', background: 'var(--charcoal)' }}>
        {/* Portrait fills right half */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2">
          <Image
            src="/images/author-about.jpg"
            alt="William Loxford"
            fill
            className="object-cover object-top"
            sizes="50vw"
            priority
          />
          {/* left fade */}
          <div className="absolute inset-y-0 left-0 w-40 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--charcoal), transparent)' }} />
        </div>

        {/* Text block */}
        <div className="relative z-10 px-6 md:px-16 py-24 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="font-mono text-xs tracking-widest uppercase mb-5"
            style={{ color: 'var(--copper)' }}
          >
            Author · Adventurer · Limouze Books
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-none mb-6"
            style={{ color: 'var(--cream)' }}
          >
            William<br /><em className="italic" style={{ color: 'var(--copper)' }}>Loxford</em>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="origin-left h-px w-14 mb-6"
            style={{ background: 'var(--copper)' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.4 }}
            className="text-base leading-relaxed"
            style={{ color: 'rgba(247,243,237,0.65)' }}
          >
            Born in New Zealand. Raised across four continents.<br />Writing from everywhere — belonging to nowhere entirely.
          </motion.p>
        </div>
      </section>

      {/* ── BIOGRAPHY ── */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">

        {/* Mobile portrait */}
        <motion.div
          {...fadeUp(0)}
          className="block md:hidden relative aspect-[3/4] w-full max-w-xs mb-10 rounded-sm overflow-hidden"
          style={{ background: '#E8E0D5' }}
        >
          <Image src="/images/author-about.jpg" alt="William Loxford" fill className="object-cover object-top" sizes="100vw" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start">

          {/* Pull quote column — left on desktop */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-8 pt-2 sticky top-24">
            <motion.blockquote {...fadeUp(0)} className="relative pl-6" style={{ borderLeft: '2px solid var(--copper)' }}>
              <p className="font-display text-xl italic leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                "Never entirely from one place,<br />yet at home in many."
              </p>
            </motion.blockquote>
            <motion.blockquote {...fadeUp(0.1)} className="relative pl-6" style={{ borderLeft: '2px solid var(--sage)', opacity: 0.8 }}>
              <p className="font-display text-lg italic leading-relaxed" style={{ color: 'var(--charcoal)' }}>
                "Style is less a destination than a conversation between voices, ideas, and moments."
              </p>
            </motion.blockquote>
          </div>

          {/* Main text column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <motion.p {...fadeUp(0)} className="text-base leading-[1.9]" style={{ opacity: 0.82 }}>
              William Loxford was born in New Zealand to a French family, an upbringing that gave him an early sense of both belonging and distance — never entirely from one place, yet at home in many. Having lived across the United Kingdom, Spain, France, and Hong Kong, he developed a fascination with the way language evolves across cultures, identities, and generations.
            </motion.p>

            <motion.p {...fadeUp(0.05)} className="text-base leading-[1.9]" style={{ opacity: 0.82 }}>
              A lifelong lover of words, Loxford is particularly drawn to the playful architecture of language: puns, double meanings, hidden references, rhythm, and the quiet pleasure of a sentence that reveals more the second time it is read. His writing moves freely between styles and genres, blending reflection, storytelling, humour, observation, and essay-like exploration without ever settling into a single category.
            </motion.p>

            <motion.p {...fadeUp(0.1)} className="text-base leading-[1.9]" style={{ opacity: 0.82 }}>
              Influenced as much by long London conversations and Mediterranean cafés as by the restless energy of Hong Kong, his work reflects a deeply international perspective — curious, layered, and shaped by movement between worlds.
            </motion.p>

            <motion.p {...fadeUp(0.15)} className="text-base leading-[1.9]" style={{ opacity: 0.82 }}>
              He believes writing should never feel confined by rules or labels. For him, style is less a destination than a conversation between voices, ideas, and moments. His work draws inspiration from everywhere and belongs nowhere entirely — much like the life that shaped it.
            </motion.p>

            <motion.p {...fadeUp(0.2)} className="text-base leading-[1.9]" style={{ opacity: 0.82 }}>
              When he is not writing, William can often be found skydiving, scuba diving, or chasing the next adventure somewhere across the globe. Above all, however, he treasures time with the single most important part of his life: his lovely wife and their two children, Eva and Raphael.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: '#F0EBE3', borderTop: '1px solid rgba(181,84,26,0.15)', borderBottom: '1px solid rgba(181,84,26,0.15)' }}>
        <div className="px-6 md:px-16 py-14 max-w-5xl mx-auto">
          <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--copper)' }}>
            A Life in Motion
          </motion.p>
          <div className="flex flex-wrap items-start gap-0">
            {timeline.map((stop, i) => (
              <motion.div key={stop.place} {...fadeUp(i * 0.07)} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--copper)' }} />
                  <div className="text-center">
                    <p className="font-display text-sm font-semibold" style={{ color: 'var(--charcoal)' }}>{stop.place}</p>
                    <p className="font-mono text-xs" style={{ color: 'var(--copper)', opacity: 0.7 }}>{stop.role}</p>
                  </div>
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-8 md:w-14 shrink-0 mb-8 mx-1" style={{ height: 1, background: 'var(--copper)', opacity: 0.25 }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEYOND THE PAGE ── */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--copper)' }}>
          Beyond the Page
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="font-display text-3xl md:text-4xl font-light mb-12" style={{ color: 'var(--charcoal)' }}>
          The man behind the words
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              {...fadeUp(i * 0.08)}
              className="flex flex-col items-center gap-3 py-8 px-4 text-center rounded-sm"
              style={{ border: '1px solid rgba(181,84,26,0.18)', background: 'rgba(181,84,26,0.04)' }}
            >
              <span style={{ color: 'var(--copper)' }}>{item.icon}</span>
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--charcoal)', opacity: 0.7 }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
