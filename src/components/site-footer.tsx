import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const linkClass =
  "text-sm text-label transition-colors duration-300 hover:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-10 pt-16 pb-10 max-[600px]:px-6">
      <div className="grid grid-cols-3 items-start gap-10 max-[900px]:grid-cols-1">
        <div>
          <Image
            src={SITE.logo}
            alt={SITE.logoAlt}
            width={360}
            height={248}
            className="block h-auto w-full max-w-[360px] max-[900px]:max-w-[300px]"
          />
          <p className="mt-5 max-w-[260px] text-[13px] leading-[1.6] text-label">
            {SITE.tagline}
          </p>
        </div>
        <div>
          <div className="mb-4 text-[11px] tracking-[0.2em] text-[#555555]">
            NAVIGATION
          </div>
          <div className="flex flex-col gap-3">
            {SITE.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-[11px] tracking-[0.2em] text-[#555555]">
            CONTACT
          </div>
          <div className="flex flex-col gap-3">
            <a href={`mailto:${SITE.email}`} className={linkClass}>
              {SITE.email}
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              WhatsApp
            </a>
            <Link href="/privacy" className={linkClass}>
              Privacy
            </Link>
            <Link href="/terms" className={linkClass}>
              Terms
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <span className="text-xs text-[#555555]">
          © {SITE.year} PRADXCLUSIVE®
        </span>
        <span className="text-xs italic text-[#555555]">{SITE.motto}</span>
      </div>
    </footer>
  );
}
