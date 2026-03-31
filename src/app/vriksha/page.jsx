'use client'
import Link from 'next/link'
import AcademicVrikshaMethodology from '@/components/AcademicVrikshaMethodology'

export default function VrikshaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-[#ecfdf5] to-emerald-100/80 text-neutral-800 antialiased">
      <section className="page-section bg-transparent">
        <div className="container-page mx-auto max-w-4xl text-center">
          <span className="interior-muted mb-4 inline-block rounded-full border border-emerald-200/80 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900/80">
            New Program
          </span>
          <h1 className="interior-title interior-title-center mb-4 text-emerald-950">VRIKSHA</h1>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-neutral-600">
            Our new program designed to nurture growth and excellence. Structured curriculum, dedicated support, and a proven approach to
            help you reach your goals.
          </p>
          <ul className="mx-auto mb-8 max-w-2xl space-y-2 text-base text-body/90">
            <li>• Structured curriculum aligned with your goals</li>
            <li>• Dedicated doubt-solving and mentorship</li>
            <li>• Regular assessments and progress tracking</li>
            <li>• Flexible batches across our branches</li>
          </ul>
          <p className="mx-auto mb-8 max-w-2xl text-sm text-neutral-500">
            Full curriculum details and weekly topics will be updated here. For batch timings and admissions, get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Enquire about VRIKSHA
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-5 py-2.5 font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              View all courses
            </Link>
          </div>
        </div>
      </section>

      <AcademicVrikshaMethodology variant="page" />
    </main>
  )
}
