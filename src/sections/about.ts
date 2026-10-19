import { about } from "../data/site";

export function renderAbout(): string {
  return `
  <section class="section about" id="about">
    <div class="wrap about-grid">
      <div class="section-head reveal">
        <p class="eyebrow">The Apartment</p>
        <h2 class="display">Not a lab. <em>A legend</em> with a lease.</h2>
      </div>
      <div class="about-copy reveal">
        ${about.paragraphs.map((p) => `<p class="lead">${p}</p>`).join("")}
      </div>
    </div>

    <div class="wrap stats">
      ${about.stats
        .map(
          (s, i) => `
        <div class="stat glass reveal" style="--d:${i * 80}ms">
          <span class="stat-value">${s.value}</span>
          <span class="stat-label">${s.label}</span>
        </div>`,
        )
        .join("")}
    </div>
  </section>`;
}
