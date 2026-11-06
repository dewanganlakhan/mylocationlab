# Design: MyLocationLab

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Bento Grid (draw 5b116c)
- Theme: Wayfind (deal 1/3, seed gps-coordinates-address-elevation-ad88·301fffab·2026-11-06·r0)
- Axes: light/mono/cool · posture: committed

## Tokens
`tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(95.5% 0.006 250);
  --color-paper-2: oklch(91% 0.009 250);
  --color-paper-3: oklch(99.5% 0.005 250);
  --color-ink: oklch(16% 0.014 262);
  --color-ink-2: oklch(29% 0.014 262);
  --color-muted: oklch(47% 0.016 260);
  --color-rule: oklch(80% 0.011 250);
  --color-ink-rule: oklch(34% 0.014 262);
  --color-accent: oklch(51% 0.22 264);
  --color-accent-2: oklch(81% 0.16 82);
  --color-accent-ink: oklch(99.5% 0.003 250);
  --color-focus: oklch(51% 0.22 264);
  --font-display: "Chivo Mono", ui-monospace, monospace;
  --font-body: var(--font-display);
  --font-outlier: var(--font-body);
  --radius-card: 0;
  --radius-pill: 999px;
  --rule-hair: 1px;
  --rule-bar: 2px;
  --shadow-card: 0 24px 40px -24px oklch(8% 0.01 260 / 0.6);
  --tracking-display: -0.03em;
  --display-weight: 800;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`.

## Controls
- Primary: square cobalt filled button (`--color-accent`), 2px ink border, Chivo Mono 800, 48px height
- Secondary: transparent button with 2px ink border (`--color-ink`), square, Chivo Mono 800, 48px height

## Motion
- Character: departure-board stiff; `steps(1)` or instant, no scroll reveals; under reduced motion everything ends at once.

## Exports
`src/styles/tokens.css` and `src/styles/base.css` in this project.
