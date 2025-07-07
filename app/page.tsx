// app/page.tsx (POLISHED)

import { EventCard } from "@/components/EventCard";
import { eventsData } from "@/lib/events";
import type { Event } from "@/lib/events";

function groupEventsByCity(events: Event[]) {
  return events.reduce((acc, event) => {
    const city = event.city;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
}

export default function HomePage() {
  const groupedEvents = groupEventsByCity(eventsData);

  return (
    // Make sure the gradient is applied here!
    <div className="bg-brand-gradient">
      <main className="min-h-screen container mx-auto px-4">
        {/* --- HERO SECTION --- */}
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">New Mexico Reggae Calendar</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-700">
            Discover reggae shows, festivals, and cultural gatherings across the Land of Enchantment.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-rasta-yellow text-brand-blue font-bold py-3 px-6 rounded-md hover:scale-105 transition-transform">
              Explore Events
            </button>
          </div>
        </section>

        {/* --- UPCOMING EVENTS SECTION --- */}
        <section className="pb-16">
          <h2 className="text-3xl font-bold text-white mb-2">Upcoming Events</h2>
          <p className="text-neutral-600 mb-8">{eventsData.length} events found</p>
          
          <div className="space-y-12">
            {Object.entries(groupedEvents).map(([city, events]) => (
              <div key={city}>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-rasta-yellow">{city}</h3>
                  <div className="h-px flex-grow bg-neutral-500/30"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event) => (
                    <EventCard key={event.eventName + event.date} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}