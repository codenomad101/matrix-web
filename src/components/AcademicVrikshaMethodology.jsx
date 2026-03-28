'use client'

function IconTree({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22v-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14L7 8h10l-5 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9L9 4h6l-3 5z" />
    </svg>
  )
}

function IconBrain({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4a3 3 0 00-3 3v1H7a2 2 0 100 4h2v1a3 3 0 006 0v-1h2a2 2 0 100-4h-2V7a3 3 0 00-3-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 17v3m4-3v3" />
    </svg>
  )
}

function IconSoccer({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.9 2.9m7 7l2.9 2.9M5.6 18.4l2.9-2.9m7-7l2.9-2.9" />
    </svg>
  )
}

function IconTarget({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconTrophy({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v2a5 5 0 01-10 0V4z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4H4v1a3 3 0 003 3M18 4h2v1a3 3 0 01-3 3" />
    </svg>
  )
}

const PILLARS = [
  { Icon: IconTree, title: 'Strong Academics', subtitle: 'Core mastery', wrap: 'rounded-2xl bg-emerald-100 text-emerald-800' },
  { Icon: IconBrain, title: 'Mental Strength', subtitle: 'Resilience & focus', wrap: 'rounded-2xl bg-violet-100 text-violet-800' },
  { Icon: IconSoccer, title: 'Sports Growth', subtitle: 'Active lifestyle', wrap: 'rounded-2xl bg-orange-100 text-orange-800' },
  { Icon: IconTarget, title: 'Competitive Focus', subtitle: 'Exam readiness', wrap: 'rounded-2xl bg-sky-100 text-sky-800' },
  { Icon: IconTrophy, title: 'Holistic Development', subtitle: 'All-round growth', wrap: 'rounded-2xl bg-amber-100 text-amber-800' },
  { Icon: IconTrophy, title: 'Future Success', subtitle: 'Long-term outcomes', wrap: 'rounded-2xl bg-rose-100 text-rose-800' },
]

/** Stylised growth tree — decorative, with motion-safe sway + foliage shimmer */
function VrikshaTreeIllustration() {
  return (
    <div className="mx-auto flex w-full max-w-[280px] flex-col items-center justify-end lg:mx-0 lg:max-w-none">
      <div className="origin-bottom motion-safe:animate-vrikshaTreeSway motion-reduce:animate-none">
        <svg
          viewBox="0 0 220 280"
          className="h-auto w-full max-w-[260px] drop-shadow-md xl:max-w-[280px]"
          aria-hidden
        >
          <ellipse cx="110" cy="268" rx="78" ry="10" className="fill-emerald-200/50" />
          <path
            d="M96 268 L98 145 L122 145 L124 268 Z"
            className="fill-[#5d4037]"
          />
          <path d="M104 145 L110 118 L116 145 Z" className="fill-[#6d4c41]" />
          <g className="origin-[110px_140px] motion-safe:animate-vrikshaTreeShimmer motion-reduce:animate-none">
            <circle cx="110" cy="95" r="52" className="fill-emerald-500/95" />
            <circle cx="68" cy="118" r="38" className="fill-emerald-600/90" />
            <circle cx="152" cy="112" r="40" className="fill-emerald-500/90" />
            <circle cx="110" cy="58" r="34" className="fill-emerald-400/95" />
            <circle cx="88" cy="78" r="22" className="fill-emerald-300/80" />
            <circle cx="138" cy="82" r="20" className="fill-emerald-300/75" />
          </g>
        </svg>
      </div>
      <p className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-emerald-800/80 lg:text-left">
        Growth journey
      </p>
    </div>
  )
}

export default function AcademicVrikshaMethodology() {
  const loop = [...PILLARS, ...PILLARS]

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" aria-labelledby="academic-support-heading">
      <div className="container-page px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="academic-support-heading" className="text-2xl font-bold leading-tight text-black sm:text-3xl md:text-[2rem] md:leading-snug">
            Choosing the Right Academic Support for Your Child Can Be Challenging
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-800 md:text-lg">
            As a parent, you want the best for your child—but navigating institutes, concept clarity, exam pressure, and motivation
            can feel overwhelming. The right partner should reduce stress, not add to it.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-xl border border-neutral-200/70 bg-white px-6 py-8 shadow-[0_4px_28px_-6px_rgba(15,23,42,0.1)] sm:rounded-2xl sm:px-8 sm:py-10 md:py-11 border-l-[5px] border-l-[#2563eb]">
            <h3 className="text-center text-xl font-bold leading-snug text-[#0f1f3a] sm:text-2xl md:text-[1.65rem]">
              Enter Matrix Science Academy
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-neutral-700 md:mt-6 md:text-lg">
              We&apos;ve built an ecosystem specifically designed to address these challenges. We partner with parents to provide
              transparent, structured, and highly effective academic coaching that turns stress into success.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-neutral-600 md:text-base">
          <strong className="font-semibold text-neutral-900">Vriksha</strong> combines rigorous academics with mental wellbeing, sports,
          and competitive exam readiness—one journey, clearly explained above and below the pillars you see here.
        </p>

        <div className="mt-12 grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(200px,280px)_minmax(0,1fr)] lg:gap-8 xl:gap-12">
          <div className="flex justify-center lg:justify-start lg:pr-2">
            <VrikshaTreeIllustration />
          </div>

          <div className="min-w-0 w-full">
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-neutral-500 lg:text-left">
              Programme pillars — continuous highlight
            </p>
            <div className="w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white py-6 shadow-inner">
              <div className="flex w-max animate-vrikshaMarquee items-stretch gap-10 px-6 motion-reduce:animate-none">
                {loop.map((item, i) => (
                  <div
                    key={`${item.title}-${i}`}
                    className="flex w-[132px] shrink-0 flex-col items-center text-center sm:w-[148px]"
                  >
                    <div className={`flex h-16 w-16 items-center justify-center shadow-sm ${item.wrap}`}>
                      <item.Icon className="h-8 w-8" />
                    </div>
                    <p className="mt-3 text-sm font-bold leading-tight text-black">{item.title}</p>
                    <p className="mt-1 text-xs text-neutral-600">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
