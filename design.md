# Design: MyLocationLab (Bazzly-Inspired Modern SaaS)

The locked design system inspired by Bazzly.ai. Modern SaaS aesthetic, clean typography, soft gradients, and high visual polish.

## System
- Genre: Modern SaaS / Minimalist Precision
- Typography: **Geist** (Display & Body), **Geist Mono** (Tabular Data & Coordinates)
- Theme: Bazzly Aero (Clean light paper, subtle ambient radial glow, Sky-to-Indigo primary gradients)
- Posture: Polished, modern, responsive, fluid

## Tokens
`src/styles/tokens.css` is the source of truth.
```css
:root {
  /* Surfaces */
  --color-paper: #ffffff;
  --color-paper-2: #f8fafc;
  --color-paper-3: #ffffff;
  --color-ink: #0f172a;
  --color-ink-2: #334155;
  --color-muted: #64748b;
  --color-rule: #e2e8f0;
  --color-ink-rule: #cbd5e1;

  /* Accents & Gradients */
  --color-accent: #0ea5e9;
  --color-accent-indigo: #6366f1;
  --color-accent-2: #f97316;
  --color-accent-ink: #ffffff;
  --color-focus: #0ea5e9;
  --gradient-primary: linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%);
  --gradient-hover: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
  --gradient-warm: linear-gradient(135deg, #f97316 0%, #ef4444 100%);

  /* Typography */
  --font-display: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sans: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-body: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, monospace;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-card: 20px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
  --shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.03);
  --shadow-card: 0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.02);
  --shadow-button: 0 4px 14px 0 rgba(14, 165, 233, 0.35);

  --tracking-display: -0.03em;
  --display-weight: 700;
}
```

## Navigation & Controls
- **Floating Header**: 20px rounded pill container (`max-w-[1100px]`), border `1px solid rgba(226, 232, 240, 0.85)`, backdrop blur (`blur(16px)`), subtle shadow.
- **Primary Button**: Sky-to-Indigo gradient (`linear-gradient(135deg, #0ea5e9, #6366f1)`), 12px rounded corners, crisp white text, soft glowing hover shadow.
- **Secondary Button**: White surface, 1px slate-200 border, 12px rounded corners, slate-900 text, hover lift.
- **Pill Badge**: Rounded full pill, soft sky background, sky border, glowing beacon indicator.

## Motion & Transitions
- Character: Fluid and smooth; `cubic-bezier(0.16, 1, 0.3, 1)` easing for card hover lifts, button presses, and transitions.
- Under `prefers-reduced-motion`: Instant transitions without layout shift.
