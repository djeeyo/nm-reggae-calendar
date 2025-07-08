// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-4 text-neutral-900">
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/images/logo.png"
          alt="Blazin' Reggae Vibes Logo" // This fix is correct
          width={40}
          height={40}
          className="transition-transform group-hover:scale-110"
        />
        {/*
          THE NEW FIX IS HERE: We use a JavaScript string in curly braces
          to handle the apostrophe safely.
        */}
        <span className="text-xl font-bold whitespace-nowrap">
          {'Blazin\' '}
          <span className="text-rasta-yellow">Reggae</span>
          {' Vibes'}
        </span>
      </Link>

      <nav className="flex items-center gap-6">
        <Link href="/" className="hover:text-rasta-yellow transition-colors">Events</Link>
        <Link href="/about" className="hover:text-rasta-yellow transition-colors">About</Link>
        <a href="/admin" className="bg-rasta-yellow text-brand-blue font-bold py-2 px-4 rounded-md shadow-lg transition-transform hover:scale-105">
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Header;