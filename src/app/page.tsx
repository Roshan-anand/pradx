import { type FaqItem } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { AuditOffer } from "@/components/sections/audit-offer";
import { Audience } from "@/components/sections/audience";
import { Contact } from "@/components/sections/contact";
import { ExperienceMarquee } from "@/components/sections/experience-marquee";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { OneBrand, Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Studio } from "@/components/sections/studio";
import { Testimonials } from "@/components/sections/testimonials";
import { Work } from "@/components/sections/work";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faq } from "@/lib/projects";
import { ORG_ID, WEBSITE_ID } from "@/lib/site";

const FAQ_ITEMS: FaqItem[] = faq.map(([question, answer]) => ({
  question,
  answer,
}));

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
          name: "PRADXCLUSIVE® | Independent Brand & Creative Studio — India",
          description:
            "PRADXCLUSIVE builds brand strategy, identity, packaging, websites, campaigns, content and social presence for ambitious businesses.",
        }}
      />
      <SiteHeader />
      <main id="top">
        <Hero />
        <ExperienceMarquee />
        <AuditOffer />
        <Work />
        <Services />
        <OneBrand />
        <Studio />
        <Testimonials />
        <Audience />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
