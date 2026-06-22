import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { cities } from "@/lib/cities";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Junk Removal in ${site.region}, ${site.state}`,
    template: `%s`,
  },
  description:
    `${site.name} offers reliable, affordable junk removal and cleanouts across ${site.region}, ${site.state}. Upfront volume-based pricing, same-day service, all lifting and hauling handled for you.`,
  openGraph: {
    title: `${site.name} | Junk Removal in ${site.region}, ${site.state}`,
    description: `Fast, affordable junk removal and cleanouts in ${site.region}, ${site.state}.`,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: site.images.logo,
  telephone: site.phone,
  email: site.email,
  url: site.url,
  priceRange: "$$",
  areaServed: cities.map((c) => ({ "@type": "City", name: `${c.name}, ${site.state}` })),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.baseCity,
    addressRegion: site.state,
    addressCountry: "US",
  },
  openingHours: "Mo-Su 08:00-18:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sand text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
