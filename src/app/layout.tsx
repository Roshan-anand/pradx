import type { Metadata } from "next";
import {
  Geist_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import "./target_styles.css";
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PRADXCLUSIVE® — Independent Creative Company",
  description:
    "PRADXCLUSIVE® is an independent creative company shaping identities, campaigns and visual worlds. Nothing ordinary leaves this house.",
  applicationName: "PRADXCLUSIVE®",
  robots: "index, follow",
  openGraph: {
    title: "PRADXCLUSIVE® — Independent Creative Company",
    description:
      "Independent creative company shaping identities, campaigns and visual worlds.",
    siteName: "PRADXCLUSIVE®",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRADXCLUSIVE®",
    description: "Nothing ordinary leaves this house.",
  },
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
        instrumentSans.variable,
        instrumentSerif.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
