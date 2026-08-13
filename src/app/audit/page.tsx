import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Countdown } from "@/components/countdown";
import { SubmitForm } from "@/components/submit-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free Brand Audit | PRADXCLUSIVE®",
  description:
    "Request a complimentary PRADXCLUSIVE review of your positioning, identity, website and social presence.",
  robots: "index, follow",
  alternates: { canonical: "/audit" },
  openGraph: {
    title: "Free Brand Audit | PRADXCLUSIVE®",
    description:
      "Request a complimentary PRADXCLUSIVE review of your positioning, identity, website and social presence.",
    siteName: "PRADXCLUSIVE",
    type: "website",
    url: "https://pradxclusive.com/audit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Brand Audit | PRADXCLUSIVE®",
    description:
      "Request a complimentary PRADXCLUSIVE review of your positioning, identity, website and social presence.",
  },
};

export default function AuditPage() {
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
              item: "https://pradxclusive.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Free Brand Audit",
            },
          ],
        }}
      />
      <SiteHeader solid />
      <main className="audit-page">
        <section className="audit-page-intro">
          <span className="eyebrow">Complimentary brand review</span>
          <h1>
            Your brand may be better
            <br />
            than it looks.
            <br />
            <em>Let&rsquo;s find out.</em>
          </h1>
          <p>
            Get a focused review of your positioning, visual identity, website
            and social presence, with clear opportunities to strengthen how your
            business is perceived.
          </p>
          <span className="capacity">
            5 complimentary brand reviews available each week.
          </span>
          <div className="audit-page-countdown">
            <span className="eyebrow">Current review window closes in</span>
            <Countdown />
          </div>
        </section>

        <section className="audit-form-wrap">
          <SubmitForm
            name="brand-audit"
            className="audit-form"
            successTitle="Audit request received."
            successCopy="We'll review your brand and contact you with the next step."
            submitLabel="Request my free audit"
          >
            <label>
              <span>Name</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              <span>Company / Brand</span>
              <input name="company" required />
            </label>
            <label>
              <span>Website</span>
              <input name="website" type="url" placeholder="https://" />
            </label>
            <label>
              <span>Instagram</span>
              <input name="instagram" placeholder="@yourbrand" />
            </label>
            <label>
              <span>WhatsApp Number</span>
              <input name="whatsapp" type="tel" required autoComplete="tel" />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="wide">
              <span>Primary Concern</span>
              <select name="primary-concern" required defaultValue="">
                <option value="" disabled>
                  Choose the closest concern
                </option>
                <option>Brand looks outdated</option>
                <option>Brand doesn&rsquo;t feel premium</option>
                <option>Website needs improvement</option>
                <option>Social presence feels inconsistent</option>
                <option>Starting a new brand</option>
                <option>Need a rebrand</option>
                <option>Not sure — audit it for me</option>
              </select>
            </label>
            <label className="wide">
              <span>
                Anything we should know? <small>Optional</small>
              </span>
              <textarea name="notes" rows={5} />
            </label>
          </SubmitForm>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
