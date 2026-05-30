import type { Metadata } from 'next';
import WorksClient from './WorksClient';

export const metadata: Metadata = {
  title: 'Works',
  description: 'Books and writing by William Loxford — fiction, non-fiction, and short form.',
  openGraph: {
    title: 'Works by William Loxford',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function WorksPage() {
  return <WorksClient />;
}
