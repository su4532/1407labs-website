import { reducedMotion } from "./motion";

/** Fills every [data-bubbles="N"] container with N slowly rising glossy bubbles. */
export function initBubbles(): void {
  if (reducedMotion) return;
  document.querySelectorAll<HTMLElement>("[data-bubbles]").forEach((box) => {
    const count = Number(box.dataset.bubbles) || 12;
    for (let i = 0; i < count; i++) {
      const b = document.createElement("span");
      b.className = "bubble";
      const size = 10 + Math.random() ** 2 * 70; // mostly small, a few large
      b.style.setProperty("--x", `${Math.random() * 100}%`);
      b.style.setProperty("--s", `${size}px`);
      b.style.setProperty("--dur", `${14 + Math.random() * 16}s`);
      b.style.setProperty("--delay", `${-Math.random() * 30}s`);
      b.style.setProperty("--sway", `${(Math.random() - 0.5) * 120}px`);
      box.appendChild(b);
    }
  });
}
