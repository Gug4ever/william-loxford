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
      <div className="px-6 md:px-16 pt-20 pb-12 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-xs tracking-widest uppercase mb-4"
          style={{ color: 'var(--copper)' }}
        >
          Books &amp; Writing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-5xl md:text-6xl font-light leading-none mb-4"
        >
          Works
        </motion.h1>
        <div className="copper-rule w-16 mb-10" />

        {/* Filter tabs */}
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
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {visible.length > 0 ? (
              visible.map((book) => <BookCard key={book.slug} {...book} />)
            ) : (
              <div className="col-span-3 py-20 text-center font-display text-xl italic" style={{ opacity: 0.4 }}>
                More titles coming soon.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
