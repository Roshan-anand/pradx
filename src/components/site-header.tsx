"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Studio", href: "/#studio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className={solid ? "site-header site-header--solid" : "site-header"}>
      <Link
        className="brand-link"
        href="/#top"
        aria-label="PRADXCLUSIVE — back to top"
        onClick={() => setOpen(false)}
      >
        <Image
          src="/assets/brand/pradxclusive-header-lockup.png"
          alt={SITE.logoAlt}
          width={294}
          height={58}
          sizes="(max-width: 820px) 210px, 294px"
          className="h-auto max-h-[58px] w-full object-contain object-left"
        />
      </Link>
      <nav
        className={`primary-nav ${open ? "is-open" : ""}`}
        aria-label="Primary"
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="mobile-audit" href="/audit" onClick={() => setOpen(false)}>
          Free brand audit
        </Link>
      </nav>
      <Link className="button button-small header-cta" href="/#contact">
        Start a project
      </Link>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>
  );
}
