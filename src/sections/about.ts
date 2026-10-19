import { about } from "../data/site";
import { aeroWindow } from "./window";
import { icons } from "./icons";

export function renderAbout(): string {
  return `
  <section class="section about" id="about">
    <div class="wrap">
      ${aeroWindow({
        id: "about",
        title: "About 1407 Labs",
        icon: icons.about,
        body: `
          <div class="about-doc">
            <h2 class="instruction">${about.heading}</h2>
            <div class="about-copy">
              ${about.paragraphs.map((p) => `<p class="lead">${p}</p>`).join("")}
            </div>
          </div>`,
      })}
    </div>
  </section>`;
}
