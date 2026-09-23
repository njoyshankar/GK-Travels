import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Check,
  Clock,
  Info,
  Lightbulb,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ItineraryTimeline from "@/components/journeys/ItineraryTimeline";
import JourneyCard from "@/components/cards/JourneyCard";
import Reveal from "@/components/ui/Reveal";
import {
  formatINR,
  getJourney,
  journeys,
} from "@/data/site-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return {};
  return {
    title: `${journey.title} - ${journey.nights}N/${journey.days}D`,
    description: journey.summary,
    alternates: { canonical: `/journeys/${slug}` },
  };
}

export default async function JourneyPage({ params }: Props) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  const related = journey.related
    .map((s) => getJourney(s))
    .filter((j): j is NonNullable<typeof j> => Boolean(j));
  const planHref = `/plan-my-trip?package=${journey.slug}`;

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative overflow-hidden bg-ink-deep text-ivory">
        <Image
          src={journey.heroImage}
          alt={journey.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-deep/95 via-ink-deep/35 to-ink-deep/55"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[62svh] max-w-[1320px] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Journeys", href: "/journeys" },
              { label: journey.title },
            ]}
          />
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-saffron px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-ink-deep">
              <Sparkles className="size-3" aria-hidden />
              Fully customisable
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-ivory">
              <Clock className="size-3" aria-hidden />
              {journey.nights} Nights / {journey.days} Days
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ivory/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-ivory">
              <MapPin className="size-3" aria-hidden />
              {journey.place}, {journey.country}
            </span>
          </div>
          <h1 className="font-display mt-5 max-w-3xl text-balance text-4xl font-medium leading-[1.06] sm:text-5xl lg:text-6xl">
            {journey.title}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
            {journey.summary}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.7fr_1fr] lg:gap-16 lg:px-8">
        {/* Main column */}
        <div className="space-y-16">
          <Reveal as="section">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
              {journey.overview}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {journey.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-xl2 border border-ink/8 bg-white p-4 text-[0.9375rem] font-medium text-ink"
                >
                  <Check className="mt-0.5 size-4.5 shrink-0 text-saffron-deep" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Day by day
            </h2>
            <ItineraryTimeline itinerary={[...journey.itinerary]} />
          </Reveal>

          <Reveal as="section">
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-xl3 border border-ink/8 bg-white p-7">
                <h2 className="font-display text-xl font-medium text-ink">
                  Inclusions
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {journey.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-charcoal/75">
                      <Check className="mt-1 size-4 shrink-0 text-green-700" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl3 border border-ink/8 bg-white p-7">
                <h2 className="font-display text-xl font-medium text-ink">
                  Exclusions
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {journey.exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-charcoal/75">
                      <X className="mt-1 size-4 shrink-0 text-red-700/70" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal as="section">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Good to know
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex gap-4 rounded-xl2 bg-sand/50 p-5">
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                <div>
                  <h3 className="font-semibold text-ink">Best time to travel</h3>
                  <p className="mt-1 text-[0.9375rem] text-charcoal/75">
                    {journey.bestTime}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl2 bg-sand/50 p-5">
                <Info className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                <div>
                  <h3 className="font-semibold text-ink">Destination notes</h3>
                  <ul className="mt-2 space-y-1.5">
                    {journey.goodToKnow.map((g) => (
                      <li key={g} className="text-[0.9375rem] text-charcoal/75">
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl2 bg-sand/50 p-5">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                <div>
                  <h3 className="font-semibold text-ink">Traveller tips</h3>
                  <ul className="mt-2 space-y-1.5">
                    {journey.tips.map((t) => (
                      <li key={t} className="text-[0.9375rem] text-charcoal/75">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sticky enquiry rail */}
        <aside className="lg:relative">
          <div className="rounded-xl3 border border-ink/10 bg-white p-8 shadow-[0_24px_56px_-32px_rgba(23,27,69,0.35)] lg:sticky lg:top-24">
            {journey.startingPrice ? (
              <>
                <p className="text-sm font-medium text-mist">Starting from</p>
                <p className="font-display text-4xl font-semibold text-ink">
                  {formatINR(journey.startingPrice)}
                  <span className="text-base font-normal text-mist">
                    {" "}
                    / person
                  </span>
                </p>
              </>
            ) : (
              <p className="font-display text-2xl font-medium text-ink">
                Priced around you
              </p>
            )}
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {journey.priceNote}
            </p>

            <Link
              href={planHref}
              className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-saffron px-6 py-3 font-semibold text-ink-deep shadow-[0_8px_24px_-8px_rgba(240,166,58,0.55)] transition-colors hover:bg-saffron-deep hover:text-ivory"
            >
              Customise This Trip
            </Link>
            <Link
              href="/contact"
              className="mt-3 flex min-h-12 w-full items-center justify-center rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink transition-colors hover:border-ink"
            >
              Ask a question first
            </Link>

            <ul className="mt-7 space-y-2.5 border-t border-ink/8 pt-6">
              {[
                "Reshaped around your dates & budget",
                "No payment needed to get a plan",
                "Response within one working day",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                  <Check className="mt-0.5 size-4 shrink-0 text-saffron-deep" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-sand/40 py-20">
          <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Related journeys
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((j) => (
                <JourneyCard key={j.slug} journey={j} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile bottom action bar (package-specific) */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-4 border-t border-ink/10 bg-ivory/95 px-4 py-3 pb-[max(env(safe-area-inset-bottom),0.75rem)] backdrop-blur-md md:hidden">
        <div className="min-w-0">
          {journey.startingPrice ? (
            <>
              <p className="text-[0.6875rem] font-medium text-mist">
                Starting from
              </p>
              <p className="truncate font-bold text-ink">
                {formatINR(journey.startingPrice)} / person
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold text-ink">Priced around you</p>
          )}
        </div>
        <Link
          href={planHref}
          className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-saffron px-6 py-2.5 font-semibold text-ink-deep"
        >
          Customise Trip
        </Link>
      </div>
    </>
  );
}
