export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  services: string[];
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Brand Development",
    summary:
      "Identity systems, positioning, messaging direction, and visual language built to create clarity and distinction.",
  },
  {
    title: "Web Design",
    summary:
      "Web experiences that balance art direction, conversion logic, and clean structure instead of just looking pretty.",
  },
  {
    title: "Web Development",
    summary:
      "Modern front-end builds that translate vision into usable, scalable digital experiences.",
  },
  {
    title: "Creative Direction",
    summary:
      "A higher-level lens for brands that need cohesion across visuals, digital presence, and customer perception.",
  },
];
export const caseStudies: CaseStudy[] = [
  {
    slug: "the-east-end-company",
    name: "The East End Company",
    category: "Brand Development / Product Identity",
    shortDescription:
      "A luxury home fragrance concept shaped through heritage, scent storytelling, and elevated packaging direction.",
    overview:
      "The East End Company was developed as a layered home fragrance brand with a richer, more editorial point of view. The work focused on moving beyond generic candle branding and into a fuller visual and emotional world.",
    challenge:
      "The challenge was to create a brand that felt transportive, refined, and commercially credible without collapsing into a predictable luxury aesthetic.",
    solution:
      "The solution centered on stronger brand positioning, scent-house concepts, visual direction, and packaging language that gave the brand more depth and distinction.",
    outcome:
      "The result is a brand system that can support future product launches, digital storytelling, and collection growth with consistency.",
    services: [
      "Brand Strategy",
      "Identity Direction",
      "Packaging Direction",
      "Creative Direction",
    ],
  },
  {
    slug: "the-stillpoint-way",
    name: "The Stillpoint Way",
    category: "Brand Identity / Website Direction",
    shortDescription:
      "A grounded wellness brand shaped through emotional clarity, restraint, and immersive digital atmosphere.",
    overview:
      "The Stillpoint Way needed a presence that felt calm, rooted, and distinct from generic wellness branding. The direction focused on stillness, emotional texture, and visual clarity.",
    challenge:
      "The challenge was creating a site and identity that felt immersive and grounded, not sterile, trendy, or overdesigned.",
    solution:
      "The solution leaned into spacious layouts, restrained visual language, and a more emotionally intelligent brand system.",
    outcome:
      "The result is a clearer wellness brand with stronger digital direction and a more memorable emotional signature.",
    services: [
      "Brand Identity",
      "Website Strategy",
      "Creative Direction",
      "UX Direction",
    ],
  },
  {
    slug: "parti-app",
    name: "Parti App",
    category: "UX Strategy / Product Design",
    shortDescription:
      "An energy-based productivity app concept designed to help users work with their state instead of against it.",
    overview:
      "Parti App explores a more humane productivity system by aligning tasks with mood, energy, and emotional capacity.",
    challenge:
      "Most productivity apps assume consistency. The challenge was designing for real fluctuation without making the interface vague or visually chaotic.",
    solution:
      "The product direction focused on translating emotional states into usable UX pathways and a calmer, more intentional interface system.",
    outcome:
      "The result is a sharper product concept with stronger user value, clearer UX logic, and a design direction that stands apart from generic task tools.",
    services: [
      "UX Strategy",
      "Product Thinking",
      "Interface Direction",
      "Concept Development",
    ],
  },
];