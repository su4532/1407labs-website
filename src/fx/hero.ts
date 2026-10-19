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

function mood(h: number): string {
  return h < 5 ? "Peak productivity." :
    h < 9 ? "Someone hasn't slept yet." :
    h < 13 ? "Technically awake." :
    h < 18 ? "Deep work in progress." :
    h < 22 ? "Dinner pitches underway." :
    "The night shift is clocking in.";
}

/** Analog clock gadget, the status gadget, and the taskbar tray clock all read the visitor's time. */
function initClocks(): void {
  const hands = {
    h: document.querySelector<SVGElement>('[data-hand="h"]'),
    m: document.querySelector<SVGElement>('[data-hand="m"]'),
    s: document.querySelector<SVGElement>('[data-hand="s"]'),
  };
  const status = document.querySelector<HTMLElement>("[data-clock]");
  const tray = document.querySelector<HTMLElement>("[data-tray-clock]");
  // Hand angles keep growing instead of wrapping to 0, so the CSS transition never spins backwards.
  let turns = 0;
  let lastSec = -1;

  const tick = () => {
    const now = new Date();
    const s = now.getSeconds();
    const m = now.getMinutes() + s / 60;
    const h = (now.getHours() % 12) + m / 60;
    if (lastSec !== -1 && s < lastSec) turns++;
    lastSec = s;
    hands.h?.style.setProperty("transform", `rotate(${h * 30}deg)`);
    hands.m?.style.setProperty("transform", `rotate(${m * 6}deg)`);
    hands.s?.style.setProperty("transform", `rotate(${(turns * 60 + s) * 6}deg)`);

    const time = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    if (status) status.textContent = `${time}. ${mood(now.getHours())}`;
    if (tray) {
      tray.children[0].textContent = time;
      tray.children[1].textContent = now.toLocaleDateString([], { month: "numeric", day: "numeric", year: "numeric" });
    }
  };
  tick();
  setInterval(tick, 1000);
}

/** Gentle parallax on the wallpaper as the pointer moves. */
function initParallax(): void {
  const wallpaper = document.querySelector<HTMLElement>(".wallpaper");
  if (!wallpaper || reducedMotion || !matchMedia("(pointer: fine)").matches) return;
  window.addEventListener("pointermove", (e) => {
    wallpaper.style.setProperty("--px", (e.clientX / innerWidth - 0.5).toFixed(3));
    wallpaper.style.setProperty("--py", (e.clientY / innerHeight - 0.5).toFixed(3));
  });
}

export function initHero(): void {
  initTagline();
  initClocks();
  initParallax();
}
