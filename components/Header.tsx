"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/services/grizzly-dumpster-bags", label: "Grizzly Bags" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.images.logo} alt={`${site.name} logo`} className="h-10 w-auto" />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm font-medium text-slate-700 transition hover:text-brand">
                {n.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
              {site.phone}
            </a>
            <Link href="/get-a-quote" className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-95">
              Free Quote
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 font-medium text-slate-700">
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Mobile sticky call / text / quote bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white lg:hidden">
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 bg-brand py-3 font-semibold text-white">
          Call Now
        </a>
        <Link href="/get-a-quote" className="flex items-center justify-center gap-2 bg-accent py-3 font-semibold text-ink">
          Free Quote
        </Link>
      </div>
    </>
  );
}
