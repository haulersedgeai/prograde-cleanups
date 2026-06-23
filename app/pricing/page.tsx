import type { Metadata } from "next";
import { site, pricingTiers } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `Pricing & How It Works | ${site.name} | ${site.region}, ${site.state}`,
  description: `Transparent, volume-based junk removal pricing in ${site.region}, ${site.state}. You only pay for the space your items take up — never by weight. Min $120 to full trailer $599.`,
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">
            Volume-based, no surprises
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Transparent Pricing</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            Simple, volume-based pricing. You only pay for the space your items take up in our trailer — never by weight.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-4 py-16">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.images.trailer}
            alt={`${site.name} trailer`}
            className="mx-auto mb-12 rounded-2xl border border-sky-light shadow-card"
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {pricingTiers.map((t) => {
              const isAnchor = t.label === "Full Trailer";
              return (
                <div
                  key={t.label}
                  className={`rounded-2xl border p-6 text-center transition ${
                    isAnchor
                      ? "border-navy bg-navy text-white shadow-lift"
                      : "border-sky-light bg-white text-navy hover:border-navy hover:shadow-card"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isAnchor ? "text-sky-light" : "text-sky-deep"
                    }`}
                  >
                    {t.label}
                  </p>
                  <p className={`mt-1 text-3xl font-extrabold ${isAnchor ? "text-white" : "text-navy"}`}>
                    {t.price}
                  </p>
                  <p className={`mt-2 text-xs ${isAnchor ? "text-sky-light/90" : "text-navy/60"}`}>{t.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <SectionHeading title="How Our Pricing Works" eyebrow="Simple math" center={false} />
          <p className="mt-4 text-lg text-navy/80">
            We charge based on the space your items take up, not by weight. That means fair, transparent pricing every
            time — no surprises and no hidden fees. Send us a few photos and we&rsquo;ll give you an exact quote before
            we ever show up.
          </p>
          <h3 className="mt-10 text-xl font-extrabold text-navy">Our Simple 3-Step Process</h3>
          <ol className="mt-4 space-y-4 text-navy/80">
            <li><strong className="text-navy">1. Send Photos.</strong> Take pictures of your items and send them for a fast, free estimate.</li>
            <li><strong className="text-navy">2. Book Your Pickup.</strong> Get upfront pricing and schedule — same-day service often available.</li>
            <li><strong className="text-navy">3. We Do the Work.</strong> Sit back. We lift, load, haul, and dispose of everything responsibly.</li>
          </ol>
        </div>
      </section>

      <CtaBand heading="Get an Exact Quote in Minutes" />
    </>
  );
}
