import { residents, type Resident } from "../data/residents";

// Each resident is a "collectible" glass card: number, glossy orb, name, vibe, bio, project, links.
function card(r: Resident, i: number): string {
  const no = String(i + 1).padStart(2, "0");
  return `
    <article class="resident glass reveal" data-tilt style="--hue:${r.hue}; --d:${(i % 3) * 90}ms">
      <div class="resident-sheen" aria-hidden="true"></div>
      <div class="resident-top">
        <span class="resident-no">No. ${no}</span>
        <span class="resident-role">${r.role}</span>
      </div>
      <div class="orb" aria-hidden="true"><span>${r.name[0]}</span></div>
      <h3 class="resident-name">${r.name}</h3>
      <p class="resident-title">${r.title}</p>
      <p class="resident-bio">${r.bio}</p>
      <div class="resident-building">
        <span class="label">Currently building</span>
        <p>${r.building}</p>
      </div>
      <div class="resident-links">
        ${r.links.map((l) => `<a href="${l.href}">${l.label} ↗</a>`).join("")}
      </div>
    </article>`;
}

export function renderResidents(): string {
  return `
  <section class="section residents" id="residents">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">II — The Residents</p>
        <h2 class="display">Collect <em>all six.</em></h2>
        <p class="lead">The people behind the door. Individually impressive, collectively a fire hazard.</p>
      </div>
      <div class="resident-grid">
        ${residents.map(card).join("")}
      </div>
    </div>
  </section>`;
}
