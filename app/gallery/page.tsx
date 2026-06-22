import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const photos = [
  { id: "1761574030105-c5b4dc65a76d", span: "row-span-2" },
  { id: "1779974797057-e10cb9afb336", span: "" },
  { id: "1768776184419-b4df9f9844a6", span: "" },
  { id: "1746587224861-521244472226", span: "row-span-2" },
  { id: "1765947390055-c5187b491ba0", span: "" },
  { id: "1727764894973-28e7283a600c", span: "" },
  { id: "1759209816487-0677a49f01b8", span: "row-span-2" },
  { id: "1763652566301-e88adc3d3d89", span: "" },
  { id: "1762918397943-52319c1cebf3", span: "" },
  { id: "1758870041148-31d28fdf34d9", span: "row-span-2" },
  { id: "1763236606697-01190f65d493", span: "" },
  { id: "1701112501523-bc9f48e3753e", span: "" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-warm border-b border-border text-center">
        <FadeIn>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-coral mb-4 bg-coral-light px-3 py-1.5 rounded-full">
            Gallery
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-charcoal mb-4 leading-tight">
            Real parties.<br />Real smiles.
          </h1>
          <p className="text-slate font-semibold max-w-md mx-auto leading-relaxed">
            A look at some of the moments we have helped capture. Every face tells you the booth was worth it.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 px-6 bg-warm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {photos.map(({ id, span }, i) => (
            <FadeIn key={id} delay={i * 50} direction="none">
              <div className={`relative rounded-3xl overflow-hidden border-4 border-white shadow-md h-full ${span}`}>
                <Image
                  src={`${UNSPLASH}${id}?w=600&h=600&fit=crop&q=80`}
                  alt="Party moment"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-coral text-center">
        <FadeIn>
          <h2 className="text-4xl font-black text-white mb-4">Want yours in here?</h2>
          <p className="text-white/80 font-semibold mb-8 max-w-sm mx-auto">
            Book your booth and let us make you the star of the next gallery update.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-coral px-8 py-4 rounded-full font-black text-sm hover:bg-warm transition-colors"
          >
            Book Your Date
          </a>
        </FadeIn>
      </section>
    </>
  );
}
