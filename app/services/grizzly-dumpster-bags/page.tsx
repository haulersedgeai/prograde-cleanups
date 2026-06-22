import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";
import { CtaBand, QuoteButton } from "@/components/ui";

export const metadata: Metadata = {
  title: `Grizzly Dumpster Bags in ${site.region}, ${site.state} | ${site.name}`,
  description: `Grizzly Dumpster Bag in ${site.region}, ${site.state}: an 8-cubic-yard flexible dumpster we drop off, you fill on your own time, we collect when ready. Flat $299 — delivery, bag & pickup included. Call ${site.phone}.`,
};

const accepted = [
  "Furniture & mattresses", "Boxes & household goods", "Small appliances",
  "Electronics & clothing", "Light renovation debris (cabinetry, drywall scraps, baseboards)",
  "Light flooring", "General household junk", "Yard cleanout bags",
];

const notAccepted = [
  "Concrete, brick & asphalt", "Dirt, soil, sod & rock",
  "Tile, plaster & roofing shingles", "Tree limbs & stumps",
  "Hazardous materials (paint, oil, batteries, chemicals)", "Food waste",
];

const faqs = [
  {
    q: "What can I put in a Grizzly Bag?",
    a: "Standard residential debris: furniture, mattresses, boxes, household goods, small appliances, electronics, clothing, and light renovation debris like cabinetry, drywall scraps, and baseboards. The 8-cubic-yard capacity holds roughly a small truckload of mixed household stuff.",
  },
  {
    q: "What can't go in a Grizzly Bag?",
    a: "Heavy debris like concrete, brick, asphalt, dirt, sod, tile, plaster, and roofing shingles aren't allowed — those need a roll-off or a different hauler. Hazardous materials (paint, oil, batteries, chemicals) and food waste are also prohibited.",
  },
  {
    q: "How long can I keep the bag?",
    a: "As long as you need. There's no rental clock — fill it over a weekend, a month, or a whole season. Just call when you're ready and we'll schedule collection.",
  },
  {
    q: "How fast can you deliver?",
    a: "Within 48 business hours of booking, weekday delivery. If you need it gone today, ask about our full-service junk removal crew instead.",
  },
  {
    q: "Where does the bag need to sit?",
    a: "On a hard surface — driveway, garage, or side yard — within about 10 feet of where our truck can pull up. Keep the area clear of overhead wires, low branches, and parked cars in the truck's path.",
  },
  {
    q: "Bag or a full-service crew?",
    a: "Choose the bag if you want to load it yourself on your own timeline and your project fits in about 8 cubic yards. Choose a crew if you want it gone today, the access is awkward, or you'd rather not do the lifting.",
  },
];

export default function GrizzlyBagsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Flexible Dumpster Bag</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Grizzly Dumpster Bags in {site.region}, {site.state}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            An 8-cubic-yard flexible dumpster bag we drop off, you fill on your own time, and we collect when
            you&apos;re ready. One flat rate — no rental clock, no quote conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton />
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-sky-light px-6 py-3 font-semibold text-white transition hover:bg-sky-light hover:text-navy"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="rounded-3xl border-2 border-navy bg-white p-8 text-center shadow-lift">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Anchor price</p>
            <h2 className="mt-2 text-2xl font-extrabold text-navy">Grizzly Bag — Full Service</h2>
            <p className="mt-2 text-5xl font-extrabold text-navy">$299</p>
            <p className="mt-2 text-navy/70">Delivery, the bag, and collection — all included.</p>
            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-navy/80">
              <li className="flex gap-2"><span className="font-bold text-sky-deep">✓</span>8 cubic yards (~10-yard roll-off equivalent)</li>
              <li className="flex gap-2"><span className="font-bold text-sky-deep">✓</span>Delivery within 48 business hours</li>
              <li className="flex gap-2"><span className="font-bold text-sky-deep">✓</span>No rental clock — fill it as long as you need</li>
              <li className="flex gap-2"><span className="font-bold text-sky-deep">✓</span>We collect when you&apos;re ready (weekday pickup)</li>
            </ul>
            <div className="mt-8">
              <QuoteButton />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-extrabold text-navy">How a Grizzly Bag Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              { n: 1, t: "You Order", d: "Call or send a quote request and mention you want a bag." },
              { n: 2, t: "We Deliver", d: "Within 48 business hours. Unfold it on your driveway or garage." },
              { n: 3, t: "You Fill It", d: "On your own time — a weekend, a month, a season. No clock." },
              { n: 4, t: "We Collect", d: "Call when it's full and we'll haul it away to a licensed facility." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-sky-light bg-white p-6 text-center shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-white">{step.n}</div>
                <h3 className="mt-4 font-bold text-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-navy/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN IT'S THE RIGHT CALL */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-extrabold text-navy">When a Grizzly Bag Is the Right Call</h2>
          <ul className="mt-4 space-y-4 text-navy/80">
            <li><strong className="text-navy">A single-room cleanout</strong> where 8 cubic yards is plenty — a garage purge, an attic clear-out, or one bedroom of furniture before a move.</li>
            <li><strong className="text-navy">A driveway that can&apos;t host a roll-off</strong> for several days — the bag fits in the space of a few contractor bags and sits on private property.</li>
            <li><strong className="text-navy">A cleanout staged over weeks</strong> — when you&apos;re sorting one weekend at a time, the no-rental-clock model works in your favor.</li>
            <li><strong className="text-navy">A renovation that generates debris in waves</strong> — fill the bag through the project at your own pace.</li>
          </ul>

          <h2 className="mt-12 text-2xl font-extrabold text-navy">When It&apos;s Not the Right Tool</h2>
          <ul className="mt-4 space-y-4 text-navy/80">
            <li><strong className="text-navy">Heavy renovation debris.</strong> Tile, plaster, and shingles need a roll-off, not a bag.</li>
            <li><strong className="text-navy">A project bigger than one bag.</strong> Whole-home cleanouts may need a full-service crew or multiple bags.</li>
            <li><strong className="text-navy">You want it gone today.</strong> Bag delivery runs 48 business hours — for same-day, ask about our crew.</li>
          </ul>
        </div>
      </section>

      {/* ACCEPTED / NOT ACCEPTED */}
      <section className="bg-sky-light/30">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
            <h3 className="text-lg font-extrabold text-navy">✓ What You Can Put In</h3>
            <ul className="mt-4 space-y-2 text-navy/80">
              {accepted.map((i) => <li key={i} className="flex gap-2"><span className="text-sky-deep">•</span>{i}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-cta/40 bg-white p-6 shadow-card">
            <h3 className="text-lg font-extrabold text-cta-dark">✕ What&apos;s Not Allowed</h3>
            <ul className="mt-4 space-y-2 text-navy/80">
              {notAccepted.map((i) => <li key={i} className="flex gap-2"><span className="text-cta-dark">•</span>{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* WHERE WE DELIVER */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-extrabold text-navy">Where We Deliver Grizzly Bags</h2>
          <p className="mt-4 text-navy/80">
            Across all of {site.region}, {site.state}, including:
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-full border border-sky-light bg-sky-light/40 px-3 py-1.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-navy hover:text-white"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-navy/70">
            If your town isn&apos;t listed, call {site.phone} — we likely already serve it.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-extrabold text-navy">Grizzly Bag FAQs</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-2xl border border-sky-light bg-white p-5 shadow-card">
                <summary className="cursor-pointer font-bold text-navy">{f.q}</summary>
                <p className="mt-3 text-navy/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Ready to Book a Grizzly Bag?" sub="Call or send a quote request and mention you want a bag. We'll get it scheduled." />
    </>
  );
}
