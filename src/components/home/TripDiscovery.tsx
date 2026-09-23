"use client";

import { useRouter } from "next/navigation";
import { Compass } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { destinations } from "@/data/site-content";

const months = [
  "Flexible",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const holidayTypes = [
  "Any style",
  "Family",
  "Honeymoon",
  "Friends & Groups",
  "Spiritual",
  "Luxury",
  "Corporate / MICE",
];

const selectClass =
  "select-field w-full min-h-11 rounded-xl border border-ink/15 bg-white px-3.5 py-2.5 text-[0.9375rem] font-medium text-ink focus:border-saffron-deep";

/** Quick discovery widget - routes into the trip planner with prefilled context. */
export default function TripDiscovery() {
  const router = useRouter();
  const [region, setRegion] = useState<"any" | "india" | "international">("any");
  const [destination, setDestination] = useState("unsure");
  const [month, setMonth] = useState(months[0]);
  const [travellers, setTravellers] = useState("2");
  const [style, setStyle] = useState(holidayTypes[0]);

  const options =
    region === "any"
      ? destinations
      : destinations.filter((d) => d.region === region);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (region !== "any") params.set("region", region);
    if (destination !== "unsure") params.set("destination", destination);
    if (month !== "Flexible") params.set("month", month);
    params.set("travellers", travellers);
    if (style !== "Any style") params.set("style", style);
    router.push(`/plan-my-trip?${params.toString()}`);
  };

  return (
    <div className="relative z-20 mx-auto -mt-2 max-w-[1320px] px-4 sm:px-6 lg:-mt-16 lg:px-8">
      <Reveal>
        <form
          onSubmit={submit}
          aria-label="Quick trip discovery"
          className="rounded-xl3 border border-ink/8 bg-white p-6 shadow-[0_32px_64px_-32px_rgba(23,27,69,0.35)] sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
              Where does your story begin?
            </h2>
            <div
              className="inline-flex rounded-full bg-sand/70 p-1"
              role="group"
              aria-label="Choose region"
            >
              {(
                [
                  ["any", "Anywhere"],
                  ["india", "India"],
                  ["international", "International"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setRegion(value);
                    setDestination("unsure");
                  }}
                  aria-pressed={region === value}
                  className={`min-h-9 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                    region === value
                      ? "bg-ink text-ivory shadow"
                      : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1fr_auto]">
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                Destination
              </span>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className={selectClass}
              >
                <option value="unsure">I&apos;m not sure yet</option>
                {options.map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                Travel month
              </span>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={selectClass}
              >
                {months.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                Travellers
              </span>
              <select
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                className={selectClass}
              >
                {["1", "2", "3", "4", "5", "6+"].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                Holiday type
              </span>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className={selectClass}
              >
                {holidayTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center gap-2 self-end rounded-xl bg-saffron px-6 py-2.5 font-semibold text-ink-deep transition-colors hover:bg-saffron-deep hover:text-ivory sm:col-span-2 lg:col-span-1"
            >
              <Compass className="size-4" aria-hidden />
              Find My Escape
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  );
}
