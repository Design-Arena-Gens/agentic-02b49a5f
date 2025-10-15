import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'VoltSense — Smart Home Energy Monitor',
  description: 'Control your energy. Save every month.',
  metadataBase: new URL('https://agentic-02b49a5f.vercel.app'),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'VoltSense — Smart Home Energy Monitor',
    description:
      'VoltSense learns your home’s patterns to cut waste without cutting comfort.',
    url: 'https://agentic-02b49a5f.vercel.app',
    siteName: 'VoltSense',
    images: [
      { url: '/og.png', width: 1200, height: 630 },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoltSense — Smart Home Energy Monitor',
    description:
      'VoltSense learns your home’s patterns to cut waste without cutting comfort.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <header className="border-b border-white/10">
          <nav className="container-px flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
                <path d="M4 13h6L7 22l13-11h-6l3-9z" fill="currentColor" />
              </svg>
              VoltSense
            </Link>
            <div className="flex items-center gap-2">
              <Link className="btn btn-ghost" href="/features">Features</Link>
              <Link className="btn btn-primary" href="/contact">Get Started</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="mt-24 border-t border-white/10">
          <div className="container-px py-10 grid md:grid-cols-3 gap-8 text-sm text-white/70">
            <div>
              <div className="flex items-center gap-2 font-semibold mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                  <path d="M4 13h6L7 22l13-11h-6l3-9z" fill="currentColor" />
                </svg>
                VoltSense
              </div>
              <p>© {new Date().getFullYear()} VoltSense Inc. All rights reserved.</p>
            </div>
            <div>
              <p className="font-medium mb-2">Company</p>
              <ul className="space-y-1">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/features" className="hover:underline">Features</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Legal</p>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
