// types/events.ts

export interface Event {
  id: string; // We'll create this dynamically
  eventName: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  state: string;
  performingArtists: string;
  primaryGenre: string;
  ageRestriction: string;
  ticketPriceCost: string; // Renamed to avoid slashes in variable names
  sourceUrl: string;
  notes: string;
}