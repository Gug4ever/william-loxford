import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'William Loxford — Author & Adventurer',
    template: '%s | William Loxford',
  },
  description:
    'William Loxford is a New Zealand-born, internationally raised writer whose work moves freely between reflection, storytelling, and essay.',
  openGraph: {
    siteName: 'William Loxford',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
