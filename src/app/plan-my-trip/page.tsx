import type { Metadata } from "next";
import { Suspense } from "react";
import { CircleCheck } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import PlanTripForm from "@/components/plan/PlanTripForm";
import { brand } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Plan My Trip - Request a Custom Itinerary",
  description:
    "Tell GKVR Vacations your dates, budget and travel style. A Chennai-based travel specialist will design a personalised itinerary around you - usually within one working day.",
  alternates: { canonical: "/plan-my-trip" },
};

const promises = [
  "A plan shaped around you - not a copy-paste package",
  "Honest advice on budget, season and visas",
  "No payment needed to receive an itinerary",
];

export default function PlanMyTripPage() {
  return (
    <div className="bg-sand/30">
      <section className="mx-auto grid max-w-[1320px] gap-12 px-4 pb-24 pt-28 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-8 lg:pt-36">
        <div>
          <Breadcrumbs items={[{ label: "Plan My Trip" }]} tone="light" />
          <p className="mt-8 flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron-deep">
            <span className="route-line inline-block h-px w-10" aria-hidden />
            Custom trip planner
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            Three small steps to a journey that fits.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-charcoal/70">
            Share the shape of your trip - a consultant does the rest. It takes
            about two minutes, and nothing is binding.
          </p>
          <ul className="mt-9 space-y-3.5">
            {promises.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[0.9375rem] font-medium text-charcoal/80">
                <CircleCheck className="mt-0.5 size-5 shrink-0 text-saffron-deep" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-9 text-sm text-mist">
            Prefer to talk? Call{" "}
            <a href={brand.phoneHref} className="font-semibold text-saffron-deep hover:underline">
              {brand.phone}
            </a>{" "}
            or say hello on{" "}
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-saffron-deep hover:underline"
            >
              WhatsApp
            </a>
            .
          </p>
        </div>

        <Suspense fallback={null}>
          <PlanTripForm />
        </Suspense>
      </section>
    </div>
  );
}
