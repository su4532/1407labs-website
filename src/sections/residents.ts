import { residents, type Resident } from "../data/residents";
import { aeroWindow } from "./window";
import { icons } from "./icons";

function tile(r: Resident): string {
  const initials = r.name.split(" ").map((p) => p[0]).join("");
  const domain = new URL(r.website).hostname.replace(/^www\./, "");
  const photo = r.photo
    ? `<img src="${r.photo}" alt="" loading="lazy" width="600" height="600">`
    : `<span class="tile-initials" aria-hidden="true">${initials}</span>`;

  return `
    <a class="tile" href="${r.website}" target="_blank" rel="noopener" data-name="${r.name.toLowerCase()}" data-label="${r.name} — ${domain}">
      <span class="tile-photo">${photo}</span>
      <span class="tile-name">${r.name}</span>
      <span class="tile-site">${domain}</span>
    </a>`;
}

export function renderResidents(): string {
  return `
  <section class="section residents" id="residents">
    <div class="wrap">
      ${aeroWindow({
        id: "residents",
        title: "Residents",
        icon: icons.residents,
        toolbar: `
          <div class="addr">${icons.residents}<span>1407</span><span class="sep">›</span><span>Residents</span></div>
          <label class="search">
            <input type="search" placeholder="Search residents" aria-label="Search residents" data-resident-search>
            ${icons.search}
          </label>`,
        body: `
          <div class="residents-head">
            <h2 class="instruction">The residents</h2>
            <p class="lead">The six people behind the door.</p>
          </div>
          <div class="tile-grid">
            ${residents.map(tile).join("")}
            <p class="tile-empty" data-resident-empty hidden>No residents match your search.</p>
          </div>`,
        status: `<span data-resident-count>${residents.length} items</span><span data-resident-hover></span>`,
      })}
    </div>
  </section>`;
}
