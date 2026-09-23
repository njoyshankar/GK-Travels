import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FlightPath from "@/components/ui/FlightPath";
import TripDiscovery from "@/components/home/TripDiscovery";
import TravelStyles from "@/components/home/TravelStyles";
import FeaturedJourneys from "@/components/home/FeaturedJourneys";
import DestinationExplorer from "@/components/home/DestinationExplorer";
import WhyGkvr from "@/components/home/WhyGkvr";
import PlanningSteps from "@/components/home/PlanningSteps";
import ConsultCta from "@/components/home/ConsultCta";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "GKVR Vacations - Personalised Holidays from Chennai",
  description:
    "Journeys designed around you: family holidays, honeymoons, group tours and corporate travel across India and the world, planned end to end by Chennai-based travel specialists.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TripDiscovery />
      <TravelStyles />
      <FlightPath className="pb-16" />
      <FeaturedJourneys />
      <DestinationExplorer />
      <FlightPath className="pb-16" />
      <WhyGkvr />
      <PlanningSteps />
      <ConsultCta />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
