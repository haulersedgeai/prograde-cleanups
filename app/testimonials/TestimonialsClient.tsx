"use client";

import { useMemo, useState } from "react";
import { reviews, reviewTags, type ReviewTag } from "@/lib/reviews";

type Filter = "All" | ReviewTag;

const FILTERS: Filter[] = ["All", ...reviewTags];

export default function TestimonialsClient() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") return reviews;
    return reviews.filter((r) => r.tag === active);
  }, [active]);

  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-navy bg-navy text-white shadow-sm"
                    : "border-sky-light bg-white text-navy/80 hover:border-navy hover:text-navy"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-sky-light bg-white p-6 shadow-card"
            >
              <div className="text-cta" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="mt-3 text-navy/80">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-5 flex items-center justify-between gap-2 border-t border-sky-light/60 pt-4 text-sm">
                <span className="font-bold text-navy">{r.name}</span>
                <span className="rounded-full bg-sky-light/60 px-2.5 py-1 text-xs font-semibold text-navy">
                  {r.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-navy/70">No reviews match that filter yet.</p>
        )}
      </div>
    </section>
  );
}
