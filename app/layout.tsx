// app/layout.tsx - THE UPGRADED VERSION
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header'; // <-- IMPORT THE NEW HEADER

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jah Vibes NM | New Mexico Reggae Calendar', // A slightly more branded title
  description: 'Discover reggae shows, festivals, and cultural gatherings across New Mexico.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We add a className to the html tag for better dark mode support if needed later */}
      <body className={`${inter.className} bg-brand-blue`}> {/* Set the base background color */}
        <Header /> {/* <-- ADD THE HEADER COMPONENT */}
        <main className="container mx-auto px-4 py-8"> {/* <-- WRAP CHILDREN IN A MAIN TAG */}
          {children}
        </main>
      </body>
    </html>
  );
}