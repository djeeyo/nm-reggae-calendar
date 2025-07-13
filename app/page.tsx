// app/page.tsx
'use client'; // <-- IMPORTANT: This enables state and interactivity

import { useState } from 'react';
import { EventCard } from "@/components/EventCard";
import { getAllEvents } from "@/lib/events";
import type { Event } from "@/types/events";
import { List, CalendarDays } from 'lucide-react'; // Icons for our buttons

// --- DATA GROUPING FUNCTIONS ---

// Function for the City View (no changes needed)
function groupEventsByCityAndMonth(events: Event[]): Record<string, Record<string, Event[]>> {
  // ... (this function remains the same as before)
  return events.reduce((acc, event) => {
    const city = event.city || "TBD";
    const eventDate = new Date(event.date);
    const monthKey = eventDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    if (!acc[city]) acc[city] = {};
    if (!acc[city][monthKey]) acc[city][monthKey] = [];
    acc[city][monthKey].push(event);
    return acc;
  }, {} as Record<string, Record<string, Event[]>>);
}

// --- NEW: Function for the Monthly View ---
function groupEventsByMonth(events: Event[]): Record<string, Event[]> {
  return events.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const monthKey = eventDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    if (!acc[monthKey]) {
      acc[monthKey] = [];
    }
    acc[monthKey].push(event);
    // Sort events within each month by date
    acc[monthKey].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return acc;
  }, {} as Record<string, Event[]>);
}

// Pre-fetch and process the data outside the component
// This is more efficient as it only runs once
const allEvents = getAllEvents(); 
const cityGroupedEvents = groupEventsByCityAndMonth(allEvents);
const monthGroupedEvents = groupEventsByMonth(allEvents);

export default function HomePage() {
  // State to track the current view mode
  const [viewMode, setViewMode] = useState<'city' | 'month'>('city');

  return (
    <>
      {/* --- HERO SECTION (No changes needed here) --- */}
      <section className="text-center py-16 md:py-20">
        {/* ... (your existing h1, p, and button tags) ... */}
      </section>

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section id="upcoming-events" className="pb-16">
        <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">Upcoming Events</h2>
              <p className="text-neutral-600">{allEvents.length} events found</p>
            </div>
            {/* --- NEW: View Toggle Buttons --- */}
            <div className="flex items-center gap-2 rounded-lg bg-neutral-500/20 p-1">
              <button 
                onClick={() => setViewMode('city')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  viewMode === 'city' ? 'bg-rasta-yellow text-brand-blue' : 'text-neutral-700 hover:bg-neutral-500/30'
                }`}
              >
                <List size={16} />
                By City
              </button>
              <button 
                onClick={() => setViewMode('month')}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  viewMode === 'month' ? 'bg-rasta-yellow text-brand-blue' : 'text-neutral-700 hover:bg-neutral-500/30'
                }`}
              >
                <CalendarDays size={16} />
                By Month
              </button>
            </div>
        </div>
        
        {/* --- NEW: Conditional Rendering Logic --- */}
        {viewMode === 'city' ? (
          // --- CITY VIEW (your existing code) ---
          <div className="space-y-16">
            {Object.entries(cityGroupedEvents).map(([city, months]) => (
              <div key={city}>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-rasta-yellow">{city}</h3>
                  <div className="h-px flex-grow bg-neutral-500/30"></div>
                </div>
                <div className="space-y-8">
                  {Object.keys(months).sort((a,b) => new Date(a).getTime() - new Date(b).getTime()).map(month => (
                    <div key={month}>
                      <h4 className="text-lg font-semibold text-neutral-600 mb-4 tracking-wide">{month.toUpperCase()}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {months[month].map((event) => (<EventCard key={event.id} event={event} />))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // --- MONTH VIEW (new rendering logic) ---
          <div className="space-y-12">
            {Object.keys(monthGroupedEvents)
              .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
              .map(month => (
                <div key={month}>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-bold text-rasta-yellow">{month}</h3>
                    <div className="h-px flex-grow bg-neutral-500/30"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {monthGroupedEvents[month].map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}