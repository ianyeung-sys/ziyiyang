# assets/documents

**This folder is intentionally empty.**

## Why there is no CV file here

The CV is not published on the site. Putting a PDF at a predictable URL means it
gets indexed by search engines and harvested by address scrapers — and it
exposes your contact details to anyone who finds the link.

Instead, the contact section has a **request form**: a visitor leaves their
email, and the CV is sent to them. You control who gets it, and you can see who
asked.

## Where the CV actually lives

Keep your real CV in a private location — your own computer, Google Drive, or
attached to whichever form service you pick.

## Making the form deliver

The form works today by opening the visitor's mail client. To have requests
delivered to you automatically, set `CV_ENDPOINT` near the top of section 09 in
`script.js`. The comment block above that variable walks through two options that
need no backend:

- **Formspree** — a hosted form endpoint; attach the CV to its auto-reply.
- **Google Apps Script** — a small script that appends to a Sheet and sends the
  PDF from your own Gmail.

## If you later want a public CV

Some people prefer a downloadable PDF for convenience. If you change your mind:

1. Put the file here as `Ziyi_Yang_CV.pdf`.
2. Add a link to it in the contact section of `index.html`.
3. Consider a version with your phone number and address removed, since anything
   at a public URL should be treated as public.
