"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PrimaryLink } from "@/components/ui/buttons";
import Reveal from "@/components/ui/Reveal";
import { planningSteps } from "@/data/site-content";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";

export default function PlanningSteps() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.9", "start 0.2"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["13%", "84%"]);

  return (
    <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        number="05"
        eyebrow="How it works"
        title="From a rough idea to a ready itinerary"
        description="Four unhurried steps. Most travellers have a plan they love within a few conversations."
        align="center"
      />

      <motion.ol
        ref={trackRef}
        variants={staggerChildren(0.14)}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
      >
        {/* Connecting route line with a plane flying along it on desktop */}
        <div
          aria-hidden
          className="route-line absolute left-[12%] right-[12%] top-7 hidden h-px text-saffron-deep/50 lg:block"
        />
        {!reduce && (
          <motion.span
            aria-hidden
            style={{ left }}
            className="absolute top-7 z-10 hidden -translate-y-1/2 text-saffron-deep lg:block"
          >
            <Plane
              className="size-6 rotate-45"
              fill="currentColor"
              strokeWidth={1}
            />
          </motion.span>
        )}

        {planningSteps.map((step) => (
          <motion.li
            key={step.step}
            variants={fadeUp}
            className="relative text-center lg:px-3"
          >
            <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-full border-2 border-saffron bg-ivory font-display text-xl font-semibold text-ink transition-transform duration-300 hover:-translate-y-1">
              {step.step}
            </span>
            <h3 className="font-display mt-5 text-xl font-medium text-ink">
              {step.title}
            </h3>
            <p className="mx-auto mt-2.5 max-w-xs text-[0.9375rem] leading-relaxed text-charcoal/70">
              {step.description}
            </p>
          </motion.li>
        ))}
      </motion.ol>

      <Reveal delay={0.2} className="mt-14 text-center">
        <PrimaryLink href="/plan-my-trip">Start Step One</PrimaryLink>
      </Reveal>
    </section>
  );
}
