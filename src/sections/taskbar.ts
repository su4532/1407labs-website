import { projects } from "../data/projects";
import { repo } from "../data/site";
import { icons } from "./icons";

// The taskbar replaces a nav: one button per window, a start orb that goes home,
// and a tray clock. "Projects" only appears once there are projects to show.
const tasks = [
  { id: "about", label: "About 1407 Labs", icon: icons.about },
  { id: "residents", label: "Residents", icon: icons.residents },
  ...(projects.length ? [{ id: "projects", label: "Projects", icon: icons.projects }] : []),
  { id: "contact", label: "Knock on the door", icon: icons.contact },
];

export function renderTaskbar(): string {
  return `
    <nav class="taskbar" aria-label="Main">
      <a class="orb" href="#top" aria-label="Back to the top" title="1407 Labs">
        <span class="orb-mark" aria-hidden="true"><b>1</b><b>4</b><b>0</b><b>7</b></span>
      </a>
      <div class="tasks">
        ${tasks.map((t) => `<a class="task" href="#${t.id}" data-task="${t.id}">${t.icon}<span>${t.label}</span></a>`).join("")}
      </div>
      <div class="tray">
        <a href="${repo}" target="_blank" rel="noopener" aria-label="1407 Labs on GitHub" title="GitHub">${icons.github}</a>
        <span class="tray-clock" data-tray-clock><span></span><small></small></span>
      </div>
    </nav>`;
}
