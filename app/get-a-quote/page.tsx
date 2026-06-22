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
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Get a Free Quote</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Send us photos of what you need removed for fast, upfront pricing — no hidden fees.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href={site.phoneHref} className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-95">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16">
        {submitted ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
            <h2 className="text-xl font-bold text-emerald-800">Thanks! Your email is ready to send.</h2>
            <p className="mt-2 text-emerald-700">If your email app didn&apos;t open, just call us at {site.phone}.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Field label="Name" name="name" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" />
            <Field label="Service Address" name="address" />
            <div>
              <label className="mb-1 block text-sm font-medium text-ink">Service Needed</label>
              <select name="service" className="w-full rounded-lg border border-slate-300 px-3 py-2.5">
                {services.map((s) => <option key={s.slug}>{s.name}</option>)}
                <option>Grizzly Dumpster Bag</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink">Describe What You Need Removed</label>
              <textarea name="description" rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2.5" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-ink">Preferred Time</label>
              <select name="timing" className="w-full rounded-lg border border-slate-300 px-3 py-2.5">
                <option>Today</option><option>Tomorrow</option><option>This Week</option><option>Flexible</option>
              </select>
            </div>
            <button type="submit" className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white transition hover:bg-brand-dark">
              Get My Free Quote
            </button>
            <p className="text-center text-sm text-slate-500">
              Prefer to text photos? Send them to {site.phone} for the fastest quote.
            </p>
          </form>
        )}
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-ink">{label}{required && <span className="text-red-500"> *</span>}</label>
      <input type={type} name={name} required={required} className="w-full rounded-lg border border-slate-300 px-3 py-2.5" />
    </div>
  );
}
