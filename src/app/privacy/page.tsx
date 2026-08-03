import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { SiteHeader } from "@/components/site-header";
import { SITE, WEBSITE_ID } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for PRADXCLUSIVE — how we collect, use, and protect your information when you enquire through our website.",
  robots: "index, follow",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | PRADXCLUSIVE®",
    description:
      "How PRADXCLUSIVE collects, uses, and protects your information.",
    siteName: "PRADXCLUSIVE",
    type: "website",
    url: "https://pradx.in/privacy",
    images: ["https://pradx.in/assets/pradxclusive-transparent-lockup.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | PRADXCLUSIVE®",
    description:
      "How PRADXCLUSIVE collects, uses, and protects your information.",
    images: ["https://pradx.in/assets/pradxclusive-transparent-lockup.png"],
  },
};

export default function PrivacyPage() {
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
              name: "Privacy Policy",
            },
          ],
        }}
      />
      <SiteHeader solid minimal />
      <main className="mx-auto max-w-[800px] px-10 py-[100px] max-[600px]:px-6 max-[600px]:py-16">
        <div className="mb-4 text-[11px] tracking-[0.2em] text-label">
          LEGAL
        </div>
        <h1 className="mb-10 text-[clamp(32px,4vw,48px)]">Privacy policy</h1>

        <p className="mb-4 text-[15px] text-label">
          PRADXCLUSIVE (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the
          studio&rdquo;) respects your privacy. This policy explains what
          information is collected through this website and how it is used.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          Information we collect
        </h2>
        <p className="mb-4 text-[15px] text-label">
          When you submit the project enquiry form, we collect the details you
          provide — your name, email address, company name, industry, service
          interest, budget range and project brief. We do not collect payment
          information through this website.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          How information is used
        </h2>
        <p className="mb-4 text-[15px] text-label">
          Enquiry details are used solely to respond to your project request and
          to prepare a scope or proposal. Information is never sold to third
          parties.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">
          Data storage
        </h2>
        <p className="mb-4 text-[15px] text-label">
          Form submissions are stored securely on the studio&rsquo;s
          infrastructure. You may request deletion of your submitted information
          at any time by contacting us.
        </p>

        <h2 className="mt-10 mb-3 font-sans text-lg font-semibold">Contact</h2>
        <p className="mb-4 text-[15px] text-label">
          For any privacy-related questions, reach out at{" "}
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
