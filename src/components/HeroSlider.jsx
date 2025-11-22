'use client'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

const SLIDE_INTERVAL_MS = 6000

export default function HeroSlider() {
  const slides = useMemo(() => [
    {
      id: 'hero-main',
      type: 'hero',
    },
    {
      id: 'matrix-impulse',
      title: 'Top trainers in Maharashtra',
      highlight: 'Matrix Science Academy + IMPULSE Batch',
      subtitle: 'For IIT-JEE, MHT-CET, NEET, IISER Foundation, and 8th–12th Boards',
      branches: ['Pradhikaran', 'Nigdi', 'Ravet', 'Shahunagar', 'Chinchwad', 'Wakad', 'Moshi'],
      type: 'content',
    },
    {
      id: 'activities',
      title: 'Explore Our Activities',
      highlight: 'Programs, Timelines & More',
      subtitle: 'Discover comprehensive resources for your academic journey',
      activities: [
        { label: 'Performance', to: '/activities/performance', icon: '📈' },
        { label: 'Course Selection', to: '/activities/course-selection', icon: '📚' },
        { label: 'IIT-JEE/NEET Timeline', to: '/activities/iit-neet-timeline', icon: '⏱️' },
        { label: 'MHT-CET Timeline', to: '/activities/mht-cet-timeline', icon: '📅' },
        { label: 'On Demand Courses', to: '/activities/on-demand-courses', icon: '🎯' },
        { label: 'Felicitation', to: '/activities/felicitation', icon: '🏆' },
      ],
      type: 'activities',
    },
  ], [])

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative overflow-hidden">
      <div className="container-page pt-4 pb-6 sm:pt-6 sm:pb-8">
        <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-dark via-brand-dark/90 to-slate-700 text-slate-900 grid">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="absolute inset-0 flex transition-transform duration-700 ease-smooth will-change-transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((s) => (
              <div key={s.id} className={`min-w-full shrink-0 ${s.type === 'hero' ? 'relative flex items-center' : s.type === 'activities' ? 'relative flex items-center' : 'flex items-center'}`}>
                {s.type === 'hero' ? (
                  <div className="w-full h-full grid lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10 relative z-10 overflow-hidden">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-4 sm:gap-5 min-w-0">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/90 text-slate-800 w-fit px-4 py-2 rounded-full shadow-lg">
                        <span className="text-brand-dark font-bold">🎓 Premium Education</span>
                      </div>
                      
                      <div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                          <span className="text-red-600">Matrix</span>{' '}
                          <span className="text-gray-300 drop-shadow-lg">Science</span>
                          <span className="block text-brand-dark drop-shadow-2xl" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 6px 12px rgba(0,0,0,0.6)' }}>Academy</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-white/95 mt-3 drop-shadow-md">
                          + IMPULSE Batch
                        </p>
                      </div>

                      <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                        Top trainers in Maharashtra for <span className="font-semibold text-white">IIT-JEE, MHT-CET, NEET, IISER Foundation</span>, and 8th–12th Board preparation.
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-4">
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">150+</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Teachers</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">1L+</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Students</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">8</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Branches</div>
                        </div>
                        <div className="bg-white/90 backdrop-blur rounded-xl p-4 text-center shadow-lg">
                          <div className="text-2xl sm:text-3xl font-extrabold text-brand-dark">12+</div>
                          <div className="text-xs sm:text-sm text-slate-700 mt-1">Years</div>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:justify-end relative z-20">
                        <Link href="/enquiry" className="inline-flex justify-center w-full sm:w-auto bg-red-600 text-white hover:bg-red-700 text-lg px-8 py-4 font-bold shadow-2xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-red-500/50">
                          Enquire Now
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Decorative Elements */}
                    <div className="hidden lg:flex items-center justify-center relative min-w-0 overflow-hidden">
                      <div className="relative w-full max-w-md">
                        {/* Circular Stats */}
                        <div className="absolute top-0 right-0 bg-white/90 backdrop-blur rounded-full p-6 shadow-xl z-20">
                          <div className="text-center">
                            <div className="text-3xl font-extrabold text-brand-dark">99+</div>
                            <div className="text-sm text-slate-700">Percentile</div>
                          </div>
                        </div>
                        
                        {/* Main Card */}
                        <div className="bg-white/90 backdrop-blur rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center">
                                <span className="text-2xl">🎯</span>
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">IIT-JEE</div>
                                <div className="text-sm text-slate-600">12+ Admissions</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center">
                                <span className="text-2xl">🏆</span>
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">MHT-CET</div>
                                <div className="text-sm text-slate-600">123 Students 98+</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-12 w-12 rounded-full bg-brand/30 flex items-center justify-center">
                                <span className="text-2xl">⚕️</span>
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">NEET</div>
                                <div className="text-sm text-slate-600">Perfect Scores</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Badge */}
                        <div className="absolute -bottom-4 -left-4 bg-brand-dark rounded-xl p-4 shadow-xl z-20">
                          <div className="text-white text-center">
                            <div className="text-2xl font-extrabold">20K+</div>
                            <div className="text-xs">Alumni</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : s.type === 'activities' ? (
                  <div className="w-full h-full grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10 relative z-10 overflow-hidden">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center gap-4 sm:gap-5 min-w-0">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/70 text-slate-800 w-fit px-3 py-1 rounded-full shadow-soft">
                        <span>Discover More</span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-800">
                        {s.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl font-semibold text-white/95 drop-shadow-md">
                        {s.highlight}
                      </p>
                      <p className="text-sm sm:text-base text-white/90">
                        {s.subtitle}
                      </p>
                      
                      {/* Activity Buttons - Small, in 3 lines */}
                      <div className="flex flex-col gap-2 sm:gap-3 mt-4">
                        {/* First line - 2 buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {s.activities.slice(0, 2).map((activity, idx) => (
                            <Link
                              key={idx}
                              href={activity.to}
                              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                            >
                              <span className="text-base sm:text-lg">{activity.icon}</span>
                              <span className="group-hover:text-brand-dark transition-colors duration-300">
                                {activity.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Second line - 2 buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {s.activities.slice(2, 4).map((activity, idx) => (
                            <Link
                              key={idx + 2}
                              href={activity.to}
                              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                            >
                              <span className="text-base sm:text-lg">{activity.icon}</span>
                              <span className="group-hover:text-brand-dark transition-colors duration-300">
                                {activity.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                        {/* Third line - 2 buttons */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {s.activities.slice(4, 6).map((activity, idx) => (
                            <Link
                              key={idx + 4}
                              href={activity.to}
                              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 hover:bg-white hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                            >
                              <span className="text-base sm:text-lg">{activity.icon}</span>
                              <span className="group-hover:text-brand-dark transition-colors duration-300">
                                {activity.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <Link href="/activities" className="btn-primary inline-flex justify-center w-full sm:w-auto bg-white text-brand-dark hover:bg-white/95">
                          View All Activities
                        </Link>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden md:flex items-center justify-center min-w-0 overflow-hidden relative">
                      <div className="w-full max-w-md h-full flex items-center justify-center" style={{ borderRadius: '20%', overflow: 'hidden' }}>
                        <OptimizedImage
                          cloudinaryId="v1763783028/8_ubkbjt"
                          alt="Matrix Science Academy Activities"
                          width={600}
                          height={800}
                          className="w-full h-auto max-h-full object-contain"
                          crop="fit"
                          loading="eager"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full grid md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10 relative z-10 overflow-hidden">
                    <div className="flex flex-col justify-center gap-4 sm:gap-5 min-w-0">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-white/70 text-slate-800 w-fit px-3 py-1 rounded-full shadow-soft">
                        <span>Trusted by achievers</span>
                      </div>
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-800">
                        {s.title}
                      </h1>
                      <p className="text-base sm:text-xl md:text-2xl font-semibold text-slate-800">
                        {s.highlight}
                      </p>
                      <p className="text-slate-800/90 text-sm sm:text-lg">
                        {s.subtitle}
                      </p>
                      {s.branches && s.branches.length > 0 && (
                        <div className="mt-3">
                          <span className="text-sm font-semibold uppercase tracking-wide text-slate-800">Branches:</span>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {s.branches.map((b) => (
                              <span key={b} className="px-3 py-1 rounded-full bg-white/70 text-slate-800 text-xs sm:text-sm">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <Link href="/enquiry" className="inline-flex justify-center w-full sm:w-auto items-center gap-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 px-5 py-2.5 font-medium shadow-soft">Join Now</Link>
                        <Link href="/courses" className="btn-outline inline-flex justify-center w-full sm:w-auto">Explore</Link>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="hidden md:flex items-center justify-center min-w-0 overflow-hidden">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-full max-w-md h-full flex items-center justify-center overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '20%', overflow: 'hidden' }}>
                            <OptimizedImage
                              cloudinaryId="v1763786335/output_faqujd"
                              alt="Matrix Science Academy Achievement"
                              width={600}
                              height={800}
                              className="w-full h-auto object-contain"
                              crop="fit"
                              loading="eager"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => setIndex(i)} className={`h-3 rounded-full transition-all duration-300 ${index === i ? 'w-10 bg-slate-900' : 'w-4 bg-slate-900/50 hover:bg-slate-900/70'}`}></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


