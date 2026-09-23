import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  CalendarCheck,
  ClipboardList,
  Plane,
  Presentation,
  Users,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import { brand, sectionImages, travelStyles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Corporate Travel & MICE from Chennai",
  description:
    "Team offsites, incentive trips, conferences and dealer meets - GKVR Vacations plans corporate travel and MICE programmes end to end from Chennai.",
  alternates: { canonical: "/corporate" },
};

const services = [
  {
    icon: Presentation,
    title: "Conferences & meetings",
    description:
      "Venue sourcing, room blocks, AV coordination and delegate logistics for meets of twenty to several hundred.",
  },
  {
    icon: Plane,
    title: "Incentive travel",
    description:
      "Reward journeys your top performers actually talk about - domestic or international, on budget.",
  },
  {
    icon: Users,
    title: "Team offsites",
    description:
      "Resorts, activities and agendas balanced between work and unwinding, an easy drive or flight from Chennai.",
  },
  {
    icon: Briefcase,
    title: "Business travel",
    description:
      "Flights, hotels and ground transport for travelling teams - organised, reconciled, one point of contact.",
  },
  {
    icon: CalendarCheck,
    title: "Dealer & channel meets",
    description:
      "End-to-end planning for partner conventions: invitations, travel desks, staging and hospitality.",
  },
  {
    icon: ClipboardList,
    title: "On-ground coordination",
    description:
      "Our coordinators travel with larger groups so schedules hold and issues get solved before anyone notices.",
  },
];

export default function CorporatePage() {
  const corporateStyle = travelStyles.find((t) => t.slug === "corporate")!;

  return (
    <>
      <PageHero
        image={corporateStyle.image}
        alt={corporateStyle.alt}
        eyebrow="Corporate & MICE"
        title="Business travel, minus the busywork"
        description="From ten-person offsites to multi-city incentive programmes, we plan corporate travel the way we plan holidays: personally, transparently and end to end."
        crumbs={[{ label: "Corporate & MICE" }]}
      />

      <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="What we handle"
          title="One partner for the whole programme"
          description="Tell us the headcount, dates and objective - we come back with venues, budgets and a run-sheet."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.06, 0.3)}>
              <div className="h-full rounded-xl3 border border-ink/8 bg-white p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-xl2 bg-saffron/15 text-saffron-deep">
                  <s.icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display mt-5 text-xl font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-charcoal/70">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-ivory lg:py-24">
        <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl3">
              <Image
                src={sectionImages.corporate.src}
                alt={sectionImages.corporate.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Let&apos;s scope your next offsite
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ivory/75">
              Share your headcount, preferred dates and budget band. We&apos;ll
              respond with two or three venue directions and a realistic
              per-head estimate - usually within two working days.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryLink href="/plan-my-trip?style=Corporate%20%2F%20MICE">
                Request a Proposal
              </PrimaryLink>
              <a
                href={brand.phoneHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-ivory/35 px-7 py-3 text-[0.9375rem] font-semibold text-ivory transition-all duration-200 ease-out hover:border-ivory hover:bg-ivory/10"
              >
                Call {brand.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
