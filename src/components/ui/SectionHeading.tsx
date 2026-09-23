import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p
        className={`flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.22em] ${
          align === "center" ? "justify-center" : ""
        } ${dark ? "text-saffron" : "text-saffron-deep"}`}
      >
        {number && (
          <span
            className={`font-display text-sm italic tracking-normal ${
              dark ? "text-ivory/60" : "text-mist"
            }`}
          >
            {number}
          </span>
        )}
        <span className="route-line inline-block h-px w-10 text-current" aria-hidden />
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-4 text-balance text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${
            dark ? "text-ivory/75" : "text-charcoal/70"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
