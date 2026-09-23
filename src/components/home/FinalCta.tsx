import Image from "next/image";
import AccentWord from "@/components/ui/AccentWord";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import { sectionImages, marqueeItems } from "@/data/site-content";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-deep">
      <Image
        src={sectionImages.finalCta.src}
        alt={sectionImages.finalCta.alt}
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink-deep/70 via-transparent to-ink-deep/85"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1320px] px-4 py-28 text-center sm:px-6 lg:px-8 lg:py-40">
        <Reveal>
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.28em] text-saffron">
            GKVR Vacations · Chennai
          </p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-4xl font-medium leading-[1.08] text-ivory sm:text-5xl lg:text-6xl">
            Your next story starts{" "}
            <AccentWord>somewhere.</AccentWord>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg">
            Wherever that somewhere is, we&apos;ll help you find it - and plan
            every step in between.
          </p>
          <div className="mt-10">
            <PrimaryLink href="/plan-my-trip">Design My Journey</PrimaryLink>
          </div>
        </Reveal>
      </div>

      {/* Services marquee */}
      <div
        className="relative border-t border-ivory/10 bg-ink-deep/80 py-5 backdrop-blur-sm"
        aria-hidden
      >
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-ivory/50"
              >
                {item}
                <span className="size-1.5 rounded-full bg-saffron/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
