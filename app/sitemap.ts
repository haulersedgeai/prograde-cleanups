import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticPages = ["", "/services", "/service-areas", "/pricing", "/faq", "/testimonials", "/get-a-quote", "/about", "/contact", "/services/grizzly-dumpster-bags"];
  return [
    ...staticPages.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...cities.map((c) => ({ url: `${base}/service-areas/${c.slug}`, lastModified: new Date() })),
  ];
}
