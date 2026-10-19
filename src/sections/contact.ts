import { contact } from "../data/site";

export function renderContact(): string {
  return `
  <section class="section contact" id="contact">
    <div class="bubbles" data-bubbles="10" aria-hidden="true"></div>
    <div class="wrap">
      <div class="contact-panel glass reveal">
        <p class="eyebrow">V — Contact</p>
        <h2 class="display">Knock <em>on the door.</em></h2>
        <p class="lead">Collaborations, invitations, investment opportunities, complaints about the bell. We read everything, usually around 2 a.m.</p>
        <a class="btn btn-aero btn-lg" href="mailto:${contact.email}">${contact.email}</a>
        <div class="contact-links">
          ${contact.links.map((l) => `<a class="btn btn-glass" href="${l.href}">${l.label}</a>`).join("")}
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="wrap footer-inner">
      <span class="footer-brand">1407<em>Labs</em></span>
      <span>© <span data-year>2026</span> · Not a real laboratory · Lights usually on</span>
    </div>
  </footer>`;
}
