"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerChildren, fadeUp, viewportOnce } from "@/lib/motion";
import { travelStyles } from "@/data/site-content";

export default function TravelStyles() {
  const reduce = useReducedMotion();
  return (
    <section className="mx-auto max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        number="01"
        eyebrow="Travel styles"
        title="What kind of journey are you dreaming of?"
        description="Every traveller starts somewhere different - a mood, a milestone, a crew. Pick the shape of your holiday and we'll fill in the where and how."
      />

      <motion.ul
        variants={staggerChildren(0.08)}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {travelStyles.map((style) => {
          const href =
            style.slug === "corporate"
              ? "/corporate"
              : `/holiday-types#${style.slug}`;
          return (
            <motion.li key={style.slug} variants={fadeUp}>
              <Link
                href={href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl3 sm:aspect-[7/8]"
              >
                <Image
                  src={style.image}
                  alt={style.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.07]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-deep/85 via-ink-deep/25 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-ivory">
                        {style.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ivory/75">
                        {style.short}
                      </p>
                    </div>
                    <span
                      className="mb-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-ivory/40 text-ivory transition-all duration-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink-deep"
                      aria-hidden
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
