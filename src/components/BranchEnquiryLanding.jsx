'use client'

import Link from 'next/link'
import { FaCheck, FaPhoneAlt, FaStar, FaTrophy } from 'react-icons/fa'
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

const INFRASTRUCTURE_FEATURES = [
  { id: 1, title: 'Doubt Solving Session', cloudinaryId: 'v1764181800/7_rhfwuq' },
  { id: 2, title: 'Floor Coordinator', cloudinaryId: 'v1764181802/2_qkyerp' },
  { id: 3, title: 'AC Classroom', cloudinaryId: 'v1764181811/6_txcbt4' },
  { id: 4, title: 'Spacious Parking', cloudinaryId: 'v1764181896/5_iksmin' },
  { id: 5, title: 'Parents Waiting Room', cloudinaryId: 'v1764181956/1_hvf5af' },
  { id: 6, title: 'Office', cloudinaryId: 'v1764181872/4_phnnrh' },
]

export default function BranchEnquiryLanding({ branchKey }) {
  const detail = getBranchEnquiryDetail(branchKey)
  if (!detail) return null

  const tel = detail.phone.replace(/\s/g, '')

  return (
    <>
      {/* 1 — Header (white) */}
      <section className="border-b border-neutral-100 bg-white">
        <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-12 lg:py-14">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
              Matrix — {detail.key}
            </h1>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-violet-700 sm:text-sm">
              Empowering future engineers & doctors with excellence
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Link
              href="#enquiry-form"
              className="inline-flex items-center justify-center rounded-full bg-violet-700 px-8 py-3 text-center text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-violet-700/20 transition hover:bg-violet-800"
            >
              Enquire now
            </Link>
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-800 transition hover:border-violet-300 hover:bg-violet-50/50"
            >
              <FaPhoneAlt className="h-3.5 w-3.5 text-violet-700" aria-hidden />
              {detail.phone}
            </a>
          </div>
        </div>
      </section>

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

      {/* 3 — About + director */}
      <section className="border-b border-neutral-100 bg-white py-12 md:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-1 shrink-0 rounded-full bg-violet-600" aria-hidden />
                <h2 className="text-2xl font-bold leading-tight text-neutral-900 md:text-[1.65rem]">
                  About this branch
                </h2>
              </div>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">{detail.aboutText}</p>
            </div>

            <div className="rounded-2xl border border-violet-100/90 bg-[#F9F5FB] p-6 shadow-sm md:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-700">Director&apos;s spotlight</p>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start">
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
                <div className="min-w-0 flex-1">
                  <p className="text-lg font-bold text-neutral-900">{detail.directorName}</p>
                  <p className="mt-1 text-sm font-semibold text-violet-800">{detail.directorTitle}</p>
                  <p className="mt-1 text-xs font-medium text-neutral-500">20+ years of academic excellence</p>
                  <blockquote className="mt-4 border-l-2 border-violet-200 pl-4 text-sm italic leading-relaxed text-neutral-700">
                    {detail.directorQuote}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Core courses (no Vriksha; no explore links per mockup) */}
      <section className="border-b border-violet-100/80 bg-[#F9F5FB] py-12 md:py-16">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-2 border-b border-violet-200/60 pb-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 md:text-[1.65rem]">Core course offerings</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
                Flagship programmes at this centre
              </p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {CORE_COURSES.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl border border-violet-100/90 bg-white/90 p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-violet-800">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Infrastructure */}
      <section className="bg-white py-7 md:py-9">
        <div className="container-page">
          <div className="mb-4 md:mb-5">
            <h2 className="text-xl font-bold text-neutral-900 md:text-[1.5rem]">World-class infrastructure</h2>
            <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-violet-700">
              Designed for optimal learning
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INFRASTRUCTURE_FEATURES.map((feature) => (
              <div key={feature.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <OptimizedImage
                  cloudinaryId={feature.cloudinaryId}
                  alt={feature.title}
                  width={320}
                  height={220}
                  className="h-24 w-full object-cover"
                  crop="fill"
                  loading="lazy"
                />
                <p className="px-2 py-1.5 text-center text-[11px] font-medium text-neutral-900">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
