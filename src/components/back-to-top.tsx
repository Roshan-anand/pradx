"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Show the button only after the visitor has scrolled past this many pixels.
const SHOW_AFTER = 600;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      className={cn(
        "group fixed bottom-0 left-1/2 z-[900] flex h-8 w-16 -translate-x-1/2 items-start justify-center rounded-t-full border border-b-0 border-border bg-card/70 pt-2 text-foreground/80 backdrop-blur-sm transition-all duration-300 hover:h-10 hover:border-accent hover:bg-card hover:text-accent",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.25} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 rounded-sm bg-foreground px-3 py-1.5 text-xs font-semibold tracking-wide whitespace-nowrap text-background opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        Back to top
      </span>
    </button>
  );
}
