import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import DestinationCard from "@/components/cards/DestinationCard";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import { destinations, sectionImages } from "@/data/site-content";

export const metadata: Metadata = {
  title: "International Destinations - Dubai, Bali, Singapore & More",
  description:
    "International holidays planned from Chennai: Dubai, Bali, Singapore, Thailand, Malaysia, the Maldives, Turkey, Vietnam, Sri Lanka and Azerbaijan - visas and flights included.",
  alternates: { canonical: "/destinations/international" },
};

export default function InternationalDestinationsPage() {
  const world = destinations.filter((d) => d.region === "international");

  return (
    <>
      <PageHero
        image={sectionImages.international.src}
        alt={sectionImages.international.alt}
        eyebrow="Around the world"
        title="The world, minus the paperwork"
        description="Flights, visas, transfers and the trip itself - one team plans it all, and stays reachable while you're away."
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: "International" },
        ]}
      />

      <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {world.map((d, i) => (
            <Reveal key={d.slug} delay={Math.min(i * 0.06, 0.3)}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-xl3 bg-ink p-10 text-center text-ivory sm:p-14">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">
            Dreaming beyond this list?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/70">
            Europe, Japan, Australia, safaris in Africa - tell us the dream and
            your budget, and we&apos;ll tell you honestly what it takes.
          </p>
          <div className="mt-7">
            <PrimaryLink href="/plan-my-trip">Plan My Trip</PrimaryLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
