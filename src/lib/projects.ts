// PRADXCLUSIVE portfolio content — ported from the new_design React single-file
// app. Data lives here so every section and page renders from one source of truth.

export interface ProjectBreakdownItem {
  title: string;
  copy: string;
}

export interface ProjectHighlight {
  eyebrow: string;
  title: string;
  copy: string;
  metric: string;
  metricLabel: string;
  metricMeta: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  campaign?: string;
  category: string;
  disciplines: string;
  year: string;
  type: string;
  description: string;
  cover: string;
  hero?: string;
  coverFit?: "contain" | "cover";
  intro: string;
  breakdown: {
    challenge: ProjectBreakdownItem;
    direction: ProjectBreakdownItem;
    outcome: ProjectBreakdownItem;
  };
  highlight?: ProjectHighlight;
  gallery?: [string, string][];
  motion?: boolean;
}

export const projects: Project[] = [
  {
    slug: "tanishq-orlando",
    number: "01",
    title: "Tanishq Orlando",
    campaign: "Everyday, Elevated.",
    category: "Luxury Jewellery",
    disciplines:
      "Campaign Strategy · Creative Direction · Art Direction · Visual System",
    year: "2025",
    type: "Campaign Concept · Independent Creative Presentation",
    description:
      "A contemporary luxury campaign exploring how Indian jewellery heritage can translate into a globally relevant, everyday expression of identity.",
    cover: "/assets/covers/tanishq-orlando.png",
    intro:
      "A self-directed campaign presentation for Tanishq Orlando, developed around a quieter, more personal expression of modern luxury. The work positions jewellery as part of daily identity rather than something reserved only for occasions.",
    breakdown: {
      challenge: {
        title: "Make heritage feel relevant every day.",
        copy: "Luxury jewellery communication often centres on ceremonies and milestones. This concept needed to respect Tanishq's heritage while giving an Orlando audience a more personal, contemporary reason to wear the brand every day.",
      },
      direction: {
        title: "Reframe jewellery as daily identity.",
        copy: "The creative direction uses warm, intimate portraiture, restrained typography and a quieter luxury palette. The line Everyday, Elevated. connects cultural meaning with a confident modern lifestyle.",
      },
      outcome: {
        title: "A flexible premium campaign system.",
        copy: "The final presentation establishes a clear proposition and an adaptable visual language across horizontal, story, square and print formats, giving the campaign consistency without making every execution feel identical.",
      },
    },
    gallery: [
      ["The campaign proposition", "/assets/projects/tanishq/page-05.webp"],
      ["Visual language", "/assets/projects/tanishq/page-06.webp"],
      ["Jewellery philosophy", "/assets/projects/tanishq/page-09.webp"],
      ["Campaign visual — horizontal", "/assets/projects/tanishq/page-11.webp"],
      ["Campaign visual — story", "/assets/projects/tanishq/page-12.webp"],
      ["Campaign visual — square", "/assets/projects/tanishq/page-13.webp"],
      ["Campaign visual — print", "/assets/projects/tanishq/page-14.webp"],
      ["Format adaptability", "/assets/projects/tanishq/page-15.webp"],
      ["System rules", "/assets/projects/tanishq/page-16.webp"],
      ["Campaign close", "/assets/projects/tanishq/page-17.webp"],
      ["Design explorations", "/assets/projects/tanishq/page-18.webp"],
    ],
  },
  {
    slug: "lemongrass-green-tea",
    number: "02",
    title: "Lemongrass Green Tea",
    category: "Food & Beverage · International",
    disciplines: "Product Direction · Packaging Visuals · Brand Presentation",
    year: "2025",
    type: "Product & Packaging Presentation",
    description:
      "A refined visual direction for an international tea brand, translating natural ingredients and product character into a contemporary premium presentation system.",
    cover: "/assets/covers/lemongrass-green-tea.webp",
    intro:
      "A curated product presentation for King of Land Africa, bringing the lemongrass range into a consistent retail and lifestyle world. The selected work focuses on pack hierarchy, ingredient cues and confident shelf presence.",
    breakdown: {
      challenge: {
        title: "Give a natural product stronger shelf authority.",
        copy: "The product needed to communicate origin, ingredient quality and everyday usefulness at a glance while competing in a crowded international tea category without losing its distinctly African character.",
      },
      direction: {
        title: "Build the story around land, product and people.",
        copy: "A deep botanical palette, confident packaging hierarchy and warm lifestyle imagery connect the lemongrass product to its source. Retail, product and family-led scenes were shaped as one coherent brand world.",
      },
      outcome: {
        title: "A more complete retail presentation.",
        copy: "The result is a consistent visual system spanning the packaging family, lifestyle communication, retail environments and activation material—giving the range a clearer, more premium presence at every touchpoint.",
      },
    },
    gallery: [
      ["Packaging family", "/assets/projects/lemongrass/visual-01.webp"],
      ["Lifestyle direction", "/assets/projects/lemongrass/visual-02.webp"],
      ["Retail presentation", "/assets/projects/lemongrass/visual-03.webp"],
      ["Brand activation", "/assets/projects/lemongrass/visual-04.webp"],
    ],
  },
  {
    slug: "ai-core-vision",
    number: "03",
    title: "AI Core Vision",
    category: "AI Creator · Technology",
    disciplines: "Logo Design · Visual Identity · Brand Guidelines",
    year: "2025",
    type: "Client Brand Identity · Logo Concept",
    description:
      "A distinctive logo and visual identity created by PRADXCLUSIVE for AI Core Vision, built to strengthen recognition across its growing social presence.",
    cover: "/assets/covers/ai-core-vision-logo-cover.webp",
    hero: "/assets/covers/ai-core-vision-logo-cover.webp",
    coverFit: "contain",
    intro:
      "Created for client AI Core Vision, the logo concept translates intelligence at the centre of modern technology into one continuous circular form. Balanced curves express adaptability, intelligence and continuous evolution, while the restrained monochrome system keeps the identity clear across digital applications.",
    breakdown: {
      challenge: {
        title: "Move beyond generic AI symbolism.",
        copy: "AI Core Vision needed an identity that felt technological without relying on familiar circuit, robot or spark icons. The mark also had to remain recognisable within a fast-moving social feed and support a growing creator brand.",
      },
      direction: {
        title: "Express intelligence through continuous form.",
        copy: "PRADXCLUSIVE developed a circular symbol built from balanced, fluid curves. The form suggests a focused core, visual perception and continuous evolution while the monochrome system keeps applications clear and adaptable.",
      },
      outcome: {
        title: "A distinctive identity ready to grow.",
        copy: "The final system gives AI Core Vision a recognisable signature across its social presence, profile assets and brand communication, supported by clear construction, spacing, colour and usage rules.",
      },
    },
    highlight: {
      eyebrow: "Client identity impact",
      title: "A signature mark for a growing AI creator brand.",
      copy: "PRADXCLUSIVE developed the symbol and supporting identity system for AI Core Vision. The construction balances fluid movement with a precise circular structure, giving the client a recognisable mark that can remain consistent across social content, brand communication and future applications.",
      metric: "22.5K",
      metricLabel: "Instagram followers",
      metricMeta: "@core.aivision · supplied client profile",
    },
    gallery: [
      ["Brand identity introduction", "/assets/projects/ai-core-vision/page-01.webp"],
      ["Logo concept", "/assets/projects/ai-core-vision/page-03.webp"],
      ["Logo construction", "/assets/projects/ai-core-vision/page-05.webp"],
      ["Clear space", "/assets/projects/ai-core-vision/page-06.webp"],
      ["Logo versions", "/assets/projects/ai-core-vision/page-07.webp"],
      ["Colour system", "/assets/projects/ai-core-vision/page-08.webp"],
      ["Typography", "/assets/projects/ai-core-vision/page-09.webp"],
      ["Brand applications", "/assets/projects/ai-core-vision/page-10.webp"],
    ],
  },
  {
    slug: "ndz-events",
    number: "04",
    title: "NDZ Events",
    category: "Events & Experiences",
    disciplines: "Brand Identity · Visual System · Brand Guidelines",
    year: "2024",
    type: "Global Identity System",
    description:
      "A global event identity built to turn stages, launches and brand experiences into memorable, high-impact environments.",
    cover: "/assets/covers/ndz-events-cover-v2.png",
    hero: "/assets/covers/ndz-events-cover-v2.png",
    coverFit: "contain",
    intro:
      "A scalable events identity developed around motion, neutrality and engineered circular geometry. The system moves confidently from global stages to digital, print and personal brand touchpoints while maintaining one unmistakable presence.",
    breakdown: {
      challenge: {
        title: "Create one identity for constantly changing environments.",
        copy: "NDZ Events needed to look equally credible on a global stage, a digital announcement, venue signage and personal merchandise. The identity had to be memorable without competing with the experiences it was created to host.",
      },
      direction: {
        title: "Turn movement into a modular visual system.",
        copy: "The identity is built around engineered circular geometry and a cool, high-contrast palette. Repeating rings imply energy, sound and gathering while the wordmark remains direct and highly legible across scale.",
      },
      outcome: {
        title: "A scalable presence from stage to screen.",
        copy: "The completed system carries one recognisable idea through event screens, venue exteriors, apparel, print and digital communication, giving NDZ Events a consistent platform for future experiences.",
      },
    },
    gallery: [
      ["The brief", "/assets/projects/ndz/page-02.webp"],
      ["Exploration", "/assets/projects/ndz/page-04.webp"],
      ["Unified identity", "/assets/projects/ndz/page-06.webp"],
      ["Identity rationale", "/assets/projects/ndz/page-07.webp"],
      ["Icon concept", "/assets/projects/ndz/page-08.webp"],
      ["Logo colour formats", "/assets/projects/ndz/page-09.webp"],
      ["Wordmark construction", "/assets/projects/ndz/page-10.webp"],
      ["Colour palette", "/assets/projects/ndz/page-11.webp"],
      ["Usage variations", "/assets/projects/ndz/page-12.webp"],
      ["Mockups", "/assets/projects/ndz/page-13.webp"],
      ["System philosophy", "/assets/projects/ndz/page-14.webp"],
    ],
  },
  {
    slug: "campaign-motion",
    number: "05",
    title: "Campaign & Motion",
    category: "Multi-Sector Creative",
    disciplines: "Reels · Motion · Campaign Creative · Social Content",
    year: "2024–25",
    type: "Curated Production Collection",
    description:
      "A curated collection of short-form creative work spanning real estate, travel, products, services, food, social content and character-led animation.",
    cover: "/assets/covers/campaign-motion.webp",
    intro:
      "A curated production collection organised by communication need rather than file type. Each section pairs real supplied creative with restrained click-to-play video so the work remains easy to browse.",
    breakdown: {
      challenge: {
        title: "Present a wide production range without visual noise.",
        copy: "The collection spans different industries, formats and campaign objectives. The challenge was to show that breadth clearly while avoiding a repetitive reel archive or a page where unrelated work competes for attention.",
      },
      direction: {
        title: "Organise every piece by communication purpose.",
        copy: "Projects are grouped around real estate, travel, products, services, food and character-led content. Each chapter pairs motion with selected stills so viewers can understand both the idea and its execution.",
      },
      outcome: {
        title: "A clearer proof of creative versatility.",
        copy: "The final collection makes the studio's campaign, motion and social production capabilities easier to evaluate, while keeping every category focused, browsable and visually distinct.",
      },
    },
    motion: true,
  },
];

export const experience = [
  ["Porter", "/assets/logos/porter-white.png"],
  ["Pomalos", "/assets/logos/pomalos-white.png"],
  ["Tanishq", "/assets/logos/tanishq-white.png"],
  ["Amazon", "/assets/logos/amazon-white.png"],
  ["Krish Vend Co.", "/assets/logos/krish-vend-white.png"],
  ["Alo' Luru", "/assets/logos/alo-luru-white.png"],
] as const;

export const capabilities: [string, string, string[]][] = [
  [
    "01",
    "Brand Strategy",
    [
      "Positioning and narrative",
      "Audience and competitive context",
      "Naming and messaging direction",
      "Creative and launch planning",
    ],
  ],
  [
    "02",
    "Brand Identity",
    [
      "Logo and identity systems",
      "Typography and colour",
      "Brand guidelines",
      "Graphic language and collateral",
    ],
  ],
  [
    "03",
    "Packaging",
    [
      "Product architecture",
      "Pack design and visualisation",
      "Range systems",
      "Retail-ready brand presentation",
    ],
  ],
  [
    "04",
    "Websites & Digital Experiences",
    [
      "Website strategy",
      "Information architecture",
      "UI and responsive design",
      "Development and launch support",
    ],
  ],
  [
    "05",
    "Campaigns & Creative Production",
    [
      "Campaign concepts",
      "Art direction",
      "Reels, motion and posters",
      "AI-assisted creative production",
    ],
  ],
  [
    "06",
    "Social Presence & Management",
    [
      "Content direction",
      "Social visual systems",
      "Ongoing creative support",
      "Publishing and presence building",
    ],
  ],
];

export const process = [
  ["01", "Understand", "Business, audience, competition and the real problem."],
  ["02", "Define", "Positioning, strategy and creative direction."],
  ["03", "Build", "Identity, website, packaging, campaign or content system."],
  ["04", "Launch", "Bring everything into the market consistently."],
  ["05", "Grow", "Ongoing creative direction, social presence and brand management."],
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  metric?: string;
  metricLabel?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "PRADXCLUSIVE repositioned our brand and sharpened how we presented ourselves online. Qualified enquiries increased by nearly 40% in two months, and prospects understood our value before the first conversation.",
    name: "Nikhil K. Shenoy",
    role: "Founder, Studio Orenda",
    metric: "40%",
    metricLabel: "increase in qualified enquiries",
  },
  {
    quote:
      "The work felt considered, premium and distinctive. PRADXCLUSIVE understood where we were heading almost immediately and gave the brand the level of design we had been searching for.",
    name: "Apoorva Hegde",
    role: "Co-Founder & Creative Director, Katha Living",
  },
  {
    quote:
      "They designed the website around trust, navigation and enquiries — not just looks. The result feels cleaner, more premium and began attracting better-quality enquiries within weeks.",
    name: "Varun Chacko",
    role: "Founder, Common Ground",
  },
  {
    quote:
      "They created a modern, recognisable logo that balances technology and creativity. Core AI Vision finally has an identity we can confidently grow with.",
    name: "Shariq Hussain",
    role: "Founder, Core AI Vision",
  },
  {
    quote:
      "PRADXCLUSIVE built a premium website that works as a business tool. The structure, responsiveness and user experience now support enquiries instead of simply looking good.",
    name: "Tushar",
    role: "Website Design & Development Client",
  },
];

export const faq: [string, string][] = [
  [
    "Can PRADXCLUSIVE handle branding, website and launch content together?",
    "Yes. That connected scope is the core of the studio model. Strategy, identity, digital experience and launch material are shaped under one creative direction so they feel like one brand world.",
  ],
  [
    "Are you a digital marketing agency?",
    "No. PRADXCLUSIVE is an independent brand and creative studio. We build brand systems, websites, campaigns, content and social presence; we do not manage paid media, PPC or performance marketing.",
  ],
  [
    "Who actually works on the project?",
    "The studio is founder-led. Strategy, design and creative direction stay close to the work, with specialist developers or production partners involved only where their expertise is useful.",
  ],
  [
    "How much does a project cost?",
    "Scope, depth and deliverables shape the investment. Start with a short brief and we will recommend a focused route rather than forcing every business into the same package.",
  ],
  [
    "How do we start?",
    "Send a project brief or claim a complimentary brand review. We will look at the business, identify the right starting point and come back with a clear next step.",
  ],
];

export const audienceCategories = [
  "Consumer",
  "Food & Beverage",
  "FMCG",
  "Real Estate",
  "Construction",
  "Interiors",
  "Hospitality",
  "Travel",
  "Fashion",
  "Luxury",
  "Jewellery",
  "Technology",
  "Events",
  "Professional Services",
  "Startups",
  "Established Businesses",
];

const partPaths = (stem: string, count: number) =>
  Array.from(
    { length: count },
    (_, index) =>
      `/assets/motion/${stem}.part${String(index + 1).padStart(2, "0")}.bin`,
  );

export interface MotionSection {
  title: string;
  description: string;
  parts?: string[];
  poster?: string;
  posterFit?: "contain" | "cover";
  images: (string | number)[];
}

export const motionSections: MotionSection[] = [
  {
    title: "Real Estate",
    description:
      "Short-form campaigns and property communication designed to create immediate interest, communicate lifestyle and present developments with greater visual impact.",
    parts: partPaths("real-estate-reel", 4),
    images: [1, 2, 3, 4, 5],
  },
  {
    title: "Travel & Destinations",
    description:
      "Short-form destination and travel content built around movement, place, aspiration and fast visual storytelling for social platforms.",
    parts: partPaths("travel-reel", 6),
    images: [6, 7, 8, 9, 10],
  },
  {
    title: "Products & Services",
    description:
      "Social-first content created to explain, position and visually strengthen products and services within short attention windows.",
    parts: partPaths("product-services-reel", 3),
    poster: "/assets/projects/campaign-motion/product-services-03.webp",
    posterFit: "contain",
    images: [
      "/assets/projects/campaign-motion/product-services-01.webp",
      "/assets/projects/campaign-motion/product-services-02.webp",
      "/assets/projects/campaign-motion/product-services-03.webp",
      "/assets/projects/campaign-motion/product-services-04.webp",
    ],
  },
  {
    title: "Food & FMCG",
    description:
      "Product-led creative combining strong visual direction, clear communication and platform-native formats for food and consumer brands.",
    parts: partPaths("social-reel", 5),
    images: [11, 12, 13, 14],
  },
  {
    title: "Character & Animation",
    description:
      "Character-led motion and animated creative designed to give campaigns a more expressive, entertaining and distinctive visual voice.",
    images: [15, 16, 17, 18],
  },
  {
    title: "Artzilla Paper",
    description:
      "A compact identity and application series showing a paper brand across stationery, presentation and character-led communication.",
    images: [19, 20, 21],
  },
];

export const motionImageSrc = (image: string | number) =>
  typeof image === "number"
    ? `/assets/projects/campaign-motion/still-${String(image).padStart(2, "0")}.webp`
    : image;

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function projectDescription(project: Project): string {
  return project.description;
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
