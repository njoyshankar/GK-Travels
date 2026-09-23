"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import JourneyCard from "@/components/cards/JourneyCard";
import Reveal from "@/components/ui/Reveal";
import { GhostLink } from "@/components/ui/buttons";
import { getDestination, journeys, type Region } from "@/data/site-content";
import { EASE } from "@/lib/motion";

export default function FeaturedJourneys() {
  const [region, setRegion] = useState<Region>("international");
  const reduce = useReducedMotion();

  const featured = journeys.filter(
    (j) => j.featured && getDestination(j.destinationSlug)?.region === region
  );

  return (
    <section className="bg-sand/40 py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="02"
            eyebrow="Featured journeys"
            title="Journeys worth taking"
            description="Curated starting points, refined over many departures - every one of them reshaped around your dates, budget and pace."
          />
          <div
            role="tablist"
            aria-label="Choose journeys by region"
            className="inline-flex rounded-full border border-ink/12 bg-white p-1.5"
          >
            {(
              [
                ["international", "Abroad"],
                ["india", "Within India"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                role="tab"
                aria-selected={region === value}
                onClick={() => setRegion(value)}
                className={`min-h-11 rounded-full px-6 py-2.5 text-[0.9375rem] font-semibold transition-colors ${
                  region === value
                    ? "bg-ink text-ivory shadow"
                    : "text-ink/65 hover:text-ink"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={region}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featured.map((j) => (
              <div key={j.slug} className="h-full">
                <JourneyCard journey={j} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <GhostLink href="/journeys">View all journeys</GhostLink>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-mist">
            Prices, where shown, are starting points and depend on travel
            dates, hotel category and availability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
