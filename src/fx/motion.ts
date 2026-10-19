// Shared check so every effect respects the OS "reduce motion" setting.
export const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
