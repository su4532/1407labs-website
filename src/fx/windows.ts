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
        if (cap === "max") win.classList.toggle("is-max");
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
