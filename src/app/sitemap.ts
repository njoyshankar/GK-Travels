import type { MetadataRoute } from "next";
import { brand, destinations, journeys } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = brand.siteUrl;
  const now = new Date();

  const staticPages = [
    "",
    "/destinations",
    "/destinations/india",
    "/destinations/international",
    "/journeys",
    "/holiday-types",
    "/plan-my-trip",
    "/corporate",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const destinationPages = destinations.map((d) => ({
    url: `${base}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const journeyPages = journeys.map((j) => ({
    url: `${base}/journeys/${j.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...destinationPages, ...journeyPages];
}
