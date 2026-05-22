import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { start_time, attendee_name, attendee_email, timezone } = body?.parameters ?? body;

  const payload = {
    start: start_time,
    eventTypeId: 5725426,
    attendee: {
      name: attendee_name,
      email: attendee_email,
      timeZone: timezone ?? 'America/New_York',
    },
  };

  const response = await fetch('https://api.cal.com/v2/bookings', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.CAL_API_KEY}`,
      'cal-api-version': '2024-08-13',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({
      success: false,
      error: data?.message ?? data?.error?.message ?? 'Booking failed',
    });
  }

  return NextResponse.json({
    success: true,
    booking_id: data?.data?.uid,
    start: data?.data?.start,
    message: `Booking confirmed for ${attendee_name} on ${data?.data?.start}`,
  });
}
