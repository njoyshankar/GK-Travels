import type { ReactNode } from "react";

/**
 * Headline accent: saffron word with a hand-drawn dashed "route" underline -
 * the site's travel motif carried into the typography.
 */
export default function AccentWord({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap text-saffron">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 120 14"
        preserveAspectRatio="none"
        className="absolute -bottom-[0.18em] left-0 h-[0.22em] w-full overflow-visible"
      >
        <path
          d="M4 10 Q 32 3 60 8 T 116 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="10 8"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}
