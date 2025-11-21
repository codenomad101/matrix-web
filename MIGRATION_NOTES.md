# Next.js Migration Notes

## Completed Migration Steps

1. ✅ Created Next.js configuration files:
   - `next.config.js` - Next.js configuration
   - Updated `package.json` - Removed Vite, added Next.js dependencies
   - Updated `tailwind.config.js` - Updated content paths for Next.js
   - Created `jsconfig.json` - Path aliases for `@/*` imports

2. ✅ Set up Next.js App Router structure:
   - `src/app/layout.jsx` - Root layout with Navbar and Footer
   - `src/app/page.jsx` - Home page
   - `src/app/globals.css` - Global styles (moved from `src/index.css`)
   - Created all route pages in `src/app/` directory

3. ✅ Converted React Router to Next.js:
   - All routes converted to Next.js App Router pages
   - Updated all `Link` components from `react-router-dom` to `next/link`
   - Changed `to` prop to `href` prop
   - Replaced `NavLink` with `Link` and `usePathname()` hook
   - Removed `BrowserRouter` wrapper

4. ✅ Updated components:
   - Added `'use client'` directive to components using hooks
   - Updated all `Link` imports and usage
   - Navbar now uses `usePathname()` for active state

5. ✅ Created route pages:
   - `/` - Home
   - `/courses` - Courses
   - `/faculty` - Faculty
   - `/testimonials` - Testimonials
   - `/about` - About
   - `/directors-message` - Directors Message
   - `/activities` - Activities
   - `/activities/performance` - Performance
   - `/activities/felicitation` - Felicitation
   - `/activities/course-selection` - Course Selection
   - `/activities/iit-neet-timeline` - IIT-JEE/NEET Timeline
   - `/activities/mht-cet-timeline` - MHT-CET Timeline
   - `/activities/on-demand-courses` - On Demand Courses
   - `/results` - Results
   - `/enquiry` - Enquiry
   - `/thank-you` - Thank You

## Next Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Files to Remove (Optional Cleanup)

- `vite.config.js` - No longer needed
- `index.html` - Next.js doesn't use this
- `src/main.jsx` - Replaced by Next.js App Router
- `src/App.jsx` - Replaced by `src/app/layout.jsx` and route pages
- `src/index.css` - Moved to `src/app/globals.css`

## Important Notes

- All components using React hooks need `'use client'` directive
- Image optimization: Next.js has built-in Image component (optional upgrade)
- Static assets should be in `public/` directory (already correct)
- API routes can be added in `src/app/api/` if needed


