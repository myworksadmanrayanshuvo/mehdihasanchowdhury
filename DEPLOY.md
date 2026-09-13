# Deploying to myworksadmanrayanshuvo/mehdihasanchowdhury

This folder is a complete, ready-to-publish static site — no build step, no
dependencies to install. It just needs to land in the repo at:
https://github.com/myworksadmanrayanshuvo/mehdihasanchowdhury

Pick whichever method is easiest for you.

## Option A — GitHub's web upload (no git needed, ~2 minutes)

1. Open https://github.com/myworksadmanrayanshuvo/mehdihasanchowdhury
2. Click **Add file → Upload files**.
3. Drag in every file and folder from this package
   (`index.html`, `styles.css`, `script.js`, `favicon.svg`, the `images/`
   folder, and the `assets/` folder) — keep the folder structure as-is.
4. If `index.html` already exists in the repo, GitHub will ask to replace it
   — confirm.
5. Commit directly to `main` (or whichever branch GitHub Pages is serving
   from — check **Settings → Pages** if unsure).
6. Wait 1–2 minutes, then visit
   https://myworksadmanrayanshuvo.github.io/mehdihasanchowdhury/

## Option B — git command line

```bash
git clone https://github.com/myworksadmanrayanshuvo/mehdihasanchowdhury.git
cd mehdihasanchowdhury
# copy in index.html, styles.css, script.js, favicon.svg, images/, assets/
git add .
git commit -m "Rebuild portfolio site"
git push
```

## Option C — have Claude push it directly

If you'd rather not touch GitHub yourself, generate a fine-grained
**Personal Access Token** scoped to just this one repository with
"Contents: Read and write" permission
(GitHub → Settings → Developer settings → Fine-grained tokens), and share
it in the chat. Claude will clone, commit, and push directly, then you can
revoke the token immediately after. Nothing else is needed.

## File map

- `index.html` — the full single-page site
- `styles.css` — all styling (design tokens at the top)
- `script.js` — nav behavior, scroll reveals, animated counters, timeline draw
- `favicon.svg` — browser tab icon
- `images/profile-1.jpg` → hero portrait
- `images/profile-2.jpg` → About section portrait
- `images/profile-3.jpg` → divider banner (between Experience and Expertise)
- `images/profile-4.jpg` → Contact section portrait
- `assets/Muhammed_Mehdi_Hasan_Chowdhury_CV.pdf` — wired to the "Download CV" buttons

## One thing to double check

That's it — LinkedIn is now wired in (Contact section, footer, and a
button next to Email/WhatsApp).
