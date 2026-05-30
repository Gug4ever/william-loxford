import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const books: Record<string, { title: string; genre: string; description: string; coverSrc?: string }> = {
  'the-anagram-stories': {
    title: 'The Anagram Stories',
    genre: 'Fiction',
    description:
      'A playful, linguistically inventive collection that hides new worlds inside familiar words. Each story begins with a single anagram — and spirals into something entirely unexpected.',
    coverSrc: '/images/book-the-anagram-stories.jpg',
  },
  'the-vanishing-alphabet': {
    title: 'The Vanishing Alphabet',
    genre: 'Fiction',
    description:
      'A meditation on language, loss, and the quiet power of letters disappearing from the page. Part fable, part essay, entirely singular.',
    coverSrc: '/images/book-the-vanishing-alphabet.jpg',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = books[slug];
  return {
    title: book?.title ?? 'Book',
    description: book?.description,
  };
}

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = books[slug];

  if (!book) {
    return (
      <div className="px-6 md:px-16 py-32 text-center font-display text-2xl" style={{ color: 'var(--charcoal)', opacity: 0.5 }}>
        Book not found.{' '}
        <Link href="/works" style={{ color: 'var(--copper)' }}>
          Back to Works →
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 py-20 max-w-5xl mx-auto" style={{ color: 'var(--charcoal)' }}>
      <Link href="/works" className="font-mono text-xs tracking-widest uppercase mb-10 inline-block" style={{ color: 'var(--copper)' }}>
        ← All Works
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[2/3] rounded-sm overflow-hidden" style={{ background: '#E8E0D5' }}>
          {book.coverSrc ? (
            <Image src={book.coverSrc} alt={`Cover of ${book.title}`} fill className="object-cover" sizes="50vw" />
          ) : (
            // TODO: drop book-[slug].jpg into /public/images/
            <div className="w-full h-full flex items-center justify-center font-mono text-xs" style={{ opacity: 0.4 }}>
              Cover coming soon
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--copper)' }}>
            {book.genre}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-light leading-tight">{book.title}</h1>
          <div className="copper-rule w-16" />
          <p className="text-base leading-relaxed" style={{ opacity: 0.8 }}>
            {book.description}
          </p>
          <p className="font-mono text-xs tracking-wider" style={{ color: 'var(--copper)', opacity: 0.6 }}>
            Published by Limouze Books
          </p>
        </div>
      </div>
    </div>
  );
}
