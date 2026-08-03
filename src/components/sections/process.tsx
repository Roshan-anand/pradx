import { FadeUp } from "@/components/fade-up";

const STEPS = [
  {
    title: "Discover",
    description:
      "Understand the business, audience, challenge and required outcome before anything is designed.",
  },
  {
    title: "Direct",
    description:
      "Define the positioning, creative concept and visual direction that the entire project will follow.",
  },
  {
    title: "Create",
    description:
      "Design, produce and build the identity, campaign, website or content system as one connected body of work.",
  },
  {
    title: "Evolve",
    description:
      "Deliver final assets, support the launch and strengthen the creative system as the brand grows.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="px-10 py-[120px] max-[900px]:px-6 max-[900px]:py-20"
    >
      <FadeUp>
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          HOW IT WORKS
        </div>
        <h2 className="mb-20 text-[clamp(32px,4vw,56px)] text-foreground">
          Clarity before decoration.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-4 gap-10 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
        {STEPS.map((step, index) => (
          <FadeUp key={step.title}>
            <div className="mb-4 font-serif text-[64px] text-border">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="mb-3 font-sans text-lg font-semibold text-foreground">
              {step.title}
            </div>
            <div className="text-sm leading-[1.6] text-label">
              {step.description}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
