import Link from "next/link";
import { site, trustBadges } from "@/lib/site";

// ---------------- Buttons ----------------
export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-dark ${className}`}
    >
      Call {site.phone}
    </a>
  );
}

export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/get-a-quote"
      className={`inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-ink shadow-sm transition hover:brightness-95 ${className}`}
    >
      Get Your Free Quote
    </Link>
  );
}

// ---------------- Trust bar ----------------
export function TrustBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
      {trustBadges.map((b) => (
        <span key={b} className="inline-flex items-center gap-1.5">
          <CheckIcon /> {b}
        </span>
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 10.5l3 3 7-7" stroke="#0f766e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------------- Section heading ----------------
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
}

// ---------------- Final CTA band ----------------
export function CtaBand({
  heading = "Ready to Clear Your Space?",
  sub = "Send us photos of what you need removed and get upfront pricing with no hidden fees.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-50">{sub}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <QuoteButton />
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-brand"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
