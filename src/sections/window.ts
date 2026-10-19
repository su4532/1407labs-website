// Every section is an Aero window: glass frame, glowing caption, working min/max/close buttons.

export interface WindowOptions {
  id: string; // matches the section id; the taskbar button uses it to restore a closed window
  title: string;
  icon: string;
  body: string;
  toolbar?: string;
  status?: string;
}

export function aeroWindow(o: WindowOptions): string {
  return `
    <div class="win reveal" data-window="${o.id}" role="group" aria-label="${o.title}">
      <div class="win-titlebar">
        <span class="win-icon">${o.icon}</span>
        <span class="win-title">${o.title}</span>
        <div class="win-caption">
          <button class="cap cap-min" data-cap="min" aria-label="Minimize ${o.title}"><i></i></button>
          <button class="cap cap-max" data-cap="max" aria-label="Maximize ${o.title}"><i></i></button>
          <button class="cap cap-close" data-cap="close" aria-label="Close ${o.title}"><i></i></button>
        </div>
      </div>
      ${o.toolbar ? `<div class="win-toolbar">${o.toolbar}</div>` : ""}
      <div class="win-body">${o.body}</div>
      ${o.status ? `<div class="win-status">${o.status}</div>` : ""}
    </div>`;
}
