import {
  FaBook,
  FaBullseye,
  FaChartBar,
  FaCheck,
  FaDraftingCompass,
  FaLongArrowAltUp,
  FaProjectDiagram,
  FaTachometerAlt,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa'

const ACCENT = '#2563eb'
const ACCENT_SOFT = '#4A77FF'

function TimelineIcon({ children, className = '' }) {
  return (
    <div
      className={`relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-md ring-4 ring-white ${className}`}
    >
      {children}
    </div>
  )
}

function ForkTimelineIconNeutral() {
  return (
    <div className="relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-neutral-400 bg-white text-neutral-600 shadow-md ring-4 ring-white">
      <FaProjectDiagram className="h-5 w-5" aria-hidden />
    </div>
  )
}

export function MhcetCounselingProgram() {
  return (
    <div className="space-y-14 md:space-y-16">
      <div>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563eb] md:text-xs">
            Methodology
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl md:leading-tight">
            How Our MH-CET <span className="text-[#2563eb]">Program Works</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            A structured, performance-driven roadmap designed to transition students from fundamental concepts to elite-level
            competitive ranking.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-sky-200 via-sky-300 to-sky-200 md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          {/* Phase One — right */}
          <div className="relative mb-12 md:mb-16">
            <div className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
              <div className="absolute left-0 top-1 z-[2] md:left-1/2 md:-translate-x-1/2">
                <TimelineIcon>
                  <FaBook className="h-6 w-6" aria-hidden />
                </TimelineIcon>
              </div>
              <div className="hidden md:block" aria-hidden />
              <article className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md md:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4A77FF]">Phase one</p>
                <h3 className="mt-1 text-lg font-bold text-neutral-900 md:text-xl">Drift Batch (Year 1)</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  All students start here to build an unshakeable academic foundation.
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-neutral-800">
                  {[
                    'Complete MH-CET syllabus coverage',
                    'Focus on fundamentals (Physics, Chemistry, Maths)',
                    'Regular tests & performance tracking',
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          {/* The Filter — left */}
          <div className="relative mb-12 md:mb-16">
            <div className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
              <div className="absolute left-0 top-1 z-[2] md:left-1/2 md:-translate-x-1/2">
                <TimelineIcon>
                  <FaChartBar className="h-6 w-6" aria-hidden />
                </TimelineIcon>
              </div>
              <article className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md md:order-1 md:p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4A77FF]">The filter</p>
                <h3 className="mt-1 text-lg font-bold text-neutral-900 md:text-xl">Performance Analysis</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Continuous evaluation ensures students are placed in the environment best suited for their growth speed.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50/80 p-3">
                    <FaTachometerAlt className="mt-0.5 h-5 w-5 shrink-0 text-[#2563eb]" aria-hidden />
                    <span className="text-xs font-medium leading-snug text-neutral-800">Evaluation based on accuracy &amp; speed</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50/80 p-3">
                    <FaChartBar className="mt-0.5 h-5 w-5 shrink-0 text-[#2563eb]" aria-hidden />
                    <span className="text-xs font-medium leading-snug text-neutral-800">Data-driven performance tracking</span>
                  </div>
                </div>
              </article>
              <div className="hidden md:block md:order-2" aria-hidden />
            </div>
          </div>

          {/* Branching — two paths */}
          <div className="relative pl-14 md:pl-0">
            <div className="absolute left-0 top-0 z-[2] md:left-1/2 md:-translate-x-1/2">
              <ForkTimelineIconNeutral />
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-neutral-800 md:mt-16 md:text-base">Branching paths</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
              <article className="rounded-2xl border border-sky-200/90 bg-white p-5 shadow-md md:p-6">
                <span className="inline-block rounded-full bg-sky-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-sky-900">
                  Concept strengthening
                </span>
                <p className="mt-2 text-sm font-semibold text-[#2563eb]">&lt; 90% score</p>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">Drift Batch (Year 2)</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Focused on reinforcing core concepts and improving problem-solving confidence for consistent scoring.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-2xl border-2 border-amber-300/80 bg-[#FFF4D4] p-5 shadow-[0_8px_28px_-8px_rgba(234,179,8,0.35)] md:p-6">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  <span aria-hidden>★</span> Top rank focus
                </span>
                <p className="mt-2 text-sm font-semibold text-amber-950/90">90–94%+ score</p>
                <h3 className="mt-3 text-lg font-bold text-neutral-900">Sprint Batch</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-800">
                  The elite tier designed for high performers aiming for top state rankings and premier engineering colleges.
                </p>
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-amber-200/80 bg-white/70 px-3 py-2.5 text-sm font-medium text-neutral-800">
                  <FaLongArrowAltUp className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden />
                  Advanced problem solving techniques
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes This Effective */}
      <div className="rounded-2xl border border-neutral-200/80 bg-[#f4f6f9] px-4 py-10 md:px-10 md:py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          What Makes This <span className="text-[#2563eb]">Effective</span>
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {[
            {
              Icon: FaDraftingCompass,
              iconBg: 'bg-[#2563eb]',
              title: 'Strong foundation',
              text: 'Strong foundation for all students',
            },
            {
              Icon: FaUsers,
              iconBg: 'bg-[#2563eb]',
              title: 'Batch selection',
              text: 'Performance-based batch selection',
            },
            {
              Icon: FaBullseye,
              iconBg: 'bg-[#2563eb]',
              title: 'Personalized learning',
              text: 'Personalized learning approach',
            },
            {
              Icon: FaTrophy,
              iconBg: 'bg-amber-400 text-neutral-900',
              title: 'Top scorers',
              text: 'Focused training for top scorers',
            },
          ].map(({ Icon, iconBg, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/60 bg-white/90 p-6 text-center shadow-sm"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}>
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
