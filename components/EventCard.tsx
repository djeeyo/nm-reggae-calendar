// components/EventCard.tsx

import type { Event } from '@/types/events';
import { Calendar, Clock, MapPin, Users, Heart, Info, Ticket, ExternalLink } from 'lucide-react';

// --- NEW: A Style Map for Genre Colors ---
const genreStyles: { [key: string]: string } = {
  'reggae-rock': 'bg-orange-500 text-white',
  'ska-punk': 'bg-pink-600 text-white',
  'ska': 'bg-pink-400 text-white',
  'dub': 'bg-purple-600 text-white',
  'funk': 'bg-teal-500 text-white',
  'latin': 'bg-red-500 text-white',
  'roots': 'bg-green-600 text-white',
  'reggae': 'bg-rasta-yellow text-brand-blue', // Default reggae is still the main brand color
};

// --- NEW: A function to get the style based on the map ---
const getGenreStyle = (genre: string): string => {
  const lowerGenre = genre.toLowerCase();
  for (const keyword in genreStyles) {
    if (lowerGenre.includes(keyword)) {
      return genreStyles[keyword];
    }
  }
  return 'bg-neutral-600 text-neutral-900'; // Return a default style if no keyword matches
};

// Helper component for dynamically styling genre tags
const GenreTag = ({ genre }: { genre: string }) => {
  const tagStyles = getGenreStyle(genre);
  
  return (
    <span className={`text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wider ${tagStyles}`}>
      {genre}
    </span>
  );
};

// --- The rest of your component (no changes needed here) ---

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="relative bg-neutral-500/20 backdrop-blur-sm border border-neutral-400/20 rounded-lg p-4 flex flex-col justify-between transition-all hover:border-rasta-yellow/50 hover:shadow-xl">
      <Heart className="absolute top-4 right-4 text-neutral-700 hover:text-red-500 transition-colors" size={20} />
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-2">
            <GenreTag genre={event.primaryGenre} />
            <span className="flex items-center gap-1.5 text-xs text-neutral-700 bg-neutral-500/20 rounded-full px-3 py-1">
              <Users size={14} />
              <span>{event.ageRestriction}</span>
            </span>
          </div>
        </div>
        <div className="mb-5">
          <h3 className="text-xl font-bold text-white mb-1">{event.eventName}</h3>
          <p className="text-rasta-yellow font-semibold text-sm">{event.performingArtists}</p>
        </div>
        <div className="space-y-2.5 text-sm text-neutral-700 border-l-2 border-neutral-500/30 pl-4">
          <div className="flex items-center gap-3"><Calendar size={16} className="text-green-400" /><span>{formatDate(event.date)}</span></div>
          <div className="flex items-center gap-3"><Clock size={16} className="text-blue-400" /><span>{event.time}</span></div>
          <div className="flex items-center gap-3"><MapPin size={16} className="text-red-400" /><span>{event.venue}</span></div>
          <div className="flex items-center gap-3"><Ticket size={16} className="text-yellow-400" /><span>{event.ticketPriceCost}</span></div>
        </div>
        {event.notes && (
          <div className="mt-4 bg-brand-indigo/40 rounded-md p-3 flex items-start gap-3">
            <Info size={16} className="text-rasta-yellow mt-0.5 flex-shrink-0" />
            <p className="text-xs text-neutral-700">{event.notes}</p>
          </div>
        )}
      </div>
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