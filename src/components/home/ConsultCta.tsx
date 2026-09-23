import Image from "next/image";
import { MessageCircle, PhoneCall } from "lucide-react";
import AccentWord from "@/components/ui/AccentWord";
import Reveal from "@/components/ui/Reveal";
import { brand, sectionImages } from "@/data/site-content";

export default function ConsultCta() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={sectionImages.consult.src}
        alt={sectionImages.consult.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink-deep/92 via-ink-deep/75 to-ink-deep/40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1320px] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron">
            <span className="route-line inline-block h-px w-10" aria-hidden />
            Talk it through
          </p>
          <h2 className="font-display mt-5 text-balance text-3xl font-medium leading-[1.12] text-ivory sm:text-4xl lg:text-5xl">
            Not sure where to go? Start with how you want to{" "}
            <AccentWord>feel.</AccentWord>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ivory/75 sm:text-lg">
            Tell us your dates, budget and the kind of experience you want.
            We&apos;ll recommend destinations and create a journey around you -
            no pressure, no obligation.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={brand.phoneHref}
              className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-saffron px-7 py-3 text-[0.9375rem] font-semibold text-ink-deep shadow-[0_8px_24px_-8px_rgba(240,166,58,0.55)] transition-colors hover:bg-saffron-deep hover:text-ivory"
            >
              <PhoneCall className="size-4" aria-hidden />
              Talk to a Travel Specialist
            </a>
            <a
              href={brand.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2.5 rounded-full border border-ivory/35 px-7 py-3 text-[0.9375rem] font-semibold text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              <MessageCircle className="size-4" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-ivory/55">
            {brand.phone} · {brand.hours}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
