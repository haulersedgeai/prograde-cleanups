// Every service becomes a page at /services/{slug}.
// `intro`, `items`, and `meta` are unique per service (SEO).
// The rest of the page layout is shared via the template.

export type Service = {
  slug: string;
  name: string;
  category: "Junk Removal" | "Cleanouts" | "Specialty";
  short: string; // card description
  intro: string; // unique paragraph
  items: string[]; // "what we remove / handle"
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  // ---------- JUNK REMOVAL ----------
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    category: "Junk Removal",
    short: "Sofas, chairs, tables, mattresses — gone fast.",
    intro:
      "Old furniture is heavy, awkward, and a pain to get rid of. ProGrade Cleanouts handles the lifting, hauling, and disposal of furniture across Hampton Roads — from a single couch to a whole house of pieces. We navigate stairs, tight doorways, and second-floor bedrooms so you don't have to.",
    items: ["Sofas & sectionals", "Recliners & chairs", "Mattresses & box springs", "Dressers & wardrobes", "Dining sets", "Desks & office furniture", "Bookcases & shelving", "Patio furniture"],
    metaTitle: "Furniture Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Fast, affordable furniture removal in Norfolk, Virginia Beach, Chesapeake & all of Hampton Roads. Sofa, mattress & bedroom set pickup. Volume pricing. Call (518) 833-9416.",
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    category: "Junk Removal",
    short: "Refrigerators, washers, dryers, and more.",
    intro:
      "Upgrading your kitchen or clearing out an old unit? We remove appliances of every size from anywhere in your home or business across Hampton Roads — and recycle responsibly whenever possible. No need to drag that fridge to the curb.",
    items: ["Refrigerators & freezers", "Washers & dryers", "Stoves & ovens", "Dishwashers", "Microwaves", "Water heaters", "AC & window units", "Small kitchen appliances"],
    metaTitle: "Appliance Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Refrigerator, washer, dryer & stove removal across Norfolk, Virginia Beach & Hampton Roads. Eco-friendly disposal, volume pricing, same-day service. Call (518) 833-9416.",
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    category: "Junk Removal",
    short: "Drywall, wood, tile, and renovation waste.",
    intro:
      "Renovating a kitchen, bath, or whole property? We haul away construction and renovation debris by volume — not by weight — so a remodel doesn't blow your budget on disposal. We work with homeowners, DIYers, and contractors throughout Hampton Roads.",
    items: ["Drywall & plaster", "Lumber & wood scraps", "Flooring & carpet", "Tile & countertops", "Cabinets & doors", "Roofing debris (reasonable amounts)", "Renovation trash", "Packaging & jobsite waste"],
    metaTitle: "Construction Debris Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Affordable construction & renovation debris removal in Hampton Roads, VA. Drywall, lumber, flooring & tile hauled by volume, not weight. Call (518) 833-9416.",
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    category: "Junk Removal",
    short: "Branches, leaves, brush, and storm debris.",
    intro:
      "Storm cleanup, overgrown brush, or a yard full of debris? We load and haul yard waste from anywhere on your property across Hampton Roads, leaving your outdoor space clean and clear.",
    items: ["Branches & limbs", "Leaves & grass clippings", "Brush & hedge trimmings", "Storm debris", "Old mulch", "Fallen fencing", "Lawn furniture", "Outdoor junk piles"],
    metaTitle: "Yard Waste Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Yard waste, brush & storm debris removal across Norfolk, Virginia Beach & Hampton Roads. Fast pickup, volume pricing. Call (518) 833-9416 for a free quote.",
  },
  {
    slug: "household-junk-removal",
    name: "Household Junk Removal",
    category: "Junk Removal",
    short: "Electronics, boxes, clutter, and everyday junk.",
    intro:
      "The everyday clutter that piles up — boxes, electronics, bags of stuff, and random junk. Send us a photo and we'll give you an instant quote, then haul it all away on your schedule.",
    items: ["Boxes & clutter", "Electronics & TVs", "Bagged trash", "Toys & games", "Clothing & textiles", "Décor & household goods", "Exercise equipment", "Miscellaneous junk"],
    metaTitle: "Household Junk Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Household junk removal in Hampton Roads, VA. Electronics, boxes, clutter & everyday junk hauled fast. Instant photo quotes, no hidden fees. Call (518) 833-9416.",
  },
  {
    slug: "scrap-metal-wood-removal",
    name: "Scrap Metal & Wood Removal",
    category: "Junk Removal",
    short: "Metal scraps, lumber, and salvage materials.",
    intro:
      "We haul away scrap metal and wood from cleanouts, projects, and demolitions across Hampton Roads — and recycle what we can. Fair volume pricing on loads big and small.",
    items: ["Scrap metal", "Old lumber", "Metal furniture & frames", "Appliances for scrap", "Fencing material", "Pipe & ductwork", "Metal shelving", "Wood pallets"],
    metaTitle: "Scrap Metal & Wood Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Scrap metal & wood removal across Hampton Roads, VA. Recycled responsibly, priced by volume. Norfolk, Virginia Beach, Chesapeake & more. Call (518) 833-9416.",
  },
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    category: "Junk Removal",
    short: "Mattresses and box springs of any size.",
    intro:
      "Replacing a bed or clearing a rental? We remove mattresses and box springs from any room — upstairs, basement, or tight coastal-home staircases — and dispose of them responsibly across Hampton Roads.",
    items: ["Twin / Full / Queen / King", "California King", "Memory foam", "Box springs", "Adjustable bed bases", "Futons & daybeds", "Crib mattresses", "Sleeper sofa mattresses"],
    metaTitle: "Mattress Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Fast mattress & box spring removal in Hampton Roads, VA. Any size, any room. Volume pricing, same-day service available. Call (518) 833-9416.",
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    category: "Specialty",
    short: "Old hot tubs cut, hauled, and removed.",
    intro:
      "An old hot tub is one of the hardest things to get rid of. We safely dismantle, cut, and haul away hot tubs from decks, patios, and backyards across Hampton Roads, leaving the area clean. (Electrical must be disconnected before removal.)",
    items: ["Above-ground hot tubs", "Portable spas", "Jacuzzi-style units", "Inflatable hot tubs", "In-deck spas", "Hot tub covers & surrounds", "Old fiberglass shells", "Non-working units"],
    metaTitle: "Hot Tub Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Hot tub & spa removal in Hampton Roads, VA. We cut, haul & dispose of old hot tubs safely. Norfolk, Virginia Beach & beyond. Call (518) 833-9416.",
  },
  // ---------- CLEANOUTS ----------
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    category: "Cleanouts",
    short: "Reclaim your garage from years of clutter.",
    intro:
      "Garages collect everything. We clear the whole space — boxes, old furniture, tools, appliances, and junk from the rafters to the corners — so you can park your car again. Full-service across Hampton Roads.",
    items: ["Boxes & stored belongings", "Old furniture", "Appliances", "Tools & equipment", "Holiday decorations", "Tires (fees may apply)", "Yard equipment", "General clutter"],
    metaTitle: "Garage Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Full-service garage cleanouts in Hampton Roads, VA. We clear furniture, junk & debris and sweep up. Volume pricing, same-day service. Call (518) 833-9416.",
  },
  {
    slug: "basement-cleanouts",
    name: "Basement Cleanouts",
    category: "Cleanouts",
    short: "Clear out stored junk, debris, and more.",
    intro:
      "Whether it's decades of storage or flood-damaged debris, we handle complete basement cleanouts across Hampton Roads — stairs, tight spaces, and heavy items included.",
    items: ["Boxes & totes", "Old furniture & mattresses", "Appliances", "Shelving units", "Water-damaged items", "Construction debris", "Holiday décor", "Loose trash"],
    metaTitle: "Basement Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Affordable basement cleanouts in Hampton Roads, VA. We remove furniture, junk & debris from any space. Norfolk, Virginia Beach & more. Call (518) 833-9416.",
  },
  {
    slug: "whole-house-cleanouts",
    name: "Whole-House Cleanouts",
    category: "Cleanouts",
    short: "Complete property cleanouts, start to finish.",
    intro:
      "Preparing a home for sale, handling a move-out, or clearing accumulated clutter? We remove everything — every room, attic, garage, and basement — and leave the property broom-clean. Trusted by homeowners, landlords, and realtors across Hampton Roads.",
    items: ["Furniture & appliances", "Clothing & household goods", "Accumulated junk & boxes", "Heavy & bulky items", "Trash & debris", "Garage & shed contents", "Yard waste", "Everything in between"],
    metaTitle: "Whole-House Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Complete whole-house cleanouts in Hampton Roads, VA. Estate homes, move-outs & property turnovers cleared fast. Volume pricing. Call (518) 833-9416.",
  },
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    category: "Cleanouts",
    short: "Respectful, full-service estate cleanouts.",
    intro:
      "Clearing a loved one's home is hard. We handle estate cleanouts across Hampton Roads with care and respect — sorting, removing, and disposing of belongings so families don't have to face it alone. We don't just toss everything; we handle it thoughtfully.",
    items: ["Furniture & household items", "Personal belongings", "Appliances", "Clothing & textiles", "Books & documents", "Garage & shed contents", "Heavy items", "Complete property clearing"],
    metaTitle: "Estate Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Compassionate, full-service estate cleanouts in Hampton Roads, VA. Respectful clearing for families, executors & realtors. Call (518) 833-9416.",
  },
  {
    slug: "hoarder-cleanouts",
    name: "Hoarder Cleanouts",
    category: "Cleanouts",
    short: "Discreet, compassionate, judgment-free help.",
    intro:
      "Hoarding situations take patience and discretion. We provide compassionate, judgment-free cleanouts across Hampton Roads — sorting, hauling, and restoring safe, livable space for families, homeowners, and property managers.",
    items: ["Clothing & textiles", "Boxes, bags & loose trash", "Paper & documents", "Furniture & appliances", "Household goods", "Food-waste-free debris", "Multi-room clutter", "Full or partial cleanouts"],
    metaTitle: "Hoarder Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Compassionate, discreet hoarder cleanouts in Hampton Roads, VA. Judgment-free, full-service clearing for homes & rentals. Call (518) 833-9416.",
  },
  {
    slug: "move-out-cleanouts",
    name: "Move-Out Cleanouts",
    category: "Cleanouts",
    short: "Get rentals and homes cleared fast.",
    intro:
      "Moving is stressful enough. We clear out leftover furniture, junk, and belongings from homes, apartments, and rentals across Hampton Roads — fast turnaround for tenants, landlords, and property managers.",
    items: ["Leftover furniture", "Appliances", "Trash & belongings", "Carpet & flooring scraps", "Garage & storage items", "Boxes & clutter", "Outdoor junk", "Complete unit clearing"],
    metaTitle: "Move-Out Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Fast move-out & rental cleanouts in Hampton Roads, VA. Homes, apartments & turnovers cleared on your timeline. Volume pricing. Call (518) 833-9416.",
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Junk Removal",
    category: "Cleanouts",
    short: "Offices, retail, and business cleanouts.",
    intro:
      "Downsizing, relocating, or clearing a commercial space? We handle office cleanouts, retail junk, and business debris across Hampton Roads — with flexible scheduling so your operation keeps moving.",
    items: ["Desks & office furniture", "Cubicles & partitions", "Filing cabinets", "Electronics & e-waste", "Retail fixtures & shelving", "Old inventory", "Renovation debris", "Bulk junk"],
    metaTitle: "Commercial Junk Removal in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Commercial junk removal & office cleanouts in Hampton Roads, VA. Furniture, electronics & business debris cleared fast. Flexible scheduling. Call (518) 833-9416.",
  },
  {
    slug: "foreclosure-eviction-cleanouts",
    name: "Foreclosure & Eviction Cleanouts",
    category: "Cleanouts",
    short: "Fast property clearing for landlords & banks.",
    intro:
      "When a tenant leaves debris behind or a property needs clearing fast, we step in. Full-service foreclosure and eviction cleanouts across Hampton Roads for landlords, realtors, property managers, and investors — fast turnaround to minimize vacancy time.",
    items: ["Trash & abandoned belongings", "Furniture & mattresses", "Appliances", "Garage & basement junk", "Yard debris", "Construction debris", "Heavy items", "Complete property clearing"],
    metaTitle: "Foreclosure & Eviction Cleanouts in Hampton Roads, VA | ProGrade Cleanouts",
    metaDescription:
      "Fast foreclosure & eviction cleanouts in Hampton Roads, VA. Full property clearing for landlords, banks & property managers. Call (518) 833-9416.",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

export const serviceCategories = ["Junk Removal", "Cleanouts", "Specialty"] as const;
