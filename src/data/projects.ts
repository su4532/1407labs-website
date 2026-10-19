// Project cards. The Projects section (and its nav link) only appears once this list has entries.
// Categories drive the filter chips automatically. Example entry:
//   { name: "Project name", category: "Software", description: "One or two lines.", status: "Shipping", href: "https://..." },

export type Category = "AI" | "Software" | "Research" | "Startups" | "Art" | "Experiments";

export interface Project {
  name: string;
  category: Category;
  description: string;
  status: string;
  href?: string;
}

export const projects: Project[] = [];
