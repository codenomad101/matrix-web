import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import MsaLogo from '@/components/MsaLogo'

/** ~90% width mobile, ~80% desktop — centered (per layout notes) */
const footerInner = 'mx-auto w-[90%] md:w-4/5'

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-page)] text-black">
      {/* Get in Touch: contact + map (first) */}
      <div className="border-b border-gray-300">
        <div className={`${footerInner} py-8 md:py-10`}>
          <h2 className="mb-6 text-center text-xl font-bold text-black md:text-left">Get in Touch</h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-start md:gap-10 lg:gap-12">
            <div className="flex flex-col justify-center space-y-5 md:max-w-lg">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-black" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-black">Visit Us</p>
                  <p className="text-sm text-black/80">Nigdi, Pune and 7 other branches across Pune</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-black" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-black">Call Us</p>
                  <a href="tel:7058740609" className="text-sm text-black/80 hover:text-black">
                    +91 7058740609
                  </a>
                  <p className="mt-0.5 text-xs text-black/60">Mon–Sat, 8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-black" aria-hidden>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-black">Email Us</p>
                  <a href="mailto:msapcmc@gmail.com" className="block text-sm text-black/80 hover:text-black">
                    msapcmc@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="min-h-[200px] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 aspect-video md:min-h-[260px]">
              <iframe
                title="Matrix Science Academy location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.069758926!2d73.7674!3d18.6579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzI4LjQiTiA3M8KwNDYnMDIuNiJF!5e0!3m2!1sen!2sin!4v=1"
                className="h-full min-h-[200px] w-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Request a callback — between Get in Touch and link columns */}
      <div className="border-b border-gray-300 bg-[var(--bg-page)]">
        <div className={`${footerInner} flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between sm:items-center`}>
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-black">Request a callback</p>
            <p className="mt-0.5 text-sm text-black/70">We&apos;ll get back to you shortly</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            <a
              href="tel:7058740609"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-red)] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[var(--brand-red)]/90"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" />
              </svg>
              +91 7058740609
            </a>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-red)] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[var(--brand-red-hover)]"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Multi-column links — Gallery under Faculty & Results; duplicate Contact column removed */}
      <div className={`${footerInner} py-8`}>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">About</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-black/80 transition-colors hover:text-black">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/directors-message" className="text-black/80 transition-colors hover:text-black">
                  Director&apos;s Message
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">Help &amp; Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/counseling" className="text-black/80 transition-colors hover:text-black">
                  Counseling
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-black/80 transition-colors hover:text-black">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-black/80 transition-colors hover:text-black">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-black/80 transition-colors hover:text-black">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-black/80 transition-colors hover:text-black">
                  Enquire
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">Courses</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses" className="text-black/80 transition-colors hover:text-black">
                  All Courses
                </Link>
              </li>
              <li>
                <Link href="/courses/iit-jee" className="text-black/80 transition-colors hover:text-black">
                  IIT-JEE
                </Link>
              </li>
              <li>
                <Link href="/courses/neet" className="text-black/80 transition-colors hover:text-black">
                  NEET
                </Link>
              </li>
              <li>
                <Link href="/courses/mht-cet" className="text-black/80 transition-colors hover:text-black">
                  MHT-CET
                </Link>
              </li>
              <li>
                <Link href="/courses/iiser" className="text-black/80 transition-colors hover:text-black">
                  IISER
                </Link>
              </li>
              <li>
                <Link href="/vriksha" className="text-black/80 transition-colors hover:text-black">
                  VRIKSHA
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">Activities</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/activities/performance" className="text-black/80 transition-colors hover:text-black">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/activities/course-selection" className="text-black/80 transition-colors hover:text-black">
                  Course Selection
                </Link>
              </li>
              <li>
                <Link href="/activities/iit-neet-timeline" className="text-black/80 transition-colors hover:text-black">
                  IIT-JEE / NEET Timeline
                </Link>
              </li>
              <li>
                <Link href="/activities/mht-cet-timeline" className="text-black/80 transition-colors hover:text-black">
                  MHT-CET Timeline
                </Link>
              </li>
              <li>
                <Link href="/activities/on-demand-courses" className="text-black/80 transition-colors hover:text-black">
                  On Demand Courses
                </Link>
              </li>
              <li>
                <Link href="/activities/felicitation" className="text-black/80 transition-colors hover:text-black">
                  Felicitation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-black">Results &amp; Faculty</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/results" className="text-black/80 transition-colors hover:text-black">
                  Results
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="text-black/80 transition-colors hover:text-black">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-black/80 transition-colors hover:text-black">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-black/80 transition-colors hover:text-black">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4">
        <div className={`${footerInner} flex flex-wrap items-center justify-center gap-6`}>
          <span className="text-sm font-medium text-black/80">Follow us</span>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-black/70 transition-colors hover:text-black" aria-label="YouTube">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black/70 transition-colors hover:text-black" aria-label="Instagram">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black/70 transition-colors hover:text-black" aria-label="Facebook">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black/70 transition-colors hover:text-black" aria-label="Twitter">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 py-5">
        <div className={`${footerInner} flex flex-col items-center gap-4 sm:flex-row sm:justify-between`}>
          <div className="text-center text-sm text-black/70 sm:text-left">
            © {new Date().getFullYear()} Matrix Science Academy. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ThemeToggle variant="light" />
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
              title="Matrix Science Academy"
            >
              <MsaLogo className="h-9 w-auto sm:h-10" />
              <span className="text-sm font-semibold text-black">Matrix Science Academy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
