'use client'

import Image from 'next/image'

const VRIKSHA_SIDE_IMAGE =
  'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1774802579/Vriksha_Image_fgxzdq.jpg'

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

/** Left column: Vriksha photo with same gentle sway as the former SVG tree */
function VrikshaTreeIllustration({ compact = false }) {
  const frameMax = compact
    ? 'max-w-[200px] sm:max-w-[220px] lg:max-w-[240px]'
    : 'max-w-[260px] xl:max-w-[280px]'
  return (
    <div className="mx-auto flex w-full max-w-[280px] flex-col items-center justify-end lg:mx-0 lg:max-w-none">
      <div
        className={`origin-bottom motion-safe:animate-vrikshaTreeSway motion-reduce:animate-none ${frameMax} w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-emerald-100/80`}
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={VRIKSHA_SIDE_IMAGE}
            alt="Vriksha — holistic growth at Matrix Science Academy"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 280px"
            priority={false}
          />
        </div>
      </div>
      <p className={`text-center text-xs font-semibold uppercase tracking-wider text-emerald-800/80 lg:text-left ${compact ? 'mt-2' : 'mt-3'}`}>
        Growth journey
      </p>
    </div>
  )
}

export default function AcademicVrikshaMethodology() {
  const loop = [...PILLARS, ...PILLARS]

  return (
    <section className="bg-white pb-8 pt-7 md:pb-12 md:pt-9 lg:pb-16 lg:pt-11" aria-labelledby="academic-support-heading">
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

        <div className="mx-auto mt-14 w-full">
          <div className="rounded-xl border border-neutral-200/70 bg-white px-4 py-5 shadow-[0_4px_28px_-6px_rgba(15,23,42,0.1)] sm:rounded-2xl sm:px-6 sm:py-6 md:px-8 md:py-7">
            {/* Title block: Vriksha Open School logo as background (no heavy overlay — it hid the image) */}
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50/95 via-[#42b883]/14 to-emerald-100/40 px-2 pb-6 pt-8 sm:min-h-[300px] sm:pb-8 sm:pt-10 md:min-h-[340px] md:pb-10 md:pt-12">
              {/* Logo only in lower band so it sits below the copy, not hidden behind it */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 top-[46%] z-0 bg-contain bg-bottom bg-no-repeat opacity-70 sm:top-[42%] sm:opacity-[0.65] md:top-[40%] md:opacity-60"
                style={{
                  backgroundImage:
                    'url(https://res.cloudinary.com/ddqgxrgnc/image/upload/v1774802568/Vriksha_Logo_for_Matrix_Open_School_suo82a.jpg)',
                }}
                aria-hidden
              />
              <div className="relative z-[1] mx-auto max-w-3xl text-center">
                <p className="block text-[1.75rem] font-black leading-none tracking-[-0.03em] text-[#548FF7] drop-shadow-sm sm:text-[2.125rem] sm:leading-[0.98] md:text-[2.5rem] md:leading-[0.97] lg:text-[2.75rem] lg:leading-[0.96]">
                  Vriksha
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-neutral-800 drop-shadow-sm sm:mt-4 sm:text-base md:text-lg md:leading-snug">
                  Combines rigorous academics with mental wellbeing, sports, and competitive exam readiness—one journey, summarized in the
                  rolling pillars below.
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-neutral-600 sm:mt-3.5">
                  Programme pillars
                </p>
              </div>
            </div>

            <div className="mt-4 grid w-full grid-cols-1 items-center gap-4 sm:mt-5 sm:gap-5 lg:grid-cols-[minmax(180px,240px)_minmax(0,1fr)] lg:gap-6 xl:gap-8">
              <div className="flex justify-center lg:justify-start lg:pr-2">
                <VrikshaTreeIllustration compact />
              </div>

              <div className="min-w-0 w-full">
                <div className="w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white py-4 shadow-inner sm:rounded-3xl sm:py-5">
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
      </div>
    </section>
  )
}
