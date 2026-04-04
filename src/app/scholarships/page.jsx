'use client'
import Link from 'next/link'

export default function ScholarshipsPage() {
  return (
    <main className="interior-page">
      <section className="page-section-white">
        <div className="container-page max-w-4xl">
          <h1 className="interior-title mb-4">Scholarships</h1>
          <p className="mb-6 text-lg text-neutral-600 max-w-2xl">
            Matrix Science Academy offers merit-based scholarships to deserving students. Details on criteria, application process, and maximum scholarship percentage will be updated here.
          </p>
          <ul className="mb-8 max-w-2xl space-y-2 text-base text-neutral-700">
            <li>• Merit-based on entrance test / previous performance</li>
            <li>• Criteria and application process to be shared by branch</li>
            <li>• Maximum scholarship percentage as per institute policy</li>
          </ul>
          <p className="mb-8 text-sm text-neutral-500">For current scholarship criteria and to apply, please enquire at your preferred branch or fill the enquiry form.</p>
          <Link href="/enquiry" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-neutral-800">
            Enquire about scholarships
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
