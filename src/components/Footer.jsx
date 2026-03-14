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
              <li><Link href="/terms-and-conditions" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/enquiry" className="text-[#0a1a67]/80 hover:text-[#B30027] transition-colors">Contact us</Link></li>
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
