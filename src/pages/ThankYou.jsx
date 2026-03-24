'use client'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      <section className="page-section-white">
        <div className="container-page py-8 text-center">
          <h1 className="text-3xl font-bold text-heading">Thank you!</h1>
          <p className="mt-2 text-body">Your enquiry has been sent. Our team will contact you soon.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red-hover)] px-5 py-2.5 font-medium transition-colors duration-300">Back to Home</Link>
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--brand-red)] text-[var(--brand-red)] hover:bg-[var(--brand-red)]/10 px-5 py-2.5 font-medium transition-colors duration-300">Browse Courses</Link>
          </div>
        </div>
      </section>
    </div>
  )
}




