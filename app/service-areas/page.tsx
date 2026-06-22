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
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">
            Coastal Virginia
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Serving All of {site.region}, {site.state}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            Professional junk removal, cleanouts, and debris hauling across Coastal Virginia. Find your city below.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeading title="Areas We Serve" eyebrow="Pick your city" subtitle="Tap a city for local service details." center={false} />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="group rounded-2xl border border-sky-light bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-navy hover:shadow-lift"
              >
                <h3 className="text-lg font-bold text-navy group-hover:text-navy-dark">{c.name}, {site.state}</h3>
                <p className="mt-2 text-sm text-navy/70">{c.blurb}</p>
                <span className="mt-4 inline-block text-sm font-bold text-sky-deep group-hover:text-navy">
                  Junk removal in {c.name} →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-navy/70">
            Don&apos;t see your area?{" "}
            <Link href="/get-a-quote" className="font-bold text-sky-deep hover:text-navy hover:underline">
              Contact us
            </Link>{" "}
            — we may still be able to help!
          </p>
        </div>
      </section>

      <section className="bg-sky-light/30 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.images.areaMap}
            alt={`${site.region} service area map`}
            className="mx-auto rounded-2xl border border-sky-light shadow-card"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
