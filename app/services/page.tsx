import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcons";

export const metadata: Metadata = {
  title: `Junk Removal & Cleanout Services in ${site.region}, ${site.state} | ${site.name}`,
  description: `Explore all junk removal, cleanout, and specialty services from ${site.name}. Serving Norfolk, Virginia Beach, Chesapeake & all of ${site.region}. Volume pricing, free quotes.`,
};

export default function ServicesOverview() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">
            Everything we haul
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Junk Removal &amp; Cleanout Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            From single-item pickups to whole-house cleanouts and demolition debris — {site.name} handles it all across {site.region}, {site.state}.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat, idx) => {
        const items = services.filter((s) => s.category === cat);
        if (items.length === 0) return null;
        const bg = idx % 2 === 0 ? "bg-sand" : "bg-sky-light/30";
        return (
          <section key={cat} className={bg}>
            <div className="mx-auto max-w-7xl px-4 py-16">
              <SectionHeading title={cat} eyebrow={`Category ${idx + 1}`} center={false} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
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
            </div>
          </section>
        );
      })}

      {/* Grizzly bag callout */}
      <section className="bg-navy-light">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Self-load option</p>
          <h2 className="text-2xl font-extrabold text-white">Grizzly Dumpster Bags</h2>
          <p className="max-w-2xl text-sky-light/90">
            Prefer to load it yourself? Our 8-cubic-yard flexible dumpster bag drops off, fills on your own time, and we collect when you&rsquo;re ready — flat $299.
          </p>
          <Link
            href="/services/grizzly-dumpster-bags"
            className="rounded-full bg-cta px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-cta-dark hover:text-white"
          >
            Learn About Grizzly Bags →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
