'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 14l8-2 8 2L12 2z" /><path d="M12 12v10" />
      </svg>
    ),
  },
  {
    label: 'Scuba diving',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    label: 'Travel',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: 'Family',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AboutClient() {
  return (
    <div style={{ color: 'var(--charcoal)' }}>
      {/* ── HEADER ── */}
      <div className="px-6 md:px-16 pt-20 pb-12 max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--copper)' }}>
          About
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} className="font-display text-5xl md:text-6xl font-light leading-none mb-4" style={{ color: 'var(--charcoal)' }}>
          William Loxford
        </motion.h1>
        <div className="copper-rule w-16" />
      </div>

      {/* ── TWO-COL BIO ── */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pb-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] rounded-sm overflow-hidden"
          style={{ background: '#E8E0D5' }}
        >
          {/* TODO: author-about.jpg is in /public/images/ — swap for a different portrait if preferred */}
          <Image
            src="/images/author-about.jpg"
            alt="William Loxford"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <motion.p {...fadeUp(0.1)} className="text-base md:text-lg leading-relaxed">
            William Loxford was born in New Zealand to a French family, an upbringing that gave him
            an early sense of both belonging and distance — never entirely from one place, yet at home
            in many. Having lived across the United Kingdom, Spain, France, and Hong Kong, he developed
            a fascination with the way language evolves across cultures, identities, and generations.
          </motion.p>

          <motion.blockquote
            {...fadeUp(0.15)}
            className="font-display text-2xl italic leading-relaxed border-l-2 pl-6"
            style={{ borderColor: 'var(--copper)', color: 'var(--charcoal)', opacity: 0.85 }}
          >
            A lifelong lover of words, Loxford is particularly drawn to the playful architecture of language.
          </motion.blockquote>

          <motion.p {...fadeUp(0.2)} className="text-base leading-relaxed" style={{ opacity: 0.8 }}>
            His writing moves freely between styles and genres, blending reflection, storytelling,
            humour, observation, and essay-like exploration without ever settling into a single category.
          </motion.p>

          <motion.p {...fadeUp(0.25)} className="text-base leading-relaxed" style={{ opacity: 0.8 }}>
            Influenced as much by long London conversations and Mediterranean cafés as by the restless
            energy of Hong Kong, his work reflects a deeply international perspective — curious,
            layered, and shaped by movement between worlds.
          </motion.p>

          <motion.blockquote
            {...fadeUp(0.3)}
            className="font-display text-xl italic leading-relaxed border-l-2 pl-6"
            style={{ borderColor: 'var(--sage)', color: 'var(--charcoal)', opacity: 0.85 }}
          >
            For him, style is less a destination than a conversation between voices, ideas, and moments.
          </motion.blockquote>

          <motion.p {...fadeUp(0.35)} className="text-base leading-relaxed" style={{ opacity: 0.8 }}>
            He believes writing should never feel confined by rules or labels. His work draws inspiration
            from everywhere and belongs nowhere entirely — much like the life that shaped it.
          </motion.p>

          <motion.p {...fadeUp(0.4)} className="text-base leading-relaxed" style={{ opacity: 0.8 }}>
            When he is not writing, William can often be found skydiving, scuba diving, or chasing the
            next adventure somewhere across the globe. Above all, however, he treasures time with the
            single most important part of his life: his lovely wife and their two children, Eva and
            Raphael.
          </motion.p>
        </div>
      </div>

      <div className="copper-rule mx-6 md:mx-16" />

      {/* ── TIMELINE ── */}
      <div className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--copper)' }}>
          A Life in Motion
        </motion.p>
        <div className="flex flex-wrap gap-0 relative">
          {timeline.map((stop, i) => (
            <motion.div
              key={stop.place}
              {...fadeUp(i * 0.08)}
              className="flex items-center gap-3"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-3 h-3 rounded-full border-2"
                  style={{ borderColor: 'var(--copper)', background: 'var(--cream)' }}
                />
                <div className="mt-2 text-center">
                  <p className="font-display text-base font-semibold" style={{ color: 'var(--charcoal)' }}>
                    {stop.place}
                  </p>
                  <p className="font-mono text-xs" style={{ color: 'var(--copper)' }}>
                    {stop.role}
                  </p>
                </div>
              </div>
              {i < timeline.length - 1 && (
                <div className="w-8 md:w-16 h-px mb-8" style={{ background: 'var(--copper)', opacity: 0.3 }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="copper-rule mx-6 md:mx-16" />

      {/* ── INTERESTS ── */}
      <div className="px-6 md:px-16 py-16 max-w-5xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--copper)' }}>
          Beyond the Page
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              {...fadeUp(i * 0.1)}
              className="flex flex-col items-center gap-3 p-6 rounded-sm text-center"
              style={{ border: '1px solid rgba(181,84,26,0.15)', background: '#F0EBE3' }}
            >
              <span style={{ color: 'var(--copper)' }}>{item.icon}</span>
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--charcoal)' }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
