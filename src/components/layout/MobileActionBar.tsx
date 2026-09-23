"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone, Route } from "lucide-react";
import { brand } from "@/data/site-content";

/** Persistent bottom action bar on small screens: Call / WhatsApp / Plan. */
export default function MobileActionBar() {
  const pathname = usePathname();
  // Planner and journey pages carry their own sticky actions; avoid doubling up.
  if (pathname === "/plan-my-trip" || /^\/journeys\/[^/]+$/.test(pathname)) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 divide-x divide-ink/8">
        <a
          href={brand.phoneHref}
          className="flex min-h-[52px] items-center justify-center gap-2 text-sm font-semibold text-ink"
        >
          <Phone className="size-4 text-saffron-deep" aria-hidden />
          Call
        </a>
        <a
          href={brand.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[52px] items-center justify-center gap-2 text-sm font-semibold text-ink"
        >
          <MessageCircle className="size-4 text-saffron-deep" aria-hidden />
          WhatsApp
        </a>
        <Link
          href="/plan-my-trip"
          className="flex min-h-[52px] items-center justify-center gap-2 bg-saffron text-sm font-bold text-ink-deep"
        >
          <Route className="size-4" aria-hidden />
          Plan Trip
        </Link>
      </div>
    </div>
  );
}
