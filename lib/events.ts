// lib/events.ts
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import type { Event } from '@/types/events';

// Define a type for the raw CSV row to avoid using 'any'
type CsvRow = {
  [key: string]: string;
};

export function getAllEvents(): Event[] {
  const csvFilePath = path.join(process.cwd(), 'New_Mexico_Reggae_Concerts_2025_updated.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');

  // Parse the data and tell PapaParse to expect our CsvRow type
  const parseResult = Papa.parse<CsvRow>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  const events = parseResult.data.map((row, index) => {
    // Map the CSV headers to your Event type properties using bracket notation
    return {
      id: `${row['Event Name'] || 'event'}-${row['Date'] || index}`,
      eventName: row['Event Name'] || '',
      date: row['Date'] || '',
      time: row['Time'] || '',
      venue: row['Venue'] || '',
      city: row['City'] || '',
      state: row['State'] || '',
      performingArtists: row['Performing Artists'] || '',
      primaryGenre: row['Primary Genre'] || '',
      ageRestriction: row['Age Restriction'] || '',
      ticketPriceCost: row['Ticket Price/Cost'] || '',
      sourceUrl: row['Source URL'] || '',
      notes: row['Notes'] || '',
    };
  }) as Event[];

  // Filter out any rows that didn't have an event name
  return events.filter(event => event && event.eventName);
}