import { taglines } from "../data/site";

// Analog clock gadget. Hands are rotated by fx/hero.ts.
const ticks = Array.from({ length: 12 }, (_, i) => {
  const major = i % 3 === 0;
  return `<line x1="60" y1="${major ? 15 : 17}" x2="60" y2="${major ? 24 : 22}" stroke="${major ? "#16324d" : "#6c8297"}" stroke-width="${major ? 3 : 1.6}" stroke-linecap="round" transform="rotate(${i * 30} 60 60)"/>`;
}).join("");

const clock = `
<svg class="gadget-clock" viewBox="0 0 120 120" role="img" aria-label="Clock">
  <defs>
    <radialGradient id="clk-face" cx=".5" cy=".38" r=".7"><stop offset="0" stop-color="#fff"/><stop offset=".75" stop-color="#eef6fc"/><stop offset="1" stop-color="#cfe2f1"/></radialGradient>
    <linearGradient id="clk-rim" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5d7a93"/><stop offset=".5" stop-color="#1b2f42"/><stop offset="1" stop-color="#4d6a83"/></linearGradient>
    <linearGradient id="clk-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
  </defs>
  <circle cx="60" cy="60" r="57" fill="url(#clk-rim)"/>
  <circle cx="60" cy="60" r="51" fill="url(#clk-face)" stroke="#0e1d2b" stroke-opacity=".4"/>
  ${ticks}
  <text x="60" y="84" text-anchor="middle" font-size="8" font-weight="600" letter-spacing="1.5" fill="#7d93a8">1407</text>
  <line class="clock-hand" data-hand="h" x1="60" y1="64" x2="60" y2="34" stroke="#16324d" stroke-width="4.5" stroke-linecap="round"/>
  <line class="clock-hand" data-hand="m" x1="60" y1="66" x2="60" y2="20" stroke="#16324d" stroke-width="3" stroke-linecap="round"/>
  <line class="clock-hand" data-hand="s" x1="60" y1="70" x2="60" y2="17" stroke="#e0412a" stroke-width="1.4" stroke-linecap="round"/>
  <circle cx="60" cy="60" r="3.5" fill="#e0412a" stroke="#fff" stroke-width="1"/>
  <ellipse cx="60" cy="34" rx="40" ry="24" fill="url(#clk-gloss)" opacity=".75"/>
</svg>`;

export function renderHero(): string {
  return `
  <header class="hero" id="top">
    <div class="bubbles" data-bubbles="22" aria-hidden="true"></div>

    <div class="hero-inner">
      <h1 class="wordmark"><span class="wm-num">1407</span><span class="wm-labs">Labs</span></h1>
      <p class="hero-tagline"><span data-tagline>${taglines[0]}</span></p>
      <div class="hero-actions">
        <a class="btn btn-aero" href="#residents">Meet the residents</a>
        <a class="btn btn-glass" href="#contact">Knock on the door</a>
      </div>
    </div>

    <aside class="gadgets" aria-label="Desktop gadgets">
      ${clock}
      <div class="gadget-status">
        <b><span class="pulse"></span>Lights on</b>
        <span data-clock>at 1407</span>
      </div>
    </aside>
  </header>`;
}
