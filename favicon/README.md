# favicon

The site references:

```html
<link rel="icon" href="favicon/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="favicon/apple-touch-icon.png">
```

## `favicon.svg`

Already present — a monochrome `ZY` monogram. Edit the text or colours directly; it is
plain SVG. Browsers cache favicons aggressively, so hard-refresh (Cmd/Ctrl + Shift + R)
after changing it.

## `apple-touch-icon.png` — not created yet

iOS Safari does not support SVG for home-screen icons, so a `180 × 180` PNG is needed.
Add `favicon/apple-touch-icon.png` at 180 × 180 with **no transparency** (iOS renders
transparent areas black). Until it exists, iOS falls back to a screenshot of the page,
which is harmless.

## Optional extras

- `favicon.ico` (32 × 32) for old browsers — low priority, all current browsers read SVG.
- `favicon-32.png` if you want a raster fallback in the `<head>`.
