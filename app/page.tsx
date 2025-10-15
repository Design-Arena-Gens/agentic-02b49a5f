import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="container-px pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1>Control your energy. Save every month.</h1>
            <p className="mt-4">
              VoltSense learns your home’s patterns to cut waste without cutting comfort.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn btn-primary" aria-label="Get started with VoltSense">Get Started</Link>
              <Link href="/features" className="btn btn-ghost">See Features</Link>
            </div>
            <div className="mt-10 flex items-center gap-4" aria-label="Social proof logos">
              <span className="text-white/60 text-sm">Trusted by</span>
              <div className="flex gap-6 opacity-80">
                <Logo name="GridHub" />
                <Logo name="PowerWorks" />
                <Logo name="HomeTech" />
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1400&auto=format&fit=crop" alt="Smart home dashboard on tablet" fill className="rounded-xl object-cover border border-white/10" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-px mt-24">
        <h2 className="mb-8">How it works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Step num="1" title="Connect">
            Plug in VoltSense to your inverter and network.
          </Step>
          <Step num="2" title="Learn">
            It learns usage, solar, and battery patterns over time.
          </Step>
          <Step num="3" title="Optimize">
            It shifts loads and schedules to reduce waste automatically.
          </Step>
        </div>
      </section>

      {/* Feature highlight */}
      <section className="container-px mt-24">
        <div className="card p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl">Why VoltSense</h3>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              <li>Real-time inverter & grid monitoring</li>
              <li>Battery-friendly charge/discharge logic</li>
              <li>Home Assistant via MQTT, out of the box</li>
            </ul>
          </div>
          <div className="relative aspect-video">
            <Image src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1400&auto=format&fit=crop" alt="Energy usage chart" fill className="rounded-xl object-cover border border-white/10" />
          </div>
        </div>
      </section>

      <section className="container-px mt-16 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <p className="text-white/70">Ready to see your savings add up?</p>
          <Link href="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </main>
  );
}

function Step({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-brand/20 text-brand grid place-items-center font-semibold">{num}</div>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-3 text-white/80">{children}</p>
    </div>
  );
}

function Logo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-white/70">
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3" />
        <path d="M7 12h5l-3 7 8-7h-5l3-7z" fill="currentColor" />
      </svg>
      <span className="text-sm">{name}</span>
    </div>
  );
}
