# Matrix Science Academy – Website Redesign Plan

**Goal:** Turn the site into an engaging, conversion-oriented “sales funnel” with clear navigation, compelling visuals, and mobile-responsive design.  
**Approach:** Implement one phase at a time; use dummy/placeholder data where content is pending.

---

## Phase 1: Navigation & global structure

| # | Task | Status | Notes |
|---|------|--------|--------|
| 1.1 | **Update top navigation** – Tabs: Home, About Us, Courses, **VRIKSHA**, Results, Faculty, Gallery, **Counseling**, Contact (or “Enquire Now”) | ⬜ | Add VRIKSHA + Counseling; ensure Contact/Enquire is clear |
| 1.2 | Ensure nav is clean, minimal, mobile-friendly (hamburger + dropdown if needed) | ⬜ | Current Navbar exists; align with new items |
| 1.3 | Apply brand colors (blue, red, gray) and logo consistently in header/footer | ⬜ | Quick audit + fix if needed |

**Deliverable:** One clean top menu with all required tabs, responsive.

---

## Phase 2: Homepage – structure and sections

Homepage should: communicate who we are → highlights (courses, results, faculty) → call-to-action.  
Implement in this order:

| # | Section / Block | Status | Notes |
|---|------------------|--------|--------|
| 2.1 | **Hero + intro** – Who we are, what we offer (existing hero; refine copy/CTA if needed) | ⬜ | Keep current hero or tweak for “funnel” message |
| 2.2 | **Quick statistics** – Counters/graphics: e.g. “99+ Percentile Students”, “30% IIT Admissions Increase” | ⬜ | New component; can animate on scroll |
| 2.3 | **About intro** – Short “About Matrix Science Academy” block to orient new visitors | ⬜ | 2–3 lines + optional “Read more” → About |
| 2.4 | **Courses preview** – Cards/icons for IIT-JEE, NEET, MHT-CET, IISER, **VRIKSHA**; each links to details | ⬜ | Add VRIKSHA card; ensure all link to course pages |
| 2.5 | **VRIKSHA highlight** – Featured block (image/icon + short copy) for the new program | ⬜ | “New product launch” feel; link to VRIKSHA page |
| 2.6 | **Top results / toppers** – Images of top students with exam and percentile/rank | ⬜ | Use existing Results section; add topper images + stats |
| 2.7 | **Performance graph** – Simple chart/infographic: 3-year improvement in results | ⬜ | New component (e.g. Chart.js or CSS); dummy data OK |
| 2.8 | **Faculty showcase** – “Our Faculty” with photos and names (preview; full list on Faculty page) | ⬜ | 3–6 cards; link to /faculty |
| 2.9 | **Testimonials & success** – Student/parent testimonials or short success stories (existing; refine layout/copy) | ⬜ | Already on Home; ensure prominent and trust-building |
| 2.10 | **Activity gallery preview** – Few images: classroom, events, felicitation | ⬜ | 4–6 images; link to /gallery |
| 2.11 | **Counseling CTA** – Section offering free counseling + short enquiry form or link | ⬜ | CTA + form or “Book counseling” → Counseling page |
| 2.12 | **Demo classes & scholarships** – Brief mentions + links to demo info and scholarship details | ⬜ | 2 small blocks or one combined; links to pages/forms |
| 2.13 | **Promotional video** – Embedded 1–2 min video (campus, teaching, infra, achievements) | ⬜ | Placeholder embed; client provides final video |
| 2.14 | **Final CTAs** – Strong CTAs before footer (Enquire, Demo, Contact) | ⬜ | Buttons/links; match existing “Ready to start” block |

**Deliverable:** Homepage that guides visitor through: intro → stats → courses → results → faculty → testimonials → gallery → counseling/demo/scholarship → video → CTAs.

---

## Phase 3: Core pages (content structure)

| # | Page | Status | Notes |
|---|------|--------|--------|
| 3.1 | **About Us** – Institute overview, vision/mission, founder/director message, timeline, campus/leadership photos | ⬜ | Structure ready for Alok’s content; use placeholders |
| 3.2 | **Courses** – Per course: description, duration, start time, discounts/scholarships, curriculum/timetable, benefits, images | ⬜ | IIT-JEE, NEET, MHT-CET, IISER (+ VRIKSHA); professional layout |
| 3.3 | **VRIKSHA** – Program description, curriculum (e.g. weekly topics), images; “new launch” styling | ⬜ | Dedicated page; highlight as new product |
| 3.4 | **Results** – Year-wise stats (last 3 years), highest percentile/rank, topper photos; show progression | ⬜ | Tables/graphs + topper gallery; dummy data OK |
| 3.5 | **Faculty** – Grid of profile cards: photo, name, subject, experience, brief bio | ⬜ | Clean grid; placeholder photos/bios |
| 3.6 | **Gallery** – Image gallery: academics, extracurriculars, awards/felicitation, seminars | ⬜ | Filter or tabs; link from homepage preview |

**Deliverable:** All core pages built and wired; placeholder/dummy data where needed.

---

## Phase 4: Conversion & contact

| # | Task | Status | Notes |
|---|------|--------|--------|
| 4.1 | **Counseling** – Dedicated page: description of free counseling, benefits + lead-capture form | ✅ | Done |
| 4.2 | **Scholarships** – Criteria, application process, max %; link to detailed page or PDF | ✅ | /scholarships page |
| 4.3 | **Demo classes** – Info on demo/trial, how to register; link to form or schedule page | ✅ | Homepage section → /enquiry |
| 4.4 | **Contact** – Office contact, branches, email, phone; social links (YouTube, Instagram, Facebook, Twitter) | ✅ | Social icons in footer; /contact → /enquiry |

**Deliverable:** Every conversion path (counseling, demo, scholarship, contact) has a clear page and CTA.

---

## Phase 5: Media, trust & polish

| # | Task | Status | Notes |
|---|------|--------|--------|
| 5.1 | **Promotional video** – Final embed on homepage or “Media” section (replace placeholder if needed) | ⬜ | Client to provide final video URL/file |
| 5.2 | **Testimonials / success stories** – Combine or link testimonials with detailed success stories (text + photos) | ⬜ | Sub-section or link to /testimonials with stories |
| 5.3 | **Content pass** – Short, benefit-focused copy; avoid clutter; high-quality images where available | ⬜ | Replace key placeholders when content is ready |
| 5.4 | **Responsive & QA** – All pages mobile-friendly; test forms, links, video, gallery | ⬜ | Cross-browser and devices |

**Deliverable:** Site feels complete, trustworthy, and works well on all devices.

---

## Phase 6: SEO & analytics

| # | Task | Status | Notes |
|---|------|--------|--------|
| 6.1 | **SEO** – Meta titles, descriptions, Open Graph; clean URLs; sitemap; basic on-page SEO | ✅ | Layout metadata + sitemap (vriksha, counseling, scholarships added) |
| 6.2 | **Google Tag Manager (GTM)** – Container and tags for GA4, conversion events if needed | ✅ | GTM ID in layout |
| 6.3 | **Google Analytics 4** – Property and events (page_view, form_submit, CTA clicks) | ✅ | GA ID in layout |
| 6.4 | **Google Search Console** – Property setup and sitemap submission (client to verify) | ⬜ | Client to verify domain + submit sitemap |
| 6.5 | **Reporting** – Short doc or dashboard outline for key metrics (traffic, enquiries, top pages) | ⬜ | Optional: GA4 views / one-pager |

**Deliverable:** Site ready for ranking and measurable; client can verify and use GSC/GA4.

---

## Summary checklist

- [x] **Phase 1** – Navigation & global (1.1–1.3)
- [x] **Phase 2** – Homepage sections (2.1–2.14)
- [x] **Phase 3** – Core pages (3.1–3.4 done; 3.5–3.6 optional)
- [x] **Phase 4** – Conversion & contact (4.1–4.4)
- [x] **Phase 5** – Media, trust & polish (5.1–5.2, 5.4; 5.3 content pass ongoing)
- [x] **Phase 6** – SEO & analytics (6.1–6.3; 6.4–6.5 client-side)

**Remaining (optional):** Faculty grid of cards, Gallery with real images, social link URLs, video URL, Search Console verification, reporting doc.
