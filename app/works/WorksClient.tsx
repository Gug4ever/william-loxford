'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookCard from '@/components/BookCard';

const allBooks = [
  {
    slug: 'the-anagram-stories',
    title: 'The Anagram Stories',
    genre: 'Fiction',
    description:
      'A playful, linguistically inventive collection that hides new worlds inside familiar words. Each story begins with a single anagram — and spirals into something entirely unexpected.',
    coverSrc: '/images/book-the-anagram-stories.jpg',
  },
  {
    slug: 'the-vanishing-alphabet',
    title: 'The Vanishing Alphabet',
    genre: 'Fiction',
    description:
      'A meditation on language, loss, and the quiet power of letters disappearing from the page. Part fable, part essay, entirely singular.',
    coverSrc: '/images/book-the-vanishing-alphabet.jpg',
  },
];

const tabs = ['All', 'Fiction', 'Non-Fiction', 'Short Form'] as const;
type Tab = (typeof tabs)[number];

export default function WorksClient() {
  const [active, setActive] = useState<Tab>('All');

  const visible = active === 'All' ? allBooks : allBooks.filter((b) => b.genre === active);

  return (
    <div style={{ color: 'var(--charcoal)' }}>

      {/* ── EDITORIAL HEADER ── */}
      <section
        className="px-6 md:px-16 pt-20 pb-16"
        style={{ background: 'var(--cream)', borderBottom: '1px solid rgba(181,84,26,0.15)' }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: 'var(--copper)' }}
          >
            Books &amp; Writing
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-light leading-none" style={{ color: 'var(--charcoal)' }}>
                Works
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.15 }}
              className="text-base leading-relaxed"
              style={{ color: 'var(--charcoal)', opacity: 0.6 }}
            >
              Writing that moves freely between styles and genres — blending reflection, storytelling,
              humour, and essay without ever settling into a single category.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="px-6 md:px-16 py-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-all"
              style={{
                background: active === tab ? 'var(--copper)' : 'transparent',
                color: active === tab ? 'var(--cream)' : 'var(--charcoal)',
                border: `1px solid ${active === tab ? 'var(--copper)' : 'rgba(181,84,26,0.3)'}`,
                opacity: active === tab ? 1 : 0.65,
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── BOOKS GRID ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {visible.length > 0 ? (
              visible.map((book, i) => (
                <motion.div
                  key={book.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <BookCard {...book} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 py-24 text-center">
                <p className="font-display text-2xl italic" style={{ opacity: 0.35 }}>
                  More titles coming soon.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── IMPRINT NOTE ── */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-20 pt-8 flex flex-col md:flex-row items-start md:items-center gap-4"
          style={{ borderTop: '1px solid rgba(181,84,26,0.15)' }}
        >
          <div className="h-px w-8 shrink-0" style={{ background: 'var(--copper)', opacity: 0.5 }} />
          <p className="font-mono text-xs tracking-wider" style={{ color: 'var(--charcoal)', opacity: 0.45 }}>
            All titles published by{' '}
            <a href="https://limouze-books.vercel.app" target="_blank" rel="noopener" style={{ color: 'var(--copper)' }}>
              Limouze Books
            </a>
            {' '}— an imprint of Tonton Gug Studio.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
