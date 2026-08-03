import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="mb-4 text-[11px] tracking-[0.2em] text-label">404</div>
      <h1 className="mb-4 text-[clamp(32px,4vw,56px)] text-foreground">
        Page not found
      </h1>
      <p className="mb-10 max-w-[400px] text-[15px] leading-[1.6] text-label">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block rounded-sm bg-accent px-8 py-3.5 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-dark-green"
      >
        Back to home
      </Link>
    </main>
  );
}
