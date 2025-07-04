// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "New Mexico Reggae Calendar",
  description: "Your guide to the hottest reggae vibes across the Land of Enchantment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-blue text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}

