'use client'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="interior-page">
      <section className="page-section-white">
        <div className="container-page py-8 text-center">
          <h1 className="interior-title interior-title-center">Thank you!</h1>
          <p className="mt-2 text-neutral-600">Your enquiry has been sent. Our team will contact you soon.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 font-medium text-white transition-colors hover:bg-neutral-800">Back to Home</Link>
            <Link href="/courses" className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-5 py-2.5 font-medium text-neutral-900 transition-colors hover:bg-neutral-100">Browse Courses</Link>
          </div>
        </div>
      </section>
    </div>
  )
}




