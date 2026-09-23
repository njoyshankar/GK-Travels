import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { brand } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for the GKVR Vacations website and general conditions that apply to trip enquiries and bookings.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:pt-36">
      <Breadcrumbs items={[{ label: "Terms & Conditions" }]} tone="light" />
      <h1 className="font-display mt-8 text-4xl font-medium text-ink">
        Terms &amp; Conditions
      </h1>
      <div className="mt-8 space-y-6 text-[1.0625rem] leading-relaxed text-charcoal/80">
        <h2 className="font-display text-2xl font-medium text-ink">
          About this website
        </h2>
        <p>
          This website presents the travel-planning services of {brand.name},
          based in {brand.city}, {brand.state}. Itineraries and journeys shown
          are illustrative starting points; final inclusions, dates and prices
          are confirmed in writing before any booking.
        </p>
        <h2 className="font-display text-2xl font-medium text-ink">Pricing</h2>
        <p>
          Where indicative prices appear, they are &ldquo;starting from&rdquo;
          figures that vary with travel dates, hotel category, group size and
          availability. No price on this website constitutes a binding offer.
        </p>
        <h2 className="font-display text-2xl font-medium text-ink">
          Bookings & third parties
        </h2>
        <p>
          Flights, hotels and local experiences are provided by third-party
          operators and are subject to their own terms. We share all applicable
          terms, cancellation rules and payment schedules with you in writing
          before you confirm a booking.
        </p>
        <h2 className="font-display text-2xl font-medium text-ink">
          Travel documents
        </h2>
        <p>
          Travellers are responsible for holding valid passports and complying
          with visa and health requirements. We assist with documentation and
          guidance, and always confirm requirements for your specific
          itinerary.
        </p>
        <p className="text-sm text-mist">
          Questions? Write to{" "}
          <a href={brand.emailHref} className="font-semibold text-saffron-deep">
            {brand.email}
          </a>{" "}
          or call{" "}
          <a href={brand.phoneHref} className="font-semibold text-saffron-deep">
            {brand.phone}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
