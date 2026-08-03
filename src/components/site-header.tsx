"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["work", "services", "studio", "process", "contact"];

export function SiteHeader({
  solid = false,
  minimal = false,
}: {
  solid?: boolean;
  minimal?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((element): element is HTMLElement => element !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { threshold: 0.4 },
    );
    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const showSolid = solid || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] flex min-h-[88px] items-center justify-between border-b px-10 py-3 transition-[background-color,border-color] duration-300 max-[900px]:min-h-[78px] max-[600px]:px-5",
          showSolid
            ? "border-border bg-background"
            : "border-transparent bg-transparent",
        )}
      >
        <Link
          href="/#top"
          aria-label="PRADXCLUSIVE — back to top"
          className="flex h-16 shrink-0 items-center gap-2.5 max-[900px]:h-[54px] max-[900px]:gap-2"
        >
          <span
            aria-hidden="true"
            className="relative block h-10 w-[84px] overflow-hidden max-[900px]:h-[30px] max-[900px]:w-[60px] max-[600px]:h-[26px] max-[600px]:w-[52px]"
          >
            <Image
              src={SITE.logo}
              alt=""
              width={84}
              height={58}
              className="absolute top-0 left-0 h-auto w-[84px] max-w-none max-[900px]:w-[60px] max-[600px]:w-[52px]"
            />
          </span>
          <span className="relative block h-[54px] w-[250px] overflow-hidden max-[900px]:h-[43px] max-[900px]:w-[200px] max-[600px]:h-[38px] max-[600px]:w-[175px]">
            <Image
              src={SITE.logo}
              alt={SITE.logoAlt}
              width={250}
              height={172}
              className="absolute bottom-0 left-0 h-auto w-[250px] max-w-none max-[900px]:w-[200px] max-[600px]:w-[175px]"
            />
          </span>
        </Link>

        {!minimal && (
          <>
            <nav aria-label="Primary">
              <ul className="flex gap-10 max-[900px]:hidden">
                {SITE.navLinks.map((link) => {
                  const id = link.href.split("#")[1];
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "text-[13px] tracking-[0.1em] transition-colors duration-300",
                          activeSection === id
                            ? "text-accent"
                            : "text-label hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center">
              <Link
                href="/#contact"
                className="rounded-sm bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-dark-green max-[900px]:hidden"
              >
                Start a project
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="relative hidden h-[18px] w-6 max-[900px]:block"
              >
                <span className="absolute top-0 left-0 h-0.5 w-full bg-white" />
                <span className="absolute top-2 left-0 h-0.5 w-full bg-white" />
                <span className="absolute top-4 left-0 h-0.5 w-full bg-white" />
              </button>
            </div>
          </>
        )}
      </header>

      {!minimal && (
        <div
          inert={!menuOpen}
          className={cn(
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-10 bg-background transition-transform duration-[400ms] ease-out",
            menuOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-8 right-10 text-[28px] text-white max-[600px]:right-5"
          >
            &times;
          </button>
          {SITE.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-2xl text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
