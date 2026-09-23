import type { Metadata } from "next";
import FlightPath from "@/components/ui/FlightPath";
import PageHero from "@/components/shared/PageHero";
import JourneyCard from "@/components/cards/JourneyCard";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  getDestination,
  journeys,
  sectionImages,
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "Curated Journeys & Holiday Packages",
  description:
    "Curated holiday journeys from Chennai - Dubai, Singapore, Bali, Thailand, Turkey, Kerala, Kashmir and more. Every itinerary fully customisable.",
  alternates: { canonical: "/journeys" },
};

export default function JourneysPage() {
  return (
    <>
      <PageHero
        image={sectionImages.consult.src}
        alt={sectionImages.consult.alt}
        eyebrow="Curated journeys"
        title="Journeys worth taking"
        description="Each journey below is a proven starting point - and every single one bends to fit your dates, budget and pace."
        crumbs={[{ label: "Journeys" }]}
        compact
      />

      <FlightPath className="pt-16" />

      <section className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Abroad"
          title="International journeys"
          description="Visas, flights and every day in between - handled from Chennai."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeys
            .filter(
              (j) => getDestination(j.destinationSlug)?.region === "international"
            )
            .map((j, i) => (
              <Reveal key={j.slug} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                <JourneyCard journey={j} />
              </Reveal>
            ))}
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Within India"
            title="Journeys closer to home"
            description="Short flights, familiar food, unforgettable places."
          />
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {journeys
            .filter((j) => getDestination(j.destinationSlug)?.region === "india")
            .map((j, i) => (
              <Reveal key={j.slug} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                <JourneyCard journey={j} />
              </Reveal>
            ))}
        </div>

        <Reveal className="mt-16 rounded-xl3 bg-ink p-10 text-center text-ivory sm:p-14">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">
            None of these quite fit?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ivory/70">
            Good - that&apos;s what we&apos;re here for. Most of our journeys
            are designed from a blank page around one conversation.
          </p>
          <div className="mt-7">
            <PrimaryLink href="/plan-my-trip">
              Request a Custom Itinerary
            </PrimaryLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
