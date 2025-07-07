// lib/events.ts

export type Event = {
  eventName: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  performingArtists: string;
  primaryGenre: string;
  ageRestriction: string;
  ticketPrice: string;
  sourceUrl: string;
  notes?: string;
};

export const eventsData: Event[] = [
  {
    eventName: "Ozomatli at Route 66 Summerfest",
    date: "07/19/2025",
    time: "05:00:00 PM",
    venue: "Nob Hill (Route 66 Summerfest)",
    city: "Albuquerque",
    performingArtists: "Ozomatli, KENEP, Reviva",
    primaryGenre: "Reggae Funk",
    ageRestriction: "All Ages",
    ticketPrice: "Free",
    sourceUrl: "https://www.cabq.gov/artsculture/things-to-do/annual-events/summerfest/route66-summerfest",
    notes: "Reviva is Reggae/Rock, Kenep is Caribbean."
  },
  {
    eventName: "Streetlight Manifesto",
    date: "07/19/2025",
    time: "08:00:00 PM",
    venue: "Sunshine Theater",
    city: "Albuquerque",
    performingArtists: "Streetlight Manifesto",
    primaryGenre: "Ska Punk",
    ageRestriction: "All Ages",
    ticketPrice: "$35 - $85",
    sourceUrl: "https://www.sunshinetheaterlive.com/show/446593"
  },
  {
    eventName: "Roka Hueka",
    date: "07/04/2025",
    time: "07:30:00 PM",
    venue: "Tumbleroot Brewery and Distillery",
    city: "Santa Fe",
    performingArtists: "Roka Hueka, Nohe y sus Santos, Los Domingueros",
    primaryGenre: "Latin Ska",
    ageRestriction: "Under 21 must be accompanied by parent/guardian",
    ticketPrice: "$15 - $20",
    sourceUrl: "https://tumblerootbreweryanddistillery.com/events/"
  },
];