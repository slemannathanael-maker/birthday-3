import FadeIn from "@/components/FadeIn";

const partyTypes = [
  "Birthday Party",
  "Sweet 16",
  "Quinceañera",
  "Bar / Bat Mitzvah",
  "Kids Party",
  "Graduation Party",
  "Anniversary",
  "Other",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-16 px-6 bg-warm border-b border-border text-center">
        <FadeIn>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-4 bg-coral-light px-3 py-1.5 rounded-full">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight">We&apos;d love to hear from you.</h1>
          <p className="text-slate font-semibold max-w-md mx-auto leading-relaxed">
            Simple question or ready to book? Either way, just reach out. We are friendly people.
          </p>
        </FadeIn>
      </section>

      {/* Direct contact cards */}
      <section className="py-12 px-6 bg-coral">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <FadeIn>
            <a href="tel:+10000000000" className="flex flex-col items-center text-center p-7 rounded-3xl bg-white/15 hover:bg-white/25 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Call Us</p>
              <p className="text-white font-black text-lg group-hover:underline">(000) 000-0000</p>
              <p className="text-white/60 text-xs font-semibold mt-1">Mon to Sat, 9am to 7pm</p>
            </a>
          </FadeIn>

          <FadeIn delay={80}>
            <a href="mailto:hello@confetticophotos.com" className="flex flex-col items-center text-center p-7 rounded-3xl bg-white/15 hover:bg-white/25 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Email Us</p>
              <p className="text-white font-black text-lg group-hover:underline">hello@confetticophotos.com</p>
              <p className="text-white/60 text-xs font-semibold mt-1">We reply the same day</p>
            </a>
          </FadeIn>

          <FadeIn delay={160}>
            <div className="flex flex-col items-center text-center p-7 rounded-3xl bg-white/15">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Location</p>
              <p className="text-white font-black text-lg">[City, State]</p>
              <p className="text-white/60 text-xs font-semibold mt-1">Serving the surrounding area</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="bg-surface border-b border-border px-6 py-8 text-center">
        <p className="text-slate font-semibold text-sm">
          Want to lock in a date or get a price? Fill out the form below and we will follow up fast.
        </p>
      </div>

      {/* Form */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl border-2 border-border p-10 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral mb-2">Optional</p>
              <h2 className="text-2xl font-black text-charcoal mb-8">Request a Quote</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">First Name</label>
                    <input type="text" placeholder="Jamie" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Last Name</label>
                    <input type="text" placeholder="Kim" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Phone</label>
                    <input type="tel" placeholder="(000) 000-0000" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Email</label>
                    <input type="email" placeholder="jamie@email.com" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Party Date</label>
                    <input type="date" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal/60 focus:outline-none focus:border-coral transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Party Type</label>
                    <select className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal/60 focus:outline-none focus:border-coral transition-colors appearance-none">
                      <option value="">Select type...</option>
                      {partyTypes.map((t) => <option key={t} value={t.toLowerCase()}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Expected Guests</label>
                    <input type="text" placeholder="e.g. 50 guests" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Venue</label>
                    <input type="text" placeholder="The Venue, City" className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate mb-2">Tell Us About the Party</label>
                  <textarea rows={4} placeholder="Theme, vibe, any special requests..." className="w-full bg-warm border-2 border-border rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal placeholder:text-muted focus:outline-none focus:border-coral transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full bg-coral text-white py-4 rounded-full text-sm font-black hover:bg-coral-dark transition-colors">
                  Send Request
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
