import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const packages = [
  {
    name: "Snapshot",
    tagline: "Perfect for smaller parties",
    price: "$[###]",
    duration: "2 hours",
    featured: false,
    color: "bg-white border-border",
    ctaColor: "bg-surface text-charcoal hover:bg-border",
    features: [
      "2-hour booth rental",
      "Unlimited photo sessions",
      "Instant 4x6 prints",
      "Digital gallery (sent next day)",
      "Prop box included",
      "1 booth attendant",
    ],
  },
  {
    name: "Celebration",
    tagline: "Our most popular package",
    price: "$[###]",
    duration: "4 hours",
    featured: true,
    color: "bg-coral text-white border-coral",
    ctaColor: "bg-white text-coral hover:bg-coral-light",
    features: [
      "4-hour booth rental",
      "Unlimited photo sessions",
      "Instant 4x6 prints",
      "Digital gallery (sent same night)",
      "Premium prop box",
      "1 booth attendant",
      "Custom photo overlay",
      "Scrapbook station",
    ],
  },
  {
    name: "Grand Affair",
    tagline: "Go all out",
    price: "$[###]",
    duration: "6 hours",
    featured: false,
    color: "bg-white border-border",
    ctaColor: "bg-coral text-white hover:bg-coral-dark",
    features: [
      "6-hour booth rental",
      "Unlimited photo sessions",
      "Instant 4x6 and 2x6 strip prints",
      "Digital gallery (sent same night)",
      "Luxury prop box",
      "2 booth attendants",
      "Fully custom overlay & backdrop",
      "Scrapbook station",
      "GIF and boomerang mode",
      "Video message station",
    ],
  },
];

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend booking 4 to 8 weeks in advance, especially for weekend dates. Summer and holiday weekends fill up fast.",
  },
  {
    q: "What is included in the prop box?",
    a: "Each prop box comes with hats, glasses, signs, boas, masks, and themed accessories. We can customize the box to match your party theme.",
  },
  {
    q: "Do you travel outside the city?",
    a: "Yes! We serve the surrounding region. Travel fees may apply for locations beyond [X] miles. Ask us when you reach out.",
  },
  {
    q: "Can I add time on the day of the event?",
    a: "If we have availability, yes. Overtime is billed at an hourly rate. We always try to accommodate.",
  },
  {
    q: "Is there a deposit to reserve my date?",
    a: "We require a [X]% deposit to hold your date, with the remaining balance due [X] days before the event.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-warm border-b border-border text-center">
        <FadeIn>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-4 bg-coral-light px-3 py-1.5 rounded-full">
            Packages
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight">
            Simple pricing.<br />No surprises.
          </h1>
          <p className="text-slate font-semibold max-w-md mx-auto leading-relaxed">
            Every package includes a real person running the booth. No drop-off rentals, no DIY setup.
          </p>
        </FadeIn>
      </section>

      <section className="py-20 px-6 bg-warm">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map(({ name, tagline, price, duration, featured, color, ctaColor, features }, i) => (
            <FadeIn key={name} delay={i * 90}>
              <div className={`relative rounded-3xl border-2 p-8 flex flex-col h-full ${color} ${featured ? "shadow-2xl scale-105 z-10" : "shadow-sm"}`}>
                {featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow text-charcoal text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h2 className="text-2xl font-black mb-1">{name}</h2>
                  <p className={`text-sm font-semibold ${featured ? "text-white/70" : "text-muted"}`}>{tagline}</p>
                </div>
                <div className="mb-6">
                  <p className="text-5xl font-black">{price}</p>
                  <p className={`text-sm font-semibold mt-1 ${featured ? "text-white/70" : "text-muted"}`}>{duration}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${featured ? "text-white" : "text-coral"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm font-semibold ${featured ? "text-white/90" : "text-slate"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-4 rounded-full font-bold text-sm transition-colors ${ctaColor}`}
                >
                  Book {name}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="text-muted font-semibold text-sm">
            Need something custom?{" "}
            <Link href="/contact" className="text-coral font-bold hover:underline">Let us build a package for you.</Link>
          </p>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface border-t border-border">
        <div className="max-w-2xl mx-auto">
          <FadeIn className="mb-12 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-violet mb-4 bg-violet-light px-3 py-1.5 rounded-full">
              FAQ
            </span>
            <h2 className="text-4xl font-black text-charcoal">Good questions.</h2>
          </FadeIn>
          <div className="space-y-6">
            {faqs.map(({ q, a }, i) => (
              <FadeIn key={q} delay={i * 70}>
                <div className="bg-white rounded-3xl p-7 border-2 border-border">
                  <h3 className="font-black text-charcoal mb-3">{q}</h3>
                  <p className="text-slate font-semibold text-sm leading-relaxed">{a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-yellow text-center">
        <FadeIn>
          <h2 className="text-4xl font-black text-charcoal mb-4">Still have questions?</h2>
          <p className="text-charcoal/70 font-semibold mb-8">We are a real team and we actually answer.</p>
          <Link
            href="/contact"
            className="inline-block bg-charcoal text-white px-8 py-4 rounded-full font-black text-sm hover:bg-slate transition-colors"
          >
            Get in Touch
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
