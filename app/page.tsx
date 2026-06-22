import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const heroPhotos = [
  { id: "1527529482837-4698179dc6ce", rotate: "rotate-2",  },
  { id: "1530103862676-de8c9debad1d", rotate: "-rotate-1", },
  { id: "1513151233558-d860c5398176", rotate: "rotate-1",  },
  { id: "1517263904808-5dc91e3e7044", rotate: "-rotate-2", },
];

const steps = [
  {
    number: "01",
    title: "Pick your package",
    body: "Choose the setup that fits your party size and style. Every package includes props, instant prints, and a digital gallery.",
  },
  {
    number: "02",
    title: "We handle everything",
    body: "Our team arrives early, sets up the booth, and stays for the full event. You show up and celebrate.",
  },
  {
    number: "03",
    title: "Party, print, repeat",
    body: "Guests jump in all night. Prints come out immediately. The full gallery lands in your inbox before the last balloon pops.",
  },
];

const occasions = [
  { label: "Sweet 16",      color: "bg-coral-light border-coral/20",   accent: "text-coral" },
  { label: "18th Birthday", color: "bg-yellow-light border-yellow/20", accent: "text-yellow" },
  { label: "21st Birthday", color: "bg-teal-light border-teal/20",     accent: "text-teal" },
  { label: "30th & Up",     color: "bg-violet-light border-violet/20", accent: "text-violet" },
  { label: "Kids Party",    color: "bg-coral-light border-coral/20",   accent: "text-coral" },
  { label: "Any Milestone", color: "bg-yellow-light border-yellow/20", accent: "text-yellow" },
];

const galleryPreviewIds = [
  "1761574030105-c5b4dc65a76d",
  "1573574695985-ddbf1c72fb07",
  "1746587224861-521244472226",
  "1666950948031-18691c4a80af",
  "1509316554658-04f9287cdb78",
  "1762918397943-52319c1cebf3",
];

const testimonials = [
  {
    quote: "The photo booth was the highlight of my daughter's Sweet 16. Every single guest used it at least three times. The prints came out so fast!",
    name: "Jessica M.",
    occasion: "Sweet 16",
    color: "bg-coral text-white",
  },
  {
    quote: "We rented Confetti Co. for my husband's 50th surprise party. The setup was seamless and the attendant kept things moving all night.",
    name: "Rachel T.",
    occasion: "50th Birthday",
    color: "bg-yellow text-charcoal",
  },
  {
    quote: "I was nervous it would be hard to use but it was so simple. My 5-year-old figured it out in seconds. The kids went absolutely wild.",
    name: "Marcus D.",
    occasion: "Kids Birthday Party",
    color: "bg-teal text-charcoal",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm pt-12 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <FadeIn>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-5 bg-coral-light px-3 py-1.5 rounded-full">
                Photo Booth Rentals
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-[82px] font-black text-charcoal leading-[0.9] tracking-tight mb-6">
                Every<br />
                <span className="text-coral">moment</span><br />
                deserves<br />
                confetti.
              </h1>
              <p className="text-lg text-slate font-semibold max-w-md mb-10 leading-relaxed">
                Birthdays, Sweet 16s, and milestone parties. We bring the booth, the props, and the energy. You just show up.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-coral text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-coral-dark transition-colors text-center"
                >
                  Book Your Date
                </Link>
                <Link
                  href="/gallery"
                  className="inline-block border-2 border-border text-slate px-8 py-4 rounded-full font-bold text-sm hover:border-charcoal hover:text-charcoal transition-colors text-center"
                >
                  See the Gallery
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1 relative hidden lg:flex justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {heroPhotos.map(({ id, rotate }, i) => (
                <FadeIn key={id} delay={i * 80} direction="none">
                  <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-xl ${rotate} hover:rotate-0 transition-transform duration-300`}>
                    <Image
                      src={`${UNSPLASH}${id}?w=400&h=500&fit=crop&crop=faces&q=80`}
                      alt="Party photo booth moment"
                      fill
                      className="object-cover"
                      priority={i < 2}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-16 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-4 bg-coral-light px-3 py-1.5 rounded-full">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Simple. Fun. Done.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map(({ number, title, body }, i) => (
              <FadeIn key={number} delay={i * 100}>
                <div className="flex flex-col">
                  <span className="text-7xl font-black text-coral/15 leading-none mb-4">{number}</span>
                  <h3 className="text-xl font-black text-charcoal mb-3">{title}</h3>
                  <p className="text-slate font-semibold leading-relaxed text-sm">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-24 px-6 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-violet mb-4 bg-violet-light px-3 py-1.5 rounded-full">
              Every Celebration
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              Any age. Any reason.<br />Any excuse to party.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {occasions.map(({ label, color, accent }, i) => (
              <FadeIn key={label} delay={i * 70}>
                <div className={`${color} border-2 rounded-3xl p-8 text-center hover:-translate-y-1 transition-transform duration-200 cursor-default`}>
                  <p className={`text-xl font-black ${accent}`}>{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-8 text-center">
            <p className="text-slate font-semibold text-sm">
              Have something else in mind?{" "}
              <Link href="/contact" className="text-coral font-bold hover:underline">Just ask.</Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6 bg-warm border-t border-border">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-teal mb-4 bg-teal-light px-3 py-1.5 rounded-full">
              The Moments
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              See it for yourself.
            </h2>
          </FadeIn>
          <div className="columns-2 md:columns-3 gap-4 [column-gap:1rem]">
            {galleryPreviewIds.map((id, i) => (
              <FadeIn key={id} delay={i * 60} direction="none">
                <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-md mb-4 break-inside-avoid">
                  <Image
                    src={`${UNSPLASH}${id}?w=500&h=600&fit=crop&q=80`}
                    alt="Party moment"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-12 text-center">
            <Link
              href="/gallery"
              className="inline-block bg-charcoal text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-slate transition-colors"
            >
              View Full Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-surface border-t border-border">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow mb-4 bg-yellow-light px-3 py-1.5 rounded-full">
              Happy Guests
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-tight">
              They&apos;re still talking about it.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, occasion, color }, i) => (
              <FadeIn key={name} delay={i * 90}>
                <div className={`${color} rounded-3xl p-8 h-full flex flex-col`}>
                  <p className="text-lg font-bold leading-relaxed flex-1 mb-6">&ldquo;{quote}&rdquo;</p>
                  <div>
                    <p className="font-black text-sm">{name}</p>
                    <p className="text-xs font-bold opacity-60 mt-0.5">{occasion}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-coral text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Ready to<br />make it a night?
          </h2>
          <p className="text-white/80 font-semibold mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Dates fill up fast around birthdays and holidays. Lock yours in now.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-coral px-10 py-4 rounded-full font-black text-sm hover:bg-warm transition-colors"
          >
            Book Your Date
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
