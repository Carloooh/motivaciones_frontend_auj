import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://motivaciones-backend-auj.vercel.app/motivaciones');
    if (!res.ok) {
      throw new Error(`Failed to fetch motivations, status: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
