import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `About ${site.name} | Junk Removal in ${site.region}, ${site.state}`,
  description: `${site.name} provides honest, reliable, eco-friendly junk removal and cleanouts across ${site.region}, ${site.state}. Licensed, insured, and locally trusted.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Our story</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">About {site.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            Local, reliable, and community-focused junk removal for {site.region}, {site.state}.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <SectionHeading title="Your Mess Is Our Mission" eyebrow="Why we started" center={false} />
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            {site.name} was built on a simple idea: junk removal should be fast, honest, and stress-free. We handle all
            the heavy lifting, loading, and hauling so you don&apos;t have to — across Norfolk, Virginia Beach, Chesapeake,
            and every community in {site.region}.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-navy/80">
            We price by volume, not by weight, which means you only pay for the space your items actually take up. No
            surprise fees, no weight games, no guesswork. Send a few photos and we&apos;ll give you an exact quote before we
            ever show up.
          </p>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto max-w-5xl px-4 pb-16">
          <div className="max-w-3xl">
            <SectionHeading title="Meet the Owners" eyebrow="The team" center={false} />
            <p className="mt-4 text-lg leading-relaxed text-navy/80">
              {site.name} is veteran-owned and locally run by {site.ownerNames} — two Hampton Roads veterans
              serving their own neighbors. They started this together to do honest, hard work for the people they
              already knew. They show up when they say they will, treat your driveway like their own, and take
              real pride in leaving a place cleaner than they found it. The reviews from folks across Norfolk,
              Virginia Beach, and Chesapeake say it better than they could.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-sky-light shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/garage-cleanout-norfolk.webp"
                  alt="Garage cleanout in Norfolk, VA — Noah and Harry hauling boxes for a local family"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-sky-light shadow-card">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/yard-debris-hampton-roads.webp"
                  alt="Yard debris removal in Hampton Roads — ProGrade Cleanups clearing brush for a homeowner"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-light/30">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <SectionHeading title="Why People Choose Us" eyebrow="The basics" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Volume Pricing", d: "Pay for space only — never by weight." },
              { t: "Same-Day Service", d: "Fast scheduling across Hampton Roads." },
              { t: "Eco-Friendly", d: "We recycle and donate whenever possible." },
              { t: "Licensed & Insured", d: "Your property is protected, every job." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-sky-light bg-white p-6 text-center shadow-card">
                <h3 className="font-bold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm text-navy/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
