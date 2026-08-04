export const PERSON_ID = "https://pradxclusive.com/#person";
export const ORG_ID = "https://pradxclusive.com/#organization";
export const WEBSITE_ID = "https://pradxclusive.com/#website";

export const SITE = {
  name: "PRADXCLUSIVE",
  email: "hello@pradxclusive.com",
  whatsapp:
    "https://wa.me/917892231197?text=Hi%20PRADXCLUSIVE%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  location: "India — available worldwide.",
  tagline: "Founder-led creative studio. Brand, web, content and campaigns.",
  motto: "Nothing ordinary leaves this house.",
  logo: "/assets/pradxclusive-transparent-lockup-640.png",
  logoMark: "/assets/pradxclusive-transparent-lockup-192.png",
  logoAlt: "PRADXCLUSIVE — Purpose. Presence. Power.",
  year: "2026",
  projectType: "PRADXCLUSIVE ORIGINAL",
  social: {
    instagram: "https://instagram.com/pradxclusive",
    linkedin: "https://linkedin.com/company/pradxclusive",
    twitter: "https://x.com/pradxclusive",
  } as const,
  navLinks: [
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
    { label: "Studio", href: "/#studio" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export interface Project {
  slug: string;
  name: string;
  category: string;
  disciplines: string;
  summary: string;
  heroImage: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    slug: "obsidian-motors",
    name: "Obsidian Motors",
    category: "Automotive",
    disciplines: "Campaign Identity · Key Visual · Motion Direction",
    summary: "Automotive — Campaign Identity · Key Visual · Motion Direction",
    heroImage: "/images/portfolio/obsidian-motors.webp",
    imageAlt: "Obsidian Motors — Automotive campaign identity",
  },
  {
    slug: "verdant-reserve",
    name: "Verdant Reserve",
    category: "Hospitality",
    disciplines: "Identity · Editorial System · Digital Direction",
    summary: "Hospitality — Identity · Editorial System · Digital Direction",
    heroImage: "/images/portfolio/verdant-reserve.webp",
    imageAlt: "Verdant Reserve — Hospitality identity",
  },
  {
    slug: "nocturne",
    name: "Nocturne",
    category: "Fashion",
    disciplines: "Art Direction · Campaign System · Motion",
    summary: "Fashion — Art Direction · Campaign System · Motion",
    heroImage: "/images/portfolio/nocturne.webp",
    imageAlt: "Nocturne — Fashion art direction",
  },
  {
    slug: "ritual",
    name: "Ritual",
    category: "Wellness",
    disciplines: "Packaging · Product Imagery · Social Launch",
    summary: "Wellness — Packaging · Product Imagery · Social Launch",
    heroImage: "/images/portfolio/ritual.webp",
    imageAlt: "Ritual — Wellness packaging",
  },
  {
    slug: "axiom",
    name: "Axiom",
    category: "Technology",
    disciplines: "Brand System · Interface · Launch Motion",
    summary: "Technology — Brand System · Interface · Launch Motion",
    heroImage: "/images/portfolio/axiom.webp",
    imageAlt: "Axiom — Technology brand system",
  },
  {
    slug: "casa-eterna",
    name: "Casa Eterna",
    category: "Real Estate",
    disciplines: "Campaign Direction · Film · Landing Page",
    summary: "Real Estate — Campaign Direction · Film · Landing Page",
    heroImage: "/images/portfolio/casa-eterna.webp",
    imageAlt: "Casa Eterna — Real estate campaign",
  },
  {
    slug: "sip-theory",
    name: "Sip Theory",
    category: "Beverage",
    disciplines: "Key Visual · Packaging · Social Campaign",
    summary: "Beverage — Key Visual · Packaging · Social Campaign",
    heroImage: "/images/portfolio/sip-theory.webp",
    imageAlt: "Sip Theory — Beverage packaging",
  },
  {
    slug: "fold",
    name: "Fold",
    category: "Culture",
    disciplines: "Sculptural Type · Print · Motion Study",
    summary: "Culture — Sculptural Type · Print · Motion Study",
    heroImage: "/images/portfolio/fold.webp",
    imageAlt: "Fold — Culture sculptural type",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectDescription(project: Project): string {
  return `${project.name} — a self-directed ${project.category.toLowerCase()} project — ${project.disciplines.toLowerCase()} — by PRADXCLUSIVE.`;
}

export function adjacentProjects(slug: string): {
  previous: Project;
  next: Project;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { previous, next };
}
