"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Lock,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import {
  brand,
  destinations,
  getJourney,
} from "@/data/site-content";
import { EASE } from "@/lib/motion";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const HOLIDAY_TYPES = [
  "Family",
  "Honeymoon",
  "Friends & Groups",
  "Spiritual",
  "Luxury",
  "Corporate / MICE",
  "Not sure yet",
];

const BUDGETS = [
  "Under ₹30,000 per person",
  "₹30,000 - ₹60,000 per person",
  "₹60,000 - ₹1,00,000 per person",
  "Above ₹1,00,000 per person",
  "I'd like guidance",
];

interface FormState {
  region: "india" | "international" | "undecided";
  destination: string;
  holidayType: string;
  month: string;
  flexible: "fixed" | "flexible";
  adults: string;
  children: string;
  departureCity: string;
  budget: string;
  name: string;
  phone: string;
  whatsappOk: boolean;
  email: string;
  notes: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const inputClass =
  "w-full min-h-11 rounded-xl border border-ink/15 bg-white px-4 py-2.5 text-[0.9375rem] font-medium text-ink placeholder:text-mist/70 focus:border-saffron-deep";
const selectClass = `select-field ${inputClass}`;
const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-mist";
const errorClass = "mt-1.5 text-sm font-medium text-red-700";

const chip = (active: boolean) =>
  `min-h-11 rounded-full border px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors ${
    active
      ? "border-ink bg-ink text-ivory"
      : "border-ink/15 bg-white text-ink hover:border-ink/40"
  }`;

export default function PlanTripForm() {
  const search = useSearchParams();
  const reduce = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement>(null);

  const packageSlug = search.get("package");
  const journey = packageSlug ? getJourney(packageSlug) : undefined;

  const prefillDestination =
    search.get("destination") ?? journey?.destinationSlug ?? "";
  const prefillRegion =
    (search.get("region") as FormState["region"] | null) ??
    (prefillDestination
      ? destinations.find((d) => d.slug === prefillDestination)?.region ??
        "undecided"
      : "undecided");
  const prefillMonth = search.get("month") ?? "";
  const prefillStyle = search.get("style") ?? "";
  const prefillTravellers = search.get("travellers") ?? "2";

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<FormState>({
    region: prefillRegion,
    destination: prefillDestination,
    holidayType: prefillStyle || (journey ? journey.styles[0] : ""),
    month: prefillMonth,
    flexible: "flexible",
    adults: /^\d+$/.test(prefillTravellers) ? prefillTravellers : "2",
    children: "0",
    departureCity: "Chennai",
    budget: "",
    name: "",
    phone: "",
    whatsappOk: true,
    email: "",
    notes: "",
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const destinationOptions = useMemo(
    () =>
      form.region === "undecided"
        ? destinations
        : destinations.filter((d) => d.region === form.region),
    [form.region]
  );

  const validateStep = (s: number): Errors => {
    const e: Errors = {};
    if (s === 0) {
      if (!form.holidayType)
        e.holidayType = "Choose the style of holiday, or 'Not sure yet'.";
    }
    if (s === 1) {
      if (!form.month) e.month = "Pick an approximate month - it can change.";
      if (!form.budget)
        e.budget = "A rough budget helps us recommend honestly.";
      if (!form.departureCity.trim())
        e.departureCity = "Tell us the city you'd start from.";
    }
    if (s === 2) {
      if (form.name.trim().length < 2) e.name = "Please tell us your name.";
      if (!/^[+\d][\d\s-]{7,14}$/.test(form.phone.trim()))
        e.phone = "Enter a valid phone number, e.g. 98400 12345.";
      if (form.email && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
        e.email = "That email doesn't look right - check for typos.";
    }
    return e;
  };

  const goNext = () => {
    const e = validateStep(step);
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    if (step < 2) {
      setStep(step + 1);
      headingRef.current?.focus();
    } else {
      // Mock submission - swap for an API / CRM / email service call.
      setSubmitted(true);
    }
  };

  const goBack = () => {
    setStep(Math.max(0, step - 1));
    headingRef.current?.focus();
  };

  const destinationName =
    destinations.find((d) => d.slug === form.destination)?.name ??
    "an open destination";

  const whatsappSummary = encodeURIComponent(
    `Hi GKVR Vacations! I just sent an enquiry${
      journey ? ` about "${journey.title}"` : ""
    } - ${form.name}, ${destinationName}, ${form.month || "flexible dates"}, ${
      form.adults
    } adult(s)${form.children !== "0" ? ` + ${form.children} child(ren)` : ""}.`
  );

  if (submitted) {
    return (
      <div className="rounded-xl3 border border-ink/10 bg-white p-8 text-center sm:p-12">
        <span className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Check className="size-8" aria-hidden />
        </span>
        <h2 className="font-display mt-6 text-2xl font-medium text-ink sm:text-3xl">
          Thank you, {form.name.split(" ")[0]} - we&apos;re on it.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-charcoal/70">
          A travel specialist will reach you on{" "}
          <strong className="text-ink">{form.phone}</strong>
          {form.whatsappOk ? " (WhatsApp preferred)" : ""} within one working
          day with ideas for {destinationName}.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/919629097222?text=${whatsappSummary}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-saffron px-6 py-3 font-semibold text-ink-deep hover:bg-saffron-deep hover:text-ivory"
          >
            <MessageCircle className="size-4" aria-hidden />
            Continue on WhatsApp
          </a>
          <a
            href={brand.phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink hover:border-ink"
          >
            <PhoneCall className="size-4" aria-hidden />
            Or call {brand.phone}
          </a>
        </div>
      </div>
    );
  }

  const steps = ["The trip", "The details", "About you"];

  return (
    <div className="rounded-xl3 border border-ink/10 bg-white p-6 sm:p-10">
      {journey && (
        <p className="mb-6 flex items-center gap-2 rounded-xl2 bg-sand/60 px-4 py-3 text-sm font-medium text-ink">
          <CircleCheck className="size-4 shrink-0 text-saffron-deep" aria-hidden />
          Planning around: <strong>{journey.title}</strong> - we&apos;ll use it
          as the starting point.
        </p>
      )}

      {/* Progress */}
      <ol className="flex items-center gap-2" aria-label="Progress">
        {steps.map((label, i) => (
          <li key={label} className="flex flex-1 flex-col gap-1.5">
            <span
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                i <= step ? "bg-saffron" : "bg-ink/10"
              }`}
              aria-hidden
            />
            <span
              className={`text-xs font-semibold uppercase tracking-wide ${
                i === step ? "text-ink" : "text-mist"
              }`}
              aria-current={i === step ? "step" : undefined}
            >
              {i + 1}. {label}
            </span>
          </li>
        ))}
      </ol>

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="font-display mt-8 text-2xl font-medium text-ink outline-none sm:text-3xl"
      >
        {step === 0 && "Where are you dreaming of?"}
        {step === 1 && "Let's shape the practical bits"}
        {step === 2 && "Where should we send your plan?"}
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="mt-8"
        >
          {step === 0 && (
            <div className="space-y-8">
              <fieldset>
                <legend className={labelClass}>Where to, roughly?</legend>
                <div className="flex flex-wrap gap-2.5">
                  {(
                    [
                      ["india", "India"],
                      ["international", "International"],
                      ["undecided", "Not decided yet"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("region", value)}
                      aria-pressed={form.region === value}
                      className={chip(form.region === value)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="destination" className={labelClass}>
                  Destination (optional)
                </label>
                <select
                  id="destination"
                  value={form.destination}
                  onChange={(e) => set("destination", e.target.value)}
                  className={selectClass}
                >
                  <option value="">I&apos;d like recommendations</option>
                  {destinationOptions.map((d) => (
                    <option key={d.slug} value={d.slug}>
                      {d.name} - {d.country}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset>
                <legend className={labelClass}>What kind of holiday?</legend>
                <div className="flex flex-wrap gap-2.5">
                  {HOLIDAY_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => set("holidayType", t)}
                      aria-pressed={form.holidayType === t}
                      className={chip(form.holidayType === t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {errors.holidayType && (
                  <p role="alert" className={errorClass}>
                    {errors.holidayType}
                  </p>
                )}
              </fieldset>
            </div>
          )}

          {step === 1 && (
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="month" className={labelClass}>
                  Approximate travel month
                </label>
                <select
                  id="month"
                  value={form.month}
                  onChange={(e) => set("month", e.target.value)}
                  className={selectClass}
                  aria-invalid={Boolean(errors.month)}
                >
                  <option value="">Choose a month</option>
                  {MONTHS.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
                {errors.month && (
                  <p role="alert" className={errorClass}>
                    {errors.month}
                  </p>
                )}
              </div>

              <fieldset>
                <legend className={labelClass}>How fixed are the dates?</legend>
                <div className="flex gap-2.5">
                  {(
                    [
                      ["flexible", "Flexible"],
                      ["fixed", "Fixed dates"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => set("flexible", value)}
                      aria-pressed={form.flexible === value}
                      className={chip(form.flexible === value)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="adults" className={labelClass}>
                  Adults
                </label>
                <select
                  id="adults"
                  value={form.adults}
                  onChange={(e) => set("adults", e.target.value)}
                  className={selectClass}
                >
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"].map(
                    (n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label htmlFor="children" className={labelClass}>
                  Children (under 12)
                </label>
                <select
                  id="children"
                  value={form.children}
                  onChange={(e) => set("children", e.target.value)}
                  className={selectClass}
                >
                  {["0", "1", "2", "3", "4+"].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="departureCity" className={labelClass}>
                  Departure city
                </label>
                <input
                  id="departureCity"
                  type="text"
                  value={form.departureCity}
                  onChange={(e) => set("departureCity", e.target.value)}
                  className={inputClass}
                  placeholder="Chennai"
                  aria-invalid={Boolean(errors.departureCity)}
                />
                {errors.departureCity && (
                  <p role="alert" className={errorClass}>
                    {errors.departureCity}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="budget" className={labelClass}>
                  Approximate budget
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => set("budget", e.target.value)}
                  className={selectClass}
                  aria-invalid={Boolean(errors.budget)}
                >
                  <option value="">Choose a range</option>
                  {BUDGETS.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                {errors.budget && (
                  <p role="alert" className={errorClass}>
                    {errors.budget}
                  </p>
                )}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={inputClass}
                  placeholder="Full name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p role="alert" className={errorClass}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={inputClass}
                  placeholder="+91 98400 12345"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <p role="alert" className={errorClass}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelClass}>
                  Email (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && (
                  <p role="alert" className={errorClass}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="notes" className={labelClass}>
                  Anything else we should know? (optional)
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="Anniversary trip, vegetarian meals, elderly parents travelling, must-see places…"
                />
              </div>

              <label className="flex items-start gap-3 sm:col-span-2">
                <input
                  type="checkbox"
                  checked={form.whatsappOk}
                  onChange={(e) => set("whatsappOk", e.target.checked)}
                  className="mt-1 size-4.5 accent-[#c9821a]"
                />
                <span className="text-[0.9375rem] text-charcoal/75">
                  It&apos;s okay to reach me on WhatsApp - usually the fastest
                  way to share itineraries.
                </span>
              </label>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-6 py-2.5 font-semibold text-ink transition-colors hover:border-ink"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={goNext}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-saffron px-8 py-3 font-semibold text-ink-deep shadow-[0_8px_24px_-8px_rgba(240,166,58,0.55)] transition-colors hover:bg-saffron-deep hover:text-ivory"
        >
          {step === 2 ? "Send My Enquiry" : "Continue"}
          <ArrowRight className="size-4" aria-hidden />
        </button>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-mist">
        <Lock className="size-3.5" aria-hidden />
        Your details stay with GKVR Vacations - no spam, no third parties.
      </p>
    </div>
  );
}
