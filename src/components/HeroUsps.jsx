function IconFaculty({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  )
}

function IconBook({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function IconTarget({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" strokeWidth={2} />
      <circle cx="12" cy="12" r="6" strokeWidth={2} />
      <circle cx="12" cy="12" r="2" strokeWidth={2} fill="currentColor" />
    </svg>
  )
}

function IconChart({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

const USPS = [
  {
    Icon: IconFaculty,
    title: 'Experienced Faculty',
    subtitle: 'Top educators',
  },
  {
    Icon: IconBook,
    title: 'Structured Learning',
    subtitle: 'Proven methodology',
  },
  {
    Icon: IconTarget,
    title: 'Personalized Attention',
    subtitle: 'Small batches',
  },
  {
    Icon: IconChart,
    title: 'Performance Tracking',
    subtitle: 'Regular assessments',
  },
]

export default function HeroUsps() {
  return (
    <section className="relative bg-white" aria-label="Why Matrix Science Academy">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" aria-hidden />
      <div className="container-page px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        {/* Rotating conic gradient = “running” border around the panel */}
        <div className="relative mx-auto w-full max-w-none overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(37,99,235,0.18)]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-[min(200vw,880px)] -translate-x-1/2 -translate-y-1/2 motion-safe:animate-heroUspBorderSpin motion-reduce:animate-none"
            style={{
              background:
                'conic-gradient(from 0deg at 50% 50%, #2563eb 0deg, #38bdf8 90deg, #7dd3fc 180deg, #60a5fa 270deg, #2563eb 360deg)',
            }}
            aria-hidden
          />
          <div className="relative z-[1] m-[2px] rounded-[calc(1rem-2px)] bg-gradient-to-b from-white via-white to-sky-50/50 px-4 py-8 sm:px-6 md:px-10 md:py-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-10">
              {USPS.map(({ Icon, title, subtitle }, i) => (
                <div
                  key={title}
                  className="group relative flex flex-col items-center text-center opacity-0 motion-safe:animate-heroUspItemIn motion-reduce:animate-none motion-reduce:opacity-100 sm:flex-row sm:items-start sm:gap-4 sm:text-left"
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-sky-100/0 via-sky-100/0 to-sky-100/60 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none" aria-hidden />
                  <div className="mb-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-sky-200/90 text-[#1e40af] shadow-md ring-4 ring-white/90 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:ring-sky-200/70 sm:mb-0">
                    <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-neutral-900 transition-colors duration-300 group-hover:text-[#1d4ed8] md:text-lg">
                      {title}
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-700 md:text-[15px]">
                      {subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
