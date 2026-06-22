import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: `Contact ${site.name} | Junk Removal in ${site.region}, ${site.state}`,
  description: `Contact ${site.name} for fast junk removal and cleanouts in ${site.region}, ${site.state}. Call ${site.phone}, email, or request a free quote.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Say hi</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Contact {site.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            Fast service, quick pricing, and same-day availability across {site.region}, {site.state}.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
              <h2 className="text-lg font-extrabold text-navy">Call Us</h2>
              <a href={site.phoneHref} className="mt-2 block text-2xl font-extrabold text-navy hover:text-sky-deep">{site.phone}</a>
              <p className="mt-2 text-sm text-navy/70">Tap to call — fastest way to get scheduled.</p>
            </div>
            <div className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
              <h2 className="text-lg font-extrabold text-navy">Email Us</h2>
              <a href={`mailto:${site.email}`} className="mt-2 block font-bold text-sky-deep hover:text-navy">{site.email}</a>
              <p className="mt-2 text-sm text-navy/70">Send photos for a fast quote.</p>
            </div>
            <div className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
              <h2 className="text-lg font-extrabold text-navy">Hours</h2>
              <p className="mt-2 text-navy/80">{site.hours}</p>
              <p className="mt-2 text-sm text-navy/70">Same-day & next-day service available.</p>
            </div>
            <div className="rounded-2xl border border-sky-light bg-white p-6 shadow-card">
              <h2 className="text-lg font-extrabold text-navy">Service Area</h2>
              <p className="mt-2 text-navy/80">Serving all of {site.region}, {site.state}</p>
              <Link href="/service-areas" className="mt-2 inline-block text-sm font-bold text-sky-deep hover:text-navy hover:underline">View all areas →</Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand heading="Ready to Get Started?" />
    </>
  );
}
