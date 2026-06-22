import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const UNSPLASH = "https://images.unsplash.com/photo-";

const photos = [
  { id: "1527529482837-4698179dc6ce", span: "row-span-2" },
  { id: "1530103862676-de8c9debad1d", span: "" },
  { id: "1513151233558-d860c5398176", span: "" },
  { id: "1531956531700-dc0ee0f1f9a5", span: "row-span-2" },
  { id: "1583875762487-5f8f7c718d14", span: "" },
  { id: "1467803738586-46b7eb7b16a1", span: "" },
  { id: "1541532713592-79a0317b6b77", span: "row-span-2" },
  { id: "1558618666-fcd25c85cd64",   span: "" },
  { id: "1502035618526-6b2f1f5bca1b", span: "" },
  { id: "1529543544282-ea669407fca3", span: "row-span-2" },
  { id: "1545696563-af8f6ec2295a",   span: "" },
  { id: "1514525253161-7a46d19cd819", span: "" },
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
