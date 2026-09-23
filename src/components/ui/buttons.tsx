import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.9375rem] font-semibold transition-all duration-200 ease-out";

export function PrimaryLink({
  href,
  children,
  className = "",
  withArrow = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`${base} group bg-saffron text-ink-deep shadow-[0_8px_24px_-8px_rgba(240,166,58,0.55)] hover:-translate-y-0.5 hover:bg-saffron-deep hover:text-ivory hover:shadow-[0_14px_32px_-10px_rgba(240,166,58,0.6)] ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </Link>
  );
}

export function GhostLink({
  href,
  children,
  tone = "light",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const tones =
    tone === "dark"
      ? "border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory/10"
      : "border-ink/25 text-ink hover:border-ink hover:bg-ink/5";
  return (
    <Link href={href} className={`${base} border hover:-translate-y-0.5 ${tones} ${className}`}>
      {children}
    </Link>
  );
}
