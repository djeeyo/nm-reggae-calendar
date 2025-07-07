// app/page.tsx

import { EventCard } from "@/components/EventCard";
import { getAllEvents } from "@/lib/events";      // <-- Import the FUNCTION
import type { Event } from "@/types/events";      // <-- Import the TYPE from the correct file

// The grouping function is great, let's keep it here.
function groupEventsByCity(events: Event[]) {
  return events.reduce((acc, event) => {
    const city = event.city || "Other"; // Handle events that might not have a city
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(event);
    return acc;
  }, {} as Record<string, Event[]>);
}

export default function HomePage() {
  // Call the function to get the array of event objects
  const allEvents = getAllEvents(); 
  const groupedEvents = groupEventsByCity(allEvents);

  return (
    // The main layout already has the gradient, so we don't need a wrapper div here.
    // The <main> tag is also in layout.tsx, so we can remove it from here to avoid nesting.
    <>
      {/* --- HERO SECTION --- */}
      <section className="text-center py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight">
          Reggae Events <span className="text-rasta-yellow">in New Mexico</span>
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

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section id="upcoming-events" className="pb-16">
        <div className="flex items-baseline justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-1">Upcoming Events</h2>
              <p className="text-neutral-600">{allEvents.length} events found</p>
            </div>
            {/* The filters component can go here later */}
        </div>
        
        <div className="space-y-12">
          {Object.entries(groupedEvents).map(([city, events]) => (
            <div key={city}>
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-rasta-yellow">{city}</h3>
                <div className="h-px flex-grow bg-neutral-500/30"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} /> // Use the unique ID for the key
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}