import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Image
          src="/assets/brand/pradxclusive-lockup.png"
          alt={SITE.logoAlt}
          width={290}
          height={200}
          className="h-auto w-[290px] opacity-[0.86]"
        />
        <p>
          Founder-led brand and creative studio. Strategy, identity, packaging,
          websites, campaigns and social presence.
        </p>
      </div>
      <div>
        <span className="footer-label">Navigation</span>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        <span className="footer-label">Contact</span>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
      <div>
        <span className="footer-label">Social</span>
        <a
          href={SITE.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href={SITE.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={SITE.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          X (Twitter)
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {SITE.year} PRADXCLUSIVE®</span>
        <span>Purpose. Presence. Power.</span>
      </div>
    </footer>
  );
}
