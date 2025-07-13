// components/Header.tsx
// Add your InstallButton into the global header/navigation

import Link from "next/link";
import { InstallButton } from "@/components/InstallButton";

export default function Header() {
  return (
    <header className="bg-brand-blue text-white flex items-center justify-between px-6 py-4">
      {/* Site Logo/Title */}
      <Link href="/" className="text-xl font-bold">
        Jah Vibes NM
      </Link>

      {/* Navigation Links + Install Button */}
      <nav className="flex items-center space-x-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        {/* Add more nav links here as needed */}

        {/* PWA Install CTA */}
        <InstallButton />
      </nav>
    </header>
  );
}
