'use client'

import { FaCheck, FaMapMarkerAlt, FaPhoneAlt, FaStar, FaTrophy } from 'react-icons/fa'
import OptimizedImage from '@/components/OptimizedImage'
import { getBranchEnquiryDetail } from '@/data/branch-enquiry-details'

const CORE_COURSES = [
  {
    id: 'jee',
    title: 'JEE',
    desc: 'IIT-JEE Main & Advanced—structured batches, test series, and mentor support for engineering aspirants.',
  },
  {
    id: 'neet',
    title: 'NEET',
    desc: 'Medical entrance focus with NCERT depth, drills, and regular performance reviews.',
  },
  {
    id: 'mhcet',
    title: 'MHT-CET',
    desc: 'Maharashtra common entrance—speed, accuracy, and state-pattern practice.',
  },
]

/** Shared enquiry line for /enquiry when no branch is selected in the URL */
const GENERAL_ENQUIRY_PHONE_DISPLAY = '70587 40609'

/**
 * @param {{ branchKey: string, enquiryFormAnchor?: boolean, mode?: 'branch' | 'general' }} props
 * — `general` = institute-wide landing (no “Matrix — Nigdi”, no branch about / director).
 */
export default function BranchEnquiryLanding({ branchKey, enquiryFormAnchor = true, mode = 'branch' }) {
  const isGeneral = mode === 'general'
  const detail = isGeneral ? null : getBranchEnquiryDetail(branchKey)
  if (!isGeneral && !detail) return null

  const phoneDisplay = isGeneral ? GENERAL_ENQUIRY_PHONE_DISPLAY : detail.phone
  const tel = phoneDisplay.replace(/\s/g, '')
  const enquirePrimaryHref = enquiryFormAnchor ? '#enquiry-form' : `tel:${tel}`

  return (
    <>
      {/* 1 — Header (white) */}
      <section className="border-b border-neutral-100 bg-white">
        <div className="container-page flex flex-col items-center gap-8 py-10 text-center md:py-12 lg:py-14">
          <div className="min-w-0 max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
              {isGeneral ? 'Matrix Science Academy' : `Matrix — ${detail.key}`}
            </h1>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 sm:text-sm">
              Empowering future engineers & doctors with excellence
            </p>
            {!isGeneral && detail.addressLines?.length > 0 && (
              <div className="mt-5 flex flex-col items-center gap-2 text-sm leading-relaxed text-neutral-700">
                <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-violet-700" aria-hidden />
                <div className="space-y-1.5">
                  {detail.addressLines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href={enquirePrimaryHref}
              className="inline-flex items-center justify-center rounded-full bg-violet-700 px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-violet-700/20 transition hover:bg-violet-800"
            >
              Enquire now
            </a>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-violet-300 hover:bg-violet-50/50"
            >
              <FaPhoneAlt className="h-3.5 w-3.5 text-violet-700" aria-hidden />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* General: About institute first; branch pages use branch section after features */}
      {isGeneral && (
        <section className="border-b border-neutral-100 bg-white py-12 md:py-16">
          <div className="container-page mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-10 w-1 shrink-0 rounded-full bg-violet-600" aria-hidden />
              <h2 className="text-2xl font-bold leading-tight text-neutral-900 md:text-[1.65rem]">About Matrix Science Academy</h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              Matrix Science Academy (MSA) is dedicated to building strong concepts and habits for competitive exams and school boards.
              With a blended learning approach, we offer mentor-led classes, quality study material, and rigorous assessments so students
              know where they stand and what to improve next.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-violet-100/90 bg-[#F9F5FB] p-5 text-center md:p-6">
                <h3 className="text-base font-bold text-neutral-900">Our mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Deliver accessible, high-quality education with compassion and discipline.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-100/90 bg-[#F9F5FB] p-5 text-center md:p-6">
                <h3 className="text-base font-bold text-neutral-900">Our vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  Enable every learner to achieve excellence and freedom through knowledge.
                </p>
              </div>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-neutral-600 md:text-base">
              We are teachers by choice and we teach with passion—supporting students from 8th to 12th across Maharashtra through offline
              and online programmes, with young and highly qualified faculty who care about each child&apos;s trajectory. Enquire below
              and select your preferred centre so we can connect you with the right team.
            </p>
          </div>
        </section>
      )}

      {/* 2 — Key features (lavender band) */}
      <section className="border-b border-violet-100/80 bg-[#F9F5FB] py-10 md:py-12">
        <div className="container-page">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/25">
                <FaStar className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="mt-4 text-lg font-bold text-neutral-900">Top results</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Consistently producing top rankers in JEE & NEET.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/25">
                <FaCheck className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="mt-4 text-lg font-bold text-neutral-900">Expert faculty</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Mentors from top IITs and medical colleges.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/25">
                <FaTrophy className="h-6 w-6" aria-hidden />
              </div>
              <h2 className="mt-4 text-lg font-bold text-neutral-900">Proven system</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Decades of refined academic methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Branch about + director (branch URLs only) */}
      {!isGeneral && (
        <section className="border-b border-neutral-100 bg-white py-12 md:py-16">
          <div className="container-page mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-10 w-1 shrink-0 rounded-full bg-violet-600" aria-hidden />
              <h2 className="text-2xl font-bold leading-tight text-neutral-900 md:text-[1.65rem]">About this branch</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">{detail.aboutText}</p>

            <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-violet-100/90 bg-[#F9F5FB] p-6 text-center shadow-sm md:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-700">Director&apos;s spotlight</p>
              <div className="mt-5 flex flex-col items-center gap-5">
                <div className="shrink-0">
                  {detail.cloudinaryId ? (
                    <div className="overflow-hidden rounded-2xl ring-2 ring-white shadow-md">
                      <OptimizedImage
                        cloudinaryId={detail.cloudinaryId}
                        alt={detail.directorName}
                        width={160}
                        height={160}
                        className="h-32 w-32 object-cover sm:h-36 sm:w-36"
                        crop="fill"
                        quality="auto"
                      />
                    </div>
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-violet-100 text-4xl shadow-inner sm:h-36 sm:w-36">
                      <span aria-hidden>🏛️</span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-bold text-neutral-900">{detail.directorName}</p>
                  <p className="mt-1 text-sm font-semibold text-violet-800">{detail.directorTitle}</p>
                  <p className="mt-1 text-xs font-medium text-neutral-500">20+ years of academic excellence</p>
                  <blockquote className="mt-4 border-t border-violet-200 pt-4 text-sm italic leading-relaxed text-neutral-700">
                    {detail.directorQuote}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4 — Core courses (no Vriksha; no explore links per mockup) */}
      <section className="border-b border-violet-100/80 bg-[#F9F5FB] py-12 md:py-16">
        <div className="container-page">
          <div className="mb-8 border-b border-violet-200/60 pb-4 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 md:text-[1.65rem]">Core course offerings</h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
              {isGeneral ? 'Flagship programmes across Matrix' : 'Flagship programmes at this centre'}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {CORE_COURSES.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-violet-100/90 bg-white/90 p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-violet-800">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
