import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/data/site-content";

export default function Faq() {
  return (
    <section className="bg-sand/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:px-8">
        <SectionHeading
          number="06"
          eyebrow="Good to know"
          title="Questions travellers ask us"
          description="If yours isn't here, a call or WhatsApp message gets a straight answer - usually within the hour on working days."
        />
        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
