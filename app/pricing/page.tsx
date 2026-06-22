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
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Transparent Pricing</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Simple, volume-based pricing. You only pay for the space your items take up in our trailer — never by weight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.images.trailer} alt={`${site.name} trailer`} className="mx-auto mb-12 rounded-2xl shadow-sm" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {pricingTiers.map((t) => (
            <div key={t.label} className="rounded-2xl border border-slate-200 p-6 text-center">
              <p className="text-sm font-medium text-slate-500">{t.label}</p>
              <p className="mt-1 text-3xl font-bold text-brand">{t.price}</p>
              <p className="mt-2 text-xs text-slate-500">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading title="How Our Pricing Works" center={false} />
          <p className="mt-4 text-lg text-slate-700">
            We charge based on the space your items take up, not by weight. That means fair, transparent pricing every
            time — no surprises and no hidden fees. Send us a few photos and we&apos;ll give you an exact quote before
            we ever show up.
          </p>
          <h3 className="mt-10 text-xl font-bold text-ink">Our Simple 3-Step Process</h3>
          <ol className="mt-4 space-y-4 text-slate-700">
            <li><strong>1. Send Photos.</strong> Take pictures of your items and send them for a fast, free estimate.</li>
            <li><strong>2. Book Your Pickup.</strong> Get upfront pricing and schedule — same-day service often available.</li>
            <li><strong>3. We Do the Work.</strong> Sit back. We lift, load, haul, and dispose of everything responsibly.</li>
          </ol>
        </div>
      </section>

      <CtaBand heading="Get an Exact Quote in Minutes" />
    </>
  );
}
