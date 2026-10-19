import { reducedMotion } from "./motion";

const MAX_TILT = 7; // degrees

/** 3D tilt + moving gloss for [data-tilt] cards (mouse only). */
export function initTilt(): void {
  if (reducedMotion || !matchMedia("(pointer: fine)").matches) return;
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT}deg`);
      card.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT}deg`);
      card.style.setProperty("--mx", `${x * 100}%`);
      card.style.setProperty("--my", `${y * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.removeProperty("--rx");
      card.style.removeProperty("--ry");
    });
  });
}
