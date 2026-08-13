import { FadeUp } from "@/components/fade-up";
import { FaqAccordion } from "@/components/faq-accordion";
import { faq } from "@/lib/projects";

export function Faq() {
  return (
    <section className="faq-section">
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">Before we begin</span>
          <h2>Straight answers.</h2>
        </div>
      </FadeUp>

      <div className="faq-list">
        <FaqAccordion
          items={faq.map(([question, answer]) => ({ question, answer }))}
        />
      </div>
    </section>
  );
}
