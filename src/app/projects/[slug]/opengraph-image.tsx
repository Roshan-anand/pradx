import { ImageResponse } from "next/og";
import { getProject, projects, SITE } from "@/lib/site";

export const alt = "PRADXCLUSIVE® — selected work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  const category = (project?.category ?? "Selected work").toUpperCase();
  const name = project?.name ?? "PRADXCLUSIVE®";
  const disciplines =
    project?.disciplines ?? "Brand identity, websites, content and campaigns";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "64px 72px",
        backgroundColor: "#0a0a0a",
        color: "#f7f5f0",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 19,
          letterSpacing: "0.26em",
          color: "#888888",
          textTransform: "uppercase",
        }}
      >
        <span>PRADXCLUSIVE®</span>
        <span>
          {SITE.projectType} · {SITE.year}
        </span>
      </div>

      {/* Middle */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#2d7a4f",
              marginRight: 18,
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.32em",
              color: "#2d7a4f",
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 92,
            lineHeight: 1.08,
            fontWeight: 700,
            color: "#f7f5f0",
            maxWidth: 1040,
          }}
        >
          {name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            lineHeight: 1.5,
            color: "#888888",
            maxWidth: 900,
          }}
        >
          {disciplines}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #1e1e1e",
          paddingTop: 28,
          fontSize: 19,
          letterSpacing: "0.22em",
          color: "#555555",
          textTransform: "uppercase",
        }}
      >
        <span>Self-directed brand world</span>
        <span>pradx.in</span>
      </div>
    </div>,
    size,
  );
}
