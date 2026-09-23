import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import type { Destination } from "@/data/site-content";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <article className="group relative overflow-hidden rounded-xl3 border border-ink/8 bg-white shadow-[0_16px_40px_-24px_rgba(23,27,69,0.25)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.08]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 to-transparent"
          aria-hidden
        />
        <p className="absolute bottom-3 left-4 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-ivory/90">
          {destination.coordinates}
        </p>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-medium text-ink">
              <Link
                href={`/destinations/${destination.slug}`}
                className="after:absolute after:inset-0"
              >
                {destination.name}
              </Link>
            </h3>
            <p className="mt-0.5 text-sm font-medium text-mist">
              {destination.country}
            </p>
          </div>
          <span
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-saffron-deep group-hover:bg-saffron group-hover:text-ink-deep"
            aria-hidden
          >
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-charcoal/70">
          {destination.tagline}
        </p>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-charcoal/60">
          <CalendarDays className="size-4 text-saffron-deep" aria-hidden />
          Best time: {destination.bestTime}
        </p>
      </div>
    </article>
  );
}
