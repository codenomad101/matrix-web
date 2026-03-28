import EnquiryForm from '@/components/EnquiryForm'
import { Suspense } from 'react'

export default function CounselingPage() {
  return (
    <main className="interior-page">
      <section className="page-section-white">
        <div className="container-page max-w-4xl">
          <h1 className="interior-title mb-4">Free Career Counseling</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mb-2">
            Not sure which course is right for you? Our experts help you choose the right path and create a personalized preparation plan—at no cost.
          </p>
          <ul className="text-base text-neutral-700 mb-8 space-y-1.5 max-w-2xl">
            <li>• One-on-one session with our counselors</li>
            <li>• Course fit based on your goals and profile</li>
            <li>• Guidance on exam patterns and preparation strategy</li>
            <li>• No obligation—just clarity</li>
          </ul>
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">Request a callback for counseling</h2>
          <Suspense
            fallback={
              <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6">
                <p className="text-body text-sm">Loading form…</p>
              </div>
            }
          >
            <EnquiryForm initialMessage="I am interested in a free career counseling session." />
          </Suspense>
        </div>
      </section>
    </main>
  )
}
