'use client'
import { useEffect, useMemo, useState } from 'react'

const SLIDE_INTERVAL_MS = 6000

// Mock OptimizedImage component for demo
const OptimizedImage = ({ cloudinaryId, alt, width, height, className, crop, loading }) => (
  <img
    src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_${width},h_${height},c_${crop},q_auto,f_auto/${cloudinaryId}`}
    alt={alt}
    className={className}
    loading={loading}
  />
)

// Mock Link component for demo
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>{children}</a>
)

export default function HeroSlider() {
  const slides = useMemo(() => [
    {
      id: 'msa-branding',
      title: 'Matrix Science Academy',
      tagline: 'Believe - Build - Become',
      sanskritTagline: 'सा विद्या या विमुक्तये',
      type: 'branding',
    },
    {
      id: 'courses-offered',
      title: 'Courses We Offer',
      subtitle: 'Comprehensive Training Programs',
      courses: [
        { name: 'IIT-JEE', icon: '🎯', description: 'Advanced Engineering Entrance' },
        { name: 'MHT-CET', icon: '📚', description: 'Maharashtra State Entrance' },
        { name: 'NEET', icon: '⚕️', description: 'Medical Entrance Exam' },
        { name: 'IISER', icon: '🔬', description: 'Science Research Institute' },
      ],
      cloudinaryId: 'v1763852019/booksweoffer_bciiam',
      type: 'courses',
    },
    {
      id: 'results-stats',
      title: 'Results in Statistics',
      subtitle: 'Our Success Story',
      stats: [
        { value: '86', label: 'Students 99+ Percentile', exam: 'MHT-CET 2025' },
        { value: '30%', label: 'increase in IIT admissions', exam: '2025' },
        { value: 'Multiple', label: 'admissions into MBBS', exam: '2025' },
        { value: '150+', label: 'Expert Faculty', exam: 'Teachers by Choice' },
      ],
      cloudinaryId: 'v1763783028/4_nl1ejs',
      type: 'results',
    },
  ], [])


  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slides.length, isPaused])

  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-1 pb-2 sm:pt-6 sm:pb-8 px-2 sm:px-6">
        {/* Compact height for mobile */}
        <div
          className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-lg sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200/60"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute inset-0 flex transition-transform duration-700 ease-smooth will-change-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s) => (
              <div key={s.id} className="w-full flex-[0_0_100%] h-full shrink-0 relative flex items-center">
                {s.type === 'branding' ? (
                  <div className="w-full h-full relative bg-gradient-to-br from-white via-red-50/50 to-red-100/40">
                    {/* Motion-style hero: headline + stats + CTA */}
                    <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14 px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 overflow-y-auto items-start">
                      {/* Left: Headline, tagline, stats row, CTA */}
                      <div className="flex flex-col justify-center min-w-0 mt-4 sm:mt-6 md:mt-8">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-1">
                          <span className="text-[#ed1c24]">Matrix</span>{' '}
                          <span className="text-[#646262] font-black">Science</span>
                          <span className="block text-[#214295] font-black">Academy</span>
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                          Pune&apos;s leading coaching for JEE, NEET & MHT-CET
                        </p>
                        {/* Stats row - Motion style */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-5">
                          <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-bold text-[#8B1538]">8</span>
                            <span className="text-[10px] sm:text-xs text-slate-500">Branches</span>
                          </div>
                          <div className="w-px bg-red-200/80 hidden sm:block" />
                          <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-bold text-[#8B1538]">30K+</span>
                            <span className="text-[10px] sm:text-xs text-slate-500">Alumni</span>
                          </div>
                          <div className="w-px bg-red-200/80 hidden sm:block" />
                          <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-bold text-[#8B1538]">86</span>
                            <span className="text-[10px] sm:text-xs text-slate-500">99+ Percentile</span>
                          </div>
                        </div>
                        <Link
                          href="/enquiry"
                          className="inline-flex justify-center items-center w-fit bg-[#B30027] text-white hover:bg-[#8a001e] text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                        >
                          Enquire Now
                        </Link>
                        <p className="text-[10px] sm:text-xs text-slate-400 mt-3">
                          Nigdi · Shahunagar · Chinchwad · Ravet · Wakad · Moshi · Kolhapur · Rahatani
                        </p>
                      </div>

                      {/* Right: Raw image, centered */}
                      <div className="flex items-center justify-center min-w-0 h-full">
                        <img
                          src="https://res.cloudinary.com/ddqgxrgnc/image/upload/v1764181786/IIT_knkkka.jpg"
                          alt="IIT - Matrix Science Academy"
                          className="max-w-[340px] sm:max-w-[400px] md:max-w-[460px] w-full max-h-[240px] sm:max-h-[300px] md:max-h-[360px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ) : s.type === 'courses' ? (
                  <div className="w-full h-full relative bg-gradient-to-br from-white via-red-50/50 to-red-100/40">
                    <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-3 md:pt-4 lg:pt-5 px-4 sm:px-5 md:px-6 lg:px-8 pb-2 sm:pb-3 md:pb-4 overflow-y-auto items-center">
                      {/* Left: Our Courses + Specialized Batches (shortened) */}
                      <div className="flex flex-col justify-center min-w-0">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-[#8B1538] mb-0.5">
                          Our Courses
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 mb-2 sm:mb-3">
                          {s.subtitle}
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                          {s.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="bg-white/80 border border-slate-200/80 rounded-lg p-2 sm:p-3 text-left shadow-sm"
                            >
                              <span className="text-base sm:text-lg">{course.icon}</span>
                              <h3 className="text-xs sm:text-sm font-bold text-[#8B1538] leading-tight">{course.name}</h3>
                              <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-1">{course.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-red-200/80 pt-2 mb-2">
                          <h3 className="text-sm font-bold text-[#8B1538] mb-0.5">⚡ Specialized Batches</h3>
                          <p className="text-xs text-slate-600">IMPULSE · SPRINT · PACE · DRIFT · RACE</p>
                        </div>
                        <Link
                          href="/courses"
                          className="inline-flex justify-center items-center w-fit bg-[#B30027] text-white hover:bg-[#8a001e] text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                        >
                          View All Batches
                        </Link>
                      </div>
                      {/* Right: Image (compact, no scroll) */}
                      <div className="flex items-center justify-center min-w-0 h-full">
                        <img
                          src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/${s.cloudinaryId}`}
                          alt={s.title}
                          className="max-w-[300px] sm:max-w-[340px] md:max-w-[400px] w-full max-h-[200px] sm:max-h-[260px] md:max-h-[320px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ) : s.type === 'results' ? (
                  <div className="w-full h-full relative bg-gradient-to-br from-white via-red-50/50 to-red-100/40">
                    <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-3 md:pt-4 lg:pt-5 px-4 sm:px-5 md:px-6 lg:px-8 pb-2 sm:pb-3 md:pb-4 overflow-y-auto items-center">
                      {/* Left: Results in Statistics + Outstanding Performance (shortened) */}
                      <div className="flex flex-col justify-center min-w-0">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-[#8B1538] mb-0.5">
                          {s.title}
                        </h1>
                        <p className="text-sm sm:text-base text-slate-600 mb-2 sm:mb-3">
                          {s.subtitle}
                        </p>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                          {s.stats.map((stat, idx) => (
                            <div
                              key={idx}
                              className="bg-white/80 border border-slate-200/80 rounded-lg p-2 sm:p-3 text-center shadow-sm"
                            >
                              <div className="text-lg sm:text-xl font-bold text-[#8B1538]">{stat.value}</div>
                              <h3 className="text-[10px] sm:text-xs font-bold text-slate-700 leading-tight">{stat.label}</h3>
                              <p className="text-[9px] sm:text-[10px] text-slate-500">{stat.exam}</p>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-red-200/80 pt-2 mb-2">
                          <h3 className="text-sm font-bold text-[#8B1538] mb-0.5">🏆 Outstanding Performance</h3>
                          <p className="text-xs text-slate-600">80+ JEE Advanced · 32 at 95%+ · 86 at 99%ile MHT-CET · 162 at 98%ile</p>
                        </div>
                        <Link
                          href="/results"
                          className="inline-flex justify-center items-center w-fit bg-[#B30027] text-white hover:bg-[#8a001e] text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg"
                        >
                          View Detailed Results
                        </Link>
                      </div>
                      {/* Right: Image (compact, no scroll) */}
                      <div className="flex items-center justify-center min-w-0 h-full">
                        <img
                          src={`https://res.cloudinary.com/ddqgxrgnc/image/upload/w_800,h_600,c_fit,q_auto,f_auto/${s.cloudinaryId}`}
                          alt={s.title}
                          className="max-w-[300px] sm:max-w-[340px] md:max-w-[400px] w-full max-h-[200px] sm:max-h-[260px] md:max-h-[320px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-20">
            {slides.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-1.5 sm:h-3 rounded-full transition-all duration-300 ${index === i ? 'w-6 sm:w-10 bg-[#B30027]' : 'w-2 sm:w-4 bg-gray-400 hover:bg-gray-500'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}