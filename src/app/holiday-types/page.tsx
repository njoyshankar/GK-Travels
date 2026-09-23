import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink, GhostLink } from "@/components/ui/buttons";
import { travelStyles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Holiday Types - Family, Honeymoon, Groups, Spiritual & Luxury",
  description:
    "Whatever the occasion - family escape, honeymoon, friends' trip, spiritual journey, luxury break or corporate offsite - GKVR Vacations designs it around you.",
  alternates: { canonical: "/holiday-types" },
};

export default function HolidayTypesPage() {
  const hero = travelStyles[0];

  return (
    <>
      <PageHero
        image={hero.image}
        alt={hero.alt}
        eyebrow="Holiday types"
        title="Every occasion deserves its own journey"
        description="The same beach means something different to a honeymooning couple, a family of six and a college gang. We plan for the occasion, not just the destination."
        crumbs={[{ label: "Holiday Types" }]}
        compact
      />

      <div className="mx-auto max-w-[1320px] space-y-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {travelStyles.map((style, i) => {
          const reversed = i % 2 === 1;
          return (
            <Reveal
              key={style.slug}
              as="section"
              className="scroll-mt-28"
            >
              <div
                id={style.slug}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-last" : ""
                }`}
              >
                <div className="group relative aspect-[4/3] overflow-hidden rounded-xl3">
                  <Image
                    src={style.image}
                    alt={style.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div>
                  <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.22em] text-saffron-deep">
                    <span className="route-line inline-block h-px w-8" aria-hidden />
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display mt-3 text-3xl font-medium text-ink sm:text-4xl">
                    {style.name}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-saffron-deep">
                    {style.short}
                  </p>
                  <p className="mt-4 max-w-lg text-[1.0625rem] leading-relaxed text-charcoal/75">
                    {style.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryLink
                      href={
                        style.slug === "corporate"
                          ? "/corporate"
                          : `/plan-my-trip?style=${encodeURIComponent(style.name)}`
                      }
                    >
                      {style.slug === "corporate"
                        ? "Corporate & MICE details"
                        : "Plan this journey"}
                    </PrimaryLink>
                    <GhostLink href="/destinations">Browse destinations</GhostLink>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
