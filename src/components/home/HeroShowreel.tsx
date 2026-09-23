"use client";

import { useEffect, useRef, useState } from "react";

interface Clip {
  src: string;
  label: string;
  poster?: string;
}

const CLIPS: Clip[] = [
  {
    src: "/videos/hero-bali.mp4",
    label: "Bali · 8.34° S, 115.09° E",
  },
  {
    src: "/videos/hero-swiss-lake.mp4",
    label: "Swiss Alps · 46.50° N, 7.73° E",
  },
];

/** Seconds each clip plays before crossfading to the next. */
const CLIP_SECONDS = 7;

/**
 * Hero video playlist: plays each destination clip to the end, then
 * crossfades into the next. Both videos stay mounted so the upcoming
 * clip buffers while the current one plays.
 */
export default function HeroShowreel({ poster }: { poster: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const video = refs.current[active];
    if (!video) return;
    video.currentTime = 0;
    // play() can reject if the browser blocks it; the poster stays visible.
    video.play().catch(() => {});
  }, [active]);

  const advance = () => setActive((current) => (current + 1) % CLIPS.length);

  const handleTimeUpdate = (i: number) => {
    if (i !== active) return;
    const video = refs.current[i];
    if (video && video.currentTime >= CLIP_SECONDS) advance();
  };

  return (
    <>
      {CLIPS.map((clip, i) => (
        <video
          key={clip.src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          src={clip.src}
          poster={i === 0 ? poster : undefined}
          autoPlay={i === 0}
          muted
          playsInline
          preload="auto"
          onEnded={advance}
          onTimeUpdate={() => handleTimeUpdate(i)}
          aria-label={
            i === 0
              ? "Waves washing around Bali's Tanah Lot sea temple"
              : "A turquoise alpine lake beneath snow-capped Swiss peaks"
          }
        />
      ))}
      <p
        className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/90"
        aria-live="polite"
      >
        {CLIPS[active].label}
      </p>
    </>
  );
}
