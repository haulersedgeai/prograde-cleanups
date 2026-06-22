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
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Contact {site.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Fast service, quick pricing, and same-day availability across {site.region}, {site.state}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-ink">Call Us</h2>
            <a href={site.phoneHref} className="mt-2 block text-2xl font-bold text-brand">{site.phone}</a>
            <p className="mt-2 text-sm text-slate-600">Tap to call — fastest way to get scheduled.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-ink">Email Us</h2>
            <a href={`mailto:${site.email}`} className="mt-2 block font-semibold text-brand">{site.email}</a>
            <p className="mt-2 text-sm text-slate-600">Send photos for a fast quote.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-ink">Hours</h2>
            <p className="mt-2 text-slate-700">{site.hours}</p>
            <p className="mt-2 text-sm text-slate-600">Same-day & next-day service available.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-ink">Service Area</h2>
            <p className="mt-2 text-slate-700">Serving all of {site.region}, {site.state}</p>
            <Link href="/service-areas" className="mt-2 inline-block text-sm font-medium text-brand hover:underline">View all areas →</Link>
          </div>
        </div>
      </section>

      <CtaBand heading="Ready to Get Started?" />
    </>
  );
}
