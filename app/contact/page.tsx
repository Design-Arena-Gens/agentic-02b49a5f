"use client";
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Submission failed');
      setStatus('Thanks! We\'ll be in touch within 1–2 business days.');
      form.reset();
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    }
  }

  return (
    <main className="container-px pt-12 md:pt-16 mb-24 max-w-2xl">
      <h1 className="mb-2">Get in touch</h1>
      <p className="text-white/80 mb-8">Tell us about your setup and goals. We\'ll follow up shortly.</p>

      <form onSubmit={onSubmit} className="card p-6 space-y-5" noValidate>
        <div>
          <label className="label" htmlFor="name">Name</label>
          <input className="field" id="name" name="name" required minLength={2} placeholder="Jane Doe" />
        </div>
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input className="field" id="email" type="email" name="email" required placeholder="jane@example.com" />
        </div>
        <div>
          <label className="label" htmlFor="message">Message</label>
          <textarea className="field" id="message" name="message" required minLength={10} rows={5} placeholder="Tell us about your inverter, battery, and goals..." />
        </div>
        <button className="btn btn-primary" type="submit">Send</button>
        {status && <p className="text-green-400">{status}</p>}
        {error && <p className="text-red-400">{error}</p>}
      </form>
    </main>
  );
}
