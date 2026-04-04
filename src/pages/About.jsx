'use client'
import Link from 'next/link'
import { FaBuilding, FaCheck, FaPhoneAlt, FaEnvelope, FaStar, FaTrophy } from 'react-icons/fa'
import OptimizedImage from '@/components/OptimizedImage'

const directors = [
  { branch: 'Nigdi', name: 'Mr. Nishant Patwardhan', cloudinaryId: 'v1764218938/abhi_mehta_f6h4om' },
  { branch: 'Shahunagar', name: 'Mr. Ravindra Yadav', cloudinaryId: 'v1764990905/yadav_vv66wt' },
  { branch: 'Chinchwad', name: 'Mr. Algesh Patrike', cloudinaryId: 'v1765163829/algesh_hskjtk' },
  { branch: 'Ravet', name: 'Mr. Abhishek Mehta', cloudinaryId: 'v1764218937/nishant_tifi1f' },
  { branch: 'Wakad', name: 'Mr. Manoj Kumar', cloudinaryId: 'v1765163801/manoj_1_algvci' },
  { branch: 'Moshi', name: 'Mr. Umesh Bharde', cloudinaryId: 'v1765163805/umesh_1_aoyp2r' },
]

export default function About() {
  const branchStrip = [
    'Nigdi',
    'Shahunagar',
    'Chinchwad',
    'Ravet',
    'Wakad',
    'Moshi',
    'Kolhapur',
    'Rahatani',
  ]

  return (
    <div className="interior-page">
      {/* About Section - Allen-style white section */}
      <section className="page-section-white">
        <div className="container-page">
          <div className="page-card text-center">
            <h1 className="interior-title interior-title-center mb-6">About Matrix Science Academy</h1>
            <p className="mx-auto mb-5 max-w-3xl text-lg leading-relaxed text-body">
              Matrix Science Academy (MSA) is dedicated to building strong concepts and habits for
              competitive exams and boards. With a blended learning approach, we offer mentor-led
              classes, quality study material, and rigorous assessments.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-l-4 border-neutral-200 border-l-neutral-400 bg-gray-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">Our Mission</h3>
                <p className="text-body text-sm leading-relaxed">
                  Deliver accessible, high-quality education with compassion and discipline.
                </p>
              </div>
              <div className="rounded-xl border border-l-4 border-neutral-200 border-l-neutral-400 bg-gray-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-neutral-900">Our Vision</h3>
                <p className="text-body text-sm leading-relaxed">
                  Enable every learner to achieve excellence and freedom through knowledge.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-neutral-200 bg-gray-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-neutral-900">Our Philosophy</h3>
              <p className="mx-auto max-w-3xl text-body text-sm leading-relaxed">
                We are teachers by our choice and we passionately do our job. Our aim is not to run the classes conventionally,
                but we are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra.
                We believe education is the key to success. Matrix Science Academy aims to provide quality and affordable education
                to all students via offline as well as online mode. We have young and highly qualified teachers who can drive the
                students for their career.
              </p>
            </div>

            {/* Our Vision - Full Message */}
            <div className="mt-8 rounded-xl border border-neutral-200 border-l-4 border-l-neutral-400 bg-gray-50 p-6">
              <h3 className="mb-3 text-lg font-semibold text-neutral-900">Our Vision</h3>
              <div className="mx-auto max-w-3xl space-y-3 text-body text-sm leading-relaxed">
                <p>
                  <strong>We are teachers by our choice and we passionately do our job.</strong> Our aim is not to run the classes conventionally, but we are here to make a change and make a strong impact in the field of 8th to 12th Education in Maharashtra.
                </p>
                <p>
                  Matrix Science Academy aims to provide <strong>quality and affordable education</strong> to all students via offline as well as online mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Directors Section */}
      <section className="page-section-gray">
        <div className="container-page">
          <div className="text-center mb-6">
            <h2 className="interior-section-title mb-3 text-center">Our Directors</h2>
            <p className="text-body/80 text-base md:text-lg max-w-2xl mx-auto text-center">Leaders at each branch driving excellence</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {directors.map((d, idx) => (
                <div key={idx} className="rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm transition-all hover:border-neutral-300 hover:shadow-md">
                  <OptimizedImage
                    cloudinaryId={d.cloudinaryId}
                    alt={d.name}
                    width={200}
                    height={200}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full shadow-lg border-2 border-gray-200 mx-auto"
                    crop="fill"
                    loading="lazy"
                  />
                  <p className="mt-3 font-semibold text-body">{d.name}</p>
                  <p className="text-sm font-medium text-neutral-700">MSA {d.branch}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branches — lavender panel, CTA + chips + 3 highlights (below directors, center-aligned) */}
      <section id="branches-strip" className="border-b border-violet-100/80 bg-[#F9F5FB] py-10 md:py-14">
        <div className="container-page text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-700/90">Matrix Science Academy</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
                Our branches
              </h2>
              <p className="mt-3 text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-violet-700 sm:text-sm">
                Empowering future engineers & doctors with excellence
              </p>
            </div>
            <Link
              href="/enquiry"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-violet-700 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md shadow-violet-700/20 transition hover:bg-violet-800"
            >
              Enquire now
            </Link>
          </div>

          <p className="mt-8 text-sm font-semibold text-neutral-700">Choose a centre</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2.5">
            {branchStrip.map((b) => (
              <Link
                key={b}
                href={`/enquiry?branch=${encodeURIComponent(b)}`}
                className="inline-flex items-center rounded-full border border-violet-200/90 bg-white px-4 py-2 text-sm font-semibold text-violet-950 shadow-sm transition hover:border-violet-400 hover:bg-violet-700 hover:text-white"
              >
                {b}
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 rounded-2xl border border-violet-100/90 bg-violet-50/50 px-5 py-8 sm:px-8 md:grid-cols-3 md:gap-6 md:py-10">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/25">
                <FaStar className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">Top results</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Consistently producing top rankers in JEE & NEET.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/25">
                <FaCheck className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">Expert faculty</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Mentors from top IITs and medical colleges.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-md shadow-violet-600/25">
                <FaTrophy className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">Proven system</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Decades of refined academic methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Branches Section - Allen-style gray section */}
      <section className="page-section-gray">
        <div className="container-page">
          <div className="text-center mb-6">
            <h2 className="interior-section-title mb-3 text-center">Contact Us</h2>
            <p className="text-body/80 text-base md:text-lg max-w-2xl mx-auto text-center">Visit any of our 8 branches across Pune</p>
          </div>

          {/* General Contact Info */}
          <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-neutral-900 shadow-sm md:p-6">
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-neutral-200/80 p-4">
                  <FaEnvelope className="text-2xl text-neutral-700" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Email Us</div>
                  <div className="text-lg font-semibold">msapcmc@gmail.com</div>
                </div>
              </div>
              <div className="hidden h-16 w-px bg-neutral-200 md:block"></div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-neutral-200/80 p-4">
                  <FaPhoneAlt className="text-2xl text-neutral-700" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Call Us</div>
                  <div className="text-lg font-semibold">7058740609</div>
                </div>
              </div>
              <div className="hidden h-16 w-px bg-neutral-200 md:block"></div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-neutral-200/80 p-4">
                  <FaBuilding className="text-2xl text-neutral-700" />
                </div>
                <div>
                  <div className="text-sm text-neutral-600">Our Locations</div>
                  <div className="text-lg font-semibold">8 Branches Across Pune</div>
                </div>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-sm text-body/80">
            Centre addresses are shown on each branch&apos;s enquiry page—use the branch chips above or open{' '}
            <Link href="/enquiry" className="font-semibold text-neutral-900 underline-offset-2 hover:underline">
              Enquiry
            </Link>{' '}
            and pick a location.
          </p>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-body mb-3 text-sm">Ready to start your journey with us?</p>
            <Link
              href="/enquiry"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
