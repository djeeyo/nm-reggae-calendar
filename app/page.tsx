// app/page.tsx
// This is now a Server Component again! No 'use client'.

import { getAllEvents } from "@/lib/events";      // This is safe to import here
import EventList from "@/components/EventList";  // Import our new client component

export default function HomePage() {
  // 1. Fetch data on the server
  const allEvents = getAllEvents(); 

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="text-center py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          <span className="text-rasta-yellow">Reggae</span>
          {' '}
          <span className="bg-gradient-to-r from-rasta-red to-rasta-green bg-clip-text text-transparent">
            Events
          </span>
          {' '}
          in New Mexico
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-700">
          Discover reggae shows, festivals, and cultural gatherings across the Land of Enchantment.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#upcoming-events" className="bg-rasta-yellow text-brand-blue font-bold py-3 px-6 rounded-md shadow-lg transition-transform hover:scale-105">
            Explore Events
          </a>
        </div>
      </section>

      {/* 2. Pass the server-fetched data as a prop to the client component */}
      <EventList allEvents={allEvents} />
    </>
  );
}