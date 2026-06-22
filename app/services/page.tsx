import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `Junk Removal & Cleanout Services in ${site.region}, ${site.state} | ${site.name}`,
  description: `Explore all junk removal, cleanout, and specialty services from ${site.name}. Serving Norfolk, Virginia Beach, Chesapeake & all of ${site.region}. Volume pricing, free quotes.`,
};

export default function ServicesOverview() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Junk Removal &amp; Cleanout Services
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            From single-item pickups to whole-house cleanouts and demolition debris — {site.name} handles it all across {site.region}, {site.state}.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat) => {
        const items = services.filter((s) => s.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="mx-auto max-w-7xl px-4 py-14">
            <SectionHeading title={cat} center={false} />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand hover:shadow-md">
                  <h3 className="text-lg font-semibold text-ink group-hover:text-brand">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.short}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-brand">Learn more →</span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Grizzly bag callout */}
      <section className="bg-slate-900 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 text-center">
          <h2 className="text-2xl font-bold text-white">Grizzly Dumpster Bags</h2>
          <p className="max-w-2xl text-slate-300">Prefer to load it yourself? Our 8-cubic-yard flexible dumpster bag drops off, fills on your own time, and we collect when you&apos;re ready — flat $299.</p>
          <Link href="/services/grizzly-dumpster-bags" className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-95">Learn About Grizzly Bags →</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
