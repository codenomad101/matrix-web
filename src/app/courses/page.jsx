'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const SLIDE_INTERVAL_MS = 5000

export default function CoursesPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const courses = [
    {
      id: 'mht-cet',
      name: 'MHT-CET',
      fullName: 'Maharashtra Common Entrance Test',
      icon: '📚',
      description: 'Comprehensive preparation for Maharashtra State Engineering and Medical entrance examination.',
      highlights: [
        '86 Students scored 99+ Percentile in 2025',
        'Expert faculty with proven track record',
        'Regular mock tests and assessments',
        'Doubt clearing sessions',
      ],
    },
    {
      id: 'iit-jee',
      name: 'IIT-JEE',
      fullName: 'Joint Entrance Examination',
      icon: '🎯',
      description: 'Advanced training for IIT and top engineering colleges entrance examination.',
      highlights: [
        '30% increase in IIT admissions in 2025',
        'Specialized faculty for JEE Advanced',
        'Comprehensive study material',
        'Performance tracking system',
      ],
    },
    {
      id: 'neet',
      name: 'NEET',
      fullName: 'National Eligibility cum Entrance Test',
      icon: '⚕️',
      description: 'Complete preparation for medical entrance examination across India.',
      highlights: [
        'Multiple admissions into MBBS',
        'Medical entrance specialists',
        'NCERT-based comprehensive coverage',
        'Regular practice tests',
      ],
    },
    {
      id: 'iiser',
      name: 'IISER',
      fullName: 'Indian Institutes of Science Education and Research',
      icon: '🔬',
      description: 'Specialized coaching for IISER entrance and science research programs.',
      highlights: [
        'Research-oriented curriculum',
        'Science foundation building',
        'Expert mentorship',
        'Aptitude development',
      ],
    },
  ]

  const batches = [
    {
      id: 'impulse',
      name: 'IMPULSE',
      icon: '⚡',
    },
    {
      id: 'sprint',
      name: 'SPRINT',
      icon: '🏃',
    },
    {
      id: 'pace',
      name: 'PACE',
      icon: '📈',
    },
    {
      id: 'drift',
      name: 'DRIFT',
      icon: '🎓',
    },
    {
      id: 'race',
      name: 'RACE',
      icon: '🏆',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [courses.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? courses.length - 1 : prev - 1))
  }

  return (
    <div className="interior-page">
      <section className="border-b border-neutral-200 bg-white py-10 sm:py-12 md:py-14">
        <div className="container-page max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Our programs</p>
          <h1 className="interior-title interior-title-center mt-1">Courses we offer</h1>
          <p className="interior-lead mx-auto mt-2 max-w-2xl">
            Comprehensive training programs for competitive examinations.
          </p>
        </div>
      </section>

      {/* Courses Slider Section */}
      <section className="page-section-white">
        <div className="container-page">
        {/* Courses Slider */}
        <div className="relative">
          <div className="relative min-h-[350px] sm:min-h-[600px] md:min-h-[500px] bg-white rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden">
            {/* Slides */}
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {courses.map((course) => (
                <div key={course.id} className="w-full flex-[0_0_100%] h-full shrink-0 p-2 sm:p-6 md:p-12 flex flex-col md:flex-row items-center gap-2 sm:gap-6 md:gap-8 overflow-y-auto md:overflow-visible">
                  {/* Left Side - Icon and Name */}
                  <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg border border-neutral-200 bg-neutral-100 p-3 text-center shadow-sm sm:rounded-2xl sm:p-8">
                    <div className="text-3xl sm:text-8xl md:text-9xl mb-1 sm:mb-6">{course.icon}</div>
                    <h2 className="text-lg font-bold text-neutral-900 sm:mb-2 sm:text-3xl md:text-4xl">{course.name}</h2>
                    <p className="text-[9px] text-neutral-600 sm:text-sm md:text-base">{course.fullName}</p>
                  </div>

                  {/* Right Side - Details */}
                  <div className="flex-1 w-full">
                    <p className="mb-2 text-xs leading-relaxed text-neutral-700 sm:mb-6 sm:text-lg md:text-xl">
                      {course.description}
                    </p>
                    <div className="space-y-1 sm:space-y-3">
                      <h3 className="mb-1 text-sm font-semibold text-neutral-900 sm:mb-4 sm:text-xl">Key highlights</h3>
                      {course.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 sm:gap-3">
                          <div className="flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-neutral-800 text-[8px] text-white sm:h-6 sm:w-6 sm:text-sm">
                            ✓
                          </div>
                          <p className="text-[10px] leading-tight text-neutral-700 sm:text-base">{highlight}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 sm:mt-8 flex justify-center md:justify-start">
                      <Link
                        href="/enquiry"
                        className="inline-flex items-center gap-1 rounded px-3 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-neutral-800 sm:gap-2 sm:rounded-lg sm:px-6 sm:py-3 sm:text-base bg-neutral-900"
                      >
                        Enquire Now
                        <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1.5 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10">
              {courses.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 sm:w-8 bg-neutral-800' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Courses Overview Grid */}
      <section className="page-section-gray">
        <div className="container-page">
        <h2 className="interior-section-title mb-5 text-center">
          Our courses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setCurrentIndex(courses.indexOf(course))}
              className="cursor-pointer rounded-xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
            >
              <div className="mb-4 text-5xl">{course.icon}</div>
              <h3 className="mb-2 text-2xl font-bold text-neutral-900">{course.name}</h3>
              <p className="mb-4 text-sm text-neutral-600">{course.fullName}</p>
              <p className="line-clamp-2 text-sm text-neutral-700">{course.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Batches Section */}
      <section className="page-section-white">
        <div className="container-page">
        <h2 className="interior-section-title mb-4 text-center">
          Our specialized batches
        </h2>
        <p className="text-center text-body/80 mb-5 max-w-2xl mx-auto">
          Choose the batch that best fits your preparation needs and learning pace
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
            >
              <div className="mb-3 text-4xl sm:text-5xl">{batch.icon}</div>
              <h3 className="text-lg font-semibold text-neutral-900 sm:text-xl">{batch.name}</h3>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section-gray">
        <div className="container-page">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center text-neutral-900 md:p-8">
          <h2 className="interior-section-title mb-4">
            Ready to start your journey?
          </h2>
          <p className="mb-5 text-lg text-neutral-600 md:text-xl">
            Join thousands of successful students who achieved their dreams with Matrix Science Academy
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Enquire Now
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-8 py-4 font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
            >
              View Results
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  )
}
