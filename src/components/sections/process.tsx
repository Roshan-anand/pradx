import { FadeUp } from "@/components/fade-up";
import { process } from "@/lib/projects";

export function Process() {
  return (
    <section id="process" className="process-section">
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">How it works</span>
          <h2>Clarity before decoration.</h2>
        </div>
      </FadeUp>

      <div className="process-grid">
        {process.map(([number, title, copy]) => (
          <FadeUp key={number} className="process-step">
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
