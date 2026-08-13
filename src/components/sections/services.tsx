import { FadeUp } from "@/components/fade-up";
import { capabilities } from "@/lib/projects";

export function Services() {
  return (
    <section id="services" className="services-section">
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">Core services</span>
          <h2>One direction. Every expression.</h2>
          <p>
            Start with one focused need or connect the complete brand
            experience.
          </p>
        </div>
      </FadeUp>

      <div className="capability-list">
        {capabilities.map(([number, title, items]) => (
          <FadeUp key={number}>
            <article className="capability">
              <span>{number}</span>
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

export function OneBrand() {
  return (
    <section className="one-brand">
      <div>
        <span className="eyebrow">Connected creative direction</span>
        <h2>
          One brand.
          <br />
          One direction.
          <br />
          <em>Everywhere.</em>
        </h2>
      </div>
      <p>
        Strategy, identity, websites, campaigns and ongoing content should not
        feel like five different companies created them. PRADXCLUSIVE builds one
        clear system and carries it across every place your audience meets the
        brand.
      </p>
    </section>
  );
}
