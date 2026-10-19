import { taglines } from "../data/site";
import { reducedMotion } from "./motion";

/** Cycles the hero tagline with a soft fade. */
function initTagline(): void {
  const el = document.querySelector<HTMLElement>("[data-tagline]");
  if (!el || reducedMotion || taglines.length < 2) return;
  let i = 0;
  setInterval(() => {
    el.classList.add("is-out");
    setTimeout(() => {
      i = (i + 1) % taglines.length;
      el.textContent = taglines[i];
      el.classList.remove("is-out");
    }, 500);
  }, 4200);
}

/** The hero badge reads the visitor's clock and reports on the apartment accordingly. */
function initClock(): void {
  const el = document.querySelector<HTMLElement>("[data-clock]");
  if (!el) return;
  const update = () => {
    const now = new Date();
    const h = now.getHours();
    const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const mood =
      h < 5 ? "peak productivity at 1407" :
      h < 9 ? "someone at 1407 hasn't slept yet" :
      h < 13 ? "1407 is technically awake" :
      h < 18 ? "1407 is in deep work" :
      h < 22 ? "dinner pitches underway at 1407" :
      "the night shift is clocking in at 1407";
    el.textContent = `${time} — ${mood}`;
  };
  update();
  setInterval(update, 30_000);
}

/** Gentle parallax on the landscape layers as the pointer moves. */
function initParallax(): void {
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!hero || reducedMotion || !matchMedia("(pointer: fine)").matches) return;
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    hero.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  });
}

export function initHero(): void {
  initTagline();
  initClock();
  initParallax();
}
