import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";
import SideNav from "@/components/SideNav";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Confetti Co. | Birthday and Milestone Photo Booths",
  description: "Fun photo booth rentals for birthdays, Sweet 16s, and every milestone worth celebrating.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-warm text-charcoal">
        <SideNav />

        {/* Content offset — pushed right of sidebar on desktop, below top bar on mobile */}
        <div className="lg:ml-56 flex flex-col min-h-screen">
          <main className="flex-1 pt-14 lg:pt-0">
            {children}
          </main>

          <footer className="border-t border-border bg-surface">
            <div className="max-w-5xl mx-auto px-6 pt-10 pb-8">
              <div className="flex flex-col md:flex-row justify-between gap-10 mb-8">
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
                  <a href="tel:+10000000000" className="block text-slate font-semibold hover:text-charcoal transition-colors">(000) 000-0000</a>
                  <a href="mailto:hello@confetticophotos.com" className="block text-slate font-semibold hover:text-charcoal transition-colors">hello@confetticophotos.com</a>
                  <p className="text-slate font-medium">[City, State]</p>
                </div>
              </div>
              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted font-medium">&copy; {new Date().getFullYear()} Confetti Co. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
