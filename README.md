# Ziyi Yang — Personal Portfolio

Personal portfolio website showcasing AI applications, intelligent systems, product projects, research, and engineering work.

Live at: **https://ianyeung-sys.github.io/ziyiyang/**

## Built With

- HTML
- CSS
- JavaScript
- GitHub Pages

No frameworks, no build step, no dependencies. The site is plain static files.

## Featured Projects

- China Travel Guide
- Intelligent Inspection Car
- AI Voice Projection Clock
- AI Education Application

## Structure

```text
/
├── index.html          main page
├── style.css           all styles, organised into numbered sections
├── script.js           interactions + the project data array
├── 404.html            custom not-found page
├── README.md
│
├── assets/
│   ├── images/
│   │   ├── profile/    hero portrait (JPEG + WebP, two densities)
│   │   ├── projects/   one visual per project
│   │   ├── research/   optional paper figures (see the README there)
│   │   └── og-cover.png  social sharing preview (1200×630)
│   ├── gifs/           project interaction animations
│   ├── documents/      (empty — the CV is sent on request, not published)
│   └── icons/          (reserved)
│
└── favicon/
    ├── favicon.svg         primary icon
    ├── favicon-32.png      browser fallback
    ├── favicon.ico         legacy browsers
    ├── apple-touch-icon.png
    └── site.webmanifest    add-to-home-screen metadata
```

## Development

Idea → Design → Build → Test → Iterate

To preview locally, serve the folder over HTTP so that relative paths and the
`404.html` page behave the way they will on GitHub Pages:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Editing content

| What you want to change | Where |
| --- | --- |
| Projects (title, copy, image, tech, links) | `projects` array at the top of `script.js` |
| Project case studies (the modal) | the `detail` field of each project |
| Which projects show a GIF | the `gifAvailable` set in `script.js` |
| Experience entries | the timeline list in `index.html` |
| Skills and highlights | `index.html` |
| Theme colours and type scale | `:root` variables at the top of `style.css` |
| Where CV requests are sent | `CV_ENDPOINT` in `script.js` |

Every placeholder still waiting for real content is written as `[ADD …]` or
`[REPLACE …]` — search for a bracket to find them all.

## CV requests

The CV is **not** published on this site. The contact section has a request form:
a visitor leaves their email, and the PDF is sent to them. That keeps the
document out of search engines and away from address scrapers.

Out of the box the form validates the address and then opens the visitor's mail
client, pre-addressed to you — so the route to a real request never dead-ends.
To have submissions delivered to you automatically, set `CV_ENDPOINT` in
`script.js`. The comment block immediately above that variable documents two
no-backend options (Formspree, or a Google Apps Script web app) step by step.

The form also includes a honeypot field, which silently discards bot
submissions without telling the bot it was caught.

## Before you publish — fill these in

Nothing is invented anywhere on this site. Where a fact was not supplied, the
page shows a visible `[ADD …]` marker rather than a guess.

The site is already complete and deployable — you can push it as-is and it will
look finished. Everything below is content refinement, not repair.

**To find every pending item at once, search for `TODO`.** There is a full
inventory at the top of `script.js` listing each category and where it lives.

- [ ] **Project links** — search `script.js` for `[ADD LINK]` and replace each
      with a real URL: live demo, repository. A `[ADD LINK]` renders as a
      disabled chip, so it can never 404.
- [ ] **Dates** — replace the three `[ADD DATE]` values in Highlights (each has a
      `TODO` comment directly above it).
- [ ] **Case studies** — in `script.js`, replace each `[ADD ROLE]`, `[ADD RESULT]`
      and `[ADD REFLECTION]` with what you actually did. Delete any field you
      have no real information for; the modal only renders what is present.
- [ ] **Project photos** — replace the SVG placeholders in
      `assets/images/projects/` with your own screenshots (see the README there).
- [ ] **GIFs** — drop your animations in `assets/gifs/`, then add the matching
      project index to `gifAvailable` in `script.js`.
- [ ] **CV delivery** — set `CV_ENDPOINT` in `script.js` (see above). Until it is
      set, the form falls back to opening the visitor's mail client, so nothing
      is silently lost.
- [ ] **URLs** — the canonical URL and Open Graph tags in `index.html` point at
      the project-site URL `https://ianyeung-sys.github.io/ziyiyang/`. If you move
      the site to a different domain or repo, update `canonical` and `og:url`.

## Deployment

This site is designed for GitHub Pages and deployed as a **project site** at
`https://ianyeung-sys.github.io/ziyiyang/`.

1. Push these files to the `main` branch of `ianyeung-sys/ziyiyang`.
2. Under **Settings → Pages**, set the source to `main` / root.

All assets use relative paths (`assets/...`, `favicon/...`), so the site works
from a project subpath without any path rewriting.

## License

Code is free to learn from. Text, images, and project content are mine — please
don't reuse them as your own.
