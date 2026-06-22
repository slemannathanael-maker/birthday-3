"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/gallery",  label: "Gallery" },
  { href: "/pricing",  label: "Pricing" },
  { href: "/contact",  label: "Contact" },
];

export default function SideNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex flex-col justify-center gap-1.5 w-10 h-10 rounded-full hover:bg-border transition-colors p-2"
      >
        <span className="block h-0.5 w-5 bg-charcoal rounded-full" />
        <span className="block h-0.5 w-4 bg-charcoal rounded-full" />
        <span className="block h-0.5 w-5 bg-charcoal rounded-full" />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 z-50 bg-warm shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-7 h-16 border-b border-border">
          <Link href="/" onClick={() => setOpen(false)} className="text-charcoal font-black text-xl tracking-tight">
            Confetti<span className="text-coral">.</span>Co
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-border transition-colors text-slate"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-7 pt-8 gap-1 flex-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-3xl font-black text-charcoal hover:text-coral transition-colors py-2"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact section */}
        <div className="px-7 pb-10 border-t border-border pt-6 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Get in touch</p>
          <a
            href="tel:+10000000000"
            className="flex items-center gap-3 text-slate font-bold hover:text-coral transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            (000) 000-0000
          </a>
          <a
            href="mailto:hello@confetticophotos.com"
            className="flex items-center gap-3 text-slate font-bold hover:text-coral transition-colors"
          >
            <span className="w-8 h-8 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            hello@confetticophotos.com
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-5 w-full text-center bg-coral text-white py-3.5 rounded-full font-black text-sm hover:bg-coral-dark transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
}
