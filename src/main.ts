// Entry point: assemble the page from section modules, then switch on the effects.
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/aero.css";
import "./styles/hero.css";
import "./styles/sections.css";

import { renderNav, initNav } from "./sections/nav";
import { renderHero } from "./sections/hero";
import { renderAbout } from "./sections/about";
import { renderResidents } from "./sections/residents";
import { renderProjects, initProjectFilter } from "./sections/projects";
import { renderLore } from "./sections/lore";
import { renderContact } from "./sections/contact";

import { initBubbles } from "./fx/bubbles";
import { initHero } from "./fx/hero";
import { initReveal } from "./fx/reveal";
import { initTilt } from "./fx/tilt";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = [
  renderNav(),
  renderHero(),
  `<main>`,
  renderAbout(),
  renderResidents(),
  renderProjects(),
  renderLore(),
  `</main>`,
  renderContact(),
].join("");

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));

initNav();
initHero();
initBubbles();
initReveal();
initTilt();
initProjectFilter();
