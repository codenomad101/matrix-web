'use client'
import Link from 'next/link'

export default function VrikshaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="page-section-white">
        <div className="container-page max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-red)] text-white text-sm font-bold uppercase tracking-wide mb-4">New Program</span>
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">VRIKSHA</h1>
          <p className="text-body text-lg max-w-2xl mb-6">
            Our new program designed to nurture growth and excellence. Structured curriculum, dedicated support, and a proven approach to help you reach your goals.
          </p>
          <ul className="text-body/90 text-base mb-8 space-y-2 max-w-2xl">
            <li>• Structured curriculum aligned with your goals</li>
            <li>• Dedicated doubt-solving and mentorship</li>
            <li>• Regular assessments and progress tracking</li>
            <li>• Flexible batches across our branches</li>
          </ul>
          <p className="text-body/80 text-sm mb-8">Full curriculum details and weekly topics will be updated here. For batch timings and admissions, get in touch.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] px-5 py-2.5 rounded-lg font-semibold transition-colors">
              Enquire about VRIKSHA
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/courses" className="inline-flex items-center gap-2 border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)] hover:text-white px-5 py-2.5 rounded-lg font-semibold transition-colors">
              View all courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
