import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'William Loxford — born in New Zealand, raised across the world. A biography of movement, language, and literary curiosity.',
  openGraph: {
    title: 'About William Loxford',
    description:
      'Born in New Zealand to a French family. Raised across the UK, Spain, France, and Hong Kong. A writer shaped by movement.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
