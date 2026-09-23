"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { formatINR, type Journey } from "@/data/site-content";
import { EASE } from "@/lib/motion";

export default function JourneyCard({ journey }: { journey: Journey }) {
  const [showHighlights, setShowHighlights] = useState(false);
  const reduce = useReducedMotion();

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl3 border border-ink/8 bg-white shadow-[0_16px_40px_-24px_rgba(23,27,69,0.25)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-24px_rgba(23,27,69,0.4)]">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={journey.cardImage}
          alt={journey.cardAlt ?? journey.alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.08]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-deep/50 via-transparent to-transparent"
          aria-hidden
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-ink">
          <Sparkles className="size-3 text-saffron-deep" aria-hidden />
          Customisable
        </span>
        <p className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-semibold text-ivory">
          <MapPin className="size-3.5 text-saffron" aria-hidden />
          {journey.place}, {journey.country}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-mist">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          {journey.nights} Nights / {journey.days} Days
          <span aria-hidden>·</span>
          {journey.styles[0]}
        </div>
        <h3 className="font-display mt-3 text-xl font-medium leading-snug text-ink">
          <Link
            href={`/journeys/${journey.slug}`}
            className="after:absolute after:inset-0"
          >
            {journey.title}
          </Link>
        </h3>

        {/* Collapsible highlights - button sits above the stretched card link */}
        <button
          type="button"
          onClick={() => setShowHighlights((open) => !open)}
          aria-expanded={showHighlights}
          className="relative z-10 mt-3 inline-flex min-h-9 w-fit items-center gap-1.5 rounded-full text-sm font-bold text-saffron-deep transition-colors hover:text-ink"
        >
          {showHighlights ? "Hide highlights" : "View highlights"}
          <ChevronDown
            className={`size-4 transition-transform duration-300 ${
              showHighlights ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </button>
        <AnimatePresence initial={false}>
          {showHighlights && (
            <motion.ul
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative z-10 overflow-hidden"
            >
              {journey.highlights.slice(0, 3).map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 pt-1.5 text-sm leading-snug text-charcoal/70 first:pt-2.5"
                >
                  <span
                    className="mt-[7px] size-1 shrink-0 rounded-full bg-saffron-deep"
                    aria-hidden
                  />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div>
            {journey.startingPrice ? (
              <>
                <p className="text-xs font-medium text-mist">Starting from</p>
                <p className="text-lg font-bold text-ink">
                  {formatINR(journey.startingPrice)}
                  <span className="text-xs font-medium text-mist"> / person</span>
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold text-mist">
                Priced on request
              </p>
            )}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-saffron-deep">
            View Journey
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </article>
  );
}
