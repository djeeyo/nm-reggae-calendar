// components/EventCard.tsx (POLISHED)

import { Event } from '@/lib/events';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    // Use the darker neutral-400 for a subtle card background
    <div className="bg-neutral-400/20 rounded-lg p-4 shadow-lg flex flex-col justify-between transition-all hover:bg-neutral-400/30">
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-xs font-bold bg-rasta-yellow text-brand-blue rounded-full px-3 py-1 uppercase tracking-wider">
            {event.primaryGenre}
          </span>
          <span className="text-xs bg-neutral-500/50 text-neutral-700 rounded-full px-3 py-1">
            {event.ageRestriction}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{event.eventName}</h3>
        {/* Use the lightest neutral color for the artist names */}
        <p className="text-neutral-700 font-medium mb-4 text-sm">{event.performingArtists}</p>

        {/* Use a readable light gray for the details, and make icons visible */}
        <div className="space-y-2 text-sm text-neutral-700">
          <div className="flex items-center gap-3"><Calendar size={16} className="text-neutral-600" /> {new Date(event.date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</div>
          <div className="flex items-center gap-3"><Clock size={16} className="text-neutral-600" /> {event.time}</div>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-neutral-600" /> {event.venue}</div>
        </div>
      </div>

      <a
        href={event.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block w-full bg-rasta-yellow text-brand-blue font-bold text-center py-3 rounded-md hover:bg-yellow-300 transition-colors"
      >
        Get Tickets
      </a>
    </div>
  );
}