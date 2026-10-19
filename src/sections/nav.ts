// Floating glass navigation pill.
const links = [
  { href: "#about", label: "About" },
  { href: "#residents", label: "Residents" },
  { href: "#projects", label: "Projects" },
  { href: "#lore", label: "Lore" },
];

export function renderNav(): string {
  return `
    <nav class="nav glass" aria-label="Main">
      <a class="nav-brand" href="#top">1407<em>Labs</em></a>
      <div class="nav-links">
        ${links.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}
      </div>
      <a class="btn btn-aero btn-sm" href="#contact">Knock</a>
    </nav>
  `;
}

/** Strengthens the glass once the hero has scrolled away. */
export function initNav(): void {
  const nav = document.querySelector<HTMLElement>(".nav");
  if (!nav) return;
  const update = () => nav.classList.toggle("is-scrolled", window.scrollY > 80);
  update();
  window.addEventListener("scroll", update, { passive: true });
}
