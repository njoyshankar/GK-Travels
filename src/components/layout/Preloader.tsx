"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE } from "@/lib/motion";

/**
 * Branded splash shown on every full page load: the logo arrives, a plane
 * draws the route beneath it, then the curtain lifts to reveal the site.
 */
export default function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const previous = document.body.style.overflow;
    if (show) document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setShow(false), reduce ? 700 : 2100);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previous;
    };
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          initial={false}
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.3 } }
              : {
                  y: "-100%",
                  borderBottomLeftRadius: "50% 12%",
                  borderBottomRightRadius: "50% 12%",
                  transition: { duration: 0.75, ease: EASE },
                }
          }
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink-deep"
        >
          {/* Faint saffron glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 45%, #f0a63a 0, transparent 40%)",
            }}
          />

          {/* Logo card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.82, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
            className="rounded-2xl bg-ivory px-7 py-5 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.55)]"
          >
            <Image
              src="/brand/gkvr-logo.png"
              alt="GKVR Vacations"
              width={1122}
              height={490}
              priority
              className="h-14 w-auto sm:h-16"
            />
          </motion.div>

          {/* Route line the plane flies along */}
          <div className="relative mt-9 h-6 w-56 sm:w-72">
            <motion.div
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}
              className="route-line absolute inset-x-0 top-1/2 h-px origin-left text-saffron/70"
            />
            <motion.span
              initial={reduce ? false : { left: "0%", opacity: 0 }}
              animate={{ left: "96%", opacity: [0, 1, 1, 1] }}
              transition={{ duration: 1.15, ease: EASE, delay: 0.45 }}
              className="absolute top-1/2 -translate-x-full -translate-y-1/2 text-saffron"
            >
              <Plane
                className="size-5 rotate-45 sm:size-6"
                fill="currentColor"
                strokeWidth={1}
              />
            </motion.span>
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.8 }}
            className="mt-7 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-ivory/60 sm:text-xs"
          >
            Now boarding · your next adventure
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
