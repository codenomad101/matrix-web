'use client'
import Link from 'next/link'

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)]">
      <section className="page-section-white">
        <div className="container-page max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">Scholarships</h1>
          <p className="text-body text-lg max-w-2xl mb-6">
            Matrix Science Academy offers merit-based scholarships to deserving students. Details on criteria, application process, and maximum scholarship percentage will be updated here.
          </p>
          <ul className="text-body/90 text-base mb-8 space-y-2 max-w-2xl">
            <li>• Merit-based on entrance test / previous performance</li>
            <li>• Criteria and application process to be shared by branch</li>
            <li>• Maximum scholarship percentage as per institute policy</li>
          </ul>
          <p className="text-body/80 text-sm mb-8">For current scholarship criteria and to apply, please enquire at your preferred branch or fill the enquiry form.</p>
          <Link href="/enquiry" className="inline-flex items-center gap-2 bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] px-5 py-2.5 rounded-lg font-semibold transition-colors">
            Enquire about scholarships
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </main>
  )
}
