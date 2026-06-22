import Link from "next/link";
import { site, pricingTiers, trustBadges } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { QuoteButton, CtaBand, SectionHeading } from "@/components/ui";
import WaveDivider from "@/components/WaveDivider";
import { ServiceIcon } from "@/components/ServiceIcons";

const cityGroups: { label: string; slugs: string[] }[] = [
  { label: "Southside", slugs: ["norfolk", "virginia-beach", "chesapeake", "portsmouth", "suffolk"] },
  { label: "Peninsula", slugs: ["hampton", "newport-news", "williamsburg", "poquoson", "yorktown"] },
  { label: "Western Tidewater", slugs: ["franklin", "smithfield", "isle-of-wight", "gloucester"] },
];

export default function Home() {
  const featured = services.slice(0, 6);
  return (
    <>
      {/* HERO — navy, left-aligned, asymmetric */}
      <section className="relative overflow-hidden bg-navy">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-sky/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 h-[300px] w-[300px] rounded-full bg-sky-deep/10 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pt-20 pb-28 sm:pt-28 lg:grid-cols-12 lg:pb-32">
          <div className="lg:col-span-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-light">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-deep" />
              Hampton Roads&apos; local crew
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Your Mess Is
              <br />
              <span className="text-sky">Our Mission.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-sky-light/90">
              Friendly, local crew handling the heavy lifting, loading, and hauling
              across {site.region}, {site.state}. Fair, volume-based pricing — you only
              pay for what we haul.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuoteButton />
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-sky-light px-6 py-3 font-semibold text-white transition hover:bg-sky-light hover:text-navy"
              >
                Call {site.phone}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full border border-sky/30 bg-sky/10 px-3 py-1 text-xs font-semibold text-sky-light"
                >
                  <span className="h-1 w-1 rounded-full bg-sky-deep" /> {b}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative h-full">
              <div className="absolute right-0 top-6 rotate-[3deg] rounded-2xl border border-sky/20 bg-navy-light/50 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">From</p>
                <p className="mt-1 text-4xl font-extrabold text-white">$120</p>
                <p className="mt-1 text-sm text-sky-light/90">single-item pickups</p>
              </div>
              <div className="absolute bottom-12 right-12 -rotate-[2deg] rounded-2xl border border-sky/20 bg-sky/10 p-5 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Same-day</p>
                <p className="mt-1 text-lg font-bold text-white">service<br />often available</p>
              </div>
            </div>
          </div>
        </div>
        <WaveDivider fill="#fdfbf7" />
      </section>

      {/* WHAT WE REMOVE */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="What We Remove"
            title="From Furniture to Construction Debris"
            subtitle="No job too big or too small. If it&rsquo;s non-hazardous, we can haul it away."
            center={false}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-sky-light bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-navy hover:shadow-lift"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-light/60 text-navy transition group-hover:bg-sky group-hover:text-navy-dark">
                  <ServiceIcon slug={s.slug} size={26} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-navy/70">{s.short}</p>
                <span className="mt-4 inline-block text-sm font-bold text-sky-deep group-hover:text-navy">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-navy-dark"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — light sky tint */}
      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading eyebrow="How It Works" title="A Simple 3-Step Process" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: 1, t: "Send Photos", d: "Take pictures of your items and send them for a fast, free estimate." },
              { n: 2, t: "Book Your Pickup", d: "Get upfront pricing and schedule — same-day service often available." },
              { n: 3, t: "We Do the Work", d: "Sit back. We lift, load, haul, and dispose of everything responsibly." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-sky-light bg-white p-8 text-center shadow-card">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-white">
                  {step.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-navy/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Transparent Pricing"
            title="You Only Pay for the Space You Use"
            subtitle="Simple volume-based pricing — never by weight. Send photos for an exact quote."
            center={false}
          />
          <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {pricingTiers.map((t) => {
              const isAnchor = t.label === "Full Trailer";
              return (
                <div
                  key={t.label}
                  className={`rounded-xl border p-4 text-center transition ${
                    isAnchor
                      ? "border-navy bg-navy text-white shadow-lift"
                      : "border-sky-light bg-white text-navy"
                  }`}
                >
                  <p className={`text-xs font-bold uppercase tracking-wider ${isAnchor ? "text-sky-light" : "text-sky-deep"}`}>
                    {t.label}
                  </p>
                  <p className={`mt-1 text-xl font-extrabold ${isAnchor ? "text-white" : "text-navy"}`}>{t.price}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="font-bold text-sky-deep hover:text-navy hover:underline">
              View Full Pricing &amp; How It Works →
            </Link>
          </div>
        </div>
      </section>

      {/* GRIZZLY BAG TEASER */}
      <section className="bg-navy-light">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-sky/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-light">
            Self-load option
          </p>
          <h2 className="text-3xl font-extrabold text-white">Need a Dumpster Bag Instead?</h2>
          <p className="max-w-2xl text-sky-light/90">
            Our Grizzly Dumpster Bag is an 8-cubic-yard flexible dumpster we drop off, you fill on your own time, and we collect when you&rsquo;re ready. One flat $299 combo rate — delivery, the bag, and pickup included.
          </p>
          <Link
            href="/services/grizzly-dumpster-bags"
            className="rounded-full bg-cta px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-cta-dark hover:text-white"
          >
            Learn About Grizzly Bags →
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading eyebrow="What Our Customers Say" title={`Trusted Across ${site.region}`} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { q: "Fast, professional, and affordable! They removed all my old furniture in under an hour.", n: "Sarah M.", c: "Norfolk, VA" },
              { q: "The team was on time, efficient, and super friendly. Hauled away my garage full of junk for a great price!", n: "James T.", c: "Virginia Beach" },
              { q: "Best junk removal I've used. Transparent pricing, no hidden fees, and they recycled everything!", n: "Michelle R.", c: "Chesapeake" },
            ].map((r) => (
              <figure key={r.n} className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
                <div className="text-cta">★★★★★</div>
                <blockquote className="mt-3 text-navy/80">&ldquo;{r.q}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-navy">
                  {r.n} <span className="font-normal text-navy/50">· {r.c}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/testimonials" className="font-bold text-sky-deep hover:text-navy hover:underline">
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS — warmer grouped map-like block */}
      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionHeading
            eyebrow="Neighbors We Serve"
            title={`The Local Crew for ${site.region}`}
            subtitle="Coastal Virginia, neighborhood by neighborhood. Pick your area to see what we&rsquo;ve hauled nearby."
            center={false}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cityGroups.map((group) => {
              const groupCities = group.slugs
                .map((slug) => cities.find((c) => c.slug === slug))
                .filter((c): c is (typeof cities)[number] => Boolean(c));
              if (groupCities.length === 0) return null;
              return (
                <div
                  key={group.label}
                  className="rounded-2xl border border-sky-light bg-white p-6 shadow-card"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-sky-deep" />
                    <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">
                      {group.label}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {groupCities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/service-areas/${c.slug}`}
                          className="group flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-semibold text-navy transition hover:bg-sky-light/60"
                        >
                          <span>{c.name}</span>
                          <span className="text-sky-deep opacity-0 transition group-hover:opacity-100">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm text-navy/70">
            Don&rsquo;t see your neighborhood?{" "}
            <Link href="/get-a-quote" className="font-bold text-sky-deep hover:text-navy hover:underline">
              Reach out
            </Link>{" "}
            — we&rsquo;re probably nearby.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
