import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description?: string;
  crumbs: { label: string; href?: string }[];
  children?: ReactNode;
  compact?: boolean;
}

/** Reusable cinematic hero for internal pages. */
export default function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  crumbs,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-deep text-ivory">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink-deep/95 via-ink-deep/40 to-ink-deep/60"
        aria-hidden
      />
      <div
        className={`relative mx-auto flex max-w-[1320px] flex-col justify-end px-4 pb-14 sm:px-6 lg:px-8 ${
          compact ? "min-h-[46svh] pt-28" : "min-h-[58svh] pt-32"
        }`}
      >
        <Breadcrumbs items={crumbs} />
        <p className="mt-7 flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron">
          <span className="route-line inline-block h-px w-10" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-balance text-4xl font-medium leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-ivory/80 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
