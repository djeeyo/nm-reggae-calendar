// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Mexico Reggae Calendar",
  description: "Discover reggae shows, festivals, and cultural gatherings across New Mexico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}

