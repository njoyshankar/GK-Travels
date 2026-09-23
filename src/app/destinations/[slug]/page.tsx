import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CalendarDays, MapPin, Users } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import JourneyCard from "@/components/cards/JourneyCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { PrimaryLink, GhostLink } from "@/components/ui/buttons";
import {
  destinations,
  getDestination,
  journeysForDestination,
} from "@/data/site-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return {
    title: `${destination.name} Holidays from Chennai`,
    description: `${destination.tagline}. ${destination.blurb.slice(0, 140)}…`,
    alternates: { canonical: `/destinations/${slug}` },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const related = journeysForDestination(slug);
  const regionLabel =
    destination.region === "india" ? "India" : "International";
  const regionHref =
    destination.region === "india"
      ? "/destinations/india"
      : "/destinations/international";

  return (
    <>
      <PageHero
        image={destination.image}
        alt={destination.alt}
        eyebrow={`${destination.country} · ${destination.coordinates}`}
        title={destination.name}
        description={destination.tagline}
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: regionLabel, href: regionHref },
          { label: destination.name },
        ]}
      />

      <section className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-ink">
            Why travellers love {destination.name}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/75">
            {destination.blurb}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryLink href={`/plan-my-trip?destination=${destination.slug}`}>
              Plan a Trip to {destination.name}
            </PrimaryLink>
            <GhostLink href="/contact">Ask us anything</GhostLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-xl3 border border-ink/10 bg-white p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              At a glance
            </h2>
            <dl className="mt-6 space-y-5">
              <div className="flex gap-3">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-ink">
                    Best time to visit
                  </dt>
                  <dd className="text-[0.9375rem] text-charcoal/70">
                    {destination.bestTime}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-ink">Ideal for</dt>
                  <dd className="text-[0.9375rem] text-charcoal/70">
                    {destination.idealFor.join(" · ")}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                <div>
                  <dt className="text-sm font-semibold text-ink">Region</dt>
                  <dd className="text-[0.9375rem] text-charcoal/70">
                    {destination.country}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="bg-sand/40 py-20">
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Curated journeys"
              title={`Journeys in ${destination.name}`}
              description="Starting points, not fixed products - every journey below is reshaped around your dates and budget."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length === 0 && (
        <section className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-xl3 bg-ink p-10 text-center text-ivory sm:p-14">
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              We plan {destination.name} from scratch
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ivory/70">
              Tell us your dates and budget, and a consultant will design a{" "}
              {destination.name} itinerary around you - usually within one
              working day.
            </p>
            <div className="mt-7">
              <PrimaryLink href={`/plan-my-trip?destination=${destination.slug}`}>
                Request an Itinerary
              </PrimaryLink>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-mist">
          Looking elsewhere? Browse all{" "}
          <Link href={regionHref} className="font-semibold text-saffron-deep hover:underline">
            {regionLabel.toLowerCase()} destinations
          </Link>
          .
        </p>
      </section>
    </>
  );
}
