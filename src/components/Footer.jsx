import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-page)] text-[#0a1a67]">
      {/* Allen-style CTA strip */}
      <div className="border-b border-gray-300">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[#0a1a67] font-semibold text-lg">Request a callback</p>
            <p className="text-[#0a1a67]/70 text-sm mt-0.5">We&apos;ll get back to you shortly</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:7058740609"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0a1a67] text-white hover:bg-[#0a1a67]/90 px-5 py-2.5 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z" /></svg>
              +91 7058740609
            </a>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-[#B30027] text-white hover:bg-[#8a001e] px-5 py-2.5 font-semibold transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      {/* Multi-column links - Allen style */}
      <div className="container-page py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">About us</Link></li>
              <li><Link href="/directors-message" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Director&apos;s Message</Link></li>
              <li><Link href="/gallery" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wider mb-4">Help &amp; Support</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/counseling" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Counseling</Link></li>
              <li><Link href="/scholarships" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Scholarships</Link></li>
              <li><Link href="/terms-and-conditions" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/enquiry" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Enquire</Link></li>
            </ul>
          </div>

          {/* Popular goals / Courses */}
          <div>
            <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wider mb-4">Courses</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/courses" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">All Courses</Link></li>
              <li><Link href="/courses/iit-jee" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">IIT-JEE</Link></li>
              <li><Link href="/courses/neet" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">NEET</Link></li>
              <li><Link href="/courses/mht-cet" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">MHT-CET</Link></li>
              <li><Link href="/courses/iiser" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">IISER</Link></li>
              <li><Link href="/vriksha" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">VRIKSHA</Link></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wider mb-4">Activities</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/activities/performance" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Performance</Link></li>
              <li><Link href="/activities/course-selection" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Course Selection</Link></li>
              <li><Link href="/activities/iit-neet-timeline" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">IIT-JEE/NEET Timeline</Link></li>
              <li><Link href="/activities/mht-cet-timeline" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">MHT-CET Timeline</Link></li>
              <li><Link href="/activities/on-demand-courses" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">On Demand Courses</Link></li>
              <li><Link href="/activities/felicitation" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Felicitation</Link></li>
            </ul>
          </div>

          {/* Results & Faculty */}
          <div>
            <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wider mb-4">Results &amp; Faculty</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/results" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Results</Link></li>
              <li><Link href="/faculty" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Our Faculty</Link></li>
              <li><Link href="/testimonials" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-[#0a1a67] uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm text-[#0a1a67]/80">
              <li><span className="text-[#0a1a67] font-medium">Email:</span> msapcmc@gmail.com</li>
              <li><span className="text-[#0a1a67] font-medium">Phone:</span> 7058740609</li>
              <li><span className="text-[#0a1a67] font-medium">Branches:</span> 8 across Pune</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social links */}
      <div className="border-t border-gray-300 py-4">
        <div className="container-page flex flex-wrap items-center justify-center gap-6">
          <span className="text-sm font-medium text-[#0a1a67]/80">Follow us</span>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1a67]/70 hover:text-[#B30027] transition-colors" aria-label="YouTube">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1a67]/70 hover:text-[#B30027] transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1a67]/70 hover:text-[#B30027] transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#0a1a67]/70 hover:text-[#B30027] transition-colors" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-5">
        <div className="container-page flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[#0a1a67]/70 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Matrix Science Academy. All rights reserved.
          </div>
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="https://res.cloudinary.com/ddqgxrgnc/image/upload/v1773460255/matrixlogo_dlhtag.png" alt="MSA" className="h-8 w-8 object-contain" />
            <span className="text-sm font-semibold">
              <span className="text-[#B30027]">Matrix</span> <span className="text-[#0a1a67]">Science Academy</span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
