import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: `About ${site.name} | Junk Removal in ${site.region}, ${site.state}`,
  description: `${site.name} provides honest, reliable, eco-friendly junk removal and cleanouts across ${site.region}, ${site.state}. Licensed, insured, and locally trusted.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">About {site.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Local, reliable, and community-focused junk removal for {site.region}, {site.state}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <SectionHeading title="Your Mess Is Our Mission" center={false} />
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          {site.name} was built on a simple idea: junk removal should be fast, honest, and stress-free. We handle all
          the heavy lifting, loading, and hauling so you don&apos;t have to — across Norfolk, Virginia Beach, Chesapeake,
          and every community in {site.region}.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          We price by volume, not by weight, which means you only pay for the space your items actually take up. No
          surprise fees, no weight games, no guesswork. Send a few photos and we'll give you an exact quote before we
          ever show up.
        </p>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading title="Why People Choose Us" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Volume Pricing", d: "Pay for space only — never by weight." },
              { t: "Same-Day Service", d: "Fast scheduling across Hampton Roads." },
              { t: "Eco-Friendly", d: "We recycle and donate whenever possible." },
              { t: "Licensed & Insured", d: "Your property is protected, every job." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <h3 className="font-semibold text-ink">{c.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
