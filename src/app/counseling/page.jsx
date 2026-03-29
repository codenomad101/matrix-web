import CounselingProgramTabs from '@/components/counseling/CounselingProgramTabs'
import Link from 'next/link'
import { Suspense } from 'react'

export default function CounselingPage() {
  return (
    <main className="interior-page">
      <section className="page-section-white border-b border-neutral-100">
        <div className="container-page max-w-6xl text-center">
          <h1 className="interior-title interior-title-center mb-4">Free career counselling</h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Not sure which course is right for you? Explore how we structure each programme below—then use the buttons at the end to
            book free counselling or view courses.
          </p>
          <ul className="mx-auto mt-6 max-w-2xl space-y-1.5 text-base text-neutral-700">
            <li>• One-on-one session with our counsellors</li>
            <li>• Course fit based on your goals and profile</li>
            <li>• Guidance on exam patterns and preparation strategy</li>
            <li>• No obligation—just clarity</li>
          </ul>

          <div className="mt-10 md:mt-12">
            <Suspense
              fallback={
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/80 px-6 py-16 text-center text-sm text-neutral-600">
                  Loading programmes…
                </div>
              }
            >
              <CounselingProgramTabs />
            </Suspense>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50/90 py-10 md:py-12">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-lg font-bold text-neutral-900 md:text-xl">Take the next step</h2>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            Start a free enquiry or browse our full course catalogue.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-[var(--brand-red)] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-red-hover)]"
            >
              Book free counselling
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-xl border-2 border-[var(--brand-red)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--brand-red)] transition hover:bg-[var(--brand-red)] hover:text-white"
            >
              View courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
