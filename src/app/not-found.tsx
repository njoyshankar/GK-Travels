import Link from "next/link";
import { PrimaryLink, GhostLink } from "@/components/ui/buttons";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] max-w-2xl flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.28em] text-saffron-deep">
        Off the map
      </p>
      <h1 className="font-display mt-4 text-4xl font-medium text-ink sm:text-5xl">
        This page seems to have wandered off.
      </h1>
      <p className="mt-4 max-w-md text-lg text-charcoal/70">
        The best journeys take unexpected turns - but let&apos;s get you back
        on route.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <PrimaryLink href="/">Back to Home</PrimaryLink>
        <GhostLink href="/destinations">Browse Destinations</GhostLink>
      </div>
      <p className="mt-8 text-sm text-mist">
        Or head straight to the{" "}
        <Link href="/plan-my-trip" className="font-semibold text-saffron-deep hover:underline">
          trip planner
        </Link>
        .
      </p>
    </section>
  );
}
