// app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blazin\' Reggae Vibes | New Mexico Reggae Calendar',
  description: 'Discover reggae shows, festivals, and cultural gatherings across New Mexico.',
};

export default function RootLayout({
  children, // This is now being used below
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-brand-blue`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children} {/* <-- THIS WAS THE MISSING PIECE */}
        </main>
      </body>
    </html>
  );
}