import { FadeUp } from "@/components/fade-up";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Studio } from "@/components/sections/studio";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/site";

const FAQ_ITEMS: FaqItem[] = [
  {
    question:
      "Can PRADXCLUSIVE handle branding, website and launch content together?",
    answer:
      "Yes. That connected scope is the core of the studio model. Identity, digital experience and launch material are built under one creative direction so they feel like one world, not three separate projects.",
  },
  {
    question: "Are you a digital marketing agency?",
    answer:
      "No. PRADXCLUSIVE is a creative studio focused on brand identity, websites, content systems and campaigns. The work is about building a strong, distinctive creative presence — not performance guarantees, media buying or high-volume posting.",
  },
  {
    question: "Who actually works on the project?",
    answer:
      "The founder leads strategy, design and all creative decisions directly. For technical development or specialist production, trusted collaborators join the project. You always have one point of contact and one creative direction.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Cost depends on the objective, deliverables, timeline and complexity. After a short conversation you will receive a clear scope and project estimate. Share your brief and we will give you a straight answer.",
  },
  {
    question: "How do we start?",
    answer:
      "Fill in the form below or send a direct message on WhatsApp. Share your business name, what you are trying to build or solve, and an approximate timeline. That is enough to begin.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": "https://pradxclusive.com/#webpage",
          url: "https://pradxclusive.com",
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": ORG_ID },
          mainEntity: { "@id": ORG_ID },
          name: "PRADXCLUSIVE® | Brand Identity & Creative Studio — India",
          description:
            "Founder-led creative studio in India — brand identity, websites, social content and campaigns under one connected creative direction.",
        }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <Services />
        <Studio />
        <Process />
        <section
          id="faq"
          className="px-10 py-[120px] max-[900px]:px-6 max-[900px]:py-20"
        >
          <FadeUp>
            <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
              BEFORE WE BEGIN
            </div>
            <h2 className="mb-16 text-[clamp(32px,4vw,56px)] text-foreground">
              Straight answers.
            </h2>
          </FadeUp>
          <FadeUp>
            <FaqAccordion items={FAQ_ITEMS} />
          </FadeUp>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
