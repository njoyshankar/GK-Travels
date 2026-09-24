"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Compass, Handshake, LifeBuoy, ListChecks } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { sectionImages, trustStats, whyGkvr } from "@/data/site-content";
import { fadeUp, staggerChildren, viewportOnce } from "@/lib/motion";
import Reveal from "@/components/ui/Reveal";

const icons = {
  compass: Compass,
  handshake: Handshake,
  "list-checks": ListChecks,
  "life-buoy": LifeBuoy,
} as const;

export default function WhyGkvr() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-ink py-20 text-ivory lg:py-28">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-20 lg:px-8">
        <Reveal className="relative order-last flex flex-col lg:order-first">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-xl3 lg:aspect-auto lg:min-h-0 lg:flex-1">
            <Image
              src={sectionImages.whyGkvr.src}
              alt={sectionImages.whyGkvr.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 42vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div
            aria-hidden
            className="absolute -bottom-5 -right-5 -z-10 hidden h-2/3 w-2/3 rounded-xl3 border border-saffron/30 lg:block"
          />
          <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/50">
            <span className="route-line inline-block h-px w-8" aria-hidden />
            Planned with you, not just for you
          </p>
        </Reveal>

        <div>
          <SectionHeading
            number="04"
            eyebrow="Why GKVR"
            title="Planning the journey is part of the journey."
            description="A good consultant doesn't just book things - they take decisions off your plate and put confidence in their place."
            tone="dark"
          />

          <motion.ul
            variants={staggerChildren(0.1)}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2"
          >
            {whyGkvr.map((item) => {
              const Icon = icons[item.icon];
              return (
                <motion.li key={item.title} variants={fadeUp} className="flex gap-3.5">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl2 bg-saffron/12 text-saffron">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                  <span>
                    <h3 className="font-display text-lg font-medium leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ivory/65">
                      {item.description}
                    </p>
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>

          {trustStats.length > 0 && (
            <Reveal delay={0.1}>
              <dl className="mt-8 flex flex-wrap items-end gap-x-12 gap-y-5 border-t border-ivory/10 pt-6">
                {trustStats.map((stat, i) => (
                  <div key={stat.label}>
                    <dd
                      className={`font-display font-extrabold leading-none text-saffron ${
                        i === 0 ? "text-5xl sm:text-6xl" : "text-4xl sm:text-5xl"
                      }`}
                    >
                      <CountUp value={stat.value} />
                    </dd>
                    <dt className="mt-1.5 text-sm font-medium text-ivory/65">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
