/** The Residents window's search box filters tiles; the status bar shows counts and the hovered tile. */
export function initResidentSearch(): void {
  const input = document.querySelector<HTMLInputElement>("[data-resident-search]");
  const tiles = [...document.querySelectorAll<HTMLElement>(".tile")];
  const count = document.querySelector<HTMLElement>("[data-resident-count]");
  const hover = document.querySelector<HTMLElement>("[data-resident-hover]");
  const empty = document.querySelector<HTMLElement>("[data-resident-empty]");

  input?.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    for (const t of tiles) {
      t.hidden = !t.dataset.name!.includes(q);
      if (!t.hidden) shown++;
    }
    if (count) count.textContent = `${shown} ${shown === 1 ? "item" : "items"}`;
    if (empty) empty.hidden = shown > 0;
  });

  for (const t of tiles) {
    const show = () => hover && (hover.textContent = t.dataset.label ?? "");
    const clear = () => hover && (hover.textContent = "");
    t.addEventListener("pointerenter", show);
    t.addEventListener("focus", show);
    t.addEventListener("pointerleave", clear);
    t.addEventListener("blur", clear);
  }
}
