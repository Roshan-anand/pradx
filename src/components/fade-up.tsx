import { cn } from "@/lib/utils";

/**
 * Fade-up entrance animation.
 *
 * Server component: the reveal is done with CSS only. Elements start hidden and
 * become visible when the element enters the viewport, using the native CSS
 * `animation-timeline: view()` scroll-driven animation (Chrome 115+, Safari
 * 26+, Firefox 125+). No JS, no IntersectionObserver, no hydration cost.
 *
 * Progressive enhancement:
 * - Browsers without scroll-driven animation support keep `@supports`-gated
 *   animation and stay visible (no content ever hidden from the user).
 * - `prefers-reduced-motion` (globals.css) collapses the animation to 0.01 ms,
 *   leaving content visible.
 */
export function FadeUp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("fade-up", className)}>{children}</div>;
}
