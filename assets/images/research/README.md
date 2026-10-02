# assets/images/research

Figures for the Research section.

## Currently empty, and that is fine

The pipeline diagram in the Research section is **not** an image file — it is inline
SVG inside `index.html`. That keeps it crisp at any zoom, lets it inherit the theme
colours automatically, and means there is nothing to download for it.

So this folder has no required contents. It exists so that when you do want to drop in
a figure — a chart from the paper, a system diagram, a results plot — there is an
obvious place to put it and an obvious path to reference.

## If you add a figure

| Purpose            | Size        | Ratio | Format    |
| ------------------ | ----------- | ----- | --------- |
| Paper figure       | 1600 × 1000 | 8:5   | JPG/WebP  |
| Tall system block  | 1200 × 1500 | 4:5   | JPG/WebP  |

Keep them monochrome or very low saturation so they sit inside the grayscale palette.
The section already runs figures through a `saturate()` filter, but starting from a
neutral export will always look better than correcting afterwards.

Then reference it from `index.html` with a relative path:

```html
<img src="assets/images/research/your-figure.jpg" alt="Describe what the figure shows">
```

Always write real `alt` text — for a research figure, one clear sentence describing
what it plots is far more useful than "figure".

## A note on using figures from the paper

If the figure comes from the published paper, it is normally fine to reproduce it in
your own portfolio with attribution (a caption crediting the paper and DOI is
sufficient). Check the publisher's policy if you plan to use it somewhere more
prominent than a personal site.
