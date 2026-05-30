'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
  slug: string;
  title: string;
  genre: string;
  description: string;
  coverSrc?: string;
}

export default function BookCard({ slug, title, genre, description, coverSrc }: BookCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(28,25,23,0.12)' }}
      transition={{ duration: 0.25 }}
      className="group rounded-sm overflow-hidden flex flex-col"
      style={{ background: '#F0EBE3', border: '1px solid rgba(181,84,26,0.15)' }}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt={`Cover of ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-103"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
        ) : (
          /* TODO: replace with real cover — drop book-[slug].jpg into /public/images/ */
          <div
            className="w-full h-full flex flex-col items-center justify-center p-4 text-center"
            style={{ background: '#E8E0D5' }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--copper)', opacity: 0.4, marginBottom: '0.5rem' }}>
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span className="font-mono text-xs" style={{ color: 'var(--charcoal)', opacity: 0.4 }}>{title}</span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--copper)' }}>
          {genre}
        </span>
        <h3 className="font-display text-lg font-semibold leading-snug" style={{ color: 'var(--charcoal)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--charcoal)', opacity: 0.7 }}>
          {description}
        </p>
        <Link
          href={`/works/${slug}`}
          className="font-mono text-xs tracking-wider mt-2 inline-flex items-center gap-1 transition-colors"
          style={{ color: 'var(--copper)' }}
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
}
