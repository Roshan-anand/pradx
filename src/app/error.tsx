"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 text-[11px] tracking-[0.2em] text-label">ERROR</div>
      <h1 className="mb-4 text-[clamp(32px,4vw,56px)] text-foreground">
        Something went wrong
      </h1>
      <p className="mb-10 max-w-[400px] text-[15px] leading-[1.6] text-label">
        An unexpected error occurred. Please try again or return to the
        homepage.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          onClick={reset}
          className="inline-block rounded-sm bg-accent px-8 py-3.5 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-dark-green"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-block rounded-sm border border-border px-8 py-3.5 font-sans text-sm text-foreground transition-colors duration-300 hover:bg-card"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
