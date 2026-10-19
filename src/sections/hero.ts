import { taglines } from "../data/site";

// The landscape is a single inline SVG: sky, sun + lens flare, drifting clouds,
// glossy hills and water. Colors live here; motion lives in styles/hero.css.
const scene = `
<svg class="hero-scene" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a72c7"/>
      <stop offset=".42" stop-color="#4fb0ea"/>
      <stop offset=".72" stop-color="#b6e6fa"/>
      <stop offset="1" stop-color="#eafcff"/>
    </linearGradient>
    <radialGradient id="sun" cx="1120" cy="170" r="460" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#fff"/>
      <stop offset=".07" stop-color="#fff" stop-opacity=".95"/>
      <stop offset=".28" stop-color="#e3fbff" stop-opacity=".4"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ray" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#fff" stop-opacity=".55"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#86d9a0"/>
      <stop offset="1" stop-color="#2c9a72"/>
    </linearGradient>
    <linearGradient id="hillNear" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#b4ee5e"/>
      <stop offset=".45" stop-color="#5cc744"/>
      <stop offset="1" stop-color="#1e8a4e"/>
    </linearGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#9beafa"/>
      <stop offset=".35" stop-color="#34bce6"/>
      <stop offset="1" stop-color="#0b6fae"/>
    </linearGradient>
    <filter id="blur-lg" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="16"/></filter>
    <filter id="blur-sm" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5"/></filter>
  </defs>

  <rect width="1440" height="900" fill="url(#sky)"/>

  <!-- sun rays (slowly rotate) -->
  <g class="rays" opacity=".5">
    <polygon points="1120,170 1440,90 1440,130" fill="url(#ray)"/>
    <polygon points="1120,170 1440,300 1440,370" fill="url(#ray)"/>
    <polygon points="1120,170 760,0 840,0" fill="url(#ray)"/>
    <polygon points="1120,170 600,240 620,300" fill="url(#ray)"/>
    <polygon points="1120,170 1300,0 1360,0" fill="url(#ray)"/>
  </g>
  <circle cx="1120" cy="170" r="460" fill="url(#sun)"/>

  <!-- clouds -->
  <g class="clouds clouds-a" fill="#fff" filter="url(#blur-lg)" opacity=".9">
    <ellipse cx="240" cy="200" rx="170" ry="44"/>
    <ellipse cx="300" cy="170" rx="100" ry="54"/>
    <ellipse cx="180" cy="186" rx="80" ry="40"/>
    <ellipse cx="760" cy="320" rx="140" ry="30"/>
    <ellipse cx="800" cy="300" rx="70" ry="36"/>
  </g>
  <g class="clouds clouds-b" fill="#fff" filter="url(#blur-lg)" opacity=".75">
    <ellipse cx="520" cy="110" rx="120" ry="28"/>
    <ellipse cx="1320" cy="380" rx="160" ry="34"/>
    <ellipse cx="1260" cy="360" rx="80" ry="38"/>
  </g>

  <!-- lens flare: points along the line from the sun toward center -->
  <g class="flare">
    <circle cx="990" cy="270" r="34" fill="#bdf6ff" opacity=".22"/>
    <circle cx="900" cy="338" r="10" fill="#fff" opacity=".6"/>
    <circle cx="800" cy="414" r="64" fill="none" stroke="#e6fffa" stroke-width="2" opacity=".35"/>
    <circle cx="800" cy="414" r="64" fill="#a8f0c8" opacity=".08"/>
    <circle cx="670" cy="512" r="18" fill="#9fe9ff" opacity=".35"/>
  </g>

  <!-- hills -->
  <path d="M0 610 C 200 520 430 545 640 595 S 1050 560 1250 515 S 1440 530 1440 530 V900 H0Z" fill="url(#hillFar)"/>
  <path d="M0 705 C 250 610 540 620 780 680 S 1210 705 1440 640 V900 H0Z" fill="url(#hillNear)"/>
  <ellipse cx="400" cy="652" rx="300" ry="20" fill="#fff" opacity=".38" filter="url(#blur-sm)"/>
  <ellipse cx="1250" cy="672" rx="180" ry="12" fill="#fff" opacity=".3" filter="url(#blur-sm)"/>

  <!-- water -->
  <path d="M0 800 C 320 780 1120 780 1440 800 V900 H0Z" fill="url(#water)"/>
  <g class="shimmer" fill="#fff">
    <rect x="180" y="818" width="160" height="2" rx="1" opacity=".55"/>
    <rect x="620" y="832" width="240" height="2" rx="1" opacity=".45"/>
    <rect x="1040" y="814" width="120" height="2" rx="1" opacity=".55"/>
    <rect x="400" y="856" width="200" height="2" rx="1" opacity=".35"/>
    <rect x="980" y="866" width="260" height="2" rx="1" opacity=".3"/>
  </g>
</svg>`;

export function renderHero(): string {
  return `
  <header class="hero" id="top">
    ${scene}
    <div class="bubbles" data-bubbles="22" aria-hidden="true"></div>
    <div class="hero-fade" aria-hidden="true"></div>

    <div class="hero-inner">
      <p class="hero-badge glass"><span class="pulse"></span><span data-clock>Lights on at 1407</span></p>
      <h1 class="hero-title">
        <span class="hero-num">1407</span>
        <span class="hero-labs">Labs</span>
      </h1>
      <p class="hero-tagline"><span data-tagline>${taglines[0]}</span></p>
      <div class="hero-actions">
        <a class="btn btn-aero" href="#residents">Meet the residents</a>
        <a class="btn btn-glass" href="#lore">Read the lore</a>
      </div>
    </div>

    <a class="scroll-cue" href="#about" aria-label="Scroll to About"><span></span></a>
  </header>`;
}
