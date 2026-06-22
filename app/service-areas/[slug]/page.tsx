import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, cityBySlug } from "@/lib/cities";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand, QuoteButton } from "@/components/ui";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = cityBySlug(params.slug);
  if (!c) return {};
  return {
    title: `Junk Removal in ${c.name}, ${site.state} | ${site.name}`,
    description: `Fast, affordable junk removal and cleanouts in ${c.name}, ${site.state}. Furniture, appliances, debris & whole-house cleanouts. Volume pricing, same-day service. Call ${site.phone}.`,
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const c = cityBySlug(params.slug);
  if (!c) notFound();

  const others = cities.filter((x) => x.slug !== c.slug);

  return (
    <>
      {/* HERO */}
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Junk Removal in {c.name}, {site.state}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Fast, affordable junk removal, cleanouts, and debris hauling throughout {c.name}
            {c.county ? ` and ${c.county}` : ""} and the surrounding {site.region} area.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton />
            <a href={site.phoneHref} className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-ink">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">Your Local Junk Removal Team in {c.name}</h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">{c.blurb}</p>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          Whether you&apos;re clearing a garage, removing old furniture, handling an estate cleanout, or hauling
          renovation debris, {site.name} handles all the lifting, loading, and disposal. We offer upfront,
          volume-based pricing and same-day service whenever possible.
        </p>
      </section>

      {/* SERVICES IN CITY */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-ink">Services We Offer in {c.name}</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-brand hover:shadow-sm">
                <span className="font-medium text-ink">{s.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-2xl font-bold text-ink">Neighborhoods We Serve in {c.name}</h2>
        <p className="mt-3 text-slate-700">We provide junk removal throughout every part of {c.name}, including:</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {c.neighborhoods.map((n) => (
            <span key={n} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{n}</span>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-ink">Near {c.name} Landmarks</h2>
        <p className="mt-3 text-slate-700">
          From {c.landmarks[0]} to {c.landmarks[c.landmarks.length - 1]}, we provide fast, reliable junk removal
          anywhere in the {c.name} area:
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-slate-700 sm:grid-cols-2">
          {c.landmarks.map((l) => (
            <li key={l} className="flex gap-2"><span className="text-brand">•</span>{l}</li>
          ))}
        </ul>
      </section>

      {/* OTHER AREAS */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl font-bold text-ink">Serving More Than Just {c.name}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/service-areas/${o.slug}`} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:border-brand hover:text-brand">
                {o.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading={`Need Junk Removed in ${c.name}, ${site.state}?`} />
    </>
  );
}
