import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="work-section">
      <FadeUp>
        <div className="section-heading">
          <span className="eyebrow">Selected work</span>
          <h2>Selected work. Built to matter.</h2>
          <p>
            Identity, digital, packaging and campaign work shaped around one
            thing: making ambitious businesses clearer, stronger and harder to
            overlook.
          </p>
        </div>
      </FadeUp>

      <div className="project-grid">
        {projects.map((project) => (
          <FadeUp key={project.slug}>
            <Link className="project-card" href={`/projects/${project.slug}`}>
              <div
                className={`project-image${
                  project.coverFit === "contain"
                    ? " project-image--contain"
                    : ""
                }`}
              >
                {/* biome-ignore lint/performance/noImgElement: project cover art — plain img keeps the exact supplied asset */}
                <img
                  src={project.cover}
                  alt={`${project.title} — ${project.category} project`}
                  loading={project.number === "01" ? "eager" : "lazy"}
                />
                <span className="project-number">{project.number}</span>
              </div>
              <div className="project-card-copy">
                <div>
                  <span className="card-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <span className="text-link">View project ↗</span>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="work-cta">
        <p>Working on something that needs to be remembered?</p>
        <a className="text-link" href="#contact">
          Let&rsquo;s talk →
        </a>
      </FadeUp>
    </section>
  );
}
