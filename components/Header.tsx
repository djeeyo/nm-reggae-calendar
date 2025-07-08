// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image'; // <-- Step 1: Import the Image component

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-4 text-neutral-900">
      {/* --- BRANDING / LOGO --- */}
      <Link href="/" className="flex items-center gap-3 group">
        {/* 
          Step 2: Use the Image component. 
          - Update src to your logo's path.
          - Adjust width and height to match your logo's aspect ratio.
        */}
        <Image
          src="/images/logo.png" // IMPORTANT: Change this to your actual logo file path
          alt="Blazin' Reggae Vibes Logo"
          width={40}  // Change this to your desired width
          height={40} // Change this to your desired height
          className="transition-transform group-hover:scale-110"
        />
        <span className="text-xl font-bold whitespace-nowrap">
          Blazin' <span className="text-rasta-yellow">Reggae</span> Vibes
        </span>
      </Link>

      {/* --- NAVIGATION --- */}
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