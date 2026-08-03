import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/fade-up";
import { projects } from "@/lib/site";

export function Work() {
  return (
    <section
      id="work"
      className="px-10 py-[120px] max-[900px]:px-6 max-[900px]:py-20"
    >
      <FadeUp>
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          SELECTED WORK
        </div>
        <h2 className="mb-4 text-[clamp(32px,4vw,56px)] text-foreground">
          Built to be remembered.
        </h2>
        <p className="mb-16 text-[15px] italic text-label">
          Founding portfolio — eight self-directed brand worlds built to
          establish the studio&rsquo;s standard of work.
        </p>
      </FadeUp>

      <div className="grid grid-cols-2 gap-0.5 max-[900px]:grid-cols-1">
        {projects.map((project) => (
          <FadeUp key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group relative block overflow-hidden"
            >
              <div className="overflow-hidden rounded">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={project.heroImage}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="rounded object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[rgba(10,10,10,0.7)] text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="font-sans text-xl font-bold text-white">
                  {project.name}
                </div>
                <div className="mt-2 text-[13px] text-label">
                  {project.disciplines}
                </div>
              </div>
              <div className="py-5">
                <div className="font-sans text-base font-medium text-foreground">
                  {project.name}
                </div>
                <div className="mt-1 text-[13px] text-label">
                  {project.summary}
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>

      <FadeUp className="pt-20 text-center">
        <p className="text-base text-label">
          Working on something that needs to be remembered?
        </p>
        <a
          href="#contact"
          className="font-semibold text-accent transition-colors duration-300 hover:text-foreground"
        >
          Let&rsquo;s talk &rarr;
        </a>
      </FadeUp>
    </section>
  );
}
