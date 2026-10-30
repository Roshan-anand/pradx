import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

export function AuditOffer() {
  return (
    <section className="audit-offer" id="audit">
      <FadeUp className="audit-copy">
        <span className="eyebrow">Complimentary brand review</span>
        <h2>
          Your brand may be better
          <br />
          than it looks.
          <br />
          <em>Let&rsquo;s find out.</em>
        </h2>
        <p>
          Get a focused review of your positioning, visual identity, website
          and social presence, with clear opportunities to strengthen how your
          business is perceived.
        </p>
        <span className="capacity">
          5 complimentary brand reviews available each week.
        </span>
        <Link className="button" href="/audit">
          Claim your free brand audit
        </Link>
      </FadeUp>
    </section>
  );
}
