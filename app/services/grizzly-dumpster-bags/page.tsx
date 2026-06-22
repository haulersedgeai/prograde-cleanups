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
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">Flexible Dumpster Bag</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Grizzly Dumpster Bags in {site.region}, {site.state}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            An 8-cubic-yard flexible dumpster bag we drop off, you fill on your own time, and we collect when
            you&apos;re ready. One flat rate — no rental clock, no quote conversation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton />
            <a href={site.phoneHref} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-ink">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* PRICE CARD */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="rounded-3xl border-2 border-brand bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-ink">Grizzly Bag — Full Service</h2>
          <p className="mt-2 text-5xl font-extrabold text-brand">$299</p>
          <p className="mt-2 text-slate-600">Delivery, the bag, and collection — all included.</p>
          <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-slate-700">
            <li className="flex gap-2"><span className="text-brand">✓</span>8 cubic yards (~10-yard roll-off equivalent)</li>
            <li className="flex gap-2"><span className="text-brand">✓</span>Delivery within 48 business hours</li>
            <li className="flex gap-2"><span className="text-brand">✓</span>No rental clock — fill it as long as you need</li>
            <li className="flex gap-2"><span className="text-brand">✓</span>We collect when you&apos;re ready (weekday pickup)</li>
          </ul>
          <div className="mt-8">
            <QuoteButton />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-2xl font-bold text-ink">How a Grizzly Bag Works</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              { n: 1, t: "You Order", d: "Call or send a quote request and mention you want a bag." },
              { n: 2, t: "We Deliver", d: "Within 48 business hours. Unfold it on your driveway or garage." },
              { n: 3, t: "You Fill It", d: "On your own time — a weekend, a month, a season. No clock." },
              { n: 4, t: "We Collect", d: "Call when it's full and we'll haul it away to a licensed facility." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">{step.n}</div>
                <h3 className="mt-4 font-semibold text-ink">{step.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN IT'S THE RIGHT CALL */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">When a Grizzly Bag Is the Right Call</h2>
        <ul className="mt-4 space-y-4 text-slate-700">
          <li><strong>A single-room cleanout</strong> where 8 cubic yards is plenty — a garage purge, an attic clear-out, or one bedroom of furniture before a move.</li>
          <li><strong>A driveway that can&apos;t host a roll-off</strong> for several days — the bag fits in the space of a few contractor bags and sits on private property.</li>
          <li><strong>A cleanout staged over weeks</strong> — when you&apos;re sorting one weekend at a time, the no-rental-clock model works in your favor.</li>
          <li><strong>A renovation that generates debris in waves</strong> — fill the bag through the project at your own pace.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-ink">When It&apos;s Not the Right Tool</h2>
        <ul className="mt-4 space-y-4 text-slate-700">
          <li><strong>Heavy renovation debris.</strong> Tile, plaster, and shingles need a roll-off, not a bag.</li>
          <li><strong>A project bigger than one bag.</strong> Whole-home cleanouts may need a full-service crew or multiple bags.</li>
          <li><strong>You want it gone today.</strong> Bag delivery runs 48 business hours — for same-day, ask about our crew.</li>
        </ul>
      </section>

      {/* ACCEPTED / NOT ACCEPTED */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-white p-6">
            <h3 className="text-lg font-bold text-emerald-700">✓ What You Can Put In</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {accepted.map((i) => <li key={i} className="flex gap-2"><span className="text-emerald-600">•</span>{i}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-red-200 bg-white p-6">
            <h3 className="text-lg font-bold text-red-700">✕ What&apos;s Not Allowed</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              {notAccepted.map((i) => <li key={i} className="flex gap-2"><span className="text-red-500">•</span>{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* WHERE WE DELIVER */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">Where We Deliver Grizzly Bags</h2>
        <p className="mt-4 text-slate-700">
          Across all of {site.region}, {site.state}, including:
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {cities.map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700 transition hover:bg-brand hover:text-white">
              {c.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-600">
          If your town isn&apos;t listed, call {site.phone} — we likely already serve it.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-ink">Grizzly Bag FAQs</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-semibold text-ink">{f.q}</summary>
                <p className="mt-3 text-slate-700">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Ready to Book a Grizzly Bag?" sub="Call or send a quote request and mention you want a bag. We'll get it scheduled." />
    </>
  );
}
