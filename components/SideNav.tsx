"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",        label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function SideNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop: always-visible left sidebar ── */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-56 z-50 bg-warm border-r-2 border-border flex-col">
        {/* Logo */}
        <div className="px-6 pt-8 pb-6">
          <Link href="/" className="block text-charcoal font-black text-xl tracking-tight leading-none mb-5">
            Confetti<span className="text-coral">.</span>Co
          </Link>
          <Link
            href="/contact"
            className="block w-full text-center bg-coral text-white py-2.5 rounded-full font-black text-xs hover:bg-coral-dark transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-2 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-150 ${
                pathname === href
                  ? "bg-coral text-white shadow-sm"
                  : "text-slate hover:bg-surface hover:text-charcoal"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact at bottom */}
        <div className="px-6 pb-8 pt-5 border-t-2 border-border space-y-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-muted">Contact</p>
          <a
            href="tel:+10000000000"
            className="flex items-center gap-2.5 text-xs font-bold text-slate hover:text-coral transition-colors group"
          >
            <span className="w-7 h-7 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0 group-hover:bg-coral/20 transition-colors">
              <svg className="w-3.5 h-3.5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            (000) 000-0000
          </a>
          <a
            href="mailto:hello@confetticophotos.com"
            className="flex items-center gap-2.5 text-xs font-bold text-slate hover:text-coral transition-colors group"
          >
            <span className="w-7 h-7 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0 group-hover:bg-coral/20 transition-colors">
              <svg className="w-3.5 h-3.5 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <span className="truncate">hello@confetticophotos.com</span>
          </a>
        </div>
      </aside>

      {/* ── Mobile: top bar + slide-in drawer ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-warm/95 backdrop-blur-sm border-b-2 border-border">
        <div className="px-5 h-14 flex items-center justify-between">
          <Link href="/" className="text-charcoal font-black text-lg tracking-tight">
            Confetti<span className="text-coral">.</span>Co
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex flex-col justify-center gap-1.5 w-9 h-9 rounded-xl hover:bg-border transition-colors p-2"
          >
            <span className="block h-0.5 w-5 bg-charcoal rounded-full" />
            <span className="block h-0.5 w-3.5 bg-charcoal rounded-full" />
            <span className="block h-0.5 w-5 bg-charcoal rounded-full" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Mobile drawer (slides from left) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-72 z-50 bg-warm shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 h-14 border-b-2 border-border">
          <Link href="/" onClick={() => setMobileOpen(false)} className="text-charcoal font-black text-lg tracking-tight">
            Confetti<span className="text-coral">.</span>Co
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-border transition-colors text-slate"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-4 pt-6 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-2xl text-lg font-black transition-colors ${
                pathname === href ? "bg-coral text-white" : "text-charcoal hover:bg-surface"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8 pt-5 border-t-2 border-border space-y-3">
          <a href="tel:+10000000000" className="flex items-center gap-3 text-sm font-bold text-slate hover:text-coral transition-colors">
            <span className="w-8 h-8 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            (000) 000-0000
          </a>
          <a href="mailto:hello@confetticophotos.com" className="flex items-center gap-3 text-sm font-bold text-slate hover:text-coral transition-colors">
            <span className="w-8 h-8 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            hello@confetticophotos.com
          </a>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 w-full text-center bg-coral text-white py-3 rounded-full font-black text-sm hover:bg-coral-dark transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
