import { contact } from "../data/site";
import { aeroWindow } from "./window";
import { icons } from "./icons";

export function renderContact(): string {
  // Links still set to "#" are placeholders, so they stay hidden until they're real.
  const links = contact.links.filter((l) => l.href !== "#");

  return `
  <section class="section contact" id="contact">
    <div class="wrap">
      ${aeroWindow({
        id: "contact",
        title: "Knock on the door",
        icon: icons.contact,
        body: `
          <div class="dialog-main">
            <span class="dialog-icon">${icons.contactLarge}</span>
            <div>
              <h2 class="instruction">Knock on the door.</h2>
              <p class="lead">Collaborations, invitations, ideas. We read everything.</p>
              <a class="dialog-email" href="mailto:${contact.email}">${contact.email}</a>
            </div>
          </div>
          <div class="dialog-footer">
            ${links.map((l) => `<a class="vbtn" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
            <a class="vbtn vbtn-default" href="mailto:${contact.email}">Send email</a>
          </div>`,
      })}
    </div>
  </section>

  <footer class="footer">© <span data-year>2026</span> 1407 Labs</footer>`;
}
