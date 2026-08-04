import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  adjacentProjects,
  getProject,
  ORG_ID,
  PERSON_ID,
  projectDescription,
  projects,
  SITE,
  WEBSITE_ID,
} from "@/lib/site";

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
    title: project.name,
    description: projectDescription(project),
    robots: "index, follow",
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      siteName: "PRADXCLUSIVE",
      title: `${project.name} | PRADXCLUSIVE®`,
      description: projectDescription(project),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | PRADXCLUSIVE®`,
      description: projectDescription(project),
    },
  };
}

const COLUMNS = [
  {
    label: "CHALLENGE",
    title: "Placeholder challenge title",
    body: "Placeholder text — replace with the specific problem or brief this project set out to solve before launch.",
  },
  {
    label: "DIRECTION",
    title: "Placeholder direction title",
    body: "Placeholder text — replace with the creative direction, concept and visual language chosen for this project.",
  },
  {
    label: "OUTCOME",
    title: "Placeholder outcome title",
    body: "Placeholder text — replace with the final result, deliverables and impact of the completed project.",
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { previous, next } = adjacentProjects(project.slug);

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
              name: project.name,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          description: projectDescription(project),
          image: `https://pradxclusive.com${project.heroImage}`,
          about: project.category,
          author: { "@id": PERSON_ID },
          publisher: { "@id": ORG_ID },
          isPartOf: { "@id": WEBSITE_ID },
        }}
      />
      <SiteHeader solid />
      <main>
        <section className="relative h-[65vh]">
          <Image
            src={project.heroImage}
            alt={project.imageAlt}
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)]" />
          <div className="absolute bottom-12 left-10 z-[2] max-w-[800px] max-[600px]:left-6">
            <div className="mb-3 text-[11px] tracking-[0.2em] text-accent">
              {project.category}
            </div>
            <h1 className="text-[clamp(32px,5vw,64px)] text-foreground">
              {project.name}
            </h1>
            <div className="mt-3 text-xs text-label">
              {SITE.projectType} — Self-directed brand world
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1100px] px-10 py-20 max-[900px]:px-6 max-[900px]:py-16">
          <div className="mb-16 flex flex-wrap justify-between gap-6 border-b border-border pb-10">
            <div>
              <div className="text-[11px] tracking-[0.2em] text-label">
                CATEGORY
              </div>
              <div className="mt-1.5 text-sm text-foreground">
                {project.category}
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] text-label">
                DISCIPLINES
              </div>
              <div className="mt-1.5 text-sm text-foreground">
                {project.disciplines}
              </div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] text-label">
                YEAR
              </div>
              <div className="mt-1.5 text-sm text-foreground">{SITE.year}</div>
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] text-label">
                TYPE
              </div>
              <div className="mt-1.5 text-sm text-foreground">
                {SITE.projectType}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 max-[900px]:grid-cols-1">
            {COLUMNS.map((column) => (
              <div key={column.label}>
                <div className="mb-4 text-[11px] tracking-[0.2em] text-accent">
                  {column.label}
                </div>
                <div className="mb-3 font-sans text-lg font-semibold text-foreground">
                  {column.title}
                </div>
                <p className="text-sm leading-[1.7] text-label">
                  {column.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <div className="mb-8 text-[11px] tracking-[0.2em] text-label">
              VISUAL DIRECTION
            </div>
            <div className="grid grid-cols-2 gap-0.5 max-[900px]:grid-cols-1">
              {[0, 1, 2].map((tile) => (
                <div
                  key={tile}
                  className="flex aspect-[4/3] items-center justify-center bg-card p-6 text-center"
                >
                  <span className="text-xs text-[#333333]">
                    Additional image — replace before launch
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/#work"
            className="mt-20 mb-8 block text-center text-[13px] text-accent transition-colors duration-300 hover:text-foreground"
          >
            &larr; Back to all work
          </Link>

          <div className="flex justify-between border-t border-border pt-10">
            <Link
              href={`/projects/${previous.slug}`}
              className="text-sm text-label transition-colors duration-300 hover:text-foreground"
            >
              &larr; Previous project
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="text-sm text-label transition-colors duration-300 hover:text-foreground"
            >
              Next project &rarr;
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
