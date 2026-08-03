import { FadeUp } from "@/components/fade-up";

interface Service {
  title: string;
  items: string[];
  note?: string;
}

const SERVICES: Service[] = [
  {
    title: "Brand Systems",
    items: [
      "Brand direction and positioning",
      "Visual identity and logo systems",
      "Typography and colour systems",
      "Brand guidelines and collateral",
      "Packaging design",
      "Campaign identity",
    ],
  },
  {
    title: "Websites and Digital Experiences",
    items: [
      "Website strategy and information architecture",
      "UI and UX design",
      "Responsive website design",
      "Landing pages and portfolio sites",
      "Development with a trusted specialist developer",
      "Technical SEO and launch support",
    ],
    note: "Creative direction and design by PRADXCLUSIVE. Development completed with a specialist collaborator.",
  },
  {
    title: "Social Content Systems",
    items: [
      "Content direction and visual systems",
      "Posts, carousels and reels",
      "Launch content and campaign calendars",
      "Motion graphics and templates",
      "Advertising creatives",
    ],
    note: "Publishing and community management scoped separately.",
  },
  {
    title: "Campaigns and Creative Production",
    items: [
      "Campaign concepts and key visuals",
      "Product and brand launch campaigns",
      "Promotional videos and brand films",
      "AI-assisted creative production",
      "Real estate and sector campaigns",
      "Multi-format rollout assets",
    ],
    note: "Media buying and performance management handled separately when required.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="px-10 py-[120px] max-[900px]:px-6 max-[900px]:py-20"
    >
      <FadeUp>
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          CORE SERVICES
        </div>
        <h2 className="mb-4 text-[clamp(32px,4vw,56px)] text-foreground">
          One direction. Every expression.
        </h2>
        <p className="mb-20 max-w-[560px] text-[15px] text-label">
          Start with one focused need or connect the complete brand experience.
        </p>
      </FadeUp>

      <FadeUp>
        <div className="grid grid-cols-2 gap-px border border-border bg-border max-[900px]:grid-cols-1">
          {SERVICES.map((service, index) => (
            <div key={service.title} className="bg-background px-10 py-12">
              <div className="mb-5 text-[11px] tracking-[0.2em] text-label">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-6 font-sans text-xl font-semibold text-foreground">
                {service.title}
              </div>
              <ul>
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-[#1A1A1A] py-2 text-sm text-label"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-1 shrink-0 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-5 text-[13px] italic text-[#555555]">
                  {service.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
