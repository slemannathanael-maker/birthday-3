import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Confetti Co. — Birthday & Milestone Photo Booths",
  description: "Fun, colorful photo booth rentals for birthdays, Sweet 16s, and every milestone worth celebrating.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-warm text-charcoal">
        <header className="fixed top-0 left-0 right-0 z-50 bg-warm/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-charcoal font-black text-xl tracking-tight">
              Confetti<span className="text-coral">.</span>Co
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate">
              <Link href="/gallery" className="hover:text-charcoal transition-colors">Gallery</Link>
              <Link href="/pricing" className="hover:text-charcoal transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
            </nav>
            <Link
              href="/contact"
              className="text-sm font-bold bg-coral text-white px-5 py-2.5 rounded-full hover:bg-coral-dark transition-colors"
            >
              Book Now
            </Link>
          </div>
        </header>

        <main className="flex-1 pt-16">
          {children}
        </main>

        <footer className="border-t border-border bg-surface">
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
              <div>
                <p className="font-black text-charcoal text-xl tracking-tight mb-1">Confetti<span className="text-coral">.</span>Co</p>
                <p className="text-sm text-muted font-medium">Making every milestone unforgettable.</p>
              </div>
              <nav className="flex gap-8 text-sm font-semibold text-muted">
                <Link href="/gallery" className="hover:text-charcoal transition-colors">Gallery</Link>
                <Link href="/pricing" className="hover:text-charcoal transition-colors">Pricing</Link>
                <Link href="/contact" className="hover:text-charcoal transition-colors">Contact</Link>
              </nav>
              <div className="space-y-2 text-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">Say Hello</p>
                <a href="mailto:hello@confetticophotos.com" className="block text-slate font-semibold hover:text-charcoal transition-colors">hello@confetticophotos.com</a>
                <a href="tel:+10000000000" className="block text-slate font-semibold hover:text-charcoal transition-colors">(000) 000-0000</a>
                <p className="text-slate font-medium">[City, State]</p>
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted font-medium">&copy; {new Date().getFullYear()} Confetti Co. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
