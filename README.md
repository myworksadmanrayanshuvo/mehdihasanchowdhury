# Muhammed Mehdi Hasan Chowdhury — Portfolio Website

A single-page executive portfolio site in a navy + copper theme, built from Mr. Chowdhury's leadership deck and photos.

## What's in this folder

```
mehdi-portfolio/
├── index.html          # The full site (all sections)
├── styles.css           # All styling (dark/light theme, layout, colors)
├── script.js             # Theme toggle, mobile menu, scroll animations
├── assets/
│   ├── mehdi-profile-primary.jpg    # Hero photo
│   └── mehdi-profile-secondary.jpg   # Philosophy section photo
└── README.md            # This file
```

## How to publish it on GitHub Pages

1. **Create or open your repository**
   - Go to [github.com/new](https://github.com/new) and create a repository (or use an existing one). If you want it available at `https://<your-username>.github.io/`, name the repo exactly `<your-username>.github.io`. Otherwise any repo name works and your site will be published at `https://<your-username>.github.io/<repo-name>/`.

2. **Upload the files**
   - Open your repository on GitHub, click **Add file → Upload files**.
   - Drag in `index.html`, `styles.css`, `script.js`, and the **whole `assets` folder** (keep the folder structure intact — the photos must stay inside `assets/`).
   - Commit the upload (add a short message like "Add portfolio site" and click **Commit changes**).

3. **Turn on GitHub Pages**
   - In your repository, go to **Settings → Pages** (left sidebar, under "Code and automation").
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.

4. **Wait a couple of minutes**
   - GitHub will show a message like "Your site is live at https://...". It usually takes 1–3 minutes to go live the first time.
   - Visit the link to confirm everything loads correctly, including the photos.

## Notes

- The site is fully self-contained — no build step, no dependencies to install. It works as static files on any host (GitHub Pages, Netlify, Vercel, or a plain web server).
- The theme toggle (moon/sun icon in the header) switches between dark navy and light ivory — it resets to dark on every page load by design (no local storage is used).
- Contact details (email, mobile, location) come directly from the details you provided and are wired as clickable `mailto:` / `tel:` links.
- All content — career journey, education, training programs, recognition, and services — was drawn from the provided leadership deck. Update `index.html` directly if any detail needs correcting.
