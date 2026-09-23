import type { Metadata } from "next";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { brand } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GKVR Vacations collects, uses and protects the personal information you share while planning a trip.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:pt-36">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} tone="light" />
      <h1 className="font-display mt-8 text-4xl font-medium text-ink">
        Privacy Policy
      </h1>
      <div className="prose-gkvr mt-8 space-y-6 text-[1.0625rem] leading-relaxed text-charcoal/80">
        <p>
          {brand.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
          privacy. This policy explains what we collect through this website
          and how we use it.
        </p>
        <h2 className="font-display text-2xl font-medium text-ink">
          What we collect
        </h2>
        <p>
          When you send an enquiry, we collect the details you choose to share:
          your name, phone number, email address, travel preferences and any
          notes you add. We do not collect payment information through this
          website.
        </p>
        <h2 className="font-display text-2xl font-medium text-ink">
          How we use it
        </h2>
        <p>
          Your details are used solely to respond to your enquiry and plan your
          trip. We contact you by phone, WhatsApp or email as you prefer. We do
          not sell or share your personal information with third parties for
          marketing.
        </p>
        <h2 className="font-display text-2xl font-medium text-ink">
          Your choices
        </h2>
        <p>
          You may ask us at any time to update or delete the information we
          hold about you by writing to{" "}
          <a href={brand.emailHref} className="font-semibold text-saffron-deep">
            {brand.email}
          </a>{" "}
          or calling{" "}
          <a href={brand.phoneHref} className="font-semibold text-saffron-deep">
            {brand.phone}
          </a>
          .
        </p>
        <p className="text-sm text-mist">
          Questions about this policy? Contact us - we&apos;ll answer plainly.
        </p>
      </div>
    </section>
  );
}
