// app/api/events/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import Papa from "papaparse";

// This will live in memory; you can swap for Prisma/DB later
let EVENTS: any[] = [];

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  const text = await file.text();
  const { data, errors } = Papa.parse(text, { header: true });
  if (errors.length) {
    return NextResponse.json({ errors }, { status: 400 });
  }
  EVENTS = data;  // override in-memory
  return NextResponse.json({ message: "Events uploaded", count: EVENTS.length });
}

export async function GET() {
  return NextResponse.json(EVENTS);
}
