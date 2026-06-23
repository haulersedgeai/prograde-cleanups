import Link from "next/link";
import { site, trustBadges } from "@/lib/site";
import WaveDivider from "@/components/WaveDivider";

// ---------------- Buttons ----------------
export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.phoneHref}
      className={`inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-navy-dark ${className}`}
    >
      Call {site.phone}
    </a>
  );
}

export function QuoteButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/get-a-quote"
      className={`inline-flex items-center justify-center rounded-full bg-cta px-6 py-3 font-semibold text-navy shadow-sm transition hover:bg-cta-dark hover:text-white ${className}`}
    >
      Get Your Free Quote
    </Link>
  );
}

// ---------------- Google rating badge ----------------
export function GoogleRatingBadge({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold ${
        isDark
          ? "border-sky/30 bg-sky/10 text-sky-light"
          : "border-sky-light bg-white text-navy shadow-card"
      }`}
      aria-label={`${site.googleRating} stars from ${site.googleReviewCount} Google reviews`}
    >
      <span className="text-cta" aria-hidden="true">★</span>
      <span className={isDark ? "text-white" : "text-navy"}>{site.googleRating}</span>
      <span className={isDark ? "text-sky-light/70" : "text-navy/50"}>·</span>
      <span>{site.googleReviewCount} Google Reviews</span>
    </span>
  );
}

// ---------------- Trust bar ----------------
export function TrustBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  const chipClass =
    tone === "dark"
      ? "border-sky/30 bg-sky/10 text-sky-light"
      : "border-sky-light bg-sky-light/40 text-navy";
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {trustBadges.map((b) => (
        <span
          key={b}
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${chipClass}`}
        >
          <CheckIcon tone={tone} /> {b}
        </span>
      ))}
    </div>
  );
}

function CheckIcon({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 10.5l3 3 7-7"
        stroke={tone === "dark" ? "#7dd3fc" : "#0a2540"}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-navy/70">{subtitle}</p>}
    </div>
  );
}

// ---------------- Final CTA band (navy with wave lip on top) ----------------
export function CtaBand({
  heading = "Ready to Clear Your Space?",
  sub = "Send us photos of what you need removed and get upfront pricing with no hidden fees.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative">
      <WaveDivider fill="#0a2540" />
      <div className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-light">{sub}</p>
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
      </div>
    </section>
  );
}
