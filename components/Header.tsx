// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { InstallButton } from "@/components/InstallButton";

export default function Header() {
  return (
    <header className="bg-brand-blue text-white flex items-center justify-between px-6 py-4">
      {/* Logo + Site Title */}
      <Link href="/" className="flex items-center space-x-2">
        <Image
            src="/images/logo.png" // This path must exactly match the file's location in /public
            alt="Blazin' Reggae Vibes Logo" // Using ' to be safe with linters
            width={40}
            height={40}
        />
        <span className="text-lg font-bold">Blazin’ Reggae Vibes</span>
      </Link>

      {/* Nav Links + PWA CTA */}
      <nav className="flex items-center space-x-6">
        {/* THE FIX IS HERE: The href now points to the homepage */}
        <Link href="/" className="hover:underline">
          Events
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/signin">
          <button className="bg-yellow-400 text-brand-blue px-4 py-2 rounded shadow">
            Sign In
          </button>
        </Link>

        {/* Our deferred PWA Install button */}
        <InstallButton />
      </nav>
    </header>
  );
}
