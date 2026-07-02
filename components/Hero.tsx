import Image from "next/image";
import { site } from "@/lib/site";
import { QuoteButton, GoogleRatingBadge } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sand to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-sky/25 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/5 px-3 py-1 text-sm font-medium text-navy">
              <span className="h-2 w-2 rounded-full bg-sky" />
              {site.region}&apos;s local crew
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              {site.tagline.split(" ").slice(0, 3).join(" ")}{" "}
              <span className="text-sky">
                {site.tagline.split(" ").slice(3).join(" ")}.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy/70">
              Friendly, local crew handling the heavy lifting, loading, and hauling
              across {site.region}, {site.state}. Fair, volume-based pricing — you only
              pay for what we haul.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton />
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:border-navy/30"
              >
                Call {site.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <GoogleRatingBadge tone="light" />
              {site.veteranOwned && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-3 py-1 text-sm font-medium text-navy">
                  🇺🇸 Veteran-Owned
                </span>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-lift ring-1 ring-navy/10">
              <Image
                src="/images/garage-cleanout-norfolk.webp"
                alt={`ProGrade Cleanups crew hauling boxes and old furniture during a garage cleanout in ${site.baseCity}, ${site.state}`}
                width={1200}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/25 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-3 shadow-lift ring-1 ring-navy/5">
              <div className="text-2xl font-extrabold text-navy">$120</div>
              <div className="text-xs font-medium text-navy/60">from · single-item pickups</div>
            </div>

            <div className="absolute -top-5 -right-4 rounded-2xl bg-navy px-5 py-3 shadow-lift">
              <div className="text-sm font-bold text-white">Same-day</div>
              <div className="text-xs font-medium text-sky">often available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
