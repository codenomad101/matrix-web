'use client'
import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="container-page py-16 text-center">
      <h1 className="text-3xl font-bold text-[#0a1a67]">Thank you!</h1>
      <p className="mt-2 text-[#0a1a67]">Your enquiry has been sent. Our team will contact you soon.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="/" className="btn-primary inline-flex">Back to Home</Link>
        <Link href="/courses" className="btn-outline inline-flex">Browse Courses</Link>
      </div>
    </div>
  )
}




