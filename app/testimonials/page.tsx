import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: `Reviews & Testimonials | ${site.name} | ${site.region}, ${site.state}`,
  description: `Read customer reviews for ${site.name} junk removal across ${site.region}, ${site.state}. See why neighbors recommend us for fast, affordable cleanouts.`,
};

const reviews = [
  { q: "My garage was packed with 20 years worth of junk. Sent them some photos and got a quote in like 10 minutes. They showed up the next day, loaded everything up, and were done in less than an hour. Super easy process.", n: "Garage Cleanout", c: "Norfolk, VA" },
  { q: "Used them for an estate cleanout after my mom passed. They were respectful and professional during a difficult time. Handled everything with care and didn't just toss it all in a dumpster. Really appreciated that.", n: "Estate Cleanout", c: "Virginia Beach" },
  { q: "Had a ton of construction debris after renovating my kitchen. Other companies wanted to charge me by weight which would've been crazy expensive. These guys did it by volume so I only paid for the space it took up. Way better deal.", n: "Construction Debris", c: "Chesapeake" },
  { q: "Quick response, fair price, friendly crew. They hauled away my old couch, mattress, and a bunch of yard waste. The whole thing took maybe 30 minutes. Would definitely use them again.", n: "Furniture & Yard Waste", c: "Hampton" },
  { q: "Fast, professional, and affordable! They removed all my old furniture in under an hour.", n: "Furniture Removal", c: "Portsmouth" },
  { q: "Best junk removal I've used. Transparent pricing, no hidden fees, and they recycled everything!", n: "Household Junk", c: "Suffolk" },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Neighbors say</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Customer Reviews</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            See what {site.region} residents have to say about {site.name}.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.map((r, i) => (
              <figure key={i} className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
                <div className="text-cta">★★★★★</div>
                <blockquote className="mt-3 text-navy/80">&ldquo;{r.q}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-navy">{r.n} <span className="font-normal text-navy/50">· {r.c}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Ready to Experience 5-Star Service?" />
    </>
  );
}
