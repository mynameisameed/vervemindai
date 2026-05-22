import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { start_date, end_date } = body?.parameters ?? body;

  const startTime = new Date(start_date + 'T00:00:00Z').toISOString();
  const endTime = new Date(end_date + 'T23:59:59Z').toISOString();

  const url = new URL('https://api.cal.com/v2/slots/available');
  url.searchParams.set('eventTypeId', '5725426');
  url.searchParams.set('startTime', startTime);
  url.searchParams.set('endTime', endTime);

  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${process.env.CAL_API_KEY}`,
      'cal-api-version': '2024-06-14',
    },
  });

  const data = await response.json();
  const slots = data?.data?.slots ?? {};
  const available = Object.values(slots).flat().map((s: unknown) => (s as { time: string }).time);

  return NextResponse.json({
    available_slots: available.slice(0, 10),
    count: available.length,
  });
}
