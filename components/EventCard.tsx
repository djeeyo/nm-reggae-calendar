// components/EventCard.tsx

// Step 1: Import necessary types and icons
import type { Event } from '@/types/events';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

// Step 2: Define the props for the component
interface EventCardProps {
  event: Event;
}

// A helper function to format dates nicely (e.g., "Sat, Jul 19, 2025")
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  // We add a timeZone of UTC to prevent the date from shifting by one day
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

export function EventCard({ event }: EventCardProps) {
  return (
    // Main container with dark background, rounded corners, and a subtle hover effect
    <div className="bg-neutral-500/20 backdrop-blur-sm border border-neutral-400/20 rounded-lg p-4 flex flex-col justify-between transition-all hover:border-rasta-yellow/50 hover:shadow-xl">
      <div>
        {/* Top section: Genre and Age Restriction */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold bg-rasta-yellow/80 text-brand-blue rounded-full px-3 py-1 uppercase tracking-wider">
            {event.primaryGenre}
          </span>
          <div className="flex items-center gap-1 text-xs text-neutral-700 bg-neutral-500/20 rounded-full px-3 py-1">
            <Users size={14} />
            <span>{event.ageRestriction}</span>
          </div>
        </div>

        {/* Middle section: Event Title and Artists */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-900 mb-1">{event.eventName}</h3>
          <p className="text-neutral-700 font-medium text-sm">{event.performingArtists}</p>
        </div>

        {/* Details section: Date, Time, Venue with icons */}
        <div className="space-y-2 text-sm text-neutral-700">
          <div className="flex items-center gap-3">
            <Calendar size={16} className="text-neutral-600" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-neutral-600" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-neutral-600" />
            <span>{event.venue}</span>
          </div>
        </div>
      </div>

      {/* "Get Tickets" button at the bottom */}
      <a
        href={event.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full bg-rasta-yellow text-brand-blue font-bold text-center py-3 rounded-md shadow-lg transition-transform hover:scale-105"
      >
        Get Tickets
      </a>
    </div>
  );
}