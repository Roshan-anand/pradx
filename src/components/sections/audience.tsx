import { FadeUp } from "@/components/fade-up";
import { audienceCategories } from "@/lib/projects";

export function Audience() {
  return (
    <section className="audience-section">
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">Who we work with</span>
          <h2>Built for ambitious businesses across categories.</h2>
          <p>
            From businesses building their first serious identity to
            established brands entering their next chapter.
          </p>
        </div>
      </FadeUp>

      <div className="category-cloud">
        {audienceCategories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
    </section>
  );
}
