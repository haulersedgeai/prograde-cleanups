import Link from "next/link";
import Image from "next/image";
import { site, pricingTiers } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";
import { reviews } from "@/lib/reviews";
import { CtaBand, SectionHeading } from "@/components/ui";
import WaveDivider from "@/components/WaveDivider";
import { ServiceIcon } from "@/components/ServiceIcons";
import Hero from "@/components/Hero";

const jobPhotos = [
  {
    src: "/images/garage-cleanout-norfolk.webp",
    alt: "Garage cleanout in Norfolk, VA — ProGrade Cleanups crew hauling boxes and old furniture",
    width: 1360,
    height: 1020,
  },
  {
    src: "/images/furniture-removal-virginia-beach.webp",
    alt: "Furniture removal in Virginia Beach — loaded couch and household items ready for haul-off",
    width: 765,
    height: 1020,
  },
  {
    src: "/images/yard-debris-hampton-roads.webp",
    alt: "Yard debris removal in Hampton Roads — brush and yard waste cleared by ProGrade Cleanups",
    width: 1360,
    height: 1020,
  },
  {
    src: "/images/moving-loadout-chesapeake.webp",
    alt: "Move-out load by ProGrade Cleanups in Chesapeake, VA — trailer loaded with household items",
    width: 680,
    height: 1020,
  },
];

const homepageReviewNames = ["John Wilson", "Cynthia Jacko-Wise", "Kayla Hartman"];
const homepageReviews = homepageReviewNames
  .map((n) => reviews.find((r) => r.name === n))
  .filter((r): r is (typeof reviews)[number] => Boolean(r));

const cityGroups: { label: string; slugs: string[] }[] = [
  { label: "Southside", slugs: ["norfolk", "virginia-beach", "chesapeake", "portsmouth", "suffolk"] },
  { label: "Peninsula", slugs: ["hampton", "newport-news", "williamsburg", "poquoson", "yorktown"] },
  { label: "Western Tidewater", slugs: ["franklin", "smithfield", "isle-of-wight", "gloucester"] },
];

export default function Home() {
  const featured = services.slice(0, 6);
  return (
    <>
      <Hero />

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

      {/* REAL WORK — photo grid on navy */}
      <section className="relative">
        <WaveDivider fill="#0a2540" />
        <div className="bg-navy">
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-4">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">On the job</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Real Work, Real Results</h2>
              <p className="mt-4 text-lg text-sky-light/90">
                Real jobs across {site.region} — no stock photos.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {jobPhotos.map((p) => (
                <div
                  key={p.src}
                  className="overflow-hidden rounded-2xl border border-sky/20 bg-navy-light/40 shadow-lift"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
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
            {homepageReviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
                <div className="text-cta" aria-label="5 out of 5 stars">★★★★★</div>
                <blockquote className="mt-3 text-navy/80">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-navy">
                  {r.name} <span className="font-normal text-navy/50">· {r.tag}</span>
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
