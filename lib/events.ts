// lib/events.ts
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import type { Event } from '@/types/events'; // It now imports the updated type

export function getAllEvents(): Event[] {
  const csvFilePath = path.join(process.cwd(), 'New_Mexico_Reggae_Concerts_2025_updated.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');

  // We use a transformHeader function to clean up the column names from the CSV
  const { data } = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim().replace(/ /g, ''), // "Event Name" -> "EventName"
  });

  const events = data.map((row: any, index: number) => ({
    // Map the transformed CSV headers to your Event type properties
    id: `${row.EventName}-${row.Date}-${index}`, // Create a more robust unique ID
    eventName: row.EventName,
    date: row.Date,
    time: row.Time,
    venue: row.Venue,
    city: row.City,
    state: row.State,
    performingArtists: row.PerformingArtists,
    primaryGenre: row.PrimaryGenre,
    ageRestriction: row.AgeRestriction,
    ticketPriceCost: row['TicketPrice/Cost'], // Accessing the original header name here
    sourceUrl: row.SourceURL,
    notes: row.Notes,
  })) as Event[];

  // Filter out any potentially empty rows that might have been parsed
  return events.filter(event => event.eventName);
}