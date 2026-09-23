import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import DestinationCard from "@/components/cards/DestinationCard";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import { destinations, sectionImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "India Destinations - Kerala, Kashmir, Goa & More",
  description:
    "Domestic holidays planned from Chennai: Kerala's backwaters, Kashmir's mountains, Goa's beaches, Karnataka's heritage and the Delhi Golden Triangle.",
  alternates: { canonical: "/destinations/india" },
};

export default function IndiaDestinationsPage() {
  const india = destinations.filter((d) => d.region === "india");

  return (
    <>
      <PageHero
        image={sectionImages.india.src}
        alt={sectionImages.india.alt}
        eyebrow="Incredible India"
        title="India, planned properly"
        description="Short flights, familiar food, unforgettable places. These are the domestic journeys we plan most often - each one customisable end to end."
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: "India" },
        ]}
      />

      <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {india.map((d, i) => (
            <Reveal key={d.slug} delay={Math.min(i * 0.06, 0.3)}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-xl3 bg-ink p-10 text-center text-ivory sm:p-14">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">
            Somewhere else in India on your mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/70">
            Rajasthan, the North-East, the Andamans, temple circuits across
            Tamil Nadu - if it&apos;s in India, we can plan it. Tell us where.
          </p>
          <div className="mt-7">
            <PrimaryLink href="/plan-my-trip">Plan My Trip</PrimaryLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
