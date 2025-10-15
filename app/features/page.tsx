import Image from 'next/image';

const features = [
  { title: 'Live Grid & Solar', desc: 'Second-by-second power, voltage, and frequency telemetries.', icon: '⚡' },
  { title: 'Battery Smarts', desc: 'Adaptive charge windows that extend battery lifespan.', icon: '🔋' },
  { title: 'Forecast Aware', desc: 'Schedules around weather and tariff windows.', icon: '🌤️' },
  { title: 'MQTT + HA', desc: 'Home Assistant topics pre-wired for dashboards.', icon: '📡' },
  { title: 'Edge-first', desc: 'Runs offline; Cloud optional for insights.', icon: '🛰️' },
  { title: 'Open APIs', desc: 'Export data to your tools with ease.', icon: '🔌' },
];

export default function FeaturesPage() {
  return (
    <main className="container-px pt-12 md:pt-16 mb-24">
      <h1 className="mb-2">All the power features you need</h1>
      <p className="text-white/80 mb-10 max-w-2xl">VoltSense blends real-time visibility with intelligent automation to trim energy costs while keeping your home comfortable.</p>

      {/* Feature grid */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <div className="text-2xl" aria-hidden>{f.icon}</div>
            <p className="mt-3 font-semibold">{f.title}</p>
            <p className="text-white/80 mt-1">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Comparison table */}
      <section className="mt-16">
        <h2 className="mb-4">Why choose VoltSense</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-white/70">
                <th className="py-3 pr-4">Capability</th>
                <th className="py-3 pr-4">VoltSense</th>
                <th className="py-3">Generic Monitor X</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ['Realtime grid + inverter', 'Yes', 'Partial'],
                ['Battery-friendly scheduling', 'Yes', 'No'],
                ['Tariff + weather aware', 'Yes', 'No'],
                ['Local-first control', 'Yes', 'Cloud only'],
                ['Home Assistant (MQTT)', 'Native', 'Custom setup'],
                ['Open export APIs', 'Yes', 'Limited'],
              ].map(([cap, vs, gx]) => (
                <tr key={cap}>
                  <td className="py-3 pr-4">{cap}</td>
                  <td className="py-3 pr-4 font-medium text-green-400">{vs}</td>
                  <td className="py-3 text-white/70">{gx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Technical section */}
      <section className="mt-16">
        <h2 className="mb-3">Sample MQTT payload</h2>
        <p className="text-white/80 mb-3">Streaming telemetry on topic <code className="px-1 rounded bg-white/10">voltsense/home/telemetry</code></p>
        <pre className="card p-4 overflow-x-auto text-sm" aria-label="Example MQTT JSON payload"><code>{`{
  "timestamp": "2025-07-21T10:15:00Z",
  "grid": { "voltage": 231.4, "frequency": 49.98, "power": -820 },
  "solar": { "power": 1520 },
  "battery": { "soc": 72, "power": 700, "mode": "charge" },
  "home": { "load": 700 }
}`}</code></pre>
      </section>
    </main>
  );
}
