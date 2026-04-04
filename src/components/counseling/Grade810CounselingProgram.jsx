import {
  FaBalanceScale,
  FaBolt,
  FaChartBar,
  FaCheck,
  FaFileAlt,
  FaGraduationCap,
  FaLeaf,
  FaMedal,
  FaProjectDiagram,
  FaRoute,
  FaSchool,
  FaSearch,
  FaTrophy,
  FaUserCheck,
  FaUsers,
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

const IMG_FOUNDATION =
  'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80'
const IMG_EVALUATION =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80'

function TimelineDot({ className = 'top-8' }) {
  return (
    <span
      className={`absolute left-[1.4375rem] z-[1] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-[#2563eb] shadow-sm ${className}`}
      aria-hidden
    />
  )
}

export function Grade810CounselingProgram() {
  return (
    <div className="space-y-14 md:space-y-16">
      <div>
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p className="inline-block rounded-full bg-sky-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563eb] md:text-xs">
            Our methodology
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl md:leading-tight">
            How Our <span className="text-[#2563eb]">Grade 8–10</span> Program Works
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
            A strategic three-step journey designed to identify potential early and nurture it through specialized pathways.
          </p>
        </div>

        {/* Timeline rail */}
        <div className="relative mx-auto max-w-6xl pl-2 md:pl-4">
          <div className="pointer-events-none absolute bottom-8 left-[1.4375rem] top-0 w-px bg-neutral-200 md:bottom-12" aria-hidden />
          {/* Step 01 */}
          <div className="relative pb-14 md:pb-16">
            <TimelineDot />
            <div className="ml-0 grid gap-8 pl-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 md:pl-10">
              <article className="order-2 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md lg:order-1 lg:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2563eb] ring-1 ring-sky-100">
                  <FaSchool className="h-3.5 w-3.5" aria-hidden />
                  Step 01
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-900 md:text-xl">Common Foundation</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  The journey begins with a unified focus on core excellence across Grades 8, 9, and 10.
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-neutral-800">
                  {[
                    'Comprehensive school academics coverage',
                    'Intensive fundamentals & logic focus',
                    'Regular benchmarking tests & analytics',
                  ].map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <div className="order-1 overflow-hidden rounded-2xl border border-neutral-200/80 shadow-md lg:order-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_FOUNDATION} alt="" className="h-full min-h-[200px] w-full object-cover lg:min-h-[260px]" />
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative pb-14 md:pb-16">
            <TimelineDot />
            <div className="ml-0 grid gap-8 pl-8 lg:grid-cols-2 lg:items-stretch lg:gap-10 md:pl-10">
              <div className="overflow-hidden rounded-2xl border border-neutral-200/80 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG_EVALUATION} alt="" className="h-full min-h-[200px] w-full object-cover lg:min-h-[260px]" />
              </div>
              <article className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md lg:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2563eb] ring-1 ring-sky-100">
                  <FaChartBar className="h-3.5 w-3.5" aria-hidden />
                  Step 02
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-900 md:text-xl">Performance Evaluation</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  Continuous tracking to ensure students are aligned with their inherent strengths.
                </p>
                <ul className="mt-4 space-y-3 text-sm text-neutral-800">
                  <li className="flex gap-2.5">
                    <FaChartBar className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" aria-hidden />
                    <span>Aptitude &amp; consistency tracking dashboard</span>
                  </li>
                  <li className="flex gap-2.5">
                    <FaUserCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" aria-hidden />
                    <span>Core strength identification &amp; profiling</span>
                  </li>
                  <li className="flex gap-2.5">
                    <FaUsers className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" aria-hidden />
                    <span>Monthly personalized parent consultations</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative pb-2 pl-8 md:pl-10">
            <TimelineDot className="top-6" />
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white text-[#2563eb] shadow-sm">
                <FaProjectDiagram className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#2563eb]">Step 03</p>
                <h3 className="text-lg font-bold text-neutral-900 md:text-xl">Path Selection</h3>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {/* School Toppers */}
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-md md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563eb] text-white">
                  <FaGraduationCap className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="mt-4 text-base font-bold text-[#2563eb] md:text-lg">School Toppers Batch</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  Tailored for students aiming for board supremacy and steady academic growth.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs font-medium text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" aria-hidden />
                    Board exams excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" aria-hidden />
                    Steady learning pace
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563eb]" aria-hidden />
                    Conceptual clarity focus
                  </li>
                </ul>
              </article>

              {/* AIR — highlighted */}
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-amber-300/80 bg-[#FFF8DC] p-5 shadow-lg md:p-6">
                <span className="absolute right-3 top-3 rounded-md bg-amber-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                  Elite status
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950">
                  <FaMedal className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="mt-4 text-base font-bold text-neutral-900 md:text-lg">AIR Batch</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-800">
                  Competitive excellence for future engineers and doctors seeking top ranks.
                </p>
                <ul className="mt-4 space-y-2.5 text-sm text-neutral-800">
                  <li className="flex items-start gap-2">
                    <FaBolt className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                    <span>Early JEE / NEET / CET prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaFileAlt className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                    <span>Advanced problem solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaTrophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" aria-hidden />
                    <span>Focus on national ranks</span>
                  </li>
                </ul>
              </article>

              {/* VRIKSHA */}
              <article className="flex h-full flex-col rounded-2xl border border-emerald-200/90 bg-white p-5 shadow-md md:p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <FaLeaf className="h-5 w-5" aria-hidden />
                </div>
                <h4 className="mt-4 text-base font-bold text-emerald-700 md:text-lg">VRIKSHA Batch</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  Academics balanced with sports, arts, AI training, and holistic Vedic wisdom.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Mindfulness', 'AI skills', 'Arts'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Royal blue callout */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1d4ed8] to-[#1e3a8a] px-5 py-8 text-white shadow-xl md:px-10 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-12">
          <div>
            <h2 className="text-xl font-bold leading-tight md:text-2xl">
              What makes this{' '}
              <span className="relative inline-block">
                unique
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-white/70" aria-hidden />
              </span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {[
              {
                Icon: FaSearch,
                title: 'Early identification',
                text: 'Spotting potential in 8th grade to give students a multi-year advantage.',
              },
              {
                Icon: FaRoute,
                title: 'Multiple paths',
                text: "No one-size-fits-all education—choose the path that fits your goals.",
              },
              {
                Icon: FaBalanceScale,
                title: 'Holistic balance',
                text: 'Integration of academic rigor with mental and physical well-being.',
              },
              {
                Icon: HiSparkles,
                title: 'Future-ready',
                text: 'Curriculum includes AI, Vedic learning, and modern skill-building.',
              },
            ].map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm ring-1 ring-white/15">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-5 w-5 text-white" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/85">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
