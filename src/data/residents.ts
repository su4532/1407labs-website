// Resident cards. These are sample residents — swap in the real roommates.
// `hue` tints the glossy orb on each card (0–360, try 160–220 for aqua/teal/green).

export interface Resident {
  name: string;
  title: string; // the "vibe" — shown in italic serif
  role: string; // what they actually do
  bio: string;
  building: string;
  hue: number;
  links: { label: string; href: string }[];
}

export const residents: Resident[] = [
  {
    name: "Maya",
    title: "The Architect",
    role: "Systems & infrastructure",
    bio: "Thinks in diagrams, speaks in diagrams, once settled a dinner argument with a diagram.",
    building: "A database that apologizes when it's slow.",
    hue: 195,
    links: [
      { label: "GitHub", href: "#" },
      { label: "Site", href: "#" },
    ],
  },
  {
    name: "Theo",
    title: "The Night Shift",
    role: "AI research",
    bio: "Most productive between 1 and 4 a.m. Lists the coffee machine as a co-author.",
    building: "Small models that punch far above their weight class.",
    hue: 215,
    links: [
      { label: "GitHub", href: "#" },
      { label: "X", href: "#" },
    ],
  },
  {
    name: "Priya",
    title: "The Founder",
    role: "Startups",
    bio: "Has pitched the apartment grocery list to three investors. One of them said yes.",
    building: "A company. Stealth. Don't ask. (Ask.)",
    hue: 165,
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "X", href: "#" },
    ],
  },
  {
    name: "Jonah",
    title: "The Tinkerer",
    role: "Hardware & robotics",
    bio: "Owns more soldering irons than chairs. The smoke alarm knows him by name.",
    building: "A houseplant that texts you when it's thirsty. And judges you.",
    hue: 140,
    links: [
      { label: "GitHub", href: "#" },
      { label: "Site", href: "#" },
    ],
  },
  {
    name: "Sana",
    title: "The Aesthete",
    role: "Design & art",
    bio: "Responsible for every good-looking thing in the apartment, including this website.",
    building: "Interfaces that feel like weather.",
    hue: 180,
    links: [
      { label: "Portfolio", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
  {
    name: "Eli",
    title: "The Theorist",
    role: "Math & research",
    bio: "Proved something last spring. Still explaining what, exactly, to the rest of us.",
    building: "A paper, a proof, and a better whiteboard-marker supply chain.",
    hue: 230,
    links: [
      { label: "arXiv", href: "#" },
      { label: "Site", href: "#" },
    ],
  },
];
