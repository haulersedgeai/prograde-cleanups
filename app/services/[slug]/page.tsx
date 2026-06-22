import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, serviceBySlug } from "@/lib/services";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { CtaBand, QuoteButton } from "@/components/ui";
import { ServiceIcon } from "@/components/ServiceIcons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = serviceBySlug(params.slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = serviceBySlug(params.slug);
  if (!s) notFound();

  const related = services.filter((x) => x.slug !== s.slug && x.category === s.category).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky/15 text-sky">
            <ServiceIcon slug={s.slug} size={28} />
          </div>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">{s.category}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {s.name} in {site.region}, {site.state}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">{s.short}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <QuoteButton />
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-sky-light px-6 py-3 font-semibold text-white transition hover:bg-sky-light hover:text-navy"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-extrabold text-navy">Professional {s.name} You Can Count On</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">{s.intro}</p>
        </div>
      </section>

      {/* WHAT'S INCLUDED + ITEMS */}
      <section className="bg-sky-light/30">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-light bg-white p-8 shadow-card">
            <h2 className="text-2xl font-extrabold text-navy">What&apos;s Included</h2>
            <ul className="mt-4 space-y-3 text-navy/80">
              {["Full-service lifting & loading", "Removal from anywhere on the property", "Upfront, volume-based pricing", "Same-day or next-day availability", "Eco-friendly disposal & recycling", "Sweep-up cleanup included"].map((i) => (
                <li key={i} className="flex gap-2"><span className="font-bold text-sky-deep">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-sky-light bg-white p-8 shadow-card">
            <h2 className="text-2xl font-extrabold text-navy">What We Handle</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-navy/80 sm:grid-cols-2">
              {s.items.map((i) => (
                <li key={i} className="flex gap-2"><span className="text-sky-deep">•</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-center text-2xl font-extrabold text-navy">Our Simple 3-Step Process</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { n: 1, t: "Send Photos", d: "Text or upload photos for a fast, free estimate." },
              { n: 2, t: "We Confirm Pricing", d: "Upfront, transparent pricing before any work begins." },
              { n: 3, t: "We Haul It Away", d: "Full-service removal, hauling, and cleanup." },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-white">{step.n}</div>
                <h3 className="mt-4 font-bold text-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-navy/70">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-2xl font-extrabold text-navy">{s.name} Across {site.region}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-full border border-sky-light bg-white px-3 py-1.5 text-sm font-semibold text-navy transition hover:border-navy hover:bg-navy hover:text-white"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-sand">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="text-2xl font-extrabold text-navy">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group rounded-xl border border-sky-light bg-white p-4 shadow-card transition hover:border-navy hover:shadow-lift"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-light/60 text-navy">
                    <ServiceIcon slug={r.slug} size={20} />
                  </div>
                  <h3 className="mt-3 font-bold text-navy">{r.name}</h3>
                  <p className="mt-1 text-sm text-navy/70">{r.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand heading={`Ready for ${s.name}?`} />
    </>
  );
}
