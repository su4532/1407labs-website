/**
 * Makes the windows behave: minimize folds a window to its title bar, maximize widens it,
 * close hides it until its taskbar button is clicked. The taskbar also lights up the
 * button for whichever window is on screen.
 */
export function initWindows(): void {
  const taskFor = (id: string) => document.querySelector<HTMLElement>(`[data-task="${id}"]`);

  document.querySelectorAll<HTMLElement>("[data-window]").forEach((win) => {
    const id = win.dataset.window!;
    win.querySelectorAll<HTMLButtonElement>("[data-cap]").forEach((btn) =>
      btn.addEventListener("click", () => {
        const cap = btn.dataset.cap;
        if (cap === "min") win.classList.toggle("is-min");
        if (cap === "max") {
          win.classList.toggle("is-max");
          resetPosition(win);
        }
        if (cap === "close") {
          win.classList.add("is-closing");
          setTimeout(() => {
            win.hidden = true;
            win.classList.remove("is-closing", "is-min", "is-max");
            taskFor(id)?.classList.add("is-closed");
          }, 220);
        }
      }),
    );
  });

  initDragging();

  // Clicking a task restores its window if it was closed or minimized.
  document.querySelectorAll<HTMLElement>("[data-task]").forEach((task) =>
    task.addEventListener("click", () => {
      const win = document.querySelector<HTMLElement>(`[data-window="${task.dataset.task}"]`);
      if (!win) return;
      win.hidden = false;
      win.classList.remove("is-min");
      task.classList.remove("is-closed");
    }),
  );

  // Highlight the task for the section nearest the middle of the screen.
  const sections = [...document.querySelectorAll<HTMLElement>("section[id]")];
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          document.querySelectorAll(".task.is-active").forEach((t) => t.classList.remove("is-active"));
          taskFor(e.target.id)?.classList.add("is-active");
        }
      }
    },
    { rootMargin: "-45% 0px -45% 0px" },
  );
  sections.forEach((s) => io.observe(s));
}

function resetPosition(win: HTMLElement): void {
  win.style.removeProperty("--dx");
  win.style.removeProperty("--dy");
}

/**
 * Drag a window by its title bar. Windows stay in the page flow; dragging just offsets them
 * (CSS `translate`, so it never fights the open animation's `transform`). The window you
 * grab comes to the front, and its title bar can't be dragged off screen.
 */
function initDragging(): void {
  let front: HTMLElement | null = null;

  document.querySelectorAll<HTMLElement>("[data-window]").forEach((win) => {
    const bar = win.querySelector<HTMLElement>(".win-titlebar");
    if (!bar) return;

    bar.addEventListener("pointerdown", (e) => {
      if (e.button !== 0 || (e.target as HTMLElement).closest(".win-caption") || win.classList.contains("is-max")) return;
      e.preventDefault();
      bar.setPointerCapture(e.pointerId);

      front?.classList.remove("is-front");
      win.classList.add("is-front", "is-dragging");
      front = win;

      const startX = e.clientX;
      const startY = e.clientY;
      const dx0 = parseFloat(win.style.getPropertyValue("--dx")) || 0;
      const dy0 = parseFloat(win.style.getPropertyValue("--dy")) || 0;
      // Where the window would sit with no offset, so the title bar can be kept inside the viewport.
      const r = win.getBoundingClientRect();
      const baseLeft = r.left - dx0;
      const baseTop = r.top - dy0;
      const barH = bar.offsetHeight;

      const move = (ev: PointerEvent) => {
        let dx = dx0 + ev.clientX - startX;
        let dy = dy0 + ev.clientY - startY;
        const left = baseLeft + dx;
        const top = baseTop + dy;
        // Keep at least 120px of the title bar on screen horizontally, and all of it vertically.
        if (left > innerWidth - 120) dx -= left - (innerWidth - 120);
        if (left + r.width < 120) dx += 120 - (left + r.width);
        if (top < 0) dy -= top;
        const maxTop = innerHeight - barH - parseFloat(getComputedStyle(document.body).paddingBottom);
        if (top > maxTop) dy -= top - maxTop;
        win.style.setProperty("--dx", `${dx}px`);
        win.style.setProperty("--dy", `${dy}px`);
      };
      const end = () => {
        win.classList.remove("is-dragging");
        bar.removeEventListener("pointermove", move);
        bar.removeEventListener("pointerup", end);
        bar.removeEventListener("pointercancel", end);
      };
      bar.addEventListener("pointermove", move);
      bar.addEventListener("pointerup", end);
      bar.addEventListener("pointercancel", end);
    });

    // Double-clicking the title bar puts the window back where it belongs.
    bar.addEventListener("dblclick", (e) => {
      if (!(e.target as HTMLElement).closest(".win-caption")) resetPosition(win);
    });
  });
}
