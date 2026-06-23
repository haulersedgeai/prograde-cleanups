// =============================================================
// SINGLE SOURCE OF TRUTH for the whole site.
// Change the phone, add a city, or edit a service here — it
// updates every page automatically.
// =============================================================

export const site = {
  name: "ProGrade Cleanups",
  legalName: "ProGrade Cleanups",
  tagline: "Your Mess Is Our Mission",
  phone: "(518) 833-9416",
  phoneHref: "tel:+15188339416",
  email: "Progradecleanups@gmail.com",
  // Service-area business (no public street address) anchored to Norfolk.
  baseCity: "Norfolk",
  state: "VA",
  region: "Hampton Roads",
  ownerNames: "Noah & Harry",
  veteranOwned: true,
  googleRating: "5.0",
  googleReviewCount: "79",
  hours: "Mon–Sun: 8:00 AM – 6:00 PM",
  url: "https://www.progradecleanups.com",
  social: {
    instagram: "https://www.instagram.com/progradecleanups",
    tiktok: "https://www.tiktok.com/@progradecleanups",
  },
  // Existing image URLs scraped from the current site. Swap these for
  // /images/your-file.jpg once you drop new photos into /public/images.
  images: {
    logo: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/446e86b9-3b3b-4cc6-0c1a-850e8d23ee00/public",
    hero: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/7e10fe18-3ac3-41f1-fd27-a5927bea7f00/publicContain",
    trailer: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/a46b727c-df91-4a4d-92f8-bf4b34f3a900/public",
    areaMap: "https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/02701790-0e2a-4f69-4bed-79e07d2b8500/public",
  },
} as const;

// Volume-based pricing tiers (from the current site).
export const pricingTiers = [
  { label: "Minimum", price: "$120", note: "A few items / single piece" },
  { label: "1/4 Trailer", price: "$185", note: "Small cleanups" },
  { label: "1/3 Trailer", price: "$230", note: "A few pieces of furniture" },
  { label: "3/8 Trailer", price: "$260", note: "Small room" },
  { label: "1/2 Trailer", price: "$320", note: "Room cleanout / bulky items" },
  { label: "5/8 Trailer", price: "$395", note: "Medium cleanout" },
  { label: "3/4 Trailer", price: "$460", note: "Garage cleanout" },
  { label: "7/8 Trailer", price: "$530", note: "Large cleanout" },
  { label: "Full Trailer", price: "$599", note: "Whole-house / heavy debris" },
] as const;

export const trustBadges = [
  "Veteran-Owned",
  "Instant photo quotes",
  "No hidden fees",
  "Same-day service",
  "Licensed & insured",
  "Eco-friendly disposal",
] as const;
