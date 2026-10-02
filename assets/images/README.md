# assets/images

```
images/
├── profile/     portrait / hero photo
├── projects/    one visual per project
└── og-cover.png social sharing preview (1200×630)
```

Every visual shipped in this folder right now is a **placeholder**, drawn as SVG so the
layout is complete without pretending to be a real photograph or a real screenshot.
Replace them with your own files and keep the same filenames, or update the paths in
`script.js` (projects) and `index.html` (everything else).

The research pipeline figure is not stored here — it is drawn as inline SVG inside
`index.html` so it can inherit theme colours and stay crisp at any size.

## Recommended sizes

| Purpose                    | Size          | Ratio | Format           |
| -------------------------- | ------------- | ----- | ---------------- |
| Hero portrait              | 1200 × 1500   | 4:5   | JPG/WebP         |
| Project visual             | 2400 × 1500   | 8:5   | JPG/WebP         |

Export at 1× and let CSS scale down — the site only ever renders these at ~1200 px wide,
so 2400 px covers high-DPI screens without waste.

## What is in `profile/`

Four files, two formats and two densities:

| File                | Size        | Role                                  |
| ------------------- | ----------- | ------------------------------------- |
| `portrait@2x.jpg`   | 600 × 750   | 1× JPEG (the `<img>` src)             |
| `portrait.jpg`      | 1200 × 1500 | 2× JPEG                               |
| `portrait@2x.webp`  | 600 × 750   | 1× WebP (preferred)                   |
| `portrait.webp`     | 1200 × 1500 | 2× WebP                               |

`index.html` declares both densities via `srcset`, so ordinary screens fetch the small
file and high-density screens get the master. To regenerate after replacing the source
photo, run `.workbuddy-ai/make_portrait.py`.

The photo keeps its original studio backdrop. Automated matting was tried and could not
clean the hair edge convincingly without a learned segmentation model, so the script
crops to 4:5 and exports — nothing more.

## Treatment

Keep images desaturated and high quality so they sit inside the grayscale palette. The
site lightens and slightly saturates them on hover; it does **not** do the grayscale
conversion for you, so desaturate at export time if you want that look to be exact.

## Compressing

Target under ~250 KB per image.

- Squoosh — <https://squoosh.app>
- Prefer WebP for photographic content; it is well supported and roughly 30% smaller
  than JPG at the same quality.
