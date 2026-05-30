'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BookCard from '@/components/BookCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const books = [
  {
    slug: 'the-anagram-stories',
    title: 'The Anagram Stories',
    genre: 'Fiction',
    description:
      'A playful, linguistically inventive collection that hides new worlds inside familiar words.',
    coverSrc: '/images/book-the-anagram-stories.jpg',
  },
  {
    slug: 'the-vanishing-alphabet',
    title: 'The Vanishing Alphabet',
    genre: 'Fiction',
    description:
      'A meditation on language, loss, and the quiet power of letters disappearing from the page.',
    coverSrc: '/images/book-the-vanishing-alphabet.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Portrait — right side, desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[48%]"
        >
          <Image
            src="/images/hero-portrait.jpg"
            alt="William Loxford, author"
            fill
            className="object-cover object-top"
            priority
            sizes="48vw"
          />
          {/* Left fade to cream */}
          <div
            className="absolute inset-y-0 left-0 w-48 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--cream), transparent)' }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to top, var(--cream), transparent)' }}
          />
        </motion.div>

        {/* Text column */}
        <div className="relative z-10 px-6 md:px-16 py-24 max-w-xl">
          <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--copper)' }}>
            Author · Adventurer · Limouze Books
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display font-light leading-none mb-4"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'var(--charcoal)' }}
          >
            William<br />
            <em className="italic" style={{ color: 'var(--copper)' }}>Loxford</em>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="origin-left h-px w-14 mb-7"
            style={{ background: 'var(--copper)' }}
          />

          <motion.p {...fadeUp(0.2)} className="text-base md:text-lg leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--charcoal)', opacity: 0.72 }}>
            Born in New Zealand. Raised across the UK, Spain, France, and Hong Kong.
            Writing that moves between reflection, storytelling, and essay — without settling into a single category.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-3">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-6 py-3 rounded-sm transition-opacity hover:opacity-85"
              style={{ background: 'var(--copper)', color: 'var(--cream)' }}
            >
              Discover his writing →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-6 py-3 rounded-sm transition-opacity hover:opacity-85"
              style={{ border: '1px solid rgba(181,84,26,0.4)', color: 'var(--copper)' }}
            >
              About the author
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="copper-rule mx-6 md:mx-16" />

      {/* ── FEATURED WORKS ── */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto w-full">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="font-mono text-xs tracking-widest uppercase mb-2"
              style={{ color: 'var(--copper)' }}
            >
              Featured Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-light"
              style={{ color: 'var(--charcoal)' }}
            >
              Books &amp; Writing
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/works" className="font-mono text-xs tracking-wider" style={{ color: 'var(--copper)' }}>
              View all works →
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <BookCard {...book} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <div style={{ background: '#F0EBE3', borderTop: '1px solid rgba(181,84,26,0.15)', borderBottom: '1px solid rgba(181,84,26,0.15)' }}>
        <div className="max-w-3xl mx-auto px-6 md:px-16 py-20">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative text-center"
          >
            <span
              className="font-display absolute -top-10 left-0 text-9xl leading-none select-none pointer-events-none"
              style={{ color: 'var(--copper)', opacity: 0.12 }}
              aria-hidden="true"
            >
              "
            </span>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed" style={{ color: 'var(--charcoal)' }}>
              His work draws inspiration from everywhere and belongs nowhere entirely —&nbsp;much like the life that shaped it.
            </p>
            <footer className="mt-6 font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--copper)', opacity: 0.6 }}>
              — Limouze Books
            </footer>
          </motion.blockquote>
        </div>
      </div>

      {/* ── AUTHOR CTA ── */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 flex-wrap">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--copper)' }}>About the author</p>
            <p className="font-display text-2xl md:text-3xl font-light" style={{ color: 'var(--charcoal)' }}>
              The man behind the words
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider px-6 py-3 rounded-sm transition-opacity hover:opacity-85"
              style={{ background: 'var(--charcoal)', color: 'var(--cream)' }}
            >
              Read the biography →
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="copper-rule mx-6 md:mx-16" />
    </>
  );
}
