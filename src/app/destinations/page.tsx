import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FlightPath from "@/components/ui/FlightPath";
import PageHero from "@/components/shared/PageHero";
import DestinationCard from "@/components/cards/DestinationCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { destinations, sectionImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Destinations - India & International",
  description:
    "Explore the destinations GKVR Vacations plans from Chennai: Kerala, Kashmir, Goa and the Golden Triangle, plus Dubai, Bali, Singapore, Thailand, the Maldives, Turkey and more.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  const india = destinations.filter((d) => d.region === "india");
  const world = destinations.filter((d) => d.region === "international");

  return (
    <>
      <PageHero
        image={sectionImages.international.src}
        alt={sectionImages.international.alt}
        eyebrow="Destinations"
        title="Close to home, or across the map"
        description="Every destination below comes with the same promise: an itinerary built around you, not around a brochure."
        crumbs={[{ label: "Destinations" }]}
      />

      <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Incredible India"
            title="Journeys across India"
            description="From Chennai, the whole subcontinent is a short hop away."
          />
          <Link
            href="/destinations/india"
            className="inline-flex min-h-11 items-center gap-2 font-bold text-saffron-deep hover:underline"
          >
            All India destinations <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {india.map((d, i) => (
            <Reveal key={d.slug} delay={Math.min(i * 0.06, 0.3)}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
      </section>

      <FlightPath className="pb-16" />

      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Around the world"
              title="International escapes"
              description="Visas, flights, hotels and every day in between - handled."
            />
            <Link
              href="/destinations/international"
              className="inline-flex min-h-11 items-center gap-2 font-bold text-saffron-deep hover:underline"
            >
              All international destinations{" "}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {world.map((d, i) => (
              <Reveal key={d.slug} delay={Math.min(i * 0.06, 0.3)}>
                <DestinationCard destination={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
