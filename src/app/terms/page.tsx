import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for PRADXCLUSIVE — scope, intellectual property, third-party collaborators, and limitations.",
  robots: "index, follow",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service | PRADXCLUSIVE®",
    description:
      "Terms of service for PRADXCLUSIVE — engagement scope and policies.",
    siteName: "PRADXCLUSIVE",
    type: "website",
    url: "https://pradx.in/terms",
    images: ["https://pradx.in/assets/pradxclusive-transparent-lockup.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | PRADXCLUSIVE®",
    description:
      "Terms of service for PRADXCLUSIVE — engagement scope and policies.",
    images: ["https://pradx.in/assets/pradxclusive-transparent-lockup.png"],
  },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://pradx.in",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Terms of Service",
            },
          ],
        }}
      />
      <SiteHeader solid minimal />
      <main className="mx-auto max-w-[800px] px-10 py-[100px] max-[600px]:px-6 max-[600px]:py-16">
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          LEGAL
        </div>
        <h1 className="mb-10 text-[clamp(32px,4vw,48px)]">Terms of service</h1>

        <p className="mb-4 text-[15px] text-label">
          These terms govern your use of the PRADXCLUSIVE website and your
          engagement with the studio for creative services.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          Engagement scope
        </h2>
        <p className="mb-4 text-[15px] text-label">
          Project scope, deliverables, timeline and cost are agreed in writing
          before work begins. Nothing on this website constitutes a binding
          quote or contract.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          Intellectual property
        </h2>
        <p className="mb-4 text-[15px] text-label">
          Final deliverables transfer to the client upon full payment, unless
          otherwise agreed in a project contract. PRADXCLUSIVE retains the right
          to display completed work in its portfolio unless confidentiality is
          requested.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          Third-party collaborators
        </h2>
        <p className="mb-4 text-[15px] text-label">
          Where development or specialist production is completed with a trusted
          collaborator, PRADXCLUSIVE remains the single point of contact and
          creative direction for the client throughout.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          Limitation
        </h2>
        <p className="mb-4 text-[15px] text-label">
          PRADXCLUSIVE is a creative studio, not a marketing, advertising or
          media-buying agency. No performance, traffic or revenue outcomes are
          guaranteed by any project.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">Contact</h2>
        <p className="mb-4 text-[15px] text-label">
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${SITE.email}`} className="text-accent">
            {SITE.email}
          </a>
          .
        </p>
      </main>
      <footer className="border-t border-border bg-background p-10 text-center">
        <p className="text-xs text-[#555555]">
          © {SITE.year} PRADXCLUSIVE® — <Link href="/#top">Back to home</Link>
        </p>
      </footer>
    </>
  );
}
