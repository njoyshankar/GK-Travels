"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { EASE } from "@/lib/motion";

interface AccordionProps {
  items: readonly { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-ink/10 rounded-xl3 border border-ink/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-button-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex min-h-11 w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-sand/30 sm:px-8"
              >
                <span className="text-base font-semibold text-ink sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-saffron-deep bg-saffron text-ink-deep"
                      : "border-ink/20 text-ink"
                  }`}
                  aria-hidden
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[0.9375rem] leading-relaxed text-charcoal/75 sm:px-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
