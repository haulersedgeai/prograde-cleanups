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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Wordmark({ size = "text-xl" }: { size?: string }) {
  return (
    <span className={`${size} font-extrabold tracking-tight leading-none`}>
      <span className="text-navy">ProGrade</span>
      <span className="text-sky-deep ml-1">Cleanups</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-sky-light/60 bg-sand/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            <Wordmark />
            <span className="sr-only">{site.name}</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-sm font-semibold text-navy/80 transition hover:text-navy">
                {n.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-dark">
              {site.phone}
            </a>
            <Link href="/get-a-quote" className="rounded-full bg-cta px-4 py-2 text-sm font-semibold text-navy shadow-sm transition hover:bg-cta-dark hover:text-white">
              Free Quote
            </Link>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Toggle menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#0a2540" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-sky-light/60 bg-sand px-4 py-3 lg:hidden">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-2 font-semibold text-navy/80">
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Mobile sticky call / quote bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-dark/40 bg-navy lg:hidden">
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 py-3 font-semibold text-white">
          Call Now
        </a>
        <Link href="/get-a-quote" className="flex items-center justify-center gap-2 bg-cta py-3 font-semibold text-navy">
          Free Quote
        </Link>
      </div>
    </>
  );
}
