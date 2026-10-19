// Project cards. Categories drive the filter chips automatically.

export type Category = "AI" | "Software" | "Research" | "Startups" | "Art" | "Experiments";

export interface Project {
  name: string;
  category: Category;
  description: string;
  by: string;
  status: string;
  href?: string;
}

export const projects: Project[] = [
  {
    name: "Nightlight",
    category: "AI",
    description: "An assistant that only gets smarter after midnight. Stays focused so you don't have to.",
    by: "Theo",
    status: "In the lab",
  },
  {
    name: "Tidepool",
    category: "Software",
    description: "Local-first notes that sync the way water finds its level: quietly, and eventually everywhere.",
    by: "Maya",
    status: "Shipping",
  },
  {
    name: "Fern",
    category: "Experiments",
    description: "A plant with a SIM card. Texts when thirsty, sulks when ignored, has 40 followers.",
    by: "Jonah",
    status: "Prototype",
  },
  {
    name: "████ Co.",
    category: "Startups",
    description: "██████ for ████████. Raising soon. Probably. The pitch deck is on the fridge.",
    by: "Priya",
    status: "Classified",
  },
  {
    name: "Weatherglass",
    category: "Art",
    description: "A generative installation that paints the apartment's mood from its Wi-Fi traffic.",
    by: "Sana",
    status: "Exhibited (hallway)",
  },
  {
    name: "On the Shape of Small Things",
    category: "Research",
    description: "A short paper with a long title about a small idea that might turn out to be large.",
    by: "Eli",
    status: "Under review",
  },
  {
    name: "The Whiteboard Archive",
    category: "Experiments",
    description: "Every whiteboard photo since move-in, searchable. Two thousand boards of theorems and grocery lists.",
    by: "Everyone",
    status: "Ongoing",
  },
  {
    name: "POST /knock",
    category: "Software",
    description: "The front door has an API. Rate-limited for your safety and ours.",
    by: "Maya & Jonah",
    status: "Live-ish",
  },
];
