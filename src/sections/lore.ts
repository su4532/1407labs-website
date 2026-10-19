import { principles, rituals, overheard } from "../data/lore";

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function renderLore(): string {
  // Quotes are doubled so the marquee can loop seamlessly.
  const quotes = [...overheard, ...overheard].map((q) => `<span>${q}</span>`).join("");

  return `
  <section class="section lore" id="lore">
    <div class="wrap">
      <div class="section-head reveal">
        <p class="eyebrow">IV — Lore</p>
        <h2 class="display">The 1407 <em>operating system.</em></h2>
        <p class="lead">Unwritten rules, now written. Ratified at 3 a.m. by whoever was still awake.</p>
      </div>

      <div class="lore-grid">
        <ol class="principles glass reveal">
          ${principles
            .map(
              (p, i) => `
            <li>
              <span class="principle-num">${roman[i]}</span>
              <div>
                <p class="principle-text">${p.text}</p>
                <p class="principle-aside">${p.aside}</p>
              </div>
            </li>`,
            )
            .join("")}
        </ol>

        <div class="rituals">
          <p class="eyebrow reveal">Rituals</p>
          ${rituals
            .map(
              (r, i) => `
            <div class="ritual glass reveal" style="--d:${i * 80}ms">
              <div class="ritual-head">
                <h3>${r.name}</h3>
                <span>${r.when}</span>
              </div>
              <p>${r.text}</p>
            </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>

    <div class="overheard" aria-label="Overheard at 1407">
      <p class="overheard-label">Overheard in the kitchen</p>
      <div class="marquee"><div class="marquee-track">${quotes}</div></div>
    </div>
  </section>`;
}
