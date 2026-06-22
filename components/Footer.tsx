import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

function Wordmark() {
  return (
    <span className="text-xl font-extrabold tracking-tight leading-none">
      <span className="text-navy">ProGrade</span>
      <span className="text-sky-deep ml-1">Cleanups</span>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-sky-light/60 bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark />
          <p className="mt-4 text-sm text-navy/70">
            Professional junk removal and cleanouts for {site.region}, {site.state}. Fast, affordable, and eco-friendly.
          </p>
          <div className="mt-4 flex gap-3">
            <a href={site.social.instagram} className="text-sm font-semibold text-sky-deep hover:text-navy">Instagram</a>
            <a href={site.social.tiktok} className="text-sm font-semibold text-sky-deep hover:text-navy">TikTok</a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-sky-deep">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy/80">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-navy">{s.name}</Link>
              </li>
            ))}
            <li><Link href="/services" className="font-semibold text-navy hover:underline">View All Services →</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-sky-deep">Service Areas</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-navy/80">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="hover:text-navy">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-sky-deep">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy/80">
            <li>
              <a href={site.phoneHref} className="font-bold text-navy">{site.phone}</a>
            </li>
            <li><a href={`mailto:${site.email}`} className="hover:text-navy">{site.email}</a></li>
            <li>{site.hours}</li>
            <li className="pt-1">Serving {site.region}, {site.state}</li>
            <li><Link href="/get-a-quote" className="font-semibold text-navy hover:underline">Get Your Free Quote →</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-light/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-navy/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-navy">Contact</Link>
            <span>{site.region}, {site.state}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
