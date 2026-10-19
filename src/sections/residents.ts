import { residents, type Resident } from "../data/residents";

// Card tints, cycled across the grid (hue in degrees: aqua, teal, sky, leaf, blue, cyan).
const hues = [195, 172, 212, 150, 226, 184];

function card(r: Resident, i: number): string {
  const [first, ...rest] = r.name.split(" ");
  const initials = r.name.split(" ").map((p) => p[0]).join("");
  const domain = new URL(r.website).hostname.replace(/^www\./, "");
  const photo = r.photo
    ? `<img src="${r.photo}" alt="${r.name}" loading="lazy" width="600" height="600">`
    : `<span class="resident-initials" aria-hidden="true">${initials}</span>`;

  return `
    <article class="resident glass reveal" data-tilt style="--hue:${hues[i % hues.length]}">
      <div class="resident-sheen" aria-hidden="true"></div>
      <div class="resident-photo">${photo}</div>
      <h3 class="resident-name">${first} <em>${rest.join(" ")}</em></h3>
      <a class="resident-site" href="${r.website}" target="_blank" rel="noopener">${domain}<span aria-hidden="true">↗</span></a>
    </article>`;
}

export function renderResidents(): string {
  return `
  <section class="section residents" id="residents">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">The Residents</p>
        <h2 class="display">Collect <em>all six.</em></h2>
        <p class="lead">The people behind the door. Individually impressive, collectively a fire hazard.</p>
      </div>
      <div class="resident-grid">
        ${residents.map(card).join("")}
      </div>
    </div>
  </section>`;
}
