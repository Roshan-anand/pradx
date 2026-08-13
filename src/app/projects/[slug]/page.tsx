import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { MotionCollection } from "@/components/motion-collection";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  adjacentProjects,
  getProject,
  projectDescription,
  projects,
} from "@/lib/projects";
import { ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: projectDescription(project),
    robots: "index, follow",
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      siteName: "PRADXCLUSIVE",
      title: `${project.title} | PRADXCLUSIVE®`,
      description: projectDescription(project),
      images: [{ url: `https://pradxclusive.com${project.cover}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | PRADXCLUSIVE®`,
      description: projectDescription(project),
      images: [`https://pradxclusive.com${project.cover}`],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { next } = adjacentProjects(project.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://pradxclusive.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Work",
              item: "https://pradxclusive.com/#work",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.title,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: projectDescription(project),
          image: `https://pradxclusive.com${project.cover}`,
          about: project.category,
          author: { "@id": PERSON_ID },
          publisher: { "@id": ORG_ID },
          isPartOf: { "@id": WEBSITE_ID },
        }}
      />
      <SiteHeader solid />
      <main className="project-page">
        <section
          className={`project-hero${
            project.coverFit === "contain" ? " project-hero--contain" : ""
          }`}
        >
          {/* biome-ignore lint/performance/noImgElement: case-study hero cover — plain img so the contain/cover object-fit variant matches the design */}
          <img
            src={project.hero || project.cover}
            alt={`${project.title} project cover`}
          />
          <div className="project-hero-shade" />
          <div className="project-title">
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
            {project.campaign && <p>{project.campaign}</p>}
          </div>
        </section>

        <section className="project-meta">
          <div>
            <span>Category</span>
            <strong>{project.category}</strong>
          </div>
          <div>
            <span>Disciplines</span>
            <strong>{project.disciplines}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{project.type}</strong>
          </div>
        </section>

        <section
          className="project-breakdown"
          aria-label={`${project.title} case study breakdown`}
        >
          {Object.entries(project.breakdown).map(([label, item]) => (
            <article key={label}>
              <span>{label}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </article>
          ))}
        </section>

        <section className="project-introduction">
          <span className="eyebrow">The project</span>
          <h2>{project.description}</h2>
          <p>{project.intro}</p>
        </section>

        {project.highlight && (
          <section className="project-highlight">
            <div className="project-highlight-metric">
              <span>{project.highlight.metricLabel}</span>
              <strong>{project.highlight.metric}</strong>
              <small>{project.highlight.metricMeta}</small>
            </div>
            <div className="project-highlight-copy">
              <span className="eyebrow">{project.highlight.eyebrow}</span>
              <h2>{project.highlight.title}</h2>
              <p>{project.highlight.copy}</p>
            </div>
          </section>
        )}

        {project.motion ? (
          <MotionCollection />
        ) : (
          <section className="project-gallery">
            {project.gallery?.map(([label, src], index) => (
              <figure className="gallery-item" key={src}>
                {/* biome-ignore lint/performance/noImgElement: case-study gallery art — plain img keeps the exact supplied asset */}
                <img
                  src={src}
                  alt={`${project.title} — ${label}`}
                  loading={index < 2 ? "eager" : "lazy"}
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </figcaption>
              </figure>
            ))}
          </section>
        )}

        <section className="next-project">
          <span className="eyebrow">Next project</span>
          <Link href={`/projects/${next.slug}`}>
            <h2>{next.title}</h2>
            <span>View project ↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
