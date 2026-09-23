import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import Preloader from "@/components/layout/Preloader";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
import { brand } from "@/data/site-content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  variable: "--font-body-face",
  display: "swap",
  src: [
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: "GKVR Vacations - Personalised Holidays from Chennai",
    template: "%s | GKVR Vacations",
  },
  description:
    "Chennai-based travel consultancy designing personalised holidays across India and the world - family trips, honeymoons, group tours and corporate travel, planned end to end.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: brand.name,
    locale: "en_IN",
    url: brand.siteUrl,
    title: "GKVR Vacations - Journeys designed around you",
    description:
      "Personalised holidays across India and the world, planned end to end by Chennai-based travel specialists.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GKVR Vacations - Journeys designed around you",
    description:
      "Personalised holidays across India and the world, planned end to end by Chennai-based travel specialists.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: brand.name,
  url: brand.siteUrl,
  email: brand.email,
  telephone: brand.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: brand.city,
    addressRegion: brand.state,
    addressCountry: "IN",
  },
  areaServed: ["India", "United Arab Emirates", "Singapore", "Thailand", "Indonesia", "Malaysia", "Maldives", "Türkiye", "Vietnam", "Sri Lanka", "Azerbaijan"],
  knowsAbout: [
    "Family holidays",
    "Honeymoon packages",
    "Group travel",
    "Corporate travel and MICE",
    "Custom itineraries",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${satoshi.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <noscript>
          <style>{`[style*="opacity"], [style*="clip-path"] { opacity: 1 !important; transform: none !important; clip-path: none !important; }`}</style>
        </noscript>
        <Preloader />
        <Header />
        <main id="main" className="pb-[52px] md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
