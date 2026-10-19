import { projects, type Project } from "../data/projects";
import { aeroWindow } from "./window";
import { icons } from "./icons";

function item(p: Project): string {
  const tag = p.href ? "a" : "article";
  const href = p.href ? ` href="${p.href}"` : "";
  return `
    <${tag} class="project" data-category="${p.category}"${href}>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-meta">${p.category} · ${p.status}</p>
      <p class="project-desc">${p.description}</p>
    </${tag}>`;
}

export function renderProjects(): string {
  if (projects.length === 0) return "";
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  return `
  <section class="section projects" id="projects">
    <div class="wrap">
      ${aeroWindow({
        id: "projects",
        title: "Projects",
        icon: icons.projects,
        body: `
          <h2 class="instruction" style="margin-bottom:24px">Projects</h2>
          <div class="filters" role="toolbar" aria-label="Filter projects">
            ${categories
              .map((c, i) => `<button class="vbtn filter" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`)
              .join("")}
          </div>
          <div class="project-grid">${projects.map(item).join("")}</div>`,
        status: `<span>${projects.length} items</span>`,
      })}
    </div>
  </section>`;
}

export function initProjectFilter(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
  const cards = document.querySelectorAll<HTMLElement>(".project");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      cards.forEach((c) => {
        c.hidden = filter !== "All" && c.dataset.category !== filter;
      });
    }),
  );
}
