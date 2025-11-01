# Images directory

Place all production-ready images in this folder so they can be served statically by Vite.

Recommended structure:

- `public/images/msa-logo.svg` – site logo (SVG or PNG/JPG)
- `public/images/hero/` – hero section images
- `public/images/courses/` – course cards and illustrations
- `public/images/faculty/` – faculty photos
- `public/images/testimonials/` – student photos
- `public/images/branches/` – branch/location images

Usage in code:

- Reference with absolute paths from `public/`: `/images/msa-logo.svg`.
- Example in React: `<img src="/images/msa-logo.svg" alt="Matrix Science Academy logo" />`

Notes:

- Keep filenames lowercase, hyphen-separated: `iit-jee-batch-2025.jpg`.
- Prefer SVG for logos and icons; use optimized PNG/JPG/WebP for photos.
- Optimize images before committing (tinypng, svgo, etc.).


