// app/api/events/upload/route.ts

// Run this route in the Edge runtime so `formData()` and `File` are available
export const runtime = 'edge';

// Disable Next.js’s built-in JSON parser so we can handle multipart forms
export const config = {
  api: {
    bodyParser: false,
  },
};

import type { Event } from '@/types/events';
import { NextRequest, NextResponse } from 'next/server';
import * as Papa from 'papaparse';


let EVENTS: Event[] = [];

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') || '';

  // If the client sent JSON, just parse and push it
  if (contentType.includes('application/json')) {
    const data = (await req.json()) as Event;
    EVENTS.push(data);
    return NextResponse.json({ ok: true });
  }

  // Otherwise expect a multipart/form-data upload with a `file` field
  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const text = await file.text();
  const { data, errors } = Papa.parse<Event>(text, {
    header: true,
    skipEmptyLines: true,
  });

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // Replace in-memory events with parsed CSV rows
  EVENTS = data as Event[];
  return NextResponse.json({
    message: 'Events uploaded',
    count: EVENTS.length,
  });
}

export async function GET() {
  return NextResponse.json(EVENTS);
}
