/**
 * GKVR Vacations - central site content.
 *
 * Everything the owner may want to change lives here: contact details,
 * destinations, journeys (packages), copy, FAQs and imagery.
 *
 * NOTE ON FACTS: the old website mentioned "20+ years" and "200+ tours".
 * Those figures are unverified, so they are intentionally NOT rendered
 * anywhere. Add verified numbers to `trustStats` below to surface them.
 * Testimonials render only when `testimonials` contains entries.
 */

export const brand = {
  name: "GKVR Vacations",
  shortName: "GKVR",
  tagline: "Journeys designed around you.",
  eyebrow: "Chennai-born. World-bound.",
  description:
    "Personalised holidays across India and the world, planned end to end by travel specialists who stay with you before, during and after your journey.",
  city: "Chennai",
  state: "Tamil Nadu",
  country: "India",
  phone: "+91 96290 97222",
  phoneHref: "tel:+919629097222",
  whatsappHref:
    "https://wa.me/919629097222?text=Hi%20GKVR%20Vacations%2C%20I%27d%20like%20help%20planning%20a%20trip.",
  /** Replace with the real Instagram profile URL when the client shares it. */
  instagramHref: "https://www.instagram.com/",
  email: "gkvrvacations@gmail.com",
  emailHref: "mailto:gkvrvacations@gmail.com",
  siteUrl: "https://gkvrvacations.in",
  hours: "Mon - Sat, 9:30 am - 7:30 pm IST",
} as const;

/** Statistics confirmed by the client (from the original GKVR website). */
export const trustStats: { value: string; label: string }[] = [
  { value: "20+", label: "Years of travel expertise" },
  { value: "200+", label: "Tours organised worldwide" },
  { value: "15", label: "Destinations curated end to end" },
];

/** Heritage story used on the About page - adapted from the original site. */
export const aboutStory = {
  eyebrow: "Since the beginning",
  title: "Two decades on the road with you",
  paragraphs: [
    "At GKVR Vacations, we believe travel is more than a journey - it's an experience that creates memories for a lifetime. With over 20 years of expertise, we specialise in curating domestic and international holidays designed to inspire exploration, adventure and relaxation.",
    "From family holidays to business trips and MICE - meetings, incentives, conferences and events - our services are tailored to provide seamless travel experiences at sensible costs.",
    "Having successfully organised more than 200 tours worldwide, GKVR Vacations continues to be a trusted partner for travellers seeking the perfect blend of comfort, convenience and discovery.",
  ],
} as const;

/**
 * Client reviews. Photos are licensed Unsplash portraits used as stand-ins;
 * swap in real client photos and verified reviews when available.
 */
export interface Testimonial {
  name: string;
  trip: string;
  quote: string;
  rating: number;
  image: string;
  alt: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Karthik & Priya",
    trip: "Honeymoon in Bali",
    quote:
      "We only told them our dates and budget - everything else, from the private-pool villa to the candlelit dinner at Jimbaran, was thought through for us. Not once did we open a booking app. Best decision of the wedding, honestly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1757744705465-ea08b0ddc38a?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Karthik, smiling in a navy sweater",
  },
  {
    name: "Lakshmi Narayanan",
    trip: "Family trip to Kerala",
    quote:
      "Travelling with my in-laws and two kids usually means I plan and worry. This time GKVR handled the car, the houseboat, even early check-in at Munnar. My phone stayed in my bag the whole four days - that never happens.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1533128361669-69c065857a13?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Lakshmi, smiling in a red kurta",
  },
  {
    name: "Venkatesan S.",
    trip: "Golden Triangle with family",
    quote:
      "At my age I want comfort, not adventure. The team planned unhurried days, good vegetarian food everywhere, and a guide in Agra who treated us like his own family. I have already asked them to plan Kashi next.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1627755060795-c2dd207f7e46?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Venkatesan, an elderly traveller in a white kurta",
  },
  {
    name: "Rahul Krishnan",
    trip: "Corporate offsite, Bangkok",
    quote:
      "Forty people, three departments and one very nervous HR team - GKVR ran the whole offsite like clockwork. Flights, rooms, conference hall, even the awards-night dinner cruise. Our MD has already blocked dates for next year.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1778692258270-bc0e80e975c0?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Rahul, a smiling professional in glasses and a blazer",
  },
  {
    name: "Divya Bharathi",
    trip: "Honeymoon in Kashmir",
    quote:
      "The houseboat on Dal Lake, kahwa on the deck, snow at Gulmarg - it felt like a film. When our flight got delayed, their team rearranged the shikara ride before we even landed. That is the kind of care you remember.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Divya, smiling in a teal dupatta",
  },
  {
    name: "Suresh Kumar",
    trip: "Singapore with parents & kids",
    quote:
      "Three generations in one trip - my parents wanted temples and gardens, my kids wanted Universal Studios. GKVR built days that worked for both, with rest built in. My father still talks about the Gardens by the Bay evening.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1779281128550-8cc634361a17?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Suresh, smiling in a white polo shirt",
  },
  {
    name: "Ananya R.",
    trip: "Friends' trip to Vietnam",
    quote:
      "Six friends, six opinions, one very patient consultant. Our Hanoi hotel needed a last-minute swap and it took a day to sort out, but they fixed it without fuss - and the Ha Long cruise plus group pricing still beat everything we found ourselves.",
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1624610806209-82a4cbb4339a?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Ananya, a young woman smiling in a leather jacket",
  },
  {
    name: "Vignesh Prabhu",
    trip: "First international trip, Dubai",
    quote:
      "My first passport stamp! I had a hundred questions about visas and forex, and they answered every single one without making me feel silly. Desert safari at sunset was worth every rupee. Bali next, with the same team.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Vignesh, a young man with a beard, smiling",
  },
  {
    name: "Meera & Arjun",
    trip: "10th anniversary, Maldives",
    quote:
      "We told them the occasion and the budget, and they found an island that felt twice the price. Seaplane window seats, a surprise cake on the beach, snorkelling with turtles. Ten years earned this - GKVR delivered it.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1572943549994-ee6249cc7ba3?auto=format&fit=crop&w=300&h=300&q=75",
    alt: "Meera, smiling in a black blazer by the water",
  },
];

const u = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export type Region = "india" | "international";

export interface Destination {
  slug: string;
  name: string;
  country: string;
  region: Region;
  coordinates: string;
  tagline: string;
  blurb: string;
  bestTime: string;
  idealFor: string[];
  image: string;
  alt: string;
}

export const destinations: Destination[] = [
  {
    slug: "kerala",
    name: "Kerala",
    country: "India",
    region: "india",
    coordinates: "9.9312° N, 76.2673° E",
    tagline: "Backwaters, spice hills and slow mornings",
    blurb:
      "Drift through palm-lined backwaters on a houseboat, wake up to mist over Munnar's tea gardens and end days with Kathakali and seafood by the shore. Kerala rewards travellers who like to slow down.",
    bestTime: "September to March",
    idealFor: ["Family", "Honeymoon", "Ayurveda & wellness"],
    image: u("photo-1602216056096-3b40cc0c9944"),
    alt: "Traditional houseboat drifting through the palm-lined backwaters of Kerala",
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    country: "India",
    region: "india",
    coordinates: "34.0837° N, 74.7973° E",
    tagline: "Alpine meadows and shikara sunsets",
    blurb:
      "Stay on a houseboat on Dal Lake, ride the gondola above Gulmarg and picnic in the flower-filled meadows of Pahalgam. Kashmir is India's classic mountain romance, in every season.",
    bestTime: "March to October; December for snow",
    idealFor: ["Honeymoon", "Family", "Photography"],
    image: u("photo-1595815771614-ade9d652a65d"),
    alt: "A houseboat on Dal Lake beneath snow-dusted Kashmir mountains",
  },
  {
    slug: "goa",
    name: "Goa",
    country: "India",
    region: "india",
    coordinates: "15.2993° N, 74.1240° E",
    tagline: "Sun, sand and susegad",
    blurb:
      "Split your days between quiet southern beaches and lively northern shacks, with Portuguese-era churches, spice farms and river cruises in between. Goa suits every pace and every group.",
    bestTime: "November to February",
    idealFor: ["Friends & groups", "Family", "Beach breaks"],
    image: u("photo-1512343879784-a960bf40e7f2"),
    alt: "Palm trees leaning over a golden beach in Goa at sunset",
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    country: "India",
    region: "india",
    coordinates: "12.9716° N, 77.5946° E",
    tagline: "Coffee estates, palaces and ancient stone",
    blurb:
      "From Mysuru's illuminated palace to Coorg's coffee-scented hills and the boulder-strewn ruins of Hampi, Karnataka packs royal history and gentle hill country into one easy circuit from Chennai.",
    bestTime: "October to March",
    idealFor: ["Family", "Heritage", "Weekend escapes"],
    image: u("photo-1582510003544-4d00b7f74220"),
    alt: "Ornate gopuram of a South Indian temple glowing at dusk",
  },
  {
    slug: "delhi",
    name: "Delhi & North India",
    country: "India",
    region: "india",
    coordinates: "28.6139° N, 77.2090° E",
    tagline: "Mughal grandeur and the Golden Triangle",
    blurb:
      "Pair Delhi's forts, bazaars and food lanes with Agra's Taj Mahal and Jaipur's pink-hued palaces. The Golden Triangle remains India's definitive first journey north.",
    bestTime: "October to March",
    idealFor: ["Family", "Heritage", "First-time explorers"],
    image: u("photo-1587474260584-136574528ed5"),
    alt: "India Gate in New Delhi glowing at dusk",
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    country: "India",
    region: "india",
    coordinates: "12.6208° N, 80.1945° E",
    tagline: "Living temples and shore-side stone",
    blurb:
      "From Mahabalipuram's sea-worn shore temples to Madurai's towering gopurams and the cool hills of Kodaikanal, Tamil Nadu is a world of its own - and it starts at our doorstep in Chennai.",
    bestTime: "November to March",
    idealFor: ["Spiritual", "Family", "Weekend escapes"],
    image: u("photo-1717480103667-fc55675a9ae4"),
    alt: "The Shore Temple of Mahabalipuram against the coastal sky",
  },
  {
    slug: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "international",
    coordinates: "25.2048° N, 55.2708° E",
    tagline: "Desert adventure meets future skyline",
    blurb:
      "Watch the sunset from the Burj Khalifa, dune-bash into a desert camp for dinner and spend mornings between souks and superlative malls. Dubai is the easiest 'first international' from Chennai.",
    bestTime: "November to March",
    idealFor: ["Family", "Shopping", "Short breaks"],
    image: u("photo-1512453979798-5ea266f8880c"),
    alt: "Dubai Marina skyline reflected in the water at twilight",
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    region: "international",
    coordinates: "8.3405° S, 115.0920° E",
    tagline: "Temples, rice terraces and island calm",
    blurb:
      "Swing above the jungle in Ubud, watch dance at clifftop Uluwatu and unwind in a private-pool villa. Bali blends culture and pure holiday softness like nowhere else.",
    bestTime: "April to October",
    idealFor: ["Honeymoon", "Wellness", "Friends & groups"],
    image: u("photo-1537996194471-e657df975ab4"),
    alt: "The Ulun Danu temple rising from Lake Bratan, Bali",
  },
  {
    slug: "singapore",
    name: "Singapore",
    country: "Singapore",
    region: "international",
    coordinates: "1.3521° N, 103.8198° E",
    tagline: "A city built for effortless holidays",
    blurb:
      "Gardens by the Bay, Sentosa's beaches and Universal Studios, hawker food that deserves its fame - Singapore is polished, safe and perfect for multi-generation family travel.",
    bestTime: "Year-round; February to April is driest",
    idealFor: ["Family", "First-time flyers", "City breaks"],
    image: u("photo-1525625293386-3f8f99389edd"),
    alt: "Marina Bay Sands and the Singapore skyline at blue hour",
  },
  {
    slug: "thailand",
    name: "Thailand",
    country: "Thailand",
    region: "international",
    coordinates: "13.7563° N, 100.5018° E",
    tagline: "Golden temples and turquoise coasts",
    blurb:
      "Bangkok's river temples and floating markets, Pattaya's coral islands, Phuket and Krabi's limestone bays - Thailand delivers enormous holiday value a short flight from Chennai.",
    bestTime: "November to April",
    idealFor: ["Friends & groups", "Family", "Beach & city combos"],
    image: u("photo-1552465011-b4e21bf6e79a"),
    alt: "Longtail boat moored in a turquoise bay framed by limestone cliffs in Thailand",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    country: "Malaysia",
    region: "international",
    coordinates: "3.1390° N, 101.6869° E",
    tagline: "Twin towers, tea hills and street food",
    blurb:
      "Kuala Lumpur's skyline and Batu Caves, the cool Genting and Cameron Highlands, Langkawi's beaches - Malaysia is a friendly, halal-friendly, budget-kind classic for Indian travellers.",
    bestTime: "December to April (west coast)",
    idealFor: ["Family", "Value holidays", "City & nature combos"],
    image: u("photo-1596422846543-75c6fc197f07"),
    alt: "The Petronas Towers rising above Kuala Lumpur at night",
  },
  {
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "international",
    coordinates: "3.2028° N, 73.2207° E",
    tagline: "Overwater villas on liquid turquoise",
    blurb:
      "Seaplanes, house reefs, sandbank picnics and villas that open straight into the lagoon. The Maldives is the honeymoon of honeymoons - barely ninety minutes from Indian shores.",
    bestTime: "November to April",
    idealFor: ["Honeymoon", "Anniversaries", "Luxury breaks"],
    image: u("photo-1514282401047-d79a71a590e8"),
    alt: "Overwater villas curving across a turquoise lagoon in the Maldives",
  },
  {
    slug: "turkey",
    name: "Turkey",
    country: "Türkiye",
    region: "international",
    coordinates: "41.0082° N, 28.9784° E",
    tagline: "Two continents, one unforgettable journey",
    blurb:
      "Ferry between Europe and Asia in Istanbul, float over Cappadocia's fairy chimneys at dawn and swim the calcite terraces of Pamukkale. Turkey is pure cinematic travel.",
    bestTime: "April to June, September to November",
    idealFor: ["Honeymoon", "Photography", "Culture seekers"],
    image: u("photo-1527838832700-5059252407fa"),
    alt: "Hot-air balloons drifting over the rock valleys of Cappadocia at sunrise",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    country: "Vietnam",
    region: "international",
    coordinates: "21.0285° N, 105.8542° E",
    tagline: "Lantern towns and emerald bays",
    blurb:
      "Cruise the limestone karsts of Ha Long Bay, wander lantern-lit Hoi An and eat your way through Hanoi's old quarter. Vietnam is Asia's most rewarding new favourite.",
    bestTime: "October to April",
    idealFor: ["Friends & groups", "Food lovers", "Honeymoon"],
    image: u("photo-1528127269322-539801943592"),
    alt: "Boats moored among the limestone karsts of Ha Long Bay, Vietnam",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    country: "Sri Lanka",
    region: "international",
    coordinates: "7.8731° N, 80.7718° E",
    tagline: "The teardrop isle, an hour from home",
    blurb:
      "Ride the hill train past tea estates to Ella, climb Sigiriya's lion rock and spot leopards in Yala - then finish on the beaches of the south coast. Enormous variety, tiny flight time.",
    bestTime: "December to March (west & south)",
    idealFor: ["Family", "Short international breaks", "Wildlife"],
    image: u("photo-1586500036706-41963de24d8b"),
    alt: "A palm-fringed golden beach on Sri Lanka's southern coast",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan",
    country: "Azerbaijan",
    region: "international",
    coordinates: "40.4093° N, 49.8671° E",
    tagline: "Where old Baku meets flame towers",
    blurb:
      "Wander the walled old city, watch the Flame Towers light up the Caspian and day-trip to mud volcanoes and mountain villages. Azerbaijan is the Caucasus surprise on every smart traveller's list.",
    bestTime: "April to June, September to October",
    idealFor: ["Couples", "Offbeat explorers", "Short breaks"],
    image: "/images/baku-flame-towers.jpg",
    alt: "The Flame Towers glowing red over Baku's waterfront at night",
  },
];

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Journey {
  slug: string;
  title: string;
  destinationSlug: string;
  place: string;
  country: string;
  nights: number;
  days: number;
  styles: string[];
  featured: boolean;
  /** In INR. Set to null to hide pricing entirely. */
  startingPrice: number | null;
  priceNote: string;
  heroImage: string;
  cardImage: string;
  alt: string;
  /** Alt for the card image when it differs from the hero. */
  cardAlt?: string;
  summary: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  goodToKnow: string[];
  tips: string[];
  related: string[];
}

export const journeys: Journey[] = [
  {
    slug: "dubai-city-desert",
    title: "Dubai: City Lights & Desert Gold",
    destinationSlug: "dubai",
    place: "Dubai",
    country: "United Arab Emirates",
    nights: 3,
    days: 4,
    styles: ["Family", "Friends & Groups", "Luxury"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by date, hotel and availability.",
    heroImage: u("photo-1512453979798-5ea266f8880c", 2200),
    cardImage: u("photo-1518684079-3c830dcef090", 1200),
    alt: "Aerial view of Dubai's marina and skyline at dusk",
    cardAlt: "The Burj Al Arab rising off Dubai's coastline",
    summary:
      "The essential Dubai - observation decks, souks, a desert safari with dinner under the stars and time for the malls.",
    overview:
      "Four days that show you both faces of Dubai: the glass-and-gold city of the future, and the quiet amber desert it grew out of. We pace the days so families and first-time international travellers never feel rushed - and every element can be swapped, stretched or upgraded.",
    highlights: [
      "Burj Khalifa 'At the Top' at sunset",
      "Dune-bashing desert safari with BBQ dinner",
      "Dubai Marina dhow cruise",
      "Old Dubai souks and abra ride",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Marina evening",
        description:
          "Land in Dubai, transfer to your hotel and settle in. In the evening, board a traditional dhow at Dubai Marina for a cruise with dinner beneath the skyline.",
      },
      {
        day: 2,
        title: "City tour & Burj Khalifa",
        description:
          "A half-day city tour covers Jumeirah Mosque, the Palm and Old Dubai's spice and gold souks with a creek crossing by abra. Late afternoon, ride to the Burj Khalifa observation deck for sunset over the city, then browse Dubai Mall and the fountain show.",
      },
      {
        day: 3,
        title: "Desert safari",
        description:
          "A free morning for the beach, Miracle Garden or shopping. Mid-afternoon, 4x4s collect you for dune-bashing, camel rides and sandboarding, ending at a desert camp with live shows and a BBQ dinner under the stars.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "A relaxed breakfast and time for last-minute shopping before your airport transfer. Extend to 5 days to add Abu Dhabi or a theme-park day.",
      },
    ],
    inclusions: [
      "3 nights' accommodation with daily breakfast",
      "Return airport transfers",
      "Half-day Dubai city tour",
      "Desert safari with BBQ dinner",
      "Dhow cruise with dinner",
      "All tours on a shared basis with English-speaking driver-guides",
    ],
    exclusions: [
      "Flights (we can book these for you)",
      "UAE visa fees",
      "Burj Khalifa admission (added on request)",
      "Lunches and personal expenses",
      "Travel insurance",
    ],
    bestTime: "November to March, when days are warm rather than hot",
    goodToKnow: [
      "UAE tourist visas for Indian passport holders are typically processed in 3-4 working days.",
      "Direct flights from Chennai take about 4 hours.",
      "Fridays and weekends see the fountain shows and malls at their liveliest.",
    ],
    tips: [
      "Carry a light jacket - desert evenings turn cool between December and February.",
      "Book Burj Khalifa sunset slots early; they sell out days ahead.",
      "Dress modestly for the mosque visit; scarves are provided.",
    ],
    related: ["singapore-city-sentosa", "bangkok-pattaya-classic", "istanbul-two-continents"],
  },
  {
    slug: "bangkok-pattaya-classic",
    title: "Bangkok & Pattaya Classic",
    destinationSlug: "thailand",
    place: "Bangkok & Pattaya",
    country: "Thailand",
    nights: 3,
    days: 4,
    styles: ["Friends & Groups", "Family"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by date, hotel and availability.",
    heroImage: u("photo-1563492065599-3520f775eeed", 2200),
    cardImage: u("photo-1563492065599-3520f775eeed", 1200),
    alt: "Golden spires of a grand temple complex in Bangkok",
    summary:
      "Thailand's greatest-hits opener: Coral Island by speedboat, Pattaya's shows and Bangkok's temples and markets.",
    overview:
      "The classic first taste of Thailand, balancing beach time in Pattaya with a day among Bangkok's golden temples and famously good street food. A favourite for friends' trips and family groups alike, and endlessly customisable - add Phuket, Krabi or extra Bangkok nights.",
    highlights: [
      "Coral Island speedboat trip with lunch",
      "Alcazar show in Pattaya",
      "Bangkok city and temple tour",
      "Free time for markets and Thai massage",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Bangkok, transfer to Pattaya",
        description:
          "Land in Bangkok and drive two hours to Pattaya. Check in, then catch the glittering Alcazar cabaret show in the evening.",
      },
      {
        day: 2,
        title: "Coral Island by speedboat",
        description:
          "Speedboat to Koh Larn (Coral Island) for a morning of clear water, parasailing and banana-boat rides, with lunch on the island. The evening is yours on Walking Street or at a beachfront dinner.",
      },
      {
        day: 3,
        title: "Back to Bangkok & temple tour",
        description:
          "Return to Bangkok for a city tour taking in the Golden Buddha and Marble Temple, with the evening free for Chatuchak or Indra Market shopping and a riverside dinner.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast and transfer to Suvarnabhumi Airport. Extend with two nights in Phuket or Krabi for the full Thai beach experience.",
      },
    ],
    inclusions: [
      "3 nights' accommodation (2 Pattaya, 1 Bangkok) with breakfast",
      "Return airport and intercity transfers",
      "Coral Island tour with lunch",
      "Alcazar show tickets",
      "Bangkok city and temple tour",
    ],
    exclusions: [
      "Flights (we can book these for you)",
      "Thailand visa/entry fees where applicable",
      "Lunches and dinners not mentioned",
      "Personal expenses and tips",
      "Travel insurance",
    ],
    bestTime: "November to April, before the monsoon",
    goodToKnow: [
      "Flight time from Chennai is around 3.5 hours.",
      "Carry modest wear for temples - shoulders and knees covered.",
      "Thai street food courts in malls are a gentle way into the cuisine.",
    ],
    tips: [
      "Keep small notes handy for markets; bargaining is expected and friendly.",
      "Book the Alcazar's earlier show if travelling with children.",
      "Sea can be choppy June-October; Coral Island runs mornings for calmer water.",
    ],
    related: ["singapore-city-sentosa", "bali-temples-beaches", "kuala-lumpur-highlights"],
  },
  {
    slug: "singapore-city-sentosa",
    title: "Singapore: City & Sentosa",
    destinationSlug: "singapore",
    place: "Singapore",
    country: "Singapore",
    nights: 3,
    days: 4,
    styles: ["Family", "Luxury"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by date, hotel and availability.",
    heroImage: u("photo-1525625293386-3f8f99389edd", 2200),
    cardImage: u("photo-1565967511849-76a60a516170", 1200),
    alt: "Marina Bay Sands and the Singapore skyline at blue hour",
    cardAlt: "The Merlion and Singapore's waterfront lit up at night",
    summary:
      "Gardens by the Bay, Sentosa's beaches and cable car, night safari options - the world's easiest city holiday.",
    overview:
      "Singapore is the destination we recommend most often for multi-generation families: spotless, safe, compact and full of wonder. This journey covers the icons and leaves room for Universal Studios, the Night Safari or a Marina Bay splurge, depending on who's travelling.",
    highlights: [
      "Gardens by the Bay with Cloud Forest dome",
      "Sentosa: cable car, Wings of Time & beaches",
      "City tour with Merlion Park and Chinatown",
      "Optional Universal Studios or Night Safari day",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Marina Bay evening",
        description:
          "Arrive, check in and ease into the city with an evening at Gardens by the Bay - the Supertree light show - followed by the Marina Bay waterfront promenade.",
      },
      {
        day: 2,
        title: "City tour & Gardens' domes",
        description:
          "A morning city tour covers Merlion Park, Chinatown and Little India. After lunch, step inside the Cloud Forest and Flower Dome, then catch the Spectra light-and-water show.",
      },
      {
        day: 3,
        title: "Sentosa Island",
        description:
          "Ride the cable car across to Sentosa for the SEA Aquarium, Skyline Luge and beach time, ending with the Wings of Time show over the sea. Families often swap this day for Universal Studios.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "A final Kaya-toast breakfast, perhaps a quick Orchard Road stop, and your transfer to Changi. Add a night to slow it all down - Singapore rewards it.",
      },
    ],
    inclusions: [
      "3 nights' accommodation with breakfast",
      "Return airport transfers",
      "Half-day city tour",
      "Gardens by the Bay two-dome admission",
      "Sentosa cable car and Wings of Time",
    ],
    exclusions: [
      "Flights (we can book these for you)",
      "Singapore visa fees",
      "Universal Studios / Night Safari (added on request)",
      "Meals not mentioned and personal expenses",
      "Travel insurance",
    ],
    bestTime: "Year-round; February to April tends to be driest",
    goodToKnow: [
      "Chennai to Singapore is about a 4.5-hour direct flight.",
      "The MRT makes independent evenings easy - we'll show you how.",
      "Singapore visas for Indians are processed through authorised agents; allow 5-7 working days.",
    ],
    tips: [
      "Book Universal Studios for a weekday to halve the queues.",
      "Carry a compact umbrella; showers pass quickly.",
      "Hawker centres near your hotel beat mall food courts on both price and flavour.",
    ],
    related: ["kuala-lumpur-highlights", "dubai-city-desert", "bali-temples-beaches"],
  },
  {
    slug: "kuala-lumpur-highlights",
    title: "Kuala Lumpur & Genting Highlights",
    destinationSlug: "malaysia",
    place: "Kuala Lumpur",
    country: "Malaysia",
    nights: 3,
    days: 4,
    styles: ["Family", "Friends & Groups"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by date, hotel and availability.",
    heroImage: u("photo-1596422846543-75c6fc197f07", 2200),
    cardImage: u("photo-1508062878650-88b52897f298", 1200),
    alt: "Kuala Lumpur's skyline with the Petronas Towers at twilight",
    cardAlt: "The Petronas Towers illuminated against the night sky",
    summary:
      "Petronas Towers, Batu Caves and a cool day up in Genting Highlands - Malaysia's value-packed opener.",
    overview:
      "Kuala Lumpur delivers a remarkably complete holiday for its price: a gleaming skyline, the sacred Batu Caves, and a mountain resort with a cable-car ride into the clouds - all with food Indian travellers instantly love. An easy, satisfying first international trip.",
    highlights: [
      "Petronas Twin Towers photo stop & KL city tour",
      "Batu Caves' rainbow steps and cave temple",
      "Genting Highlands day trip with Awana SkyWay",
      "Bukit Bintang street-food evenings",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & KL by night",
        description:
          "Arrive and check in. In the evening, see the Petronas Towers lit up from KLCC Park and wander the Bukit Bintang food streets.",
      },
      {
        day: 2,
        title: "City tour & Batu Caves",
        description:
          "A city tour covers Merdeka Square, the King's Palace and Thean Hou Temple, then heads north to climb the 272 rainbow steps of Batu Caves beside the golden Murugan statue.",
      },
      {
        day: 3,
        title: "Genting Highlands",
        description:
          "Drive into the hills and ride the Awana SkyWay cable car over rainforest to Genting's cool-weather resort - theme park, shopping and, for those inclined, the casino floors. Return to KL by evening.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast, a last stroll or souvenir stop, and your airport transfer. Pairs beautifully with 2-3 nights in Langkawi or Singapore.",
      },
    ],
    inclusions: [
      "3 nights' accommodation with breakfast",
      "Return airport transfers",
      "KL city tour with Batu Caves",
      "Genting Highlands day trip with SkyWay tickets",
    ],
    exclusions: [
      "Flights (we can book these for you)",
      "Malaysia entry/visa fees where applicable",
      "Theme-park passes at Genting",
      "Meals not mentioned and personal expenses",
      "Travel insurance",
    ],
    bestTime: "December to April for the driest days",
    goodToKnow: [
      "Chennai to KL is about 4 hours direct.",
      "South Indian food is everywhere - Brickfields is 'Little India'.",
      "Genting is 15-20°C; carry a light layer.",
    ],
    tips: [
      "Visit Batu Caves early morning to beat both heat and crowds.",
      "Thaipusam season is spectacular but extremely busy - plan around it deliberately.",
      "Grab rides are cheap and reliable for independent evenings.",
    ],
    related: ["singapore-city-sentosa", "bangkok-pattaya-classic", "bali-temples-beaches"],
  },
  {
    slug: "bali-temples-beaches",
    title: "Bali: Temples, Terraces & Beaches",
    destinationSlug: "bali",
    place: "Bali",
    country: "Indonesia",
    nights: 3,
    days: 4,
    styles: ["Honeymoon", "Friends & Groups", "Luxury"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by date, hotel and availability.",
    heroImage: u("photo-1537996194471-e657df975ab4", 2200),
    cardImage: u("photo-1555400038-63f5ba517a47", 1200),
    alt: "The Ulun Danu temple rising from Lake Bratan, Bali",
    cardAlt: "Rice terraces stepping through the jungle in Bali",
    summary:
      "Ubud's jungle swings and rice terraces, Uluwatu's clifftop sunset and a beach day built entirely around you.",
    overview:
      "Bali compresses an astonishing amount of beauty into a small island - sacred temples, emerald rice terraces, surf beaches and some of the world's best-value villas. This journey is the honeymooner's favourite, and we tailor the pace from adventure-packed to blissfully idle.",
    highlights: [
      "Ubud day: jungle swing, Tegalalang rice terraces & Tirta Empul",
      "Uluwatu Temple sunset with Kecak fire dance",
      "Free beach day - Nusa Dua, Seminyak or a Nusa Penida upgrade",
      "Romantic candlelit dinner arranged on request",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Seminyak sunset",
        description:
          "Arrive in Denpasar, transfer to your resort or private-pool villa, and end the day with a sunset walk and dinner on Seminyak beach.",
      },
      {
        day: 2,
        title: "Ubud & the sacred heart of Bali",
        description:
          "A full day inland: the Tegalalang rice terraces, a jungle swing over the palms, holy springs at Tirta Empul and lunch overlooking the valley. Coffee-plantation and craft-village stops on the way back.",
      },
      {
        day: 3,
        title: "Beach morning & Uluwatu sunset",
        description:
          "A slow morning at the beach or spa. Late afternoon, drive to Uluwatu Temple on its 70-metre cliff for sunset and the mesmerising Kecak fire dance, followed by a seafood dinner at Jimbaran Bay.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast by the pool and your airport transfer. Honeymooners often add two nights - one for Nusa Penida's cliffs, one to simply stay still.",
      },
    ],
    inclusions: [
      "3 nights' accommodation with breakfast (villa upgrades available)",
      "Return airport transfers and private car with driver on tour days",
      "Ubud full-day tour with entrance fees",
      "Uluwatu sunset tour with Kecak dance tickets",
    ],
    exclusions: [
      "Flights (we can book these for you)",
      "Indonesia entry fees where applicable",
      "Jimbaran dinner and meals not mentioned",
      "Personal expenses and spa treatments",
      "Travel insurance",
    ],
    bestTime: "April to October, Bali's dry season",
    goodToKnow: [
      "Indians receive visa-on-arrival in Indonesia; keep the fee handy in USD or by card.",
      "Flights from Chennai connect via Kuala Lumpur or Singapore.",
      "Sarongs are provided at temples; carry one for convenience.",
    ],
    tips: [
      "Start Ubud day by 8 am - the terraces are quiet and cool before ten.",
      "Book the Kecak dance seats in advance in high season.",
      "Nusa Penida is spectacular but a long day; better as an overnight extension.",
    ],
    related: ["maldives-lagoon-escape", "bangkok-pattaya-classic", "singapore-city-sentosa"],
  },
  {
    slug: "istanbul-two-continents",
    title: "Istanbul: A Tale of Two Continents",
    destinationSlug: "turkey",
    place: "Istanbul",
    country: "Türkiye",
    nights: 3,
    days: 4,
    styles: ["Honeymoon", "Culture", "Luxury"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by date, hotel and availability.",
    heroImage: u("photo-1541432901042-2d8bd64b4a9b", 2200),
    cardImage: u("photo-1541432901042-2d8bd64b4a9b", 1200),
    alt: "Hagia Sophia and Istanbul's old city skyline at sunset",
    summary:
      "Hagia Sophia, the Blue Mosque, a Bosphorus cruise between two continents and the Grand Bazaar's 4,000 shops.",
    overview:
      "Istanbul layers Rome, Byzantium and the Ottomans into one walkable old city, then throws in a strait where Europe waves at Asia. This journey covers the imperial icons and leaves an afternoon for hammams, baklava and bazaar wandering. Add Cappadocia for the full Turkish dream.",
    highlights: [
      "Hagia Sophia & the Blue Mosque",
      "Topkapi Palace and its Bosphorus views",
      "Bosphorus cruise between Europe and Asia",
      "Grand Bazaar & Spice Bazaar",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & old-city evening",
        description:
          "Arrive in Istanbul and check in near Sultanahmet. Evening walk through the Hippodrome as the mosques light up, with dinner at a rooftop overlooking the Sea of Marmara.",
      },
      {
        day: 2,
        title: "Imperial Istanbul",
        description:
          "A full guided day: Hagia Sophia, the Blue Mosque, the underground Basilica Cistern and Topkapi Palace, home of the Ottoman sultans. Turkish tea breaks included, naturally.",
      },
      {
        day: 3,
        title: "Bosphorus & bazaars",
        description:
          "Morning cruise up the Bosphorus past palaces and fortresses, crossing between two continents. The afternoon belongs to the Grand Bazaar and Spice Bazaar - and, if you like, a traditional hammam.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "One last simit-and-çay breakfast before your airport transfer. Extending? Two nights in Cappadocia with a dawn balloon flight is the classic encore.",
      },
    ],
    inclusions: [
      "3 nights' accommodation with breakfast",
      "Return airport transfers",
      "Full-day guided old-city tour",
      "Bosphorus cruise tickets",
    ],
    exclusions: [
      "Flights (we can book these for you)",
      "Turkey visa fees",
      "Museum passes beyond listed entrances",
      "Meals not mentioned and personal expenses",
      "Travel insurance",
    ],
    bestTime: "April to June and September to November",
    goodToKnow: [
      "Turkish e-visas for eligible travellers are issued online within days.",
      "Istanbul is hilly and cobbled - comfortable shoes matter.",
      "Friday midday prayers close mosques to visitors; tours plan around them.",
    ],
    tips: [
      "Visit Hagia Sophia at opening time to walk it in relative quiet.",
      "Fix a price before any bazaar purchase - bargaining is the sport of the city.",
      "Try a Bosphorus-side breakfast in Ortaköy at least once.",
    ],
    related: ["dubai-city-desert", "bali-temples-beaches", "maldives-lagoon-escape"],
  },
  {
    slug: "kerala-backwaters-hills",
    title: "Kerala: Backwaters & Tea Hills",
    destinationSlug: "kerala",
    place: "Munnar & Alleppey",
    country: "India",
    nights: 3,
    days: 4,
    styles: ["Family", "Honeymoon"],
    featured: true,
    startingPrice: 17500,
    priceNote:
      "Starting price per person; final cost depends on dates, hotel category and availability.",
    heroImage: u("photo-1602216056096-3b40cc0c9944", 2200),
    cardImage: u("photo-1637066742971-726bee8d9f56", 1200),
    alt: "A traditional houseboat drifting through Kerala's palm-lined backwaters",
    cardAlt: "Tea plantations rolling across the hills of Munnar, Kerala",
    summary:
      "Mist over Munnar's tea gardens, a night aboard a private houseboat in Alleppey, and Kerala's unhurried magic.",
    overview:
      "God's Own Country, distilled: two nights amid Munnar's emerald tea estates and one aboard your own houseboat drifting through Alleppey's backwaters, meals cooked on board. It's the journey we recommend when someone says they need to truly exhale - and it starts just a short hop from Chennai.",
    highlights: [
      "Private houseboat with onboard Kerala meals",
      "Munnar tea gardens and Eravikulam National Park",
      "Mattupetty Dam and Echo Point",
      "Spice-garden walk with tastings",
    ],
    itinerary: [
      {
        day: 1,
        title: "Kochi to Munnar",
        description:
          "Arrive in Kochi and wind up into the Western Ghats past waterfalls and spice plantations, reaching Munnar by evening. Check in to a hillside stay with valley views.",
      },
      {
        day: 2,
        title: "Munnar's tea country",
        description:
          "A full day among the plantations: Eravikulam National Park (home of the Nilgiri tahr), the tea museum, Mattupetty Dam and Echo Point, with an evening stroll through town's spice shops.",
      },
      {
        day: 3,
        title: "Houseboat on the backwaters",
        description:
          "Descend to Alleppey and board your private houseboat by noon. Cruise past paddy fields and village life while the crew serves a traditional Kerala lunch, sunset chai and dinner on deck.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Wake to birdsong on the water, dock after breakfast and transfer to Kochi for your journey home. Add Thekkady or a beach night at Kovalam to extend.",
      },
    ],
    inclusions: [
      "2 nights' Munnar accommodation with breakfast",
      "1 night deluxe private houseboat with all meals aboard",
      "Private air-conditioned car with driver throughout",
      "All parking, tolls and driver expenses",
    ],
    exclusions: [
      "Travel to/from Kochi (we can arrange flights or trains)",
      "Entry fees at parks and attractions",
      "Lunches and dinners outside the houseboat",
      "Personal expenses",
      "Travel insurance",
    ],
    bestTime: "September to March; monsoon Kerala (June-August) has its own quiet charm",
    goodToKnow: [
      "Houseboats sail roughly noon to 9 am the next day, anchoring by sunset.",
      "Munnar evenings are genuinely cold from November to February.",
      "Eravikulam closes for calving season roughly February-March; we plan around it.",
    ],
    tips: [
      "Request the upper-deck seating when booking your houseboat early.",
      "Carry motion-sickness tablets for the winding Munnar ghat roads.",
      "Buy tea and spices at plantation outlets, not roadside stalls.",
    ],
    related: ["kashmir-alpine-escape", "goa-sun-susegad", "maldives-lagoon-escape"],
  },
  {
    slug: "kashmir-alpine-escape",
    title: "Kashmir Alpine Escape",
    destinationSlug: "kashmir",
    place: "Srinagar, Gulmarg & Pahalgam",
    country: "India",
    nights: 4,
    days: 5,
    styles: ["Honeymoon", "Family"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - fares vary by season, hotel and availability.",
    heroImage: u("photo-1595815771614-ade9d652a65d", 2200),
    cardImage: u("photo-1595815771614-ade9d652a65d", 1200),
    alt: "A houseboat on Dal Lake beneath snow-dusted Kashmir mountains",
    summary:
      "A shikara across Dal Lake, the Gulmarg gondola into the snowline and Pahalgam's pine valleys - Kashmir, properly.",
    overview:
      "Kashmir needs no selling - it needs pacing. This five-day journey gives Srinagar's lakes, Gulmarg's alpine heights and Pahalgam's river valleys each their own unhurried day, with a night on a heritage houseboat woven in. Every season paints it differently; tell us your month and we'll shape the rest.",
    highlights: [
      "Shikara ride and houseboat night on Dal Lake",
      "Gulmarg gondola towards Apharwat's snows",
      "Betaab Valley and Aru in Pahalgam",
      "Mughal gardens: Nishat, Shalimar & Pari Mahal",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        description:
          "Land at Srinagar and settle into your hotel or houseboat. Sunset shikara ride across Dal Lake past floating gardens and the old lakefront.",
      },
      {
        day: 2,
        title: "Gulmarg day",
        description:
          "Drive to Gulmarg, the 'meadow of flowers', and ride the gondola towards Apharwat peak - snow play in winter, wildflower meadows in summer. Return to Srinagar by evening.",
      },
      {
        day: 3,
        title: "Pahalgam's valleys",
        description:
          "A scenic drive past saffron fields to Pahalgam. Local unions ferry you to Betaab Valley and Aru - pine forests, river bends and mountain air. Overnight in Pahalgam.",
      },
      {
        day: 4,
        title: "Mughal gardens & old Srinagar",
        description:
          "Return to Srinagar for the Mughal gardens - Nishat, Shalimar and hilltop Pari Mahal - with time in the old city's handicraft workshops for papier-mâché and pashmina.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "One last kahwa by the lake before your airport transfer. Add Sonamarg or Doodhpathri if you can spare a day - most travellers wish they had.",
      },
    ],
    inclusions: [
      "4 nights' accommodation (including one houseboat night) with breakfast and dinner",
      "Private car with driver for all transfers and sightseeing",
      "One-hour shikara ride on Dal Lake",
      "All parking, tolls and driver expenses",
    ],
    exclusions: [
      "Flights to/from Srinagar (we can book these)",
      "Gulmarg gondola tickets and pony/union vehicle charges",
      "Lunches and personal expenses",
      "Travel insurance",
    ],
    bestTime: "March-October for meadows; December-February for snow",
    goodToKnow: [
      "Gondola Phase 2 is weather-dependent; we always book Phase 1 ahead.",
      "Local union taxis operate the Betaab/Aru stretch - it's the rule of the valley.",
      "Woollens are essential outside June-August.",
    ],
    tips: [
      "Book the gondola online in advance in peak season - queues are legendary.",
      "Try rogan josh and gushtaba at a proper wazwan at least once.",
      "Keep a buffer day in winter; snowfall occasionally closes the Gulmarg road.",
    ],
    related: ["kerala-backwaters-hills", "goa-sun-susegad", "istanbul-two-continents"],
  },
  {
    slug: "goa-sun-susegad",
    title: "Goa: Sun & Susegad",
    destinationSlug: "goa",
    place: "North & South Goa",
    country: "India",
    nights: 3,
    days: 4,
    styles: ["Friends & Groups", "Family", "Honeymoon"],
    featured: true,
    startingPrice: null,
    priceNote: "Priced on request - varies widely by season and hotel.",
    heroImage: u("photo-1512343879784-a960bf40e7f2", 2200),
    cardImage: u("photo-1587922546307-776227941871", 1200),
    alt: "Palm trees leaning over a golden beach in Goa at sunset",
    cardAlt: "Beach huts under swaying palms in Goa",
    summary:
      "Beaches north and south, Old Goa's basilicas, a sunset river cruise and exactly as much nightlife as you want.",
    overview:
      "Goa flexes to fit any group - spice it up with North Goa's shacks and markets or slow it down on the quiet southern sands. This base itinerary covers both, plus the Latin quarter and a Mandovi sunset cruise, and we tune the balance to your crew.",
    highlights: [
      "North Goa beach circuit: Baga, Calangute & Anjuna",
      "Old Goa's basilicas and Fontainhas' Latin quarter",
      "Mandovi River sunset cruise",
      "South Goa beach day at Colva or Palolem",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & sunset cruise",
        description:
          "Arrive in Goa, check in and head straight for the Mandovi River's sunset cruise with live music, followed by dinner on the Panjim waterfront.",
      },
      {
        day: 2,
        title: "North Goa day",
        description:
          "Fort Aguada's ramparts, then the classic beach run - Calangute, Baga and Anjuna - with a beach-shack lunch and the Saturday night market if your dates align.",
      },
      {
        day: 3,
        title: "Heritage & the quiet south",
        description:
          "Morning at Old Goa's Basilica of Bom Jesus and Sé Cathedral, a wander through Fontainhas' colour-washed lanes, then an unhurried afternoon on a southern beach.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "A slow Goan breakfast - poi, if you're wise - and your airport transfer. Extend with a dolphin trip or a Dudhsagar Falls day in season.",
      },
    ],
    inclusions: [
      "3 nights' accommodation with breakfast",
      "Return airport transfers",
      "North Goa and heritage sightseeing by private car",
      "Mandovi sunset cruise tickets",
    ],
    exclusions: [
      "Travel to/from Goa (flights or trains - we can arrange)",
      "Water-sports charges",
      "Lunches, dinners and personal expenses",
      "Travel insurance",
    ],
    bestTime: "November to February; May-September for monsoon lushness and low prices",
    goodToKnow: [
      "Dudhsagar Falls trips run roughly October to May.",
      "Scooter hire needs a valid driving licence - carry the original.",
      "South Goa hotels suit families; North suits groups chasing the buzz.",
    ],
    tips: [
      "Beach shacks re-open in November - the season truly starts then.",
      "Book the Saturday Night Market evening free if visiting Arpora.",
      "Carry cash for shacks and markets; cards are patchy.",
    ],
    related: ["kerala-backwaters-hills", "bali-temples-beaches", "bangkok-pattaya-classic"],
  },
  {
    slug: "maldives-lagoon-escape",
    title: "Maldives Lagoon Escape",
    destinationSlug: "maldives",
    place: "Maldives",
    country: "Maldives",
    nights: 3,
    days: 4,
    styles: ["Honeymoon", "Luxury"],
    featured: false,
    startingPrice: null,
    priceNote: "Priced on request - resort choice drives the cost; we'll match one to your budget.",
    heroImage: u("photo-1514282401047-d79a71a590e8", 2200),
    cardImage: u("photo-1573843981267-be1999ff37cd", 1200),
    alt: "An overwater villa walkway stretching into a clear Maldivian lagoon",
    summary:
      "Seaplane arrivals, a villa over the lagoon and days measured in snorkels and sunsets. The definitive honeymoon.",
    overview:
      "The Maldives is less an itinerary than a feeling - and the entire art lies in choosing the right island for your budget and mood. That's where we earn our keep: all-inclusive or à la carte, seaplane or speedboat, adults-only calm or family splash. Tell us the dream; we'll find the island.",
    highlights: [
      "Overwater or beach villa, matched to your budget",
      "House-reef snorkelling steps from your deck",
      "Sunset dolphin cruise",
      "Candlelit private dinner on the sand (on request)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival by sea or air",
        description:
          "Land at Malé and transfer by speedboat or seaplane - itself one of the world's great scenic flights - to your island. The afternoon disappears into the lagoon.",
      },
      {
        day: 2,
        title: "Reef day",
        description:
          "Snorkel the house reef among turtles and reef fish, try a sandbank picnic or simply master the hammock. Evening dolphin cruise as the sky turns rose-gold.",
      },
      {
        day: 3,
        title: "Your island, your pace",
        description:
          "A spa morning, a diving taster, or nothing at all - this day is deliberately unplanned. We'll arrange a private beach dinner if the occasion calls for it.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "A last swim before the boat back to Malé and your flight home, several hundred photos heavier.",
      },
    ],
    inclusions: [
      "3 nights' resort accommodation on your chosen meal plan",
      "Return Malé airport transfers (speedboat or seaplane per resort)",
      "Resort taxes and green tax",
    ],
    exclusions: [
      "Flights (Chennai-Malé is under two hours; we can book)",
      "Meals and drinks beyond the chosen plan",
      "Water sports and spa treatments",
      "Travel insurance",
    ],
    bestTime: "November to April for glassy lagoons",
    goodToKnow: [
      "Indians get free visa-on-arrival in the Maldives.",
      "Seaplane transfers operate daylight hours only - book flights accordingly.",
      "All-inclusive plans usually pay for themselves at overwater resorts.",
    ],
    tips: [
      "Announce your honeymoon when booking - resorts love an excuse to spoil you.",
      "Reef-safe sunscreen only; the coral will thank you.",
      "Pack light - island dress code is barefoot.",
    ],
    related: ["bali-temples-beaches", "istanbul-two-continents", "kerala-backwaters-hills"],
  },
];

export interface TravelStyle {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  alt: string;
}

export const travelStyles: TravelStyle[] = [
  {
    slug: "family",
    name: "Family Escapes",
    short: "Holidays every generation enjoys",
    description:
      "Journeys paced for grandparents and toddlers alike - comfortable hotels, sensible travel times, and days that balance sights with rest. We handle the logistics so the family only handles the memories.",
    image: u("photo-1609220136736-443140cffec6", 1200),
    alt: "A smiling father carrying his two young children on holiday",
  },
  {
    slug: "honeymoon",
    name: "Honeymoons",
    short: "Beginnings worth savouring",
    description:
      "Private villas, candlelit dinners and itineraries with generous room to simply be together. From Maldivian lagoons to Kashmir's houseboats, we design honeymoons around the two of you.",
    image: u("photo-1520854221256-17451cc331bf", 1200),
    alt: "A newly married couple holding hands",
  },
  {
    slug: "groups",
    name: "Friends & Groups",
    short: "Better together, smoother with us",
    description:
      "Group fares, connecting rooms, shared villas and plans that survive contact with twelve opinions. Bachelor trips, college reunions or three families travelling as one - we keep it easy.",
    image: u("photo-1511895426328-dc8714191300", 1200),
    alt: "A group of friends and family holding hands against a sunset sky",
  },
  {
    slug: "spiritual",
    name: "Spiritual Journeys",
    short: "Travel that centres you",
    description:
      "Temple circuits across South India, Varanasi's ghats, Char Dham and beyond - organised with the care and respect these journeys deserve, for individuals and groups.",
    image: u("photo-1561361058-c24cecae35ca", 1200),
    alt: "Evening aarti lamps glowing on the ghats of Varanasi",
  },
  {
    slug: "luxury",
    name: "Luxury Breaks",
    short: "The finer version of everywhere",
    description:
      "Suites with views, private guides, seaplane transfers and tables that need booking months out. When the occasion calls for the best, we know exactly where it lives.",
    image: u("photo-1571896349842-33c89424de2d", 1200),
    alt: "An infinity pool overlooking the sea at a luxury resort",
  },
  {
    slug: "corporate",
    name: "Corporate & MICE",
    short: "Offsites, incentives & events",
    description:
      "Conferences, dealer meets, incentive trips and team offsites - planned end to end with venue sourcing, group logistics, and on-ground coordination your HR team will love.",
    image: u("photo-1542744173-8e7e53415bb0", 1200),
    alt: "Colleagues collaborating in a bright modern meeting space",
  },
];

export const whyGkvr = [
  {
    title: "Designed around you",
    description:
      "Every itinerary is shaped around the travellers - pace, interests and budget - never lifted from a brochure.",
    icon: "compass",
  },
  {
    title: "One travel partner",
    description:
      "Accommodation, transport, sightseeing and coordination handled by a single accountable team.",
    icon: "handshake",
  },
  {
    title: "Clear and considered",
    description:
      "Practical recommendations and transparent planning, without hidden costs or unnecessary complexity.",
    icon: "list-checks",
  },
  {
    title: "Support that travels with you",
    description:
      "Help before departure and assistance throughout the journey - a real person, a phone call away.",
    icon: "life-buoy",
  },
] as const;

export const planningSteps = [
  {
    step: 1,
    title: "Tell us your travel idea",
    description:
      "A destination, a month, a budget - or just a feeling. Share it by phone, WhatsApp or the trip planner.",
  },
  {
    step: 2,
    title: "Receive a curated plan",
    description:
      "We come back with destinations, stays and a day-by-day flow matched to your dates and budget.",
  },
  {
    step: 3,
    title: "Refine it with a consultant",
    description:
      "Swap hotels, stretch days, add experiences. We iterate until the plan feels unmistakably yours.",
  },
  {
    step: 4,
    title: "Travel with confidence",
    description:
      "Documents sorted, bookings confirmed, and our team on call from first flight to final landing.",
  },
] as const;

export const faqs = [
  {
    question: "Can GKVR customise an existing package?",
    answer:
      "Absolutely - every journey on this site is a starting point, not a fixed product. We routinely change hotels, add or remove days, upgrade transfers and weave in experiences. Tell us what you'd change and we'll re-plan it around you.",
  },
  {
    question: "Do you plan both Indian and international holidays?",
    answer:
      "Yes. We design domestic journeys across India - Kerala, Kashmir, Goa, Karnataka, the Golden Triangle and more - as well as international holidays to destinations including Dubai, Singapore, Bali, Thailand, Turkey, the Maldives and Vietnam.",
  },
  {
    question: "Can you recommend a destination based on my budget?",
    answer:
      "That's one of our favourite conversations. Share your approximate budget, travel month and the kind of experience you're after, and we'll shortlist destinations that genuinely fit - including options you may not have considered.",
  },
  {
    question: "Do you support honeymoon and family travel?",
    answer:
      "Both are specialities. Honeymoons get romantic touches, privacy and unhurried pacing; family trips get child-friendly hotels, sensible travel times and flexibility for every generation travelling with you.",
  },
  {
    question: "Can you arrange corporate or group travel?",
    answer:
      "Yes - from team offsites and dealer meets to full MICE programmes with venue sourcing, group flights, and on-ground coordination. We also plan large family groups and friends' trips with group-friendly stays and fares.",
  },
  {
    question: "When should I start planning an international holiday?",
    answer:
      "Six to eight weeks ahead is comfortable for most destinations, allowing time for visas, good flight fares and first-choice hotels. Peak seasons - summer holidays, Diwali, Christmas and New Year - reward planning two to three months out.",
  },
  {
    question: "How do I request an itinerary?",
    answer:
      "Use the trip planner on this site, call us, or say hello on WhatsApp - whichever is easiest. Share your dates, group size and budget, and a consultant will come back with a tailored plan, usually within one working day.",
  },
] as const;

export const marqueeItems = [
  "Family holidays",
  "Honeymoons",
  "Group tours",
  "Corporate & MICE",
  "Custom itineraries",
  "Visa assistance",
  "Domestic journeys",
  "International escapes",
] as const;

export const heroImages = {
  primary: {
    src: u("photo-1537996194471-e657df975ab4", 2400),
    alt: "The Ulun Danu temple rising from Lake Bratan under a soft Bali sky",
  },
  secondary: {
    src: u("photo-1595815771614-ade9d652a65d", 1200),
    alt: "A houseboat on Dal Lake beneath Kashmir's mountains",
  },
  tertiary: {
    src: u("photo-1512453979798-5ea266f8880c", 1200),
    alt: "Dubai's skyline shimmering across the marina at dusk",
  },
  quaternary: {
    src: u("photo-1514282401047-d79a71a590e8", 1200),
    alt: "Overwater villas reaching into a turquoise Maldivian lagoon",
  },
} as const;

export const sectionImages = {
  whyGkvr: {
    src: u("photo-1600880292203-757bb62b4baf", 1400),
    alt: "A travel consultant talking a couple through their holiday plan",
  },
  consult: {
    src: u("photo-1436491865332-7a61a109cc05", 1600),
    alt: "An aircraft wing above a sea of clouds at sunrise",
  },
  finalCta: {
    src: u("photo-1529333166437-7750a6dd5a70", 2200),
    alt: "Friends raising their arms to the sunset on a journey together",
  },
  about: {
    src: u("photo-1521295121783-8a321d551ad2", 1600),
    alt: "A vintage globe on a travel planner's desk",
  },
  corporate: {
    src: u("photo-1517245386807-bb43f82c33c4", 1600),
    alt: "A team in discussion around a table at a corporate offsite",
  },
  india: {
    src: u("photo-1564507592333-c60657eea523", 2000),
    alt: "The Taj Mahal glowing softly at dawn",
  },
  international: {
    src: u("photo-1530789253388-582c481c54b0", 2000),
    alt: "Travellers watching hot-air balloons drift over Cappadocia at dawn",
  },
} as const;

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);

export const getJourney = (slug: string) =>
  journeys.find((j) => j.slug === slug);

export const journeysForDestination = (slug: string) =>
  journeys.filter((j) => j.destinationSlug === slug);

export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
