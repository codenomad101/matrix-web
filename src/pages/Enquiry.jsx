'use client'
import { Suspense } from 'react'
import EnquiryForm from '../components/EnquiryForm.jsx'

export default function Enquiry() {
  return (
    <div className="interior-page">
      <section className="page-section-white">
        <div className="container-page max-w-4xl">
          <h1 className="interior-title mb-2">Enquire Now</h1>
          <p className="mb-6 text-neutral-600">Fill the form below and choose how to send your enquiry.</p>
          <Suspense
            fallback={
              <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6">
                <p className="text-body text-sm">Loading form…</p>
              </div>
            }
          >
            <EnquiryForm />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

