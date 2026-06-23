import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand, GoogleRatingBadge } from "@/components/ui";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: `Reviews & Testimonials | ${site.name} | ${site.region}, ${site.state}`,
  description: `Read customer reviews for ${site.name} junk removal across ${site.region}, ${site.state}. See why neighbors recommend us for fast, affordable cleanouts.`,
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky-deep">Neighbors say</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Customer Reviews</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-light/90">
            See what {site.region} residents have to say about {site.name}.
          </p>
          <div className="mt-7 flex justify-center">
            <GoogleRatingBadge tone="dark" />
          </div>
        </div>
      </section>

      <TestimonialsClient />

      <CtaBand heading="Ready to Experience 5-Star Service?" />
    </>
  );
}
