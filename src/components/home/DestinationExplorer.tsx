"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { destinations, type Region } from "@/data/site-content";
import { EASE } from "@/lib/motion";

/**
 * Editorial mosaic: first two destinations get large tiles, the rest flow
 * into a varied grid - deliberately not a uniform ecommerce grid.
 */
export default function DestinationExplorer() {
  const [region, setRegion] = useState<Region>("india");
  const reduce = useReducedMotion();
  const list = destinations.filter((d) => d.region === region);

  return (
    <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          number="03"
          eyebrow="Destinations"
          title="Close to home, or across the map"
          description="From weekend-sized escapes in the South to bucket-list capitals across the globe - all planned from Chennai, end to end."
        />

        <div
          role="tablist"
          aria-label="Choose a region"
          className="inline-flex rounded-full border border-ink/12 bg-white p-1.5"
        >
          {(
            [
              ["india", "Explore India"],
              ["international", "Explore the World"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              role="tab"
              aria-selected={region === value}
              onClick={() => setRegion(value)}
              className={`min-h-11 rounded-full px-6 py-2.5 text-[0.9375rem] font-semibold transition-colors ${
                region === value
                  ? "bg-ink text-ivory shadow"
                  : "text-ink/65 hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.ul
          key={region}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
        >
          {list.map((d, i) => {
            const large = i < 2;
            return (
              <li
                key={d.slug}
                className={large ? "col-span-2 row-span-2" : "col-span-1"}
              >
                <Link
                  href={`/destinations/${d.slug}`}
                  className={`group relative block overflow-hidden rounded-xl2 ${
                    large ? "aspect-[4/3] lg:h-full lg:aspect-auto lg:min-h-[520px]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes={
                      large
                        ? "(max-width: 1024px) 92vw, 46vw"
                        : "(max-width: 1024px) 46vw, 22vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.08]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-ink-deep/15 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                    <div className="min-w-0">
                      <p className="hidden text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-saffron sm:block">
                        {d.coordinates}
                      </p>
                      <h3
                        className={`font-display mt-1 font-medium text-ivory ${
                          large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                        }`}
                      >
                        {d.name}
                      </h3>
                      {large && (
                        <p className="mt-1 hidden max-w-md text-sm text-ivory/75 sm:block">
                          {d.tagline}
                        </p>
                      )}
                    </div>
                    <ArrowUpRight
                      className="mb-1 size-5 shrink-0 text-ivory/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-saffron"
                      aria-hidden
                    />
                  </div>
                </Link>
              </li>
            );
          })}
        </motion.ul>
      </AnimatePresence>

      <p className="mt-8 text-center">
        <Link
          href={
            region === "india"
              ? "/destinations/india"
              : "/destinations/international"
          }
          className="inline-flex min-h-11 items-center gap-2 text-[0.9375rem] font-bold text-saffron-deep hover:underline"
        >
          See every {region === "india" ? "Indian" : "international"}{" "}
          destination
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </p>
    </section>
  );
}
