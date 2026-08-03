"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-[800px]">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="border-b border-border py-7">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-6 text-left"
            >
              <span className="font-sans text-[17px] font-semibold text-foreground">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "text-xl text-accent transition-transform duration-300",
                  open && "rotate-180",
                )}
              >
                {open ? "−" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-[400ms] ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pt-4 text-[15px] leading-[1.7] text-label">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
