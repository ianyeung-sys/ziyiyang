# assets/icons

Reserved for small standalone icons.

**Currently empty, and that is intentional.** Every icon the site needs —
the contact links, the close button, the external-link marks — is drawn as an
inline `<svg>` directly in `index.html`. Inline SVG means:

- no extra HTTP requests,
- icons inherit `currentColor`, so they follow the theme automatically,
- they stay crisp at any size and on any display,
- there is no icon-font to load or sprite file to keep in sync.

## When to use this folder

Add files here only for an icon that genuinely cannot be inline:

- a `.ico` fallback for a very old browser,
- a rasterised icon for a platform-specific manifest,
- a logo supplied as a binary asset.

For new inline icons, copy the pattern already used in the contact section of
`index.html` — a 24×24 `viewBox`, `fill="none"`, `stroke="currentColor"`,
`stroke-width="1.5"`, and `aria-hidden="true"`.
