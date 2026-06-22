import type { Metadata } from "next";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: `FAQ | Junk Removal in ${site.region}, ${site.state} | ${site.name}`,
  description: `Frequently asked questions about ${site.name} junk removal — pricing, items we accept, scheduling, and service areas across ${site.region}, ${site.state}.`,
};

const faqs = [
  { q: "How does your pricing work?", a: "We price based on volume — how much space your items take up in our trailer — not by weight. All quotes are upfront and confirmed before we start. No hidden fees." },
  { q: "Do you offer same-day service?", a: "Yes, whenever possible. Send us photos and we'll do our best to schedule a same-day or next-day pickup." },
  { q: "What items do you take?", a: "Almost everything non-hazardous: furniture, appliances, mattresses, yard waste, construction debris, electronics, and household junk. We cannot take hazardous waste like paint, chemicals, or fuel." },
  { q: "What areas do you serve?", a: "We proudly serve the entire Hampton Roads area including Norfolk, Virginia Beach, Chesapeake, Newport News, Hampton, Portsmouth, Suffolk, Williamsburg, and surrounding communities. If you're not sure we cover your area, just give us a call!" },
  { q: "How do I get a quote?", a: "Simply send us photos of the items you need removed through our quote form, or give us a call at " + site.phone + ". We'll provide an accurate quote and schedule a convenient pickup time." },
  { q: "Do I need to be home for the pickup?", a: "It's helpful if you can point out items, but it's not always required. If items are easily accessible and clearly marked, we can often complete the job while you're away. Just let us know your preference when scheduling." },
  { q: "How long does a pickup take?", a: "Most pickups take between 15–45 minutes depending on the size and complexity of the job. Larger estate cleanouts may take a few hours. We work efficiently to minimize disruption to your day." },
  { q: "What do you do with the junk?", a: "We dispose of everything responsibly and recycle or donate whenever possible to keep usable items out of the landfill." },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-ink">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Everything you need to know about junk removal and cleanouts in {site.region}, {site.state}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer font-semibold text-ink">{f.q}</summary>
              <p className="mt-3 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
