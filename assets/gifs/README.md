# assets/gifs

Drop your interaction GIFs here. The filenames below are already referenced by
`script.js`, so overwrite them in place and the site will pick them up with no code change.

| File                  | Used by               | Suggested content                        |
| --------------------- | --------------------- | ---------------------------------------- |
| `travel-guide.gif`    | 01 China Travel Guide | scrolling / browsing the guide on mobile |
| `inspection-car.gif`  | 02 Inspection Car     | the vehicle driving and avoiding obstacles |
| `voice-clock.gif`     | 03 Voice Clock        | wake word → AI answer → projected display |
| `education-app.gif`   | 04 AI Education App   | a child using the application            |

## While a GIF is missing

Nothing breaks. `assets/images/projects/*.svg` is used as the static poster, and the
`<video>`-style GIF slot simply does not render. Add the file and it appears.

## Keep the page fast

GIF is an old, heavy format. Before committing:

- Keep each file **under ~2 MB**; target under 1 MB.
- Cap height at **720 px** — the layout never renders larger.
- Trim to **6–10 seconds**. Cut dead frames at the start and end.
- Drop to **12–15 fps**.
- Try <https://ezgif.com/optimize> (lossy + reduce colors). A 256-colour palette is
  plenty for a UI screen recording.

An MP4 or WebM is typically 5–10× smaller than the same GIF. If a file refuses to
shrink below ~3 MB, that is the point at which converting to video is justified.
