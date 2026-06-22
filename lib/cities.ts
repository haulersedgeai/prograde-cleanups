// All 14 Hampton Roads service areas. Each becomes a page at
// /service-areas/{slug}. To customize a city's SEO, edit its
// `neighborhoods` and `landmarks` arrays — that unique content
// is what makes each page rank.

export type City = {
  slug: string;
  name: string;
  county?: string;
  blurb: string;
  neighborhoods: string[];
  landmarks: string[];
};

export const cities: City[] = [
  {
    slug: "norfolk",
    name: "Norfolk",
    blurb:
      "From the high-rises downtown to the historic homes in Ghent and the waterfront properties along the Elizabeth River, we clear junk fast across Norfolk.",
    neighborhoods: ["Ghent", "Downtown Norfolk", "Ocean View", "Larchmont", "Colonial Place", "East Beach", "Park Place", "Wards Corner"],
    landmarks: ["Naval Station Norfolk", "Old Dominion University", "Waterside District", "Norfolk Botanical Garden", "MacArthur Center"],
  },
  {
    slug: "virginia-beach",
    name: "Virginia Beach",
    blurb:
      "Oceanfront condos, Town Center high-rises, and quiet neighborhoods inland — we handle junk removal and cleanouts across all of Virginia Beach.",
    neighborhoods: ["Oceanfront", "Town Center", "Hilltop", "Kempsville", "Great Neck", "Sandbridge", "Red Mill", "Pungo"],
    landmarks: ["Virginia Beach Boardwalk", "Town Center", "First Landing State Park", "Oceana Naval Air Station", "Lynnhaven Mall"],
  },
  {
    slug: "chesapeake",
    name: "Chesapeake",
    blurb:
      "Greenbrier, Western Branch, Great Bridge and beyond — we provide fast, volume-priced junk removal throughout Chesapeake.",
    neighborhoods: ["Greenbrier", "Western Branch", "Great Bridge", "Deep Creek", "Hickory", "South Norfolk"],
    landmarks: ["Greenbrier Mall", "Chesapeake City Park", "Great Dismal Swamp", "Chesapeake Square"],
  },
  {
    slug: "portsmouth",
    name: "Portsmouth",
    blurb:
      "From Olde Towne's historic streets to Churchland's neighborhoods, we make junk removal in Portsmouth simple and affordable.",
    neighborhoods: ["Olde Towne", "Churchland", "Port Norfolk", "Cradock", "Westhaven", "Cavalier Manor"],
    landmarks: ["Olde Towne Portsmouth", "Naval Medical Center Portsmouth", "Portsmouth Naval Shipyard", "High Street"],
  },
  {
    slug: "suffolk",
    name: "Suffolk",
    blurb:
      "Spread across the largest city by land area in Virginia, our crews reach every corner of Suffolk for cleanouts and debris removal.",
    neighborhoods: ["Downtown Suffolk", "North Suffolk", "Harbour View", "Driver", "Holland", "Whaleyville"],
    landmarks: ["Harbour View", "Suffolk Executive Airport", "Great Dismal Swamp", "Riverfront Golf Club"],
  },
  {
    slug: "hampton",
    name: "Hampton",
    blurb:
      "A coastal city full of history and homes that collect clutter — we haul it away fast across Hampton and the Peninsula.",
    neighborhoods: ["Phoebus", "Wythe", "Fox Hill", "Buckroe Beach", "Aberdeen", "Riverdale"],
    landmarks: ["Hampton University", "Langley Air Force Base", "Buckroe Beach", "Hampton Coliseum", "Air Power Park"],
  },
  {
    slug: "newport-news",
    name: "Newport News",
    blurb:
      "From the shipyard district to Hilton Village and Denbigh, we provide reliable junk removal across Newport News.",
    neighborhoods: ["Hilton Village", "Denbigh", "Hidenwood", "Port Warwick", "Stoneybrook", "Riverside"],
    landmarks: ["Newport News Shipbuilding", "Mariners' Museum", "Christopher Newport University", "City Center at Oyster Point"],
  },
  {
    slug: "williamsburg",
    name: "Williamsburg",
    blurb:
      "Historic homes, student rentals near William & Mary, and growing neighborhoods — we clear them all in Williamsburg.",
    neighborhoods: ["Colonial Williamsburg area", "Kingsmill", "New Town", "Highland Park", "Skipwith Farms"],
    landmarks: ["Colonial Williamsburg", "College of William & Mary", "Busch Gardens", "New Town"],
  },
  {
    slug: "poquoson",
    name: "Poquoson",
    blurb:
      "A tight-knit waterfront community on the Peninsula — we provide quick, friendly junk removal throughout Poquoson.",
    neighborhoods: ["Messick Point", "Odd Road area", "Yorktown Road corridor", "Bull Island"],
    landmarks: ["Messick Point", "Poquoson Municipal Park", "Plum Tree Island"],
  },
  {
    slug: "yorktown",
    name: "Yorktown",
    blurb:
      "From the historic battlefield area to Tabb and Grafton, we serve all of Yorktown and York County with fast cleanouts.",
    neighborhoods: ["Tabb", "Grafton", "Seaford", "Historic Yorktown", "Dare"],
    landmarks: ["Yorktown Battlefield", "Riverwalk Landing", "York River State Park", "Coleman Bridge"],
  },
  {
    slug: "franklin",
    name: "Franklin",
    blurb:
      "We extend our junk removal and cleanout services to Franklin and the surrounding Western Tidewater communities.",
    neighborhoods: ["Downtown Franklin", "Hayden Village", "Pretlow", "Armory Drive corridor"],
    landmarks: ["Downtown Franklin", "Blackwater River", "Franklin Municipal Airport"],
  },
  {
    slug: "smithfield",
    name: "Smithfield",
    blurb:
      "Historic Smithfield and the neighborhoods of Isle of Wight County — we haul away junk, furniture, and debris with ease.",
    neighborhoods: ["Historic District", "Gatling Pointe", "Cypress Creek", "Battery Park"],
    landmarks: ["Historic Smithfield", "Windsor Castle Park", "Pagan River", "Smithfield Station"],
  },
  {
    slug: "isle-of-wight",
    name: "Isle of Wight",
    county: "Isle of Wight County",
    blurb:
      "Across the rural stretches and growing neighborhoods of Isle of Wight County, our crews handle cleanouts of every size.",
    neighborhoods: ["Carrollton", "Rushmere", "Windsor", "Carrsville", "Zuni"],
    landmarks: ["Isle of Wight County Museum", "Fort Huger", "Nike Park", "Boykin's Tavern"],
  },
  {
    slug: "gloucester",
    name: "Gloucester",
    county: "Gloucester County",
    blurb:
      "On the Middle Peninsula across the York River, we bring fast, affordable junk removal to Gloucester County.",
    neighborhoods: ["Gloucester Point", "Hayes", "Court House", "Ware Neck", "Bena"],
    landmarks: ["Gloucester Court House", "Gloucester Point Beach", "Main Street Center", "Beaverdam Park"],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
