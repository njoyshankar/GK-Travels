import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Reveal from "@/components/ui/Reveal";
import { PrimaryLink } from "@/components/ui/buttons";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Travel Memories - Our Guests on the Road",
  description:
    "Real GKVR Vacations travellers across India and the world - family trips, honeymoons and group tours captured along the way.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="bg-ivory">
      <section className="mx-auto max-w-[1320px] px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <Breadcrumbs items={[{ label: "Travel Memories" }]} tone="light" />

        <Reveal className="mt-10 max-w-2xl">
          <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron-deep">
            <span className="route-line inline-block h-px w-10" aria-hidden />
            Travel memories
          </p>
          <h1 className="font-display mt-4 text-balance text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
            Souvenirs you can&apos;t buy.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-charcoal/70">
            Straight from our travellers&apos; cameras - Kashmir meadows, Taj
            mornings, Andaman blues. No filters, no posing, just great trips.
            Your album could be next.
          </p>
        </Reveal>

        <div className="mt-14">
          <GalleryGrid
            images={galleryImages.filter((g) => g.section === "traveller")}
          />
        </div>

        <Reveal className="mt-20 max-w-2xl">
          <p className="flex items-center gap-3 text-[0.8125rem] font-semibold uppercase tracking-[0.24em] text-saffron-deep">
            <span className="route-line inline-block h-px w-10" aria-hidden />
            Beyond our borders
          </p>
          <h2 className="font-display mt-4 text-3xl font-medium leading-[1.1] text-ink sm:text-4xl">
            Postcards from where we can take you
          </h2>
          <p className="mt-4 max-w-xl text-charcoal/70">
            Scenes from the international destinations we plan - Dubai, the
            Maldives, Singapore and Bangkok - with more added as our
            travellers send home their photos.
          </p>
        </Reveal>
        <div className="mt-10">
          <GalleryGrid
            images={galleryImages.filter((g) => g.section === "destination")}
          />
        </div>

        {galleryImages.length > 0 && (
          <Reveal className="mt-24 rounded-xl3 bg-ink p-10 text-center text-ivory sm:p-14">
            <h2 className="font-display text-2xl font-medium sm:text-3xl">
              Your photo belongs on this wall
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ivory/70">
              Tell us where you want to go, and we&apos;ll plan the journey
              that gets you there - end to end, worry-free.
            </p>
            <div className="mt-7">
              <PrimaryLink href="/plan-my-trip">Plan My Trip</PrimaryLink>
            </div>
          </Reveal>
        )}
      </section>
    </div>
  );
}
