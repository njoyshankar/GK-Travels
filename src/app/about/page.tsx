import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CountUp from "@/components/ui/CountUp";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink, GhostLink } from "@/components/ui/buttons";
import { aboutStory, sectionImages, trustStats, whyGkvr } from "@/data/site-content";
import { Compass, Handshake, LifeBuoy, ListChecks } from "lucide-react";

export const metadata: Metadata = {
  title: "About GKVR Vacations - Travel Consultants in Chennai",
  description:
    "GKVR Vacations is a Chennai-based travel consultancy with over 20 years of expertise and 200+ tours organised worldwide - personalised domestic and international holidays, planned end to end.",
  alternates: { canonical: "/about" },
};

const icons = {
  compass: Compass,
  handshake: Handshake,
  "list-checks": ListChecks,
  "life-buoy": LifeBuoy,
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={sectionImages.about.src}
        alt={sectionImages.about.alt}
        eyebrow="About GKVR"
        title="Travel, planned the human way"
        description="We're a Chennai-based travel consultancy - not a booking website. Real people plan your journey, and real people answer when you call."
        crumbs={[{ label: "About" }]}
        compact
      />

      {/* Heritage story */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron">
              <span className="route-line inline-block h-px w-10" aria-hidden />
              {aboutStory.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-balance text-3xl font-medium leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
              {aboutStory.title}
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ivory/75">
              {aboutStory.paragraphs.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="flex h-full flex-col justify-center gap-10 border-l border-dashed border-saffron/40 pl-8 lg:pl-12">
              {trustStats.map((stat, i) => (
                <div key={stat.label}>
                  <dt className="order-last mt-2 text-[0.9375rem] font-medium text-ivory/65">
                    {stat.label}
                  </dt>
                  <dd
                    className={`font-display font-extrabold leading-none text-saffron ${
                      i === 0
                        ? "text-8xl sm:text-9xl"
                        : "text-6xl sm:text-7xl"
                    }`}
                  >
                    <CountUp value={stat.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
            Why we exist
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-charcoal/75">
            <p>
              Anyone can book a flight and a hotel. What&apos;s hard is knowing
              whether Bali beats the Maldives for your budget, which week the
              Gulmarg gondola is worth it, or how to keep three generations of
              one family happy across four days in Singapore.
            </p>
            <p>
              That judgement is what GKVR Vacations offers. We listen first,
              recommend honestly - including telling you when a destination
              doesn&apos;t suit your dates - and then plan the journey end to
              end: stays, transport, experiences, documentation and the small
              details in between.
            </p>
            <p>
              And because journeys rarely go exactly to plan, we stay with you
              while you travel. A delayed flight or a changed plan is our
              problem to solve, not your holiday to lose. Travel with comfort.
              Travel with trust. Travel to remember, forever.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryLink href="/plan-my-trip">Plan My Trip</PrimaryLink>
            <GhostLink href="/contact">Meet us in Chennai</GhostLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="space-y-6">
            {whyGkvr.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl3 border border-ink/8 bg-white p-6"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl2 bg-saffron/15 text-saffron-deep">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-sand/40 py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="Consultancy, not checkout"
            description="No cart, no checkout button, no bots. A conversation, a plan, a journey - and a person accountable for all three."
            align="center"
          />
          <Reveal className="mx-auto mt-12 max-w-3xl rounded-xl3 border border-ink/10 bg-white p-8 text-center sm:p-12">
            <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              “Tell us your dates, your budget and how you want to feel.
              We&apos;ll handle everything between here and there.”
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-saffron-deep">
              The GKVR Vacations team, Chennai
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
