"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";
import { useRef } from "react";
import type { ItineraryDay } from "@/data/site-content";

/**
 * Day-by-day itinerary with a plane that flies down the route line
 * as the reader scrolls. Static under reduced motion.
 */
export default function ItineraryTimeline({
  itinerary,
}: {
  itinerary: ItineraryDay[];
}) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "96%"]);

  return (
    <ol
      ref={ref}
      className="relative mt-8 space-y-8 border-l border-dashed border-saffron-deep/40 pl-8"
    >
      {/* Scroll-flying plane on the route line */}
      {!reduce && (
        <motion.span
          aria-hidden
          style={{ top }}
          className="absolute -left-[13px] z-0 text-saffron-deep"
        >
          <Plane
            className="size-6 rotate-[135deg]"
            fill="currentColor"
            strokeWidth={1}
          />
        </motion.span>
      )}

      {itinerary.map((day) => (
        <li key={day.day} className="relative">
          <span
            className="absolute -left-[45px] z-10 flex size-8 items-center justify-center rounded-full border-2 border-saffron bg-ivory text-sm font-bold text-ink"
            aria-hidden
          >
            {day.day}
          </span>
          <h3 className="font-display text-xl font-medium text-ink">
            <span className="sr-only">Day {day.day}: </span>
            {day.title}
          </h3>
          <p className="mt-2 leading-relaxed text-charcoal/70">
            {day.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
