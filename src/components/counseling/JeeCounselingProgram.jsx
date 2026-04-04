import {
  FaBalanceScale,
  FaChartBar,
  FaChartLine,
  FaCheck,
  FaGraduationCap,
  FaLightbulb,
  FaMedal,
  FaProjectDiagram,
  FaShieldAlt,
} from 'react-icons/fa'

function TimelineIcon({ children, className = '' }) {
  return (
    <div
      className={`relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-md ring-4 ring-white ${className}`}
    >
      {children}
    </div>
  )
}

function ForkTimelineIcon() {
  return (
    <div className="relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-md ring-4 ring-white">
      <FaProjectDiagram className="h-5 w-5" aria-hidden />
    </div>
  )
}

export function JeeCounselingProgram() {
  return (
    <div className="space-y-14 md:space-y-16">
      {/* —— How Our JEE Program Works —— */}
      <div>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563eb] md:text-xs">
            Engineering excellence
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl md:leading-tight">
            How Our JEE{' '}
            <span className="text-[#2563eb]">Program Works</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            A scientific, three-stage pedagogical journey designed to take students from fundamental clarity to elite competitive
            performance at the national level.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-sky-200 via-sky-300 to-sky-200 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          {/* Step 01 — card on the right of the line (desktop) */}
          <div className="relative mb-12 md:mb-16">
            <div className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
              <div className="absolute left-0 top-1 z-[2] md:left-1/2 md:-translate-x-1/2">
                <TimelineIcon>
                  <FaGraduationCap className="h-6 w-6" aria-hidden />
                </TimelineIcon>
              </div>
              <div className="hidden md:block" aria-hidden />
              <article className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md md:p-6">
                <h3 className="text-lg font-bold text-neutral-900 md:text-xl">
                  <span className="font-semibold text-sky-500">01</span> Impulse Batch (Year 1)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Build a strong foundation in Physics, Chemistry, and Mathematics—bridging the gap between school curriculum and the
                  depth required for competitive examinations.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-800 ring-1 ring-sky-100">
                    Basics-to-Advanced
                  </span>
                  <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-800 ring-1 ring-sky-100">
                    NCERT Alignment
                  </span>
                </div>
              </article>
            </div>
          </div>

          {/* Step 02 — card on the left of the line (desktop) */}
          <div className="relative mb-12 md:mb-16">
            <div className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
              <div className="absolute left-0 top-1 z-[2] md:left-1/2 md:-translate-x-1/2">
                <TimelineIcon>
                  <FaChartBar className="h-6 w-6" aria-hidden />
                </TimelineIcon>
              </div>
              <article className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md md:order-1 md:p-6">
                <h3 className="text-lg font-bold text-neutral-900 md:text-xl">
                  <span className="font-semibold text-sky-500">02</span> Performance Analysis
                </h3>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-neutral-600">
                    <span>Accuracy trend</span>
                    <span className="text-[#2563eb]">75% accuracy</span>
                  </div>
                  <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-sky-400 to-[#2563eb]" />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  Continuous, data-driven assessment through mock tests and analytics—we identify strengths and gaps to determine the
                  optimal trajectory for each student.
                </p>
              </article>
              <div className="hidden md:block md:order-2" aria-hidden />
            </div>
          </div>

          {/* Step 03 — fork + two cards */}
          <div className="relative pl-14 md:pl-0">
            <div className="absolute left-0 top-0 z-[2] md:left-1/2 md:-translate-x-1/2">
              <ForkTimelineIcon />
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-neutral-800 md:mt-16 md:text-base">03 Specialization</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              {/* NIT / IIIT */}
              <article className="relative overflow-hidden rounded-2xl border border-violet-200/80 bg-white p-5 shadow-md md:p-6">
                <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-neutral-100 opacity-60" aria-hidden>
                  <FaGraduationCap className="h-full w-full" />
                </div>
                <span className="relative inline-block rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-violet-900">
                  NIT / IIIT focus
                </span>
                <h3 className="relative mt-3 text-lg font-bold text-neutral-900">Impulse Batch (Year 2)</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-neutral-600">
                  Sharpen focus on JEE Main—exhaustive syllabus coverage, speed, and pattern mastery aimed at strong NIT and IIIT
                  admissions.
                </p>
              </article>

              {/* AIR-X — highlighted */}
              <article className="relative overflow-hidden rounded-2xl border-2 border-yellow-400 bg-amber-50/90 p-5 shadow-[0_8px_30px_-6px_rgba(250,204,21,0.45)] md:p-6">
                <span
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 shadow-md ring-2 ring-white"
                  aria-hidden
                >
                  <FaMedal className="h-4 w-4" />
                </span>
                <span className="inline-block rounded-full bg-lime-900/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-lime-950">
                  Elite / IIT focus
                </span>
                <h3 className="mt-3 pr-10 text-lg font-bold text-neutral-900">AIR-X Batch</h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral-800">
                  {[
                    'Direct mentorship by top IITian faculty',
                    'Advanced multi-concept problem solving',
                    'Elite peer group for high-stakes competition',
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* —— What Makes This Unique —— */}
      <div className="border-t border-neutral-200 pt-12 md:pt-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          What Makes This <span className="text-[#2563eb]">Unique</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {[
            {
              Icon: FaBalanceScale,
              iconBg: 'bg-violet-600',
              title: 'Equal opportunity',
              text: 'Every student starts with the same expert resources and foundation.',
            },
            {
              Icon: FaChartLine,
              iconBg: 'bg-neutral-400',
              title: 'Data-driven',
              text: 'Batch movement is based on impartial, longitudinal performance data.',
            },
            {
              Icon: FaLightbulb,
              iconBg: 'bg-sky-400',
              title: 'Personal growth',
              text: 'Custom modules for students needing extra support in specific topics.',
            },
            {
              Icon: FaShieldAlt,
              iconBg: 'bg-[#1e3a8a]',
              title: 'IIT mentorship',
              text: 'Direct interaction with those who have cleared the exam with top ranks.',
            },
          ].map(({ Icon, iconBg, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-white p-6 text-center shadow-sm"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full text-white ${iconBg}`}>
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-bold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
