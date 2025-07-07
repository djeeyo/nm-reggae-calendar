// /types/event.ts
export interface Event {
  id: string;
  title: string;
  date: string;
  // …other fields…
}

// app/api/events/upload/route.ts
import type { Event } from '../../../types/event';
let EVENTS: Event[] = [];

export async function POST(req: NextRequest) {
  const data = (await req.json()) as Event;  // now strongly‐typed
  EVENTS.push(data);
  return NextResponse.json({ok:true});
}
