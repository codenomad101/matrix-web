import Link from 'next/link'

export const metadata = {
  title: 'New Launches',
  description: 'Latest batches and programs at Matrix Science Academy, Pune.',
}

export default function NewLaunchesPage() {
  return (
    <div className="page-section-white">
      <div className="container-page max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-heading mb-4">New Launches</h1>
        <p className="text-body leading-relaxed mb-6">
          Explore our latest batches for IIT-JEE, NEET, MHT-CET, IISER, and foundation programs. Contact your nearest branch or enquire online for seat availability and schedules.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/courses"
            className="inline-flex items-center rounded-full bg-[var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[var(--brand-red-hover)] transition-colors"
          >
            View all courses
          </Link>
          <Link
            href="/enquiry"
            className="inline-flex items-center rounded-full border border-gray-300 text-black px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </div>
  )
}
