'use client'
import Link from 'next/link'

export default function VrikshaPage() {
  return (
    <main className="interior-page">
      <section className="page-section-white">
        <div className="container-page max-w-4xl">
          <span className="interior-muted mb-4 inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600">New Program</span>
          <h1 className="interior-title mb-4">VRIKSHA</h1>
          <p className="mb-6 text-lg text-neutral-600 max-w-2xl">
            Our new program designed to nurture growth and excellence. Structured curriculum, dedicated support, and a proven approach to help you reach your goals.
          </p>
          <ul className="text-body/90 text-base mb-8 space-y-2 max-w-2xl">
            <li>• Structured curriculum aligned with your goals</li>
            <li>• Dedicated doubt-solving and mentorship</li>
            <li>• Regular assessments and progress tracking</li>
            <li>• Flexible batches across our branches</li>
          </ul>
          <p className="mb-8 text-sm text-neutral-500">Full curriculum details and weekly topics will be updated here. For batch timings and admissions, get in touch.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-neutral-800">
              Enquire about VRIKSHA
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-5 py-2.5 font-semibold text-neutral-900 transition-colors hover:bg-neutral-100">
              View all courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
