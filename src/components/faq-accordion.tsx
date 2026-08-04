import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="mx-auto max-w-[800px]">
      {items.map((item) => (
        <details
          key={item.question}
          name="faq"
          className="group border-b border-border py-7"
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-sans text-[17px] font-semibold text-foreground">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "text-xl text-accent transition-transform duration-300 group-open:rotate-180",
              )}
            >
              +
            </span>
          </summary>
          <div className="faq-answer overflow-hidden">
            <p className="pt-4 text-[15px] leading-[1.7] text-label">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
