import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/back-to-top";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { ORG_ID, PERSON_ID, WEBSITE_ID } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pradx.in"),
  title: {
    default: "PRADXCLUSIVE® | Brand Identity, Websites & Campaigns — India",
    template: "%s | PRADXCLUSIVE®",
  },
  description:
    "PRADXCLUSIVE is a founder-led creative studio based in India, working worldwide. Brand identity, websites, social content and campaigns — under one connected creative direction.",
  keywords: [
    "brand identity studio",
    "creative agency India",
    "brand design",
    "website design",
    "campaign creative",
    "social content studio",
    "PRADXCLUSIVE",
  ],
  authors: [{ name: "Pradyumna. M" }],
  creator: "Pradyumna. M, PRADXCLUSIVE",
  applicationName: "PRADXCLUSIVE",
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PRADXCLUSIVE® | Nothing ordinary leaves this house.",
    description:
      "Brand identity, websites, social content and campaigns — under one connected creative direction. Founder-led creative studio, India — available worldwide.",
    siteName: "PRADXCLUSIVE",
    type: "website",
    url: "https://pradx.in/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRADXCLUSIVE® | Nothing ordinary leaves this house.",
    description:
      "Brand identity, websites, social content and campaigns — under one connected creative direction.",
  },
  // og:image / twitter:image and favicons are emitted by the file
  // conventions (opengraph-image.tsx, icon.tsx, apple-icon.tsx).
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        dmSerifDisplay.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": PERSON_ID,
                name: "Pradyumna. M",
                url: "https://pradx.in",
                worksFor: { "@id": ORG_ID },
              },
              {
                "@type": "Organization",
                "@id": ORG_ID,
                name: "PRADXCLUSIVE",
                url: "https://pradx.in",
                logo: "https://pradx.in/assets/pradxclusive-transparent-lockup.png",
                email: "hello@pradxclusive.com",
                founder: { "@id": PERSON_ID },
                areaServed: "Worldwide",
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "IN",
                },
                slogan: "Nothing ordinary leaves this house.",
              },
              {
                "@type": "WebSite",
                "@id": WEBSITE_ID,
                name: "PRADXCLUSIVE",
                url: "https://pradx.in",
                publisher: { "@id": ORG_ID },
              },
            ],
          }}
        />
        {children}
        <BackToTop />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
