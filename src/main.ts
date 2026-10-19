// Entry point: assemble the desktop from section modules, then switch on the effects.
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/aero.css";
import "./styles/hero.css";
import "./styles/sections.css";

import { renderWallpaper } from "./sections/wallpaper";
import { renderHero } from "./sections/hero";
import { renderAbout } from "./sections/about";
import { renderResidents } from "./sections/residents";
import { renderProjects, initProjectFilter } from "./sections/projects";
import { renderContact } from "./sections/contact";
import { renderTaskbar } from "./sections/taskbar";

import { initBubbles } from "./fx/bubbles";
import { initHero } from "./fx/hero";
import { initReveal } from "./fx/reveal";
import { initWindows } from "./fx/windows";
import { initResidentSearch } from "./fx/search";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = [
  renderWallpaper(),
  renderHero(),
  `<main>`,
  renderAbout(),
  renderResidents(),
  renderProjects(),
  `</main>`,
  renderContact(),
  renderTaskbar(),
].join("");

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

initHero();
initBubbles();
initReveal();
initWindows();
initResidentSearch();
initProjectFilter();
