import { FadeUp } from "@/components/fade-up";
import { testimonials } from "@/lib/projects";

export function Testimonials() {
  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">Client testimonials</span>
          <h2 id="testimonials-title">Real clients. Real impact.</h2>
          <p>
            Short reflections from founders and teams who trusted PRADXCLUSIVE
            with their brand, identity or digital presence.
          </p>
        </div>
      </FadeUp>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <FadeUp key={testimonial.name} className="testimonial-card">
            {testimonial.metric && (
              <div className="testimonial-metric">
                <strong>{testimonial.metric}</strong>
                <span>{testimonial.metricLabel}</span>
              </div>
            )}
            <blockquote>“{testimonial.quote}”</blockquote>
            <footer>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
