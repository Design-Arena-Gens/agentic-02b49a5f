import { NextResponse } from 'next/server';

function isValidEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const name = String(json.name || '').trim();
    const email = String(json.email || '').trim();
    const message = String(json.message || '').trim();

    const errors: Record<string, string> = {};
    if (!name || name.length < 2) errors.name = 'Name must be at least 2 characters';
    if (!email || !isValidEmail(email)) errors.email = 'A valid email is required';
    if (!message || message.length < 10) errors.message = 'Message must be at least 10 characters';

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ message: 'Validation failed', errors }, { status: 400 });
    }

    // Log the JSON (redact email slightly when logging)
    const safeLog = { ...json, email: email.replace(/(.).+(@.*)/, '$1***$2') };
    console.log('[contact] submission', safeLog);

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 });
  }
}
