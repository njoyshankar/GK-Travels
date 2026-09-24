import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { brand, destinations } from "@/data/site-content";

const holidayLinks = [
  { label: "Family Escapes", href: "/holiday-types#family" },
  { label: "Honeymoons", href: "/holiday-types#honeymoon" },
  { label: "Friends & Groups", href: "/holiday-types#groups" },
  { label: "Spiritual Journeys", href: "/holiday-types#spiritual" },
  { label: "Luxury Breaks", href: "/holiday-types#luxury" },
  { label: "Corporate & MICE", href: "/corporate" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const footerDestinations = destinations.slice(0, 10);

  return (
    <footer className="bg-ink-deep text-ivory">
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-xl bg-ivory px-3 py-2">
              <Image
                src="/brand/gkvr-logo.png"
                alt="GKVR Vacations logo"
                width={1122}
                height={490}
                className="h-16 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/70">
              A Chennai-based travel consultancy designing personalised
              holidays across India and the world - planned end to end, with a
              real person beside you throughout the journey.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-ivory/60">
              <MapPin className="size-4 text-saffron" aria-hidden />
              {brand.city}, {brand.state}, {brand.country}
            </p>
          </div>

          <nav aria-label="Destinations">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron">
              Destinations
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-[0.9375rem]">
              {footerDestinations.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="inline-block text-ivory/70 transition-all duration-200 hover:translate-x-0.5 hover:text-saffron"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Holiday types">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron">
              Holidays
            </h2>
            <ul className="mt-5 space-y-2.5 text-[0.9375rem]">
              {holidayLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="inline-block text-ivory/70 transition-all duration-200 hover:translate-x-0.5 hover:text-saffron"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-saffron">
              Talk to us
            </h2>
            <ul className="mt-5 space-y-3.5 text-[0.9375rem]">
              <li>
                <a
                  href={brand.phoneHref}
                  className="flex items-center gap-3 text-ivory/80 transition-colors hover:text-saffron"
                >
                  <Phone className="size-4 shrink-0 text-saffron" aria-hidden />
                  {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.emailHref}
                  className="flex items-center gap-3 text-ivory/80 transition-colors hover:text-saffron"
                >
                  <Mail className="size-4 shrink-0 text-saffron" aria-hidden />
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-3 pt-1">
                <a
                  href={brand.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                  aria-label="Chat with GKVR Vacations on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="size-6" />
                </a>
                <a
                  href={brand.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
                  aria-label="GKVR Vacations on Instagram"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="size-6" />
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-ivory/50">{brand.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ivory/10 pt-8 text-sm text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-saffron">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-saffron">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
