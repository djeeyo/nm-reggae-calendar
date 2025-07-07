// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-4 text-neutral-900">
      <Link href="/" className="text-2xl font-bold">
        <span className="text-rasta-yellow">Jah</span> Vibes NM
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/" className="hover:text-rasta-yellow">Events</Link>
        <Link href="/about" className="hover:text-rasta-yellow">About</Link>
        <a href="/admin" className="bg-rasta-yellow text-brand-blue font-bold py-2 px-4 rounded-md shadow-lg transition-transform hover:scale-105">
          Sign In
        </a>
      </nav>
    </header>
  );
};

export default Header;