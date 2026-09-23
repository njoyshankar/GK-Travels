"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Plane } from "lucide-react";
import { useRef } from "react";

interface FlightPathProps {
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Decorative section divider: a dotted route line with a plane that
 * travels along it as the page scrolls. Static under reduced motion.
 */
export default function FlightPath({
  tone = "light",
  className = "",
}: FlightPathProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const left = useTransform(scrollYProgress, [0, 1], ["1%", "92%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);

  const lineColor = tone === "dark" ? "text-ivory/30" : "text-ink/20";
  const planeColor = tone === "dark" ? "text-ivory" : "text-ink";

  return (
    <div
      ref={ref}
      aria-hidden
      className={`mx-auto max-w-[1320px] overflow-x-clip px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="relative">
        <div className={`route-line h-px w-full ${lineColor}`} />
        <motion.div
          style={
            reduce ? { left: "48%", y: "-50%" } : { left, rotate, y: "-50%" }
          }
          className={`absolute top-1/2 ${planeColor}`}
        >
          <Plane
            className="size-9 rotate-45 drop-shadow-md sm:size-12"
            fill="currentColor"
            strokeWidth={1}
          />
        </motion.div>
      </div>
    </div>
  );
}
