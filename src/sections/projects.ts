import { projects, type Project } from "../data/projects";

function card(p: Project, i: number): string {
  const tag = p.href ? "a" : "article";
  const href = p.href ? ` href="${p.href}"` : "";
  return `
    <${tag} class="project glass reveal" data-category="${p.category}"${href} style="--d:${(i % 4) * 70}ms">
      <div class="project-top">
        <span class="chip">${p.category}</span>
        <span class="project-status"><i></i>${p.status}</span>
      </div>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.description}</p>
      <p class="project-by">by ${p.by}</p>
      <span class="project-bubble" aria-hidden="true"></span>
    </${tag}>`;
}

export function renderProjects(): string {
  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  return `
  <section class="section projects" id="projects">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">III — Projects</p>
        <h2 class="display">Currently <em>on the stove.</em></h2>
        <p class="lead">Things being built under this roof right now. Some will change the world. Some will change the thermostat.</p>
      </div>
      <div class="filters reveal" role="toolbar" aria-label="Filter projects">
        ${categories
          .map(
            (c, i) =>
              `<button class="chip chip-btn${i === 0 ? " is-active" : ""}" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`,
          )
          .join("")}
      </div>
      <div class="project-grid">
        ${projects.map(card).join("")}
      </div>
    </div>
  </section>`;
}

export function initProjectFilter(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
  const cards = document.querySelectorAll<HTMLElement>(".project");
  buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      cards.forEach((c) => {
        c.hidden = filter !== "All" && c.dataset.category !== filter;
      });
    }),
  );
}
