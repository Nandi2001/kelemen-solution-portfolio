# Kelemen Solutions — portfolio prototype

A minimal black and teal static portfolio for product CAD design, technical drawing, design for manufacturing and reverse engineering.

## Pages

- `index.html`: scrolling one-page overview: minimal introduction, three featured projects and See more work, The Team, then Contact. The blueprint header becomes compact while scrolling.
- `work.html`: full responsive gallery with three existing projects and six clearly marked, non-interactive future-project placeholders. Existing projects link to their own detail pages.
- `project-pumping-station.html`: drawing-to-reality comparison and manufacturing details.
- `project-vortex.html`: aligned CAD views, flow animation and project video.
- `project-interior.html`: furniture render/model comparison and component details.
- `team.html`: playful one-person team introduction, photo departments, engineering experience, education and CAD tools. `cv.html` redirects here for old bookmarks.
- `contact.html`: direct email, phone, postal address and billing disclosure, with clickable email/phone, copy controls and WhatsApp messaging. There is no contact form or brief download.
- `styles.css` and `site.js`: shared styling and interactions.

## Local preview

Open `index.html` in a browser, or run `python -m http.server 8080` in this folder and visit http://localhost:8080. No build step or dependencies are required to run the website.

A temporary development preview with video byte-range support is also available through the workspace helper: `node ../.tools/preview.cjs`, at http://127.0.0.1:8080/kelemen-solutions-web/ (run only when that port is free).

## Media

Original files remain unchanged under `resources/`. Optimized image and video copies are in `assets/`.

The original `Flow_Animation` videos use MPEG-4 Part 2 (`mp4v`), which is not reliably supported in browsers. The Flow + Chart view has been removed from the page; its original and converted assets remain available locally. All three videos have web copies using H.264, yuv420p and MP4 fast-start metadata. These are used by the website, with posters, native controls and direct MP4 fallback links. The converted videos total approximately 20 MB, compared with approximately 146 MB for the originals. Deployment hosting should serve MP4 as `video/mp4` and support byte-range requests for seeking.

## Hosting and content

Publish the root HTML pages (including `work.html` and all `project-*.html` files), `styles.css`, `site.js`, `assets/`, and the referenced PDFs from `resources/` with their relative paths intact. Original PNGs and videos are not required by the website. The site can be hosted using GitHub Pages or Cloudflare Pages without a build command.

Project copy describes visible details from the supplied material. Final project context and contributions can be expanded as more work is added. The empty exhibition-stand folder and Windows shortcut are not displayed. Nothing has been deployed by this prototype work.

Images use responsive CSS crop frames with explicit subject bounds, reducing blank margins while preserving the source files. The complete technical drawing remains visible so dimensions and callouts are readable.

Branding uses the supplied vector kit: the horizontal transparent lockup in desktop headers, the KS mark on mobile, and the dark icon as favicon. Canvas-trimmed copies live in `assets/brand-horizontal.svg` and `assets/brand-mark.svg`; the original paths, colors and kit files are preserved. The site accent matches the kit teal (`#14B8A6`).

Team-page employment dates, qualifications and tools were transcribed from the supplied Europass PDF embedded XML. The current role title follows the explicit user wording (Lead Design Engineer). The full private CV was not copied into the website.

All pages share the blueprint charcoal background, teal accents and restrained typography. Gallery and project copy is concise; Contact uses a direct email button. The Team keeps a small photo strip and a condensed experience/education section. Home retains its larger blueprint banner.

The Team portrait caption is an angled charcoal sticker with a teal border and dark surround, separated visually from the cutout and backdrop. The one-page navigation links to Home, Work, The Team and Contact sections; the full gallery and individual project pages remain separate. Team and Contact standalone pages remain available for existing links.

Public contact details follow the user-supplied business contact information. The contact section/page and site footers state: “Invoices are issued by Tempo Consimex SRL,” linking to the company website. This identifies the invoicing entity without asserting that Kelemen Solutions is a separate legal entity.

Project cards have explicit View project actions and bounded thumbnails: 210px on desktop, compact image/text rows on tablet, and 180px thumbnails on mobile. Both gallery grids remain three columns or one project per row.

Removed the earlier local brief-download form and its JavaScript handler. The contact section and standalone Contact page now use an Email me about your project mailto link.

Contact email and phone are prominent copyable rows, with compact copy controls in the footers. Copy actions provide visible and screen-reader feedback. Main Home sections use subtle full-width charcoal bands; subsection hierarchy uses spacing and typography rather than matching divider rules.

Removed the redundant email CTA: the email value itself opens mail. The phone row and footers include a WhatsApp link to the supplied phone number. No messages are sent by the site.

## Image delivery

Transparent portraits are delivered as WebP at 480, 768 and 1024 pixel widths with responsive srcset/sizes. The original PNGs remain as local/source assets and are no longer requested by the pages. Team photographs use 480/800-pixel WebP variants. Below-fold photos stay lazy-loaded, and image decoding is asynchronous. CSS and JavaScript URLs include content hashes to bypass stale CDN/browser copies after this update.

Header branding is embedded directly as inline SVG (blueprint banner, horizontal wordmark and mobile monogram), preserving the original vector artwork and removing separate logo-image requests. The favicon remains a small standalone SVG.
