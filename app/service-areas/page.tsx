import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `Service Areas | Junk Removal in ${site.region}, ${site.state} | ${site.name}`,
  description: `${site.name} provides junk removal and cleanouts across ${site.region}, ${site.state} — Norfolk, Virginia Beach, Chesapeake, Portsmouth, Suffolk, Hampton, Newport News & more. Free quotes.`,
};

export default function ServiceAreasHub() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Serving All of {site.region}, {site.state}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Professional junk removal, cleanouts, and debris hauling across Coastal Virginia. Find your city below.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading title="Areas We Serve" subtitle="Click your city for local service details." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((c) => (
            <Link key={c.slug} href={`/service-areas/${c.slug}`} className="group rounded-2xl border border-slate-200 p-6 transition hover:border-brand hover:shadow-md">
              <h3 className="text-lg font-semibold text-ink group-hover:text-brand">{c.name}, {site.state}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.blurb}</p>
              <span className="mt-4 inline-block text-sm font-medium text-brand">Junk removal in {c.name} →</span>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-600">
          Don&apos;t see your area? <Link href="/get-a-quote" className="font-medium text-brand hover:underline">Contact us</Link> — we may still be able to help!
        </p>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.images.areaMap} alt={`${site.region} service area map`} className="mx-auto rounded-2xl shadow-sm" />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
