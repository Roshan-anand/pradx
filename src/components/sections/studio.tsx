import Image from "next/image";
import { FadeUp } from "@/components/fade-up";

const POINTS = [
  {
    title: "Direct creative leadership",
    description:
      "The founder leads strategy, design and creative direction on every project.",
  },
  {
    title: "Specialist execution",
    description:
      "Developers and production specialists join only where their expertise is genuinely required.",
  },
  {
    title: "One connected system",
    description:
      "Identity, campaigns, content and digital experiences remain consistent and connected throughout.",
  },
];

export function Studio() {
  return (
    <section
      id="studio"
      className="px-10 py-[120px] max-[900px]:px-6 max-[900px]:py-20"
    >
      <FadeUp>
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          THE STUDIO
        </div>
        <h2 className="mb-16 text-[clamp(32px,4vw,56px)] text-foreground">
          Founder-led. Built for the work.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-[40%_55%] gap-[5%] max-[900px]:grid-cols-1 max-[900px]:gap-12">
        <FadeUp>
          <Image
            src="/assets/founder.jpg"
            alt="Pradyumna. M, Founder of PRADXCLUSIVE"
            width={1080}
            height={1440}
            sizes="(max-width: 900px) 100vw, 40vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAVABADASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EACYQAAIBAwIFBQEAAAAAAAAAAAECAwAEESExBRITIkEGFCNRYcH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEA//EABoRAAEFAQAAAAAAAAAAAAAAAAABAgMRIRL/2gAMAwEAAhEDEQA/AEOHW9pHa9SNkEaLzM7aEDfWuwzRNZvcWjGVVGfi7uY/QomDiuLJbb26gvlFZWJ0OxJP7mtS3Fzw6GW2s4oBdFudzg9xOxHjwN6M2Ny6I6wJEhEg01MzDP4DgUh6xjaOfrRuVKQhyPvDY/tVVKukJn//2Q=="
            className="aspect-[3/4] w-full rounded object-cover object-top grayscale-[15%] contrast-[1.05]"
          />
          <div className="mt-5 font-sans text-lg font-semibold text-foreground">
            Pradyumna. M
          </div>
          <div className="mt-1.5 text-[13px] tracking-[0.1em] text-accent">
            Founder, PRADXCLUSIVE
          </div>
        </FadeUp>

        <FadeUp>
          <p className="mb-12 text-base leading-[1.8] text-label">
            &ldquo;I started PRADXCLUSIVE because I was tired of watching good
            businesses get forgettable creative work. Brand identity, campaigns,
            websites and content should work together under one clear direction
            — not get divided between five different vendors who have never
            spoken to each other. Every project that comes through this studio
            gets that same standard, whether it starts with a logo or a full
            launch campaign.&rdquo;
          </p>

          {POINTS.map((point, index) => (
            <div key={point.title} className="mb-8 flex gap-6 last:mb-0">
              <div className="mt-0.5 min-w-[28px] text-[11px] tracking-[0.2em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <div className="mb-2 font-sans text-base font-semibold text-foreground">
                  {point.title}
                </div>
                <div className="text-sm leading-[1.6] text-label">
                  {point.description}
                </div>
              </div>
            </div>
          ))}
        </FadeUp>
      </div>

      <FadeUp className="mt-16 rounded border border-accent px-10 py-7 text-center">
        <p className="font-sans text-[15px] font-medium text-foreground">
          Based in India. Available for projects worldwide.
        </p>
      </FadeUp>
    </section>
  );
}
