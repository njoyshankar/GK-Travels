"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star, StarHalf } from "lucide-react";
import { useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/site-content";

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) {
          return (
            <Star
              key={i}
              className="size-4 fill-saffron text-saffron"
              aria-hidden
            />
          );
        }
        if (i === full && half) {
          return (
            <span key={i} className="relative inline-flex size-4" aria-hidden>
              <Star className="absolute inset-0 size-4 text-ink/20" />
              <StarHalf className="absolute inset-0 size-4 fill-saffron text-saffron" />
            </span>
          );
        }
        return <Star key={i} className="size-4 text-ink/20" aria-hidden />;
      })}
      <span className="ml-1.5 text-sm font-semibold text-charcoal/70">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

/** Review carousel, contained within the page frame with flanking arrows. */
export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  if (testimonials.length === 0) return null;

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: direction * el.clientWidth * 0.85,
      behavior: "smooth",
    });
  };

  const arrowClass = (enabled: boolean) =>
    `pointer-events-auto inline-flex size-12 items-center justify-center rounded-full border bg-white shadow-[0_12px_28px_-12px_rgba(23,27,69,0.4)] transition-all duration-200 ${
      enabled
        ? "border-ink/15 text-ink hover:-translate-y-0.5 hover:border-saffron-deep hover:bg-saffron hover:text-ink-deep"
        : "cursor-default border-ink/10 text-ink/25"
    }`;

  return (
    <section className="bg-sand/30 py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client travel memories"
          title="Words from the road"
          description="Real journeys, told by the people who took them."
          align="center"
        />

        <div className="relative mt-12">
          {/* Flanking arrows, vertically centred beside the carousel */}
          <div className="pointer-events-none absolute -left-2 -right-2 top-1/2 z-10 hidden -translate-y-1/2 justify-between md:flex lg:-left-6 lg:-right-6">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous reviews"
              disabled={!canPrev}
              className={arrowClass(canPrev)}
            >
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next reviews"
              disabled={!canNext}
              className={arrowClass(canNext)}
            >
              <ArrowRight className="size-5" aria-hidden />
            </button>
          </div>

          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-p-1 p-1"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative flex w-[85%] shrink-0 snap-start flex-col rounded-xl3 border border-ink/10 bg-white p-8 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <Quote
                  className="absolute right-7 top-7 size-8 text-sand-deep"
                  aria-hidden
                />
                <Stars rating={t.rating} />
                <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/8 pt-6">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    width={56}
                    height={56}
                    className="size-14 rounded-full border-2 border-saffron/60 object-cover"
                  />
                  <div>
                    <p className="font-display text-lg font-bold text-ink">
                      {t.name}
                    </p>
                    <p className="text-sm text-mist">{t.trip}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-mist md:hidden">
          Swipe to read more reviews
        </p>
      </div>
    </section>
  );
}
