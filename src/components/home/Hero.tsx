"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, CircleCheck } from "lucide-react";
import { useRef } from "react";
import AccentWord from "@/components/ui/AccentWord";
import HeroShowreel from "@/components/home/HeroShowreel";
import { PrimaryLink, GhostLink } from "@/components/ui/buttons";
import { brand, heroImages } from "@/data/site-content";
import { EASE } from "@/lib/motion";

const trustItems = [
  "Personalised itineraries",
  "Transparent planning",
  "On-trip assistance",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const enter = (delay: number) => ({
    initial: reduce ? (false as const) : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0 : 0.7, ease: EASE, delay },
  });

  const imageEnter = (delay: number) => ({
    initial: reduce
      ? (false as const)
      : { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    animate: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
    transition: { duration: reduce ? 0 : 0.9, ease: EASE, delay },
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-deep text-ivory"
      aria-label="Introduction"
    >
      {/* Faint route-line backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(240,166,58,0.5) 0, transparent 32%), radial-gradient(circle at 12% 85%, rgba(240,166,58,0.35) 0, transparent 30%)",
        }}
      />

      <div className="mx-auto grid min-h-[92svh] max-w-[1320px] items-center gap-12 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-20 lg:pt-32">
        {/* Copy */}
        <div className="relative z-10 max-w-xl">
          <motion.p
            {...enter(0.05)}
            className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron"
          >
            <span className="route-line inline-block h-px w-12" aria-hidden />
            {brand.eyebrow}
          </motion.p>

          <motion.h1
            {...enter(0.15)}
            className="font-display mt-6 text-[2.75rem] leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.5rem]"
          >
            <span className="block">Journeys designed</span>
            <span className="block">
              around <AccentWord>you.</AccentWord>
            </span>
          </motion.h1>

          <motion.p
            {...enter(0.28)}
            className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg"
          >
            {brand.description}
          </motion.p>

          <motion.div {...enter(0.4)} className="mt-9 flex flex-wrap gap-4">
            <PrimaryLink href="/plan-my-trip">Plan My Trip</PrimaryLink>
            <GhostLink href="/destinations" tone="dark">
              Explore Destinations
            </GhostLink>
          </motion.div>

          <motion.ul
            {...enter(0.52)}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
          >
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-ivory/70"
              >
                <CircleCheck className="size-4 text-saffron" aria-hidden />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Editorial collage */}
        <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
          <motion.div
            style={reduce ? undefined : { y: yMain }}
            className="relative"
          >
            <motion.div
              {...imageEnter(0.2)}
              className="relative aspect-[4/5] overflow-hidden rounded-xl3 shadow-[0_40px_80px_-32px_rgba(0,0,0,0.6)]"
            >
              {reduce ? (
                <>
                  <Image
                    src={heroImages.primary.src}
                    alt={heroImages.primary.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 44vw"
                    className="object-cover"
                  />
                  <p className="absolute bottom-5 left-5 z-10 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/90">
                    Bali · 8.34° S, 115.09° E
                  </p>
                </>
              ) : (
                <HeroShowreel poster={heroImages.primary.src} />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink-deep/45 via-transparent to-transparent"
                aria-hidden
              />
            </motion.div>
          </motion.div>

          {/* Overlapping moments */}
          <motion.div
            style={reduce ? undefined : { y: ySmall }}
            className="absolute -left-4 top-10 w-[38%] sm:-left-8 lg:-left-14"
          >
            <motion.div
              {...imageEnter(0.5)}
              className="relative aspect-[3/4] overflow-hidden rounded-xl2 border-4 border-ink-deep shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)]"
            >
              <Image
                src={heroImages.secondary.src}
                alt={heroImages.secondary.alt}
                fill
                sizes="(max-width: 1024px) 34vw, 16vw"
                className="object-cover"
              />
            </motion.div>
            <p className="mt-2 hidden text-right text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ivory/50 lg:block">
              Kashmir
            </p>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: ySmall }}
            className="absolute -bottom-8 -right-2 w-[42%] sm:-right-6 lg:-right-10"
          >
            <motion.div
              {...imageEnter(0.65)}
              className="relative aspect-[5/4] overflow-hidden rounded-xl2 border-4 border-ink-deep shadow-[0_24px_48px_-16px_rgba(0,0,0,0.55)]"
            >
              <Image
                src={heroImages.quaternary.src}
                alt={heroImages.quaternary.alt}
                fill
                sizes="(max-width: 1024px) 38vw, 18vw"
                className="object-cover"
              />
            </motion.div>
            <p className="mt-2 hidden text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ivory/50 lg:block">
              Maldives
            </p>
          </motion.div>

          {/* Passport-stamp badge */}
          <motion.div
            {...enter(0.85)}
            aria-hidden
            className="absolute -top-8 right-2 z-10 hidden size-28 items-center justify-center rounded-full bg-ink-deep/85 text-saffron shadow-[0_16px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-sm lg:flex"
          >
            <span className="stamp-ring animate-spin-slow absolute inset-1.5 text-saffron/80" />
            <span className="font-display rotate-12 text-center text-[0.6875rem] font-bold uppercase leading-snug tracking-[0.14em]">
              GKVR
              <br />
              Chennai
              <br />
              20+ years
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="animate-drift flex flex-col items-center gap-1 text-ivory/60">
          <span className="text-[0.625rem] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="size-4" aria-hidden />
        </div>
      </div>
    </section>
  );
}
