'use client';
import { motion } from 'framer-motion';

export default function QuoteBlock({ text, attribution }: { text: string; attribution?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative my-12 px-8 md:px-16"
    >
      <span
        className="font-display absolute -top-8 left-6 text-8xl leading-none select-none"
        style={{ color: 'var(--copper)', opacity: 0.2 }}
        aria-hidden="true"
      >
        "
      </span>
      <p
        className="font-display text-2xl md:text-3xl italic leading-relaxed"
        style={{ color: 'var(--charcoal)' }}
      >
        {text}
      </p>
      {attribution && (
        <footer className="mt-4 font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--copper)' }}>
          — {attribution}
        </footer>
      )}
    </motion.blockquote>
  );
}
