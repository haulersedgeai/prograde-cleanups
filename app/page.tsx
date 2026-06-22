import Link from "next/link";
import { site, pricingTiers } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { TrustBar, QuoteButton, CtaBand, SectionHeading } from "@/components/ui";

export default function Home() {
  const featured = services.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.images.hero} alt="ProGrade Cleanouts junk removal service" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:py-32">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Your Mess Is <span className="text-accent">Our Mission</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            We handle all the heavy lifting, loading, and hauling across {site.region}, {site.state}. Sit back and
            relax while we clear your space — fair, volume-based pricing means you only pay for what we haul.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton />
            <a href={site.phoneHref} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-ink">
              Call {site.phone}
            </a>
          </div>
        </div>
        <div className="relative border-t border-white/10 bg-white py-4">
          <TrustBar />
        </div>
      </section>

      {/* WHAT WE REMOVE */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="What We Remove"
          title="From Furniture to Construction Debris"
          subtitle="No job too big or too small. If it's non-hazardous, we can haul it away."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand hover:shadow-md">
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand">{s.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand">Learn more →</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark">
            View All Services →
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="How It Works" title="A Simple 3-Step Process" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: 1, t: "Send Photos", d: "Take pictures of your items and send them for a fast, free estimate." },
              { n: 2, t: "Book Your Pickup", d: "Get upfront pricing and schedule — same-day service often available." },
              { n: 3, t: "We Do the Work", d: "Sit back. We lift, load, haul, and dispose of everything responsibly." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">{step.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="You Only Pay for the Space You Use"
          subtitle="Simple volume-based pricing — never by weight. Send photos for an exact quote."
        />
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-9">
          {pricingTiers.map((t) => (
            <div key={t.label} className="rounded-xl border border-slate-200 p-4 text-center">
              <p className="text-xs font-medium text-slate-500">{t.label}</p>
              <p className="mt-1 text-xl font-bold text-brand">{t.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/pricing" className="font-semibold text-brand hover:underline">View Full Pricing & How It Works →</Link>
        </div>
      </section>

      {/* GRIZZLY BAG TEASER */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Need a Dumpster Bag Instead?</h2>
          <p className="max-w-2xl text-slate-300">
            Our Grizzly Dumpster Bag is an 8-cubic-yard flexible dumpster we drop off, you fill on your own time, and we collect when you&apos;re ready. One flat $299 combo rate — delivery, the bag, and pickup included.
          </p>
          <Link href="/services/grizzly-dumpster-bags" className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-95">
            Learn About Grizzly Bags →
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading eyebrow="What Our Customers Say" title={`Trusted Across ${site.region}`} />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { q: "Fast, professional, and affordable! They removed all my old furniture in under an hour.", n: "Sarah M.", c: "Norfolk, VA" },
            { q: "The team was on time, efficient, and super friendly. Hauled away my garage full of junk for a great price!", n: "James T.", c: "Virginia Beach" },
            { q: "Best junk removal I've used. Transparent pricing, no hidden fees, and they recycled everything!", n: "Michelle R.", c: "Chesapeake" },
          ].map((r) => (
            <figure key={r.n} className="rounded-2xl border border-slate-200 p-6">
              <div className="text-accent">★★★★★</div>
              <blockquote className="mt-3 text-slate-700">&ldquo;{r.q}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">{r.n} <span className="font-normal text-slate-500">· {r.c}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/testimonials" className="font-semibold text-brand hover:underline">Read More Reviews →</Link>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading eyebrow="Service Areas" title={`Serving All of ${site.region}`} subtitle="Professional junk removal across Coastal Virginia communities." />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link key={c.slug} href={`/service-areas/${c.slug}`} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand">
                {c.name}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-600">
            Don&apos;t see your area? <Link href="/get-a-quote" className="font-medium text-brand hover:underline">Contact us</Link> — we may still be able to help!
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
