import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import { brand } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact GKVR Vacations - Chennai",
  description:
    "Reach GKVR Vacations in Chennai by phone, WhatsApp or email. Call +91 96290 97222 or write to gkvrvacations@gmail.com to start planning your journey.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-sand/30">
      <section className="mx-auto max-w-[1320px] px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <Breadcrumbs items={[{ label: "Contact" }]} tone="light" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron-deep">
              <span className="route-line inline-block h-px w-10" aria-hidden />
              Contact
            </p>
            <h1 className="font-display mt-4 text-balance text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
              Say hello. We&apos;ll take it from there.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-charcoal/70">
              A phone call is still the fastest way to plan a trip well. But
              WhatsApp, email or the trip planner all reach the same
              consultants - pick whichever suits you.
            </p>

            <dl className="mt-12 space-y-7">
              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl2 bg-white text-saffron-deep shadow-sm">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-mist">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={brand.phoneHref}
                      className="text-lg font-bold text-ink hover:text-saffron-deep"
                    >
                      {brand.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl2 bg-white text-saffron-deep shadow-sm">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-mist">
                    WhatsApp
                  </dt>
                  <dd>
                    <a
                      href={brand.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-ink hover:text-saffron-deep"
                    >
                      Chat with a consultant
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl2 bg-white text-saffron-deep shadow-sm">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-mist">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={brand.emailHref}
                      className="text-lg font-bold text-ink hover:text-saffron-deep"
                    >
                      {brand.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl2 bg-white text-saffron-deep shadow-sm">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-mist">
                    Location
                  </dt>
                  <dd className="text-lg font-bold text-ink">
                    {brand.city}, {brand.state}, {brand.country}
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl2 bg-white text-saffron-deep shadow-sm">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-mist">
                    Hours
                  </dt>
                  <dd className="text-lg font-bold text-ink">{brand.hours}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-xl3 bg-ink p-9 text-ivory sm:p-12">
              <h2 className="font-display text-2xl font-medium sm:text-3xl">
                Ready to start planning?
              </h2>
              <p className="mt-4 leading-relaxed text-ivory/70">
                The trip planner takes about two minutes and gives our
                consultants everything they need to send you a first
                itinerary - usually within one working day.
              </p>
              <div className="mt-8">
                <PrimaryLink href="/plan-my-trip">Plan My Trip</PrimaryLink>
              </div>
              <p className="mt-8 border-t border-ivory/10 pt-6 text-sm leading-relaxed text-ivory/55">
                We plan family holidays, honeymoons, group tours, spiritual
                journeys, luxury breaks and corporate travel - across India and
                worldwide.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
