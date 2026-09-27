"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { EASE } from "@/lib/motion";
import type { GalleryImage } from "@/data/gallery";

/** Even photo grid with an accessible, minimal lightbox. */
export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) =>
      setOpen((current) =>
        current === null
          ? null
          : (current + dir + images.length) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE, delay: (i % 4) * 0.06 }}
            onClick={(e) => {
              lastTrigger.current = e.currentTarget;
              setOpen(i);
            }}
            className="group relative block aspect-square w-full overflow-hidden rounded-xl2"
            aria-label={`View photo: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 24vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </motion.button>
        ))}
      </div>

      {/* Lightbox - image only, with controls */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${open + 1} of ${images.length}`}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink-deep/95 backdrop-blur-sm"
            onClick={close}
          >
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="text-sm font-semibold text-ivory/70">
                {open + 1} / {images.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close gallery"
                className="inline-flex size-11 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-saffron hover:text-saffron"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <div
              className="relative flex flex-1 items-center justify-center px-14 pb-8 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-saffron hover:text-saffron sm:left-6"
              >
                <ArrowLeft className="size-5" aria-hidden />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={images[open].src}
                  initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.25, ease: EASE }}
                >
                  <Image
                    src={images[open].src}
                    alt={images[open].alt}
                    width={images[open].width}
                    height={images[open].height}
                    sizes="90vw"
                    priority
                    className="max-h-[82vh] w-auto rounded-xl2 object-contain shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-saffron hover:text-saffron sm:right-6"
              >
                <ArrowRight className="size-5" aria-hidden />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
