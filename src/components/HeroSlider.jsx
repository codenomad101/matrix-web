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
          className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] rounded-lg sm:rounded-3xl overflow-hidden bg-white shadow-lg border border-slate-200/80"
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
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-[#8B1538] mb-1">
                          Matrix Science Academy
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
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <OptimizedImage
                        cloudinaryId={s.cloudinaryId}
                        alt={s.title}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        crop="fill"
                        loading="lazy"
                      />
                      {/* Red overlay for consistent hero look */}
                      <div className="absolute inset-0 bg-[#B30027]"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-0 p-1 sm:p-2 md:p-3 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="text-center shrink-0 mb-0.5">
                        <h1 className="text-xs sm:text-sm md:text-base font-extrabold leading-tight text-white">
                          Our Courses
                        </h1>
                      </div>
                      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-1.5 sm:gap-3 items-center">
                        {/* Left Column: Compact Courses Grid */}
                        <div className="grid grid-cols-2 gap-1 sm:gap-1.5 w-full">
                          {s.courses.map((course, idx) => (
                            <div
                              key={idx}
                              className="bg-white/10 backdrop-blur-md border border-white/20 rounded sm:rounded-lg p-1 sm:p-2 md:p-3 text-center shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                              <div className="text-xs sm:text-sm md:text-lg mb-0.5 group-hover:scale-110 transition-transform duration-300">
                                {course.icon}
                              </div>
                              <h3 className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white leading-tight">
                                {course.name}
                              </h3>
                              <p className="hidden sm:block text-[6px] sm:text-[7px] md:text-[9px] text-white/80">
                                {course.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-4">
                          <h3 className="text-[9px] sm:text-[10px] md:text-sm font-bold mb-1 sm:mb-2 border-b border-white/20 pb-0.5 md:pb-1 text-white">
                            ⚡ Specialized Batches
                          </h3>
                          <div className="space-y-0.5 sm:space-y-1 md:space-y-1.5">
                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                              <span className="text-[10px] sm:text-xs md:text-sm">🚀</span>
                              <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">IMPULSE</div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                              <span className="text-[10px] sm:text-xs md:text-sm">🏃</span>
                              <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">SPRINT</div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                              <span className="text-[10px] sm:text-xs md:text-sm">📈</span>
                              <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">PACE</div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                              <span className="text-[10px] sm:text-xs md:text-sm">🎓</span>
                              <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">DRIFT</div>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                              <span className="text-[10px] sm:text-xs md:text-sm">🏆</span>
                              <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">RACE</div>
                            </div>
                          </div>
                          <Link href="/courses" className="inline-flex justify-center items-center w-full bg-[#B30027] text-white hover:bg-[#8a001e] text-[7px] sm:text-[8px] md:text-xs px-1.5 py-1 md:px-3 md:py-2 rounded font-bold shadow-md transition-all duration-300 hover:scale-105 mt-1.5 md:mt-3">
                            View All Batches
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'results' ? (
                  <div className="w-full h-full relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <OptimizedImage
                        cloudinaryId={s.cloudinaryId}
                        alt={s.title}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        crop="fill"
                        loading="lazy"
                      />
                      {/* Red overlay for consistent hero look */}
                      <div className="absolute inset-0 bg-[#B30027]"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    <div className="w-full h-full flex flex-col gap-0 p-1 sm:p-2 md:p-3 relative z-10 overflow-y-auto items-center justify-center">
                      <div className="text-center shrink-0 mb-0.5">
                        <div className="inline-flex items-center gap-1 text-[7px] sm:text-[8px] md:text-[10px] font-medium bg-white/10 text-white border border-white/20 w-fit px-1 sm:px-1.5 py-0.5 rounded-full backdrop-blur-sm mb-0.5">
                          <span>Our Achievements</span>
                        </div>
                        <h1 className="text-[10px] sm:text-sm md:text-base font-extrabold leading-tight text-white">
                          {s.title}
                        </h1>
                      </div>

                      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-3 items-center">
                        {/* Left Column: Compact Stats Grid */}
                        <div className="grid grid-cols-2 gap-1 sm:gap-1.5 w-full">
                          {s.stats.map((stat, idx) => (
                            <div
                              key={idx}
                              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-1 sm:p-2 md:p-3 text-center shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                            >
                              <div className="text-[10px] sm:text-sm md:text-lg font-extrabold mb-0 group-hover:scale-110 transition-transform duration-300 text-white">
                                {stat.value}
                              </div>
                              <h3 className="text-[6px] sm:text-[8px] md:text-[10px] font-bold leading-tight text-white">
                                {stat.label}
                              </h3>
                              <p className="text-[5px] sm:text-[6px] md:text-[8px] text-white/80">
                                {stat.exam}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl p-1.5 sm:p-2 md:p-4">
                          <h3 className="text-[8px] sm:text-[9px] md:text-sm font-bold mb-0.5 sm:mb-1.5 border-b border-white/20 pb-0.5 md:pb-1 text-white">
                            🏆 Outstanding Performance
                          </h3>
                          <div className="space-y-0.5 sm:space-y-1 md:space-y-1.5">
                            <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                              </svg>
                              <div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">80+ Students</div>
                                <div className="text-[6px] sm:text-[7px] md:text-[9px] text-white/80">Qualified for JEE Advanced</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              <div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">32 Students</div>
                                <div className="text-[6px] sm:text-[7px] md:text-[9px] text-white/80">Scored more than 95%ile</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                              <div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">86 Students</div>
                                <div className="text-[6px] sm:text-[7px] md:text-[9px] text-white/80">Scored 99%ile in MHT-CET</div>
                              </div>
                            </div>
                            <div className="flex items-start gap-1 sm:gap-1.5 md:gap-2">
                              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <div>
                                <div className="text-[8px] sm:text-[9px] md:text-xs font-bold text-white">162 Students</div>
                                <div className="text-[6px] sm:text-[7px] md:text-[9px] text-white/80">Scored 98%ile in MHT-CET</div>
                              </div>
                            </div>
                          </div>
                          <Link href="/results" className="inline-flex justify-center items-center w-full bg-[#B30027] text-white hover:bg-[#8a001e] text-[6px] sm:text-[8px] md:text-xs px-1.5 py-1 md:px-3 md:py-2 rounded font-bold shadow-md transition-all duration-300 hover:scale-105 mt-1 md:mt-3">
                            View Detailed Results
                          </Link>
                        </div>
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