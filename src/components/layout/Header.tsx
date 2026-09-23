"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  Flower2,
  Gem,
  Heart,
  MapPin,
  Menu,
  Phone,
  Users,
  UsersRound,
  X,
} from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { brand, destinations } from "@/data/site-content";
import { EASE } from "@/lib/motion";

const holidayTypeLinks = [
  { label: "Family", href: "/holiday-types#family", icon: Users },
  { label: "Honeymoon", href: "/holiday-types#honeymoon", icon: Heart },
  { label: "Group Tours", href: "/holiday-types#groups", icon: UsersRound },
  { label: "Spiritual", href: "/holiday-types#spiritual", icon: Flower2 },
  { label: "Luxury", href: "/holiday-types#luxury", icon: Gem },
  { label: "Corporate / MICE", href: "/corporate", icon: Briefcase },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"destinations" | "holidays" | null>(
    null
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  // Drawer renders in a portal: the header's backdrop-blur creates a
  // containing block that would otherwise trap fixed-position children.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const navRef = useRef<HTMLElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || drawerOpen || openMenu !== null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change (state adjustment during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setDrawerOpen(false);
  }

  // Escape closes mega menu / drawer, returning focus sensibly
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (drawerOpen) {
        setDrawerOpen(false);
        menuButtonRef.current?.focus();
      }
      setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  // Click outside closes the mega menu
  useEffect(() => {
    if (!openMenu) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [openMenu]);

  // Lock body scroll + trap focus while the drawer is open
  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const drawer = drawerRef.current;
    const focusables = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trap);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", trap);
    };
  }, [drawerOpen]);

  const toggleMenu = useCallback(
    (menu: "destinations" | "holidays") =>
      setOpenMenu((current) => (current === menu ? null : menu)),
    []
  );

  const linkClass = (href: string) => {
    const active = pathname === href || (href !== "/" && pathname.startsWith(href));
    return `relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
      active
        ? solid
          ? "text-saffron-deep"
          : "text-saffron"
        : solid
          ? "text-ink hover:text-saffron-deep"
          : "text-ivory/90 hover:text-ivory"
    }`;
  };

  const india = destinations.filter((d) => d.region === "india");
  const world = destinations.filter((d) => d.region === "international");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-ink/8 bg-ivory/95 shadow-[0_2px_24px_-12px_rgba(23,27,69,0.25)] backdrop-blur-md"
          : "bg-gradient-to-b from-ink-deep/60 to-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-saffron focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-deep"
      >
        Skip to content
      </a>
      <nav
        ref={navRef}
        aria-label="Main"
        className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="GKVR Vacations - home"
        >
          <span
            className={`inline-flex rounded-xl px-2 py-1 transition-colors ${
              solid ? "" : "bg-ivory/95"
            }`}
          >
            <Image
              src="/brand/gkvr-logo.png"
              alt="GKVR Vacations logo"
              width={1122}
              height={490}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("destinations")}
              aria-expanded={openMenu === "destinations"}
              aria-haspopup="true"
              className={`${linkClass("/destinations")} inline-flex items-center gap-1`}
            >
              Destinations
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  openMenu === "destinations" ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu("holidays")}
              aria-expanded={openMenu === "holidays"}
              aria-haspopup="true"
              className={`${linkClass("/holiday-types")} inline-flex items-center gap-1`}
            >
              Holiday Types
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  openMenu === "holidays" ? "rotate-180" : ""
                }`}
                aria-hidden
              />
            </button>
          </div>

          <Link href="/plan-my-trip" className={linkClass("/plan-my-trip")}>
            Customise My Trip
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={brand.phoneHref}
            className={`hidden size-11 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5 md:inline-flex ${
              solid
                ? "border-ink/15 text-ink hover:border-saffron-deep hover:text-saffron-deep"
                : "border-ivory/30 text-ivory hover:border-ivory"
            }`}
            aria-label={`Call GKVR Vacations on ${brand.phone}`}
            title={`Call ${brand.phone}`}
          >
            <Phone className="size-[18px]" aria-hidden />
          </a>
          <a
            href={brand.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
            aria-label="Chat with GKVR Vacations on WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="size-[20px]" />
          </a>
          <a
            href={brand.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden size-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
            aria-label="GKVR Vacations on Instagram"
            title="Follow on Instagram"
          >
            <InstagramIcon className="size-[19px]" />
          </a>
          <Link
            href="/plan-my-trip"
            className="hidden min-h-11 items-center rounded-full bg-saffron px-6 py-2.5 text-[0.9375rem] font-semibold text-ink-deep shadow-[0_8px_24px_-8px_rgba(240,166,58,0.55)] transition-colors hover:bg-saffron-deep hover:text-ivory sm:inline-flex"
          >
            Plan My Trip
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            aria-expanded={drawerOpen}
            className={`inline-flex size-11 items-center justify-center rounded-full border lg:hidden ${
              solid
                ? "border-ink/15 text-ink"
                : "border-ivory/30 text-ivory"
            }`}
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </nav>

      {/* Destinations mega menu */}
      <AnimatePresence>
        {openMenu === "destinations" && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute inset-x-0 top-full hidden border-b border-ink/8 bg-ivory shadow-[0_24px_48px_-24px_rgba(23,27,69,0.35)] lg:block"
          >
            <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_1.7fr_1fr] gap-12 px-8 py-10">
              <div>
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-saffron-deep">
                  Incredible India
                </p>
                <ul className="mt-4 space-y-0.5">
                  {india.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/destinations/${d.slug}`}
                        className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-sand/60 hover:text-saffron-deep"
                      >
                        <MapPin className="size-3.5 shrink-0 text-saffron-deep/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-saffron-deep" aria-hidden />
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">{d.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/destinations/india"
                  className="mt-4 inline-block px-3 text-sm font-semibold text-saffron-deep hover:underline"
                >
                  All India journeys →
                </Link>
              </div>
              <div>
                <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-saffron-deep">
                  Around the world
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-0.5">
                  {world.map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={`/destinations/${d.slug}`}
                        className="group flex items-center gap-2.5 rounded-lg px-3 py-2 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-sand/60 hover:text-saffron-deep"
                      >
                        <MapPin className="size-3.5 shrink-0 text-saffron-deep/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-saffron-deep" aria-hidden />
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">{d.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/destinations/international"
                  className="mt-4 inline-block px-3 text-sm font-semibold text-saffron-deep hover:underline"
                >
                  All international journeys →
                </Link>
              </div>
              <div className="rounded-xl3 bg-ink p-6 text-ivory">
                <p className="font-display text-xl leading-snug">
                  Not sure where to go?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                  Tell us your budget and travel month - we&apos;ll shortlist
                  destinations that truly fit.
                </p>
                <Link
                  href="/plan-my-trip"
                  className="mt-5 inline-flex min-h-11 items-center rounded-full bg-saffron px-5 py-2 text-sm font-semibold text-ink-deep hover:bg-saffron-deep hover:text-ivory"
                >
                  Start planning
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Holiday types menu */}
        {openMenu === "holidays" && (
          <motion.div
            key="holidays"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="absolute inset-x-0 top-full hidden border-b border-ink/8 bg-ivory shadow-[0_24px_48px_-24px_rgba(23,27,69,0.35)] lg:block"
          >
            <div className="mx-auto flex max-w-[1320px] flex-wrap gap-3 px-8 py-8">
              {holidayTypeLinks.map((t) => (
                <Link
                  key={t.label}
                  href={t.href}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-ink/12 px-5 py-2.5 text-[0.9375rem] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-saffron-deep hover:bg-sand/50 hover:text-saffron-deep"
                >
                  <t.icon className="size-4 text-saffron-deep/70 transition-colors group-hover:text-saffron-deep" aria-hidden />
                  {t.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer (portal - see note at drawerOpen state) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {drawerOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-ink-deep/50 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: EASE }}
              className="fixed inset-y-0 right-0 z-50 flex w-[min(24rem,88vw)] flex-col overflow-y-auto bg-ivory shadow-2xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-ink/8 px-6 py-4">
                <Image
                  src="/brand/gkvr-logo.png"
                  alt="GKVR Vacations logo"
                  width={1122}
                  height={490}
                  className="h-9 w-auto"
                />
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  aria-label="Close menu"
                  className="inline-flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 px-6 py-6">
                <ul className="space-y-1">
                  {[
                    { label: "Home", href: "/" },
                    { label: "Destinations", href: "/destinations" },
                    { label: "India", href: "/destinations/india", sub: true },
                    {
                      label: "International",
                      href: "/destinations/international",
                      sub: true,
                    },
                    { label: "Holiday Types", href: "/holiday-types" },
                    { label: "Corporate & MICE", href: "/corporate" },
                    { label: "Customise My Trip", href: "/plan-my-trip" },
                    { label: "About", href: "/about" },
                    { label: "Contact", href: "/contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-xl px-4 py-3 font-medium transition-colors hover:bg-sand/60 ${
                          item.sub ? "ml-4 text-[0.9375rem] text-charcoal/75" : "text-lg text-ink"
                        } ${pathname === item.href ? "bg-sand/60 text-saffron-deep" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3 border-t border-ink/8 pt-6">
                  <a
                    href={brand.phoneHref}
                    className="flex min-h-11 items-center gap-3 rounded-xl bg-ink px-4 py-3 font-semibold text-ivory"
                  >
                    <Phone className="size-4.5 text-saffron" aria-hidden />
                    {brand.phone}
                  </a>
                  <a
                    href={brand.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 rounded-xl bg-[#25D366] px-4 py-3 font-semibold text-white"
                  >
                    <WhatsAppIcon className="size-5" />
                    Chat on WhatsApp
                  </a>
                  <a
                    href={brand.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center gap-3 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-4 py-3 font-semibold text-white"
                  >
                    <InstagramIcon className="size-5" />
                    Follow on Instagram
                  </a>
                  <Link
                    href="/plan-my-trip"
                    className="flex min-h-11 items-center justify-center rounded-full bg-saffron px-4 py-3 font-semibold text-ink-deep"
                  >
                    Plan My Trip
                  </Link>
                </div>
              </nav>
            </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
