import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Geist_Mono } from "next/font/google";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
