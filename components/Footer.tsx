import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.images.logo} alt={`${site.name} logo`} className="h-10 w-auto" />
          <p className="mt-4 text-sm text-slate-600">
            Professional junk removal and cleanouts for {site.region}, {site.state}. Fast, affordable, and eco-friendly.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={site.social.instagram} className="text-sm text-brand hover:underline">Instagram</a>
            <a href={site.social.tiktok} className="text-sm text-brand hover:underline">TikTok</a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-brand">{s.name}</Link>
              </li>
            ))}
            <li><Link href="/services" className="font-medium text-brand hover:underline">View All Services →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-600">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="hover:text-brand">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>
              <a href={site.phoneHref} className="font-semibold text-brand">{site.phone}</a>
            </li>
            <li><a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a></li>
            <li>{site.hours}</li>
            <li className="pt-1">Serving {site.region}, {site.state}</li>
            <li><Link href="/get-a-quote" className="font-medium text-brand hover:underline">Get Your Free Quote →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-brand">Contact</Link>
            <span>{site.region}, {site.state}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
