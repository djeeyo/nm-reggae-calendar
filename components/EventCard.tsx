// components/EventCard.tsx

import type { Event } from '@/types/events';
// Step 1: Add all the new icons we'll be using
import { Calendar, Clock, MapPin, Users, Heart, Info, Ticket, ExternalLink } from 'lucide-react';

// Step 2: Define the props for the component
interface EventCardProps {
  event: Event;
}

// Helper function to format dates nicely (e.g., "Sat, Jul 19, 2025")
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC', // Prevents date from shifting by a day
  });
};

// Helper component for dynamically styling genre tags
const GenreTag = ({ genre }: { genre: string }) => {
  let tagStyles = 'bg-neutral-600 text-neutral-900'; // Default style
  const lowerGenre = genre.toLowerCase();

  if (lowerGenre.includes('reggae')) {
    tagStyles = 'bg-rasta-yellow text-brand-blue';
  } else if (lowerGenre.includes('ska')) {
    tagStyles = 'bg-pink-500 text-white';
  }
  
  return (
    <span className={`text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wider ${tagStyles}`}>
      {genre}
    </span>
  );
};


export function EventCard({ event }: EventCardProps) {
  return (
    // Main container is now relative to position the heart icon
    <div className="relative bg-neutral-500/20 backdrop-blur-sm border border-neutral-400/20 rounded-lg p-4 flex flex-col justify-between transition-all hover:border-rasta-yellow/50 hover:shadow-xl">
      <Heart className="absolute top-4 right-4 text-neutral-700 hover:text-red-500 transition-colors" size={20} />
      
      <div>
        {/* Top section: Genre and Age Restriction */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            <GenreTag genre={event.primaryGenre} />
            <span className="flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-500/20 rounded-full px-3 py-1">
              <Users size={14} />
              <span>{event.ageRestriction}</span>
            </span>
          </div>
        </div>

        {/* Middle section: Event Title (white) and Artists (yellow) */}
        <div className="mb-5">
          <h3 className="text-xl font-bold text-white mb-1">{event.eventName}</h3>
          <p className="text-rasta-yellow font-semibold text-sm">{event.performingArtists}</p>
        </div>

        {/* Details section: All text is a muted light gray for contrast */}
        <div className="space-y-2.5 text-sm text-neutral-700 border-l-2 border-neutral-500/30 pl-4">
          <div className="flex items-center gap-3"><Calendar size={16} className="text-green-400" /><span>{formatDate(event.date)}</span></div>
          <div className="flex items-center gap-3"><Clock size={16} className="text-blue-400" /><span>{event.time}</span></div>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-red-400" /><span>{event.venue}</span></div>
          <div className="flex items-center gap-3"><Ticket size={16} className="text-yellow-400" /><span>{event.ticketPriceCost}</span></div>
        </div>

        {/* Optional Notes section */}
        {event.notes && (
          <div className="mt-4 bg-brand-indigo/40 rounded-md p-3 flex items-start gap-3">
            <Info size={16} className="text-rasta-yellow mt-0.5 flex-shrink-0" />
            <p className="text-xs text-neutral-700">{event.notes}</p>
          </div>
        )}
      </div>

      {/* "Get Tickets" button with an icon */}
      <a
        href={event.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-full bg-rasta-yellow text-brand-blue font-bold text-center py-3 rounded-md shadow-lg transition-transform hover:scale-105"
      >
        <span className="flex items-center justify-center gap-2">
          Get Tickets <ExternalLink size={16} />
        </span>
      </a>
    </div>
  );
}