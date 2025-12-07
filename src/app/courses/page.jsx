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
      color: 'from-[#0a1a67] to-[#051139]',
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
      color: 'from-[#0a1a67] to-[#051139]',
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
      color: 'from-[#0a1a67] to-[#051139]',
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
      color: 'from-[#0a1a67] to-[#051139]',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="container-page py-6 sm:py-12 md:py-16">
        <div className="text-center mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium bg-[#B30027]/10 text-[#B30027] px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-2 sm:mb-4">
            <span>📚 Our Programs</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1a67] mb-2 sm:mb-4">
            Courses We Offer
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-[#0a1a67]/80 max-w-3xl mx-auto px-2">
            Comprehensive training programs designed to help you achieve excellence in competitive examinations
          </p>
        </div>

        {/* Courses Slider */}
        <div className="relative">
          <div className="relative min-h-[350px] sm:min-h-[600px] md:min-h-[500px] bg-white rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden">
            {/* Slides */}
            <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {courses.map((course) => (
                <div key={course.id} className="w-full flex-[0_0_100%] h-full shrink-0 p-2 sm:p-6 md:p-12 flex flex-col md:flex-row items-center gap-2 sm:gap-6 md:gap-8 overflow-y-auto md:overflow-visible">
                  {/* Left Side - Icon and Name */}
                  <div className={`flex-shrink-0 w-full md:w-1/3 bg-gradient-to-br ${course.color} rounded-lg sm:rounded-2xl p-3 sm:p-8 text-white text-center shadow-xl`}>
                    <div className="text-3xl sm:text-8xl md:text-9xl mb-1 sm:mb-6">{course.icon}</div>
                    <h2 className="text-lg sm:text-3xl md:text-4xl font-extrabold mb-0.5 sm:mb-2">{course.name}</h2>
                    <p className="text-[9px] sm:text-sm md:text-base opacity-90">{course.fullName}</p>
                  </div>

                  {/* Right Side - Details */}
                  <div className="flex-1 w-full">
                    <p className="text-xs sm:text-lg md:text-xl text-[#0a1a67] mb-2 sm:mb-6 leading-relaxed">
                      {course.description}
                    </p>
                    <div className="space-y-1 sm:space-y-3">
                      <h3 className="text-sm sm:text-xl font-bold text-[#0a1a67] mb-1 sm:mb-4">Key Highlights:</h3>
                      {course.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 sm:gap-3">
                          <div className="flex-shrink-0 w-3 h-3 sm:w-6 sm:h-6 bg-[#B30027] rounded-full flex items-center justify-center text-white text-[8px] sm:text-sm">
                            ✓
                          </div>
                          <p className="text-[10px] sm:text-base text-[#0a1a67]/90 leading-tight">{highlight}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 sm:mt-8 flex justify-center md:justify-start">
                      <Link
                        href="/enquiry"
                        className="inline-flex items-center gap-1 sm:gap-2 bg-[#B30027] text-white hover:bg-[#8a001e] px-3 py-1.5 sm:px-6 sm:py-3 rounded sm:rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-[10px] sm:text-base"
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
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#0a1a67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1.5 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-[#0a1a67]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-10">
              {courses.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 sm:w-8 bg-[#B30027]' : 'w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview Grid */}
      <section className="container-page py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-8 text-center">
          Our Courses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => setCurrentIndex(courses.indexOf(course))}
              className={`bg-gradient-to-br ${course.color} rounded-xl p-6 text-white cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
              <p className="text-sm opacity-90 mb-4">{course.fullName}</p>
              <p className="text-sm line-clamp-2">{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Batches Section */}
      <section className="container-page py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a1a67] mb-4 text-center">
          Our Specialized Batches
        </h2>
        <p className="text-center text-[#0a1a67]/70 mb-8 max-w-2xl mx-auto">
          Choose the batch that best fits your preparation needs and learning pace
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {batches.map((batch) => (
            <div
              key={batch.id}
              className="bg-gradient-to-br from-[#0a1a67] to-[#051139] rounded-xl p-6 text-white text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="text-4xl sm:text-5xl mb-3">{batch.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold">{batch.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-page py-12">
        <div className="bg-gradient-to-r from-[#0a1a67] to-[#B30027] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join thousands of successful students who achieved their dreams with Matrix Science Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1a67] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Enquire Now
            </Link>
            <Link
              href="/results"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a1a67] px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              View Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
