// app/api/events/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Papa from 'papaparse';
import type { Event } from '../../../../types/event';

export const config = {
  api: {
    bodyParser: false   // we’re handling multipart/form-data ourselves
  }
};

let EVENTS: Event[] = [];

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') ?? '';

  // — JSON payload? just push it in
  if (contentType.includes('application/json')) {
    const data = (await req.json()) as Event;
    EVENTS.push(data);
    return NextResponse.json({ ok: true });
  }

  // — multipart/form-data? parse the uploaded CSV
  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }

  const text = await file.text();
  const { data, errors } = Papa.parse<Event>(text, { header: true });
  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // override in‐memory store
  EVENTS = data as Event[];
  return NextResponse.json({
    message: 'Events uploaded',
    count: EVENTS.length
  });
}

export async function GET() {
  return NextResponse.json(EVENTS);
}
