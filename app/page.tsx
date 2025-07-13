// app/page.tsx

import { EventCard } from "@/components/EventCard";
import { getAllEvents } from "@/lib/events";
import type { Event } from "@/types/events";

// --- NEW, MORE ADVANCED GROUPING FUNCTION ---
function groupEventsByCityAndMonth(events: Event[]): Record<string, Record<string, Event[]>> {
  return events.reduce((acc, event) => {
    // Ensure there's a fallback for events without a city
    const city = event.city || "TBD";
    
    // Create a date object and a key for the month (e.g., "July 2025")
    const eventDate = new Date(event.date);
    const monthKey = eventDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

    // Create the city key if it doesn't exist
    if (!acc[city]) {
      acc[city] = {};
    }
    // Create the month key within the city if it doesn't exist
    if (!acc[city][monthKey]) {
      acc[city][monthKey] = [];
    }

    // Add the event to the correct city and month
    acc[city][monthKey].push(event);
    
    return acc;
  }, {} as Record<string, Record<string, Event[]>>);
}

export default function HomePage() {
  const allEvents = getAllEvents(); 
  const groupedEvents = groupEventsByCityAndMonth(allEvents);

  return (
    <>
      {/* --- HERO SECTION (No changes needed here) --- */}
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

      {/* --- UPCOMING EVENTS SECTION (This is where the rendering logic is updated) --- */}
      <section id="upcoming-events" className="pb-16">
        <div className="flex items-baseline justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">Upcoming Events</h2>
              <p className="text-neutral-600">{allEvents.length} events found</p>
            </div>
        </div>
        
        <div className="space-y-16">
          {/* Outer loop for cities */}
          {Object.entries(groupedEvents).map(([city, months]) => (
            <div key={city}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-rasta-yellow">{city}</h3>
                <div className="h-px flex-grow bg-neutral-500/30"></div>
              </div>

              <div className="space-y-8">
                {/* Inner loop for months, sorted chronologically */}
                {Object.keys(months)
                  .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
                  .map(month => (
                    <div key={month}>
                      <h4 className="text-lg font-semibold text-neutral-600 mb-4 tracking-wide">{month.toUpperCase()}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Final loop to render the event cards for that month */}
                        {months[month].map((event) => (
                          <EventCard key={event.id} event={event} />
                        ))}
                      </div>
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}