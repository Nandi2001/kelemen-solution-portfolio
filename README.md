# Kelemen Solutions — Hosting Test

A one-page, self-contained static website to test GitHub Pages or Cloudflare Pages hosting. No build process, external assets, or dependencies are required.

## GitHub Pages

1. Create a new **public** repository on GitHub.
2. Upload `index.html` to the **root** of the repository and commit.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select `main` and `/ (root)` and save.
5. Visit the URL shown in the Pages settings (usually `https://YOUR-USERNAME.github.io/REPOSITORY/`).

## Cloudflare Pages

1. Create a GitHub repository with `index.html` in the root.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
3. Select the repository. For a plain HTML site, use no framework and leave the build command empty.
4. Set the output directory to `/` (repository root) if prompted and deploy.
5. Open the `*.pages.dev` address displayed by Cloudflare.

You can later replace `index.html` with your full portfolio. Domain setup is optional until you're ready.
# kelemen-solution-portfolio
