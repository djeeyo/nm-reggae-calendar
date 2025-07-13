// app/layout.tsx
import type { Metadata } from 'next';
// ... other imports

export const metadata: Metadata = {
  // your metadata
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" /> {/* <-- ADD THIS LINE */}
      </head>
      <body>
        {/* ... your existing body content ... */}
      </body>
    </html>
  );
}