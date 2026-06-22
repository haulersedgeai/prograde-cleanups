"use client";
import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function GetAQuotePage() {
  const [submitted, setSubmitted] = useState(false);

  // Static-export-friendly: this submits via a mailto fallback.
  // Swap in a real form endpoint (Formspree, GoHighLevel, etc.) later.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join("%0D%0A");
    window.location.href = `mailto:${site.email}?subject=Quote Request&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">
            Free, no-pressure quote
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Get a Free Quote</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-light/90">
            Send us photos of what you need removed for fast, upfront pricing — no hidden fees.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.phoneHref}
              className="rounded-full bg-cta px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-cta-dark hover:text-white"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-2xl px-4 py-16">
          {submitted ? (
            <div className="rounded-2xl border border-sky bg-sky-light/40 p-8 text-center">
              <h2 className="text-xl font-extrabold text-navy">Thanks! Your email is ready to send.</h2>
              <p className="mt-2 text-navy/80">If your email app didn&apos;t open, just call us at {site.phone}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-sky-light bg-white p-8 shadow-card">
              <Field label="Name" name="name" required />
              <Field label="Phone Number" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" />
              <Field label="Service Address" name="address" />
              <div>
                <label className="mb-1 block text-sm font-bold text-navy">Service Needed</label>
                <select name="service" className="w-full rounded-lg border border-sky-light bg-white px-3 py-2.5 text-navy focus:border-navy focus:outline-none">
                  {services.map((s) => <option key={s.slug}>{s.name}</option>)}
                  <option>Grizzly Dumpster Bag</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-bold text-navy">Describe What You Need Removed</label>
                <textarea name="description" rows={4} className="w-full rounded-lg border border-sky-light bg-white px-3 py-2.5 text-navy focus:border-navy focus:outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-bold text-navy">Preferred Time</label>
                <select name="timing" className="w-full rounded-lg border border-sky-light bg-white px-3 py-2.5 text-navy focus:border-navy focus:outline-none">
                  <option>Today</option><option>Tomorrow</option><option>This Week</option><option>Flexible</option>
                </select>
              </div>
              <button type="submit" className="w-full rounded-full bg-cta px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-cta-dark hover:text-white">
                Get My Free Quote
              </button>
              <p className="text-center text-sm text-navy/60">
                Prefer to text photos? Send them to {site.phone} for the fastest quote.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-bold text-navy">{label}{required && <span className="text-cta-dark"> *</span>}</label>
      <input type={type} name={name} required={required} className="w-full rounded-lg border border-sky-light bg-white px-3 py-2.5 text-navy focus:border-navy focus:outline-none" />
    </div>
  );
}
