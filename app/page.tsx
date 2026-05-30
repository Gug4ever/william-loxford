'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import BookCard from '@/components/BookCard';
import QuoteBlock from '@/components/QuoteBlock';

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
    // TODO: replace with real cover — drop book-the-anagram-stories.jpg into /public/images/
    coverSrc: '/images/book-the-anagram-stories.jpg',
  },
  {
    slug: 'the-vanishing-alphabet',
    title: 'The Vanishing Alphabet',
    genre: 'Fiction',
    description:
      'A meditation on language, loss, and the quiet power of letters disappearing from the page.',
    // TODO: replace with real cover — drop book-the-vanishing-alphabet.jpg into /public/images/
    coverSrc: '/images/book-the-vanishing-alphabet.jpg',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden px-6 md:px-16 py-20">
        {/* Text column */}
        <div className="relative z-10 flex-1 max-w-xl">
          <motion.p {...fadeUp(0)} className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--copper)' }}>
            Author · Adventurer · Limouze Books
          </motion.p>

          <motion.h1 {...fadeUp(0.1)} className="font-display text-5xl md:text-7xl font-light leading-none mb-6" style={{ color: 'var(--charcoal)' }}>
            William<br />
            <em className="italic" style={{ color: 'var(--copper)' }}>Loxford</em>
          </motion.h1>

          <div className="copper-rule w-16 mb-6" />

          <motion.p {...fadeUp(0.2)} className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'var(--charcoal)', opacity: 0.75 }}>
            William Loxford was born in New Zealand to a French family, an upbringing that gave him
            an early sense of both belonging and distance. Having lived across the United Kingdom,
            Spain, France, and Hong Kong, he developed a deep fascination with the way language
            evolves across cultures, identities, and generations. His writing moves freely between
            styles and genres — blending reflection, storytelling, humour, and essay-like exploration
            without ever settling into a single category.
          </motion.p>

          <motion.div {...fadeUp(0.3)}>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 font-mono text-sm tracking-wider px-6 py-3 rounded-sm transition-all hover:opacity-90"
              style={{ background: 'var(--copper)', color: 'var(--cream)' }}
            >
              Discover his writing →
            </Link>
          </motion.div>
        </div>

        {/* Portrait — right side, desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block absolute right-0 top-0 bottom-0 w-[45%]"
        >
          {/* TODO: hero-portrait.jpg is already in /public/images/ — swap if you want a different shot */}
          <Image
            src="/images/hero-portrait.jpg"
            alt="William Loxford, author"
            fill
            className="object-cover object-top"
            priority
            sizes="45vw"
          />
          <div
            className="absolute inset-y-0 left-0 w-32 pointer-events-none"
            style={{ background: 'linear-gradient(to right, var(--cream), transparent)' }}
          />
        </motion.div>
      </section>

      <div className="copper-rule mx-6 md:mx-16" />

      {/* ── FEATURED WORKS ── */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-widest uppercase mb-3"
          style={{ color: 'var(--copper)' }}
        >
          Featured Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-light mb-12"
          style={{ color: 'var(--charcoal)' }}
        >
          Books &amp; Writing
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {books.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <BookCard {...book} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CLOSING QUOTE ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-16 py-12">
        <QuoteBlock text="His work draws inspiration from everywhere and belongs nowhere entirely — much like the life that shaped it." />
      </div>

      <div className="copper-rule mx-6 md:mx-16 mb-0" />
    </>
  );
}
