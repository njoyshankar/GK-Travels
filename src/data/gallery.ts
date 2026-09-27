/**
 * Client travel gallery.
 *
 * "traveller" entries are real GKVR guests (originals in gallery-raw/,
 * prepared by scripts/enhance-gallery.py - no editing, resize only).
 * "destination" entries are licensed Pexels scenes of places GKVR
 * plans, shown under their own heading.
 */

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  section: "traveller" | "destination";
  location: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/g-01.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "Andaman Islands",
    alt: "A traveller with arms outstretched on rock pools by the ocean",
  },
  {
    src: "/gallery/g-02.jpg",
    width: 1600,
    height: 1201,
    section: "traveller",
    location: "Group departure",
    alt: "A GKVR tour group with their luggage at the airport before departure",
  },
  {
    src: "/gallery/g-03.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "South India",
    alt: "A traveller at the lamp-lit entrance of an ornate heritage mansion",
  },
  {
    src: "/gallery/g-04.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "Kashmir",
    alt: "Clouds drifting across forested Himalayan slopes above a green valley",
  },
  {
    src: "/gallery/g-05.jpg",
    width: 1179,
    height: 1133,
    section: "traveller",
    location: "Andaman Islands",
    alt: "A traveller scuba diving in clear blue water",
  },
  {
    src: "/gallery/g-06.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "Sonamarg, Kashmir",
    alt: "A traveller with arms wide facing snow-streaked Himalayan peaks",
  },
  {
    src: "/gallery/g-07.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "Pahalgam, Kashmir",
    alt: "A couple on ponies with green mountains behind them",
  },
  {
    src: "/gallery/g-08.jpg",
    width: 896,
    height: 1195,
    section: "traveller",
    location: "Pahalgam, Kashmir",
    alt: "A couple in rafting gear beside a Himalayan river",
  },
  {
    src: "/gallery/g-09.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "Himalayas",
    alt: "An aircraft wing above snow-capped Himalayan ranges",
  },
  {
    src: "/gallery/g-10.jpg",
    width: 960,
    height: 1280,
    section: "traveller",
    location: "Gulmarg, Kashmir",
    alt: "A traveller in a sun hat looking over flower-dotted meadows",
  },
  {
    src: "/gallery/g-11.jpg",
    width: 1179,
    height: 1142,
    section: "traveller",
    location: "North Bay, Andamans",
    alt: "A sea-walker surrounded by striped tropical fish underwater",
  },
  {
    src: "/gallery/g-12.jpg",
    width: 1280,
    height: 957,
    section: "traveller",
    location: "Agra",
    alt: "A large family group at the red sandstone gate of Agra Fort",
  },
  {
    src: "/gallery/g-13.jpg",
    width: 1280,
    height: 853,
    section: "traveller",
    location: "New Delhi",
    alt: "A multi-generation family group in front of India Gate",
  },
  {
    src: "/gallery/g-14.jpg",
    width: 1163,
    height: 1167,
    section: "traveller",
    location: "Port Blair, Andamans",
    alt: "A traveller in front of the island ferry at the jetty",
  },
  {
    src: "/gallery/g-15.jpg",
    width: 1197,
    height: 1197,
    section: "traveller",
    location: "Agra",
    alt: "A family of five at the great gateway of the Taj Mahal",
  },
  {
    src: "/gallery/g-16.jpg",
    width: 1232,
    height: 816,
    section: "traveller",
    location: "Agra",
    alt: "A joint family group posing in front of the Taj Mahal",
  },
  {
    src: "/gallery/g-17.jpg",
    width: 1170,
    height: 1800,
    section: "destination",
    location: "Dubai, UAE",
    alt: "Travellers walking below the Burj Khalifa in Dubai",
  },
  {
    src: "/gallery/g-18.jpg",
    width: 1800,
    height: 1012,
    section: "destination",
    location: "Maldives",
    alt: "A couple wading through the clear lagoon of a Maldivian beach",
  },
  {
    src: "/gallery/g-19.jpg",
    width: 1800,
    height: 1447,
    section: "destination",
    location: "Singapore",
    alt: "Two travellers photographing Marina Bay Sands in Singapore",
  },
  {
    src: "/gallery/g-20.jpg",
    width: 1800,
    height: 1200,
    section: "destination",
    location: "Bangkok, Thailand",
    alt: "Visitors beneath the gilded spires of Bangkok's Grand Palace",
  },
];
